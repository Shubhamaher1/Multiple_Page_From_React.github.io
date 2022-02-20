import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextFiled from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
class FromPersonal extends React.Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prvStep();
  };
  render() {
    const { value, handelChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter Gradution " />
          <TextFiled
            hintText=" enter your Gradutional"
            floatingLabelText="Grodutional "
            onChange={handelChange("gradugate")}
            defaultValue={value.gradugate}
          />
          <br />
          <TextFiled
            hintText=" enter your City"
            floatingLabelText="city"
            onChange={handelChange("city")}
            defaultValue={value.city}
          />
          <br />
          <TextFiled
            hintText=" Enter your Bio"
            floatingLabelText="Bio"
            onChange={handelChange("bio")}
            defaultValue={value.bio}
          />
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            onClick={this.back}
            style={style.button}
          />
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
export default FromPersonal;
