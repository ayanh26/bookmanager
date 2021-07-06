import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios"

const Add = (props) => {

  const [newbook, setnewbook] = useState({title:"", price:0, description:""})

  const titlehandler = (event) =>{
    setnewbook({ ...newbook, title: event.target.value })
  }

  const pricehandler = (event) =>{
    setnewbook({ ...newbook, price: event.target.value })
  }

  const deschandler = (event) =>{
    setnewbook({ ...newbook, description: event.target.value })
  }

  const onsubmithandler = async (event) => {
    event.preventDefault()
    await axios.post('http://localhost:5000/books/add', {title:newbook.title, price:newbook.price, image:newbook.description})

    window.location = '/'
      

    
  }


  return (
    <Form className="form" onSubmit={onsubmithandler}>
      <Form.Group controlId="formGroupEmail">
        <Form.Label name='title'>Title</Form.Label>
        <Form.Control placeholder="Enter title"  value={newbook.title} onChange={titlehandler}/>
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label name="price">price</Form.Label>
        <Form.Control placeholder="Enter Price"  value={newbook.price} onChange={pricehandler}/>
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label name="desc">image link</Form.Label>
        <Form.Control placeholder="Enter Description"  value={newbook.description} onChange={deschandler}/>
      </Form.Group>
      <Button variant="primary" type="submit">
    Submit
  </Button>
    </Form>
  );
};

export default Add;
