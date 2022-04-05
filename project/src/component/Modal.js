import { Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Forums from "./Forums";
function Modals(props) {
  const [show, setShow] = useState(false);
  const [render, setRender] = useState(false)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {

  }, [show])
  const value = (e) => {
    setRender(true)
    handleClose();
    e.preventDefault();
    for (let i = 0; i < e.target.length; i++) {
      console.log(e.target[i].value);
    }

    fetch("http://52.221.185.255:3001/api/createbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          "name": e.target[0].value,
          "price": e.target[2].value,
          "author": e.target[3].value,
          "isbn": e.target[4].value,
          "publish_date": e.target[6].value
        }

      ),
    }).then((res) => res.json())
      .then((data) => console.log(data))
      .catch((data) => setRender(true))
      .finally((data) => setRender(true)

      )
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
