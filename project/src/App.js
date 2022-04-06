import "./App.css";
import { Table, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Tables from "./component/Table";
import Modals from "./component/Modal";
import TestModal from "./component/TestModal";
function App() {
  const [changed, setChanged] = useState(false);
  return (
    <div className="App">
      <Tables changedPass={{ changed, setChanged }} />
      <TestModal
        data={{}}
        type="newBook"
        changedPass={{ changed, setChanged }}
      />
    </div>
  );
}

export default App;
