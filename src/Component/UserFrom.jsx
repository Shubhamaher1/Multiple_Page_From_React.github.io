import React from "react";
import FromUserDelets from "./FormUserDet";
import FromPersonal from "./FormPersonal";
import Comformation from "./Comformation";
import Sucees from "./Sucees";
class UserForm extends React.Component {
  state = {
    step: 1,
    fistName: "",
    LastName: "",
    email: "",
    gradugate: "",
    city: "",
    bio: ""
  };
  //for next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  //for prvese step
  prvStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  //handel filed change
  handelChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value
    });
  };
  render() {
    const { step } = this.state;
    const { fistName, LastName, email, gradugate, city, bio } = this.state;
    const value = { fistName, LastName, email, city, gradugate, bio };
    switch (step) {
      case 1:
        return (
          <FromUserDelets
            nextStep={this.nextStep}
            handelChange={this.handelChange}
            value={value}
          />
        );
      case 2:
        return (
          <FromPersonal
            nextStep={this.nextStep}
            handelChange={this.handelChange}
            value={value}
            prvStep={this.prvStep}
          />
        );
      case 3:
        return (
          <Comformation
            nextStep={this.nextStep}
            value={value}
            prvStep={this.prvStep}
          />
        );
      case 4:
        return <Sucees />;
    }
  }
}
export default UserForm;
