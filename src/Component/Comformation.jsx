import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import React from "react";
class Comformation extends React.Component {
  continue = (e) => {
    e.preventDefault();
    //we can send this data
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prvStep();
  };
  render() {
    const {
      value: { fistName, LastName, email, gradugate, city, bio }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Comform Data " />
          <List>
            <ListItem
              primaryText="First Name"
              secondaryText={fistName} //actula name
            />
            <ListItem
              primaryText="Last Name"
              secondaryText={LastName} //actula name
            />
            <ListItem
              primaryText="Email"
              secondaryText={email} //actula name
            />
            <ListItem
              primaryText="Graduate"
              secondaryText={gradugate} //actula name
            />
            <ListItem
              primaryText="City"
              secondaryText={city} //actula name
            />
            <ListItem
              primaryText="Bio"
              secondaryText={bio} //actula name
            />
          </List>
          <br />
          <RaisedButton
            label="Back"
            primary={false}
            onClick={this.back}
            style={style.button}
          />
          <RaisedButton
            label="Submit"
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
export default Comformation;
