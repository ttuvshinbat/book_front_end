import { Table, Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import TestModal from "./TestModal";

function Tables(props) {
  const { changed, setChanged } = props.changedPass;

  const [book, setbook] = useState([]);
  useEffect(() => {
    fetch("http://52.221.185.255:3001/api/books", {
      method: "GET",

      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => setbook(data.data));
  }, [changed]);

  let number = 0;
  return (
    <div className="App">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>price</th>
            <th>authors</th>
            <th>ISBN</th>
            <th>publisher</th>
            <th>published on</th>
          </tr>
        </thead>
        <tbody>
          {book.map((data) => {
            number = number + 1;
            return (
              <tr key={data._id}>
                <td>{number}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.author}</td>
                <td>{data.isbn}</td>
                <td>{data.publish_date} </td>
                <td></td>
                <td className="hover1">
                  <TestModal
                    data={data}
                    type="edit"
                    changedPass={props.changedPass}
                  />
                </td>

                <td className="hover">
                  <TestModal
                    data={data}
                    type="delete"
                    changedPass={props.changedPass}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Tables;
