import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

import React from "react";
class Sucees extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Sucees " />
          <h1>Thanks For Submiton</h1>
          <h4>Check Your Email for Further Instruction </h4>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Sucees;
