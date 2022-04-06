import { Table, Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
function TestModal(props) {
  const { changed, setChanged } = props.changedPass;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const id = props.data._id;
  const edit = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.89 0.390001L13.6 3.11C14.06 3.57 14.02 4.35 13.63 4.75L5.62 12.77L0.0599976 13.93L1.22 8.35C1.22 8.35 8.82 0.72 9.21 0.32C9.6 -0.0699996 10.43 -0.0699995 10.89 0.390001ZM8.16 3.18L2.57 8.79L3.68 9.9L9.22 4.25L8.16 3.18ZM5.19 11.41L10.77 5.81L9.7 4.73L4.11 10.33L5.19 11.41Z"
        fill="black"
        fill-opacity="0.3"
      />
    </svg>
  );

  const submitHandler = (e) => {
    e.preventDefault();

    handleClose();
    fetch("http://52.221.185.255:3001/api/createbook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target[0].value,
        price: e.target[2].value,
        author: e.target[3].value,
        isbn: e.target[4].value,
        publish_date: e.target[6].value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(props);
        // debugger;
        setChanged(!changed);
      })
      .catch((data) => console.log(data));
  };

  const value1 = (e) => {
    e.preventDefault();
    for (let i = 0; i < e.target.length; i++) {
      console.log(e.target[i].value);
    }

    fetch(`http://52.221.185.255:3001/api/updatebook/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: e.target[0].value,
        price: e.target[2].value,
        author: e.target[3].value,
        isbn: e.target[4].value,
        publish_date: e.target[6].value,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        setChanged(!changed);
      });
  };
  console.log(props.type);
  let returnModal;
  if (props.type == "edit") {
    returnModal = (
      <>
        <div
          onClick={() => {
            handleShow();
            value1();
          }}
        >
          {edit}
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="ms-auto"></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={value1}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Name"
                  defaultValue={props.data.name}
                  autoFocus
                />
              </Form.Group>{" "}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="code" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="number"
                  defaultValue={props.data.price}
                  placeholder="Price"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  defaultValue={props.data.author}
                  placeholder="Author"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="number"
                  defaultValue={props.data.isbn}
                  placeholder="ISBN"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="text"
                  placeholder="Publisher"
                  defaultValue={props.data.publish_date}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="date"
                  placeholder="Published on"
                  autoFocus
                />
              </Form.Group>
              <Button
                className="ms-auto"
                variant="primary"
                onClick={handleClose}
                type="submit"
              >
                Save Update
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  } else {
    returnModal = (
      <>
        <Button onClick={handleShow}> +ADD BOOK</Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="ms-auto">Add book</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={submitHandler}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Name" autoFocus />
              </Form.Group>{" "}
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="code" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="number" placeholder="Price" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Author" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="number" placeholder="ISBN" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="Publisher" autoFocus />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control
                  type="date"
                  placeholder="Published on"
                  autoFocus
                />
              </Form.Group>
              <Button
                className="ms-auto"
                variant="primary"
                onClick={handleClose}
                type="submit"
              >
                +ADD BOOK
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }

  return returnModal;
}

export default TestModal;
