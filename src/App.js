import React, { Component } from "react";
import { connect } from "react-redux";
import {
  filterValue,
  addContact,
  deleteItem,
} from "./components/redux/contactActions";
import List from "./components/List/List";
import Phonebook from "./components/Phonebook";
import style from "./components/css/task.module.css";

class App extends Component {
  filterList = () => {
    return this.props.contacts.filter((contact) =>
      contact.contact.toLowerCase().includes(this.props.filter)
    );
  };
  render() {
    return (
  <>
        <div className={style.wrapper}>
          <Phonebook
            ContactInfo={this.props.addContact}
            filterValue={this.props.filterValue}
            contacts={this.filterList()}
          />
          <List
            contacts={this.filterList()}
            filter={this.props.filter}
            filterValue={this.props.filterValue}
            deleteItem={this.props.deleteItem}
          />
        </div>
      </>
    );
  }
}
const mapStateProps = (state) => ({
  contacts: state.contacts,
  filter: state.filter,
});

export default connect(mapStateProps, {
  filterValue,
  addContact,
  deleteItem,
})(App);
