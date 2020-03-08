import React, { Component } from 'react';
import { registerUser } from '../../actions/user_actions';
import { connect } from 'react-redux';

class index extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    error_msg: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  isFormEmpty = () => {
    return (
      this.state.name === '' ||
      this.state.email === '' ||
      this.state.password === '' ||
      this.state.passwordConfirmation === ''
    );
  };

  isFormValid = () => {
    let err;
    if (this.isFormEmpty()) {
      err = 'Fill in all input fields';
    } else if (this.state.password.length < 6) {
      err = 'Password must be no less than 6 characters.';
    } else if (this.state.password.length > 20) {
      err = 'Password must be no more than 20 characters.';
    } else if (!this.state.password === this.state.passwordConfirmation) {
      err = 'Password confirmation is invalid.';
    } else {
      err = '';
    }

    this.setState({
      error_msg: err,
    });

    return err === '';
  };

  submitForm = event => {
    event.preventDefault();

    if (!this.isFormValid()) return;

    let dataToSubmit = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    this.props
      .dispatch(registerUser(dataToSubmit))
      .then(res => {
        if (res.payload.registerSuccess) {
          this.props.history.push('/login');
        } else {
          this.setState({
            error_msg: res.payload.err.errmsg,
          });
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({
          error_msg: 'What is this error? check the console.',
        });
      });
  };

  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col s12">
              <h2 class="center-align">SIGN UP PAGE</h2>
              {/* <div class="divider"></div> */}
            </div>
            <div class="col s12">{/* <h6></h6> */}</div>
            <form class="col s12">
              <div class="row">
                <div class="col s6 push-s3">
                  <div class="input-field">
                    <label for="name">Name</label>
                    <input
                      id="name"
                      type="text"
                      class="validate"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                    <span
                      class="helper-text"
                      // data-error="wrong"
                      // data-success="right"
                    ></span>
                  </div>

                  <div class="input-field">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      class="validate"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                    <span
                      class="helper-text"
                      // data-error="wrong"
                      // data-success="right"
                    ></span>
                  </div>

                  <div class="input-field">
                    <label for="password">Password</label>
                    <input
                      id="password"
                      type="password"
                      class="validate"
                      value={this.state.password}
                      onChange={this.handleChange}
                    />
                    <span
                      class="helper-text"
                      // data-error="wrong"
                      // data-success="right"
                    ></span>
                  </div>

                  <div class="input-field">
                    <label for="passwordConfirmation">
                      Password Confirmation
                    </label>
                    <input
                      id="passwordConfirmation"
                      type="password"
                      class="validate"
                      value={this.state.passwordConfirmation}
                      onChange={this.handleChange}
                    />
                    <span
                      class="helper-text"
                      // data-error="wrong"
                      // data-success="right"
                    ></span>
                  </div>
                </div>
              </div>

              <div class="col s12">
                <div class="col s7">
                  {this.state.error_msg !== '' && (
                    <h6 class="red-text right">{this.state.error_msg}</h6>
                  )}
                </div>

                <div class="col s2" style={{ padding: 0 }}>
                  <button
                    className="btn waves-effect waves-light right"
                    type="submit"
                    name="action"
                    onClick={this.submitForm}
                  >
                    Sign up<i class="material-icons right">check</i>
                  </button>{' '}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(index);
