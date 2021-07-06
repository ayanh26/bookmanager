import React from "react";
import "./Booklist.css";
import Bookitem from "./Bookitem";
import { Container, CardDeck } from "react-bootstrap";

const Booklist = (props) => {
  return (
    <div className="container">
      <ul className="book-list">
        <CardDeck>
          {props.bookreserve.map((book) => (
            <Bookitem id={book._id} setDUMMY={props.setDUMMY}
              title={book.title}
              image={book.image}
              description={book.description}
              price={book.price}
            />
          ))}
        </CardDeck>
      </ul>
    </div>
  );
};

export default Booklist;
