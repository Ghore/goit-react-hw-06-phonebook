import React, { Component } from "react";
import { TransitionGroup } from "react-transition-group";
import { CSSTransition } from "react-transition-group";
import listItemTransition from "./../css/listItemTransition.module.css";
import ListItem from "../ListItem/ListItem";
import InputSearch from "../InputForm/InputSearch";
import style from "../css/list.module.css";

class List extends Component {
  state = {
    inSearch: false,
  };

  componentDidMount() {
    this.setState({ inSearch: true });
  }

  render() {
    return (
      <>
        {this.props.contacts.length >= 0 ? (
          <>
            <InputSearch
              filter={this.props.filter}
              filterValue={this.props.filterValue}
            />
          </>
        ) : (
          <></>
        )}
        <TransitionGroup component="ul" className={style.contactList}>
          {this.props.contacts.map((contact) => (
            <CSSTransition
              key={contact.id}
              timeout={200}
              classNames={listItemTransition}
              unmountOnExit
            >
              <ListItem
                key={contact.id}
                deleteItem={this.props.deleteItem}
                contact={contact}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </>
    );
  }
}
export default List;
