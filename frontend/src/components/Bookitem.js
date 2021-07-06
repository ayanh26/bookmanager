import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import axios from "axios"

const Bookitem = (props) => {

  const onclickhandler = async (event) => {
    event.preventDefault()
    const id = props.id
    await axios.delete('http://localhost:5000/books/'+id)
    window.location = '/'
  
    
  }


  return (
    <div className="book-item">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary">{props.price}</Button>
          <Button variant="danger" onClick={onclickhandler}>delete</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Bookitem;
