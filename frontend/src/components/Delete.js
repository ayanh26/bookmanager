import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import {useState} from "react"
import axios from "axios"

const Delete = (props) => {

  const [deletetitle, setdeletetitle] = useState("")

  const onchangehandler = (event) =>{
    setdeletetitle(event.target.value)
  }

  const onsubmithandler = (event) =>{
    event.preventDefault()
    const thetitle = 'something';
    axios.delete(`http://localhost:5000/books/${thetitle}`)
      .then(response =>  console.log(response.data)).then(window.location = '/');
  }

  return (
    <Form className="form" onSubmit={onsubmithandler}>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control placeholder="Enter title" value={deletetitle} onChange={onchangehandler}/>
      </Form.Group>
      <Button variant="danger" type="submit">
    Delete
  </Button>
    </Form>
  );
};

export default Delete;
