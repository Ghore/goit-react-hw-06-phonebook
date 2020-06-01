import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import { InputForm } from "./InputForm/InputForm";
import { BtnFormSubmit } from "./Button/BtnFormSubmit";
import { Alert } from "./Alert/alert";
import AlertTransition from "../components/css/alertTransition.module.css";

class Phonebook extends Component {
  state = {
    contact: "",
    number: "",
    isOpen: false,
    isAlert: false,
  };
  componentDidMount() {
    this.setState({
      isOpen: true,
      isAlert: false,
    });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  FindContact = (contact) => {
    const allContacts = this.props.contacts;
    const include = allContacts.filter((item) =>
      item.contact.toLowerCase().includes(contact.toLowerCase())
    );

    return include.length !== 0;
  };
  AlertCMC = () => {
    this.setState((prevstate) => ({ isAlert: !prevstate.isAlert }));
  };

  FilterExist = () => {
    const allContacts = this.props.contacts;
    const include = allContacts.filter((item) =>
      item.contact.toLowerCase().includes(this.state.contact.toLowerCase())
    );
    return include.length !== 0;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const contact = this.state.contact;
    const number = this.state.number;
    if (contact && number && !this.FilterExist()) {
      const newContact = { id: uuidv4(), contact, number };
      this.props.ContactInfo(newContact);
      this.setState({ contact: "", number: "" });
    } else {
      this.AlertCMC();
    }
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <InputForm
            propAnimation={this.state.isOpen}
            contact={this.state.contact}
            number={this.state.number}
            handleChange={this.handleChange}
          />
          <BtnFormSubmit />
        </form>
        <CSSTransition
          in={this.state.isAlert}
          timeout={2000}
          classNames={AlertTransition}
          unmountOnExit
        >
          <Alert contact={this.state.contact} />
        </CSSTransition>
      </>
    );
  }
}

export default Phonebook;
