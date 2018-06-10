import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class Facebook extends Component {
  constructor(props) {
    super();
    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: ""
    };
  }

  responseFacebook = response => {
    //console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("Clicked");

  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "100px"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="388065871680021"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}

export default Facebook;
