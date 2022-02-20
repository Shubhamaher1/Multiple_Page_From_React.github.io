import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextFiled from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
class FromUserDelets extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { value, handelChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Detels" />
          <TextFiled
            hintText=" enter your first name"
            floatingLabelText="First Name"
            onChange={handelChange("fistName")}
            defaultValue={value.fistName}
          />
          <br />
          <TextFiled
            hintText=" enter your Last name"
            floatingLabelText="Last Name"
            onChange={handelChange("LastName")}
            defaultValue={value.LastName}
          />
          <br />
          <TextFiled
            hintText=" enter your Email"
            floatingLabelText="Email"
            onChange={handelChange("email")}
            defaultValue={value.email}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            style={style.button}
            onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
const style = {
  button: {
    margin: 15
  }
};
export default FromUserDelets;
