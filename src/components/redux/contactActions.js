import { createAction } from "@reduxjs/toolkit";

export const type = {
  FILTERVALUE: "FILTERVALUE",
  ADDCONTACT: "ADDCONTACT",
  DELETEITEM: "DELETEITEM",
};

export const filterValue = createAction("FILTERVALUE");

export const addContact = createAction("ADDCONTACT");

export const deleteItem = createAction("DELETEITEM");
