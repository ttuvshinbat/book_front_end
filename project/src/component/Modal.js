import { Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Forums from "./Forums";
function Modals(props) {
  const [show, setShow] = useState(false);
  const [render, setRender] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {}, [show]);
  const value = (e) => {};

  return <div></div>;
}
export default Modals;
