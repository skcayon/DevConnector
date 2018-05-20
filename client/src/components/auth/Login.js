import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        {/* <!-- Login --> */}
        <div class="login">
          <div class="container">
            <div class="row">
              <div class="col-md-8 m-auto">
                <h1 class="display-4 text-center">Log In</h1>
                <p class="lead text-center">
                  Sign in to your DevConnector account
                </p>
                <form action="dashboard.html">
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control form-control-lg"
                      placeholder="Email Address"
                      name="email"
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <input type="submit" class="btn btn-info btn-block mt-4" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
