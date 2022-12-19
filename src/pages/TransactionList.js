import { useEffect, useState } from "react";
import { Table, Container, Button, Modal, Card } from "react-bootstrap";
import Navbars from "../components/Navbars";
import navStyle from "../navbar.module.css";
import brandIcon from "../images/brand-icon-black.svg";
import barcode from "../images/barcode.svg";
import searchIcon from "../images/search-icon.svg";
import ModalApprove from "../components/ModalApprove";

function TransactionList({ user, userTrc }) {
  const [show, setShow] = useState(false);
  const [id, setId] = useState();

  const handleClose = () => setShow(false);
//   const handleShow = () => {
//     setId();
//     setShow(true);
//   };

  const p = user.filter((x) => x.transaction != 0);

  const coba = p
    .map((item) => {
      return item.transaction;
    })
    .flat();

  const hasil = coba.map((item) => {
    return item;
  });

  let h = [];

  hasil.forEach((x, index) => {
    // console.log(hasil);
    h.push(
      <tr>
        <td>{x.id}</td>
        <td>{x.userName}</td>
        <td>{x.title}</td>
        <td>bca.jpg</td>
        <td>
          {x.approve == true ? (
            <p className="m-0">approve </p>
          ) : (
            <p className="m-0">Pending </p>
          )}
        </td>
        <td>
          <Button
            onClick={() => {
              setId(x.id);
              setShow(true);
            }}
            className="p-0 bg-transparent border-0"
          >
            <img src={searchIcon} alt="" />
          </Button>
        </td>
      </tr>
    );
  });

  const trcId = hasil.forEach((x) => {
    return x.id;
    // console.log(x.id)
  });

  console.log(id);

  return (
    <>
      <Navbars navStyle={navStyle.navbar} />
      <Container className="mt-5">
        <h4>Income Transaction</h4>

        <Table striped>
          <thead>
            <tr>
              <th>No</th>
              <th>User</th>
              <th>Trip</th>
              <th>Bukti Transfer</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {h}

            <ModalApprove show={show} user={user} handleClose={handleClose} id={id} userTrc={userTrc}/>
            
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default TransactionList;
