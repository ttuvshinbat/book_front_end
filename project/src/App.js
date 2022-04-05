import "./App.css";
import { Table, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Tables from "./component/Table";
import Modals from "./component/Modal";
function App() {
  return (
    <div className="App">
      <Tables />
      <Modals />
    </div>
  );
}

export default App;
