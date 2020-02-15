import React, { Component } from 'react';

export default class index extends Component {
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
              <h2 class="center-align">Login Page</h2>
              {/* <div class="divider"></div> */}
            </div>
            <div class="col s12">
              <h6>
                <br />
              </h6>
            </div>

            <form class="col s12">
              <div class="row">
                <div class="col s6 push-s2">
                  <div>
                    <label for="email">Email</label>
                    <input id="email" type="email" class="validate" />
                    <span
                      class="helper-text"
                      // data-error="wrong"
                      // data-success="right"
                    ></span>
                  </div>

                  <div>
                    <label for="password">Password</label>
                    <input id="password" type="password" class="validate" />
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
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
