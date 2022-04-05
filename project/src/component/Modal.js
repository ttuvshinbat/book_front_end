import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import Forums from "./Forums";
function Modals(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const value = (e) => {
    handleClose();
    e.preventDefault();
    for (let i = 0; i < e.target.length; i++) {
      console.log(e.target[i].value);
    }
  };

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="ms-auto">Add book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={value}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Name" autoFocus />
            </Form.Group>{" "}
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="code" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="number" placeholder="Price" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Author" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="number" placeholder="ISBN" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Publisher" autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="date" placeholder="Published on" autoFocus />
            </Form.Group>
            <Button className="ms-auto" variant="primary" type="submit">
              Add book
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Button onClick={() => handleShow()}>+Add book</Button>
    </div>
  );
}
export default Modals;
