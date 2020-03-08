import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/user_actions';
import { connect } from 'react-redux';

class index extends Component {
  state = {
    email: '',
    password: '',
    error_msg: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  isFormEmpty = () => {
    return this.state.email === '' || this.state.password === '';
  };

  submitForm = event => {
    event.preventDefault();
    console.log('?');
    if (this.isFormEmpty()) return;
    console.log('?');
    let dataToSubmit = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.dispatch(loginUser(dataToSubmit)).then(res => {
      console.log(res);
      if (res.payload.loginSuccess) {
        this.props.history.push('/user');
      } else {
      }
    });
  };

  render() {
    let buttonStyle = {
      width: '150px',
      height: '140px',
      fontSize: '20px',
    };
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col s12">
              <h2 class="center-align">병무청</h2>
              <br />
              <br />
            </div>
            <div class="col s12">
              <h6>
                <br />
              </h6>
            </div>

            <form class="col s12">
              <div class="row">
                <div class="col s6 push-s2">
                  <div class="input-field">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      type="email"
                      class="validate"
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
                      onChange={this.handleChange}
                      o
                    />
                    <span
                      class="helper-text"
                      // data-error="wrong"
                      // data-success="right"
                    ></span>
                  </div>
                </div>

                <div className="col s4 push-s2">
                  <button
                    style={buttonStyle}
                    className="btn waves-effect waves-light red lighten-2"
                    type="submit"
                    name="action"
                    onClick={this.submitForm}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>

            <div class="col s12 center-align">
              Don't you have an account yet? &nbsp;&nbsp;
              <Link class="waves-effect waves-light btn" to="/register">
                Sign up<i class="material-icons right">create</i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect()(index);
