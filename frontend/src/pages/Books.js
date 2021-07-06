import React from "react";
import Booklist from "../components/Booklist";
import Bookitem from "../components/Bookitem";

const Books = (props) => {
  return <Booklist bookreserve={props.BookItems} setDUMMY = {props.setDUMMY}/>;
};

export default Books;
