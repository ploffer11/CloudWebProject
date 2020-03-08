const express = require('express');
const app = express();
const router = require('./routes/index');
const config = require('./config/key');
const passport = require('passport');
const OIDCStrategy = require('passport-azure-ad').OIDCStrategy;
const graph = require('./models/graph');

var users = {};

passport.serializeUser(function(user, next) {
  users[user.profile.oid] = user;
  next(null, user.profile.oid);
});

passport.deserializeUser(function(id, next) {
  next(null, users[id]);
});

const oauth2 = require('simple-oauth2').create({
  client: {
    id: config.OAUTH_APP_ID,
    secret: config.OAUTH_APP_PASSWORD,
  },
  auth: {
    tokenHost: config.OAUTH_AUTHORITY,
    authorizePath: config.OAUTH_AUTHORIZE_ENDPOINT,
    tokenPath: config.OAUTH_TOKEN_ENDPOINT,
  },
});

async function signInComplete(
  iss,
  sub,
  profile,
  accessToken,
  refreshToken,
  params,
  next,
) {
  if (!profile.oid) {
    return next(new Error('No OID found in user profile.'), null);
  }

  try {
    const user = await graph.getUserDetails(accessToken);
    if (user) {
      // Add properties to profile
      profile['email'] = user.mail ? user.mail : user.userPrincipalName;
    }
  } catch (err) {
    next(err, null);
  }

  // Create a simple-oauth2 token from raw tokens
  let oauthToken = oauth2.accessToken.create(params);

  // Save the profile and tokens in user storage
  users[profile.oid] = { profile, oauthToken };
  return next(null, users[profile.oid]);
}

passport.use(
  new OIDCStrategy(
    {
      identityMetadata: `${config.OAUTH_AUTHORITY}${config.OAUTH_ID_METADATA}`,
      clientID: config.OAUTH_APP_ID,
      responseType: 'code id_token',
      responseMode: 'form_post',
      redirectUrl: config.OAUTH_REDIRECT_URI,
      allowHttpForRedirectUrl: true,
      clientSecret: config.OAUTH_APP_PASSWORD,
      validateIssuer: false,
      passReqToCallback: false,
      scope: config.OAUTH_SCOPES.split(' '),
    },
    signInComplete,
  ),
);

app.use(passport.initialize());
app.use(passport.session());
app.use(router);

app.use(function(req, res, next) {
  if (req.user) {
    res.locals.user = req.user.profile;
  }
  next();
});

const port = config.PORT || 5000;
app.listen(port, () => {
  console.log(`Server Running at ${port}`);
});
