import React from 'react'
import { useEffect, useState } from "react";
import { Table, Container, Button, Modal, Card } from "react-bootstrap";
import Navbars from "../components/Navbars";
import navStyle from "../navbar.module.css";
import brandIcon from "../images/brand-icon-black.svg";
import barcode from "../images/barcode.svg";

function ModalApprove({userTrc, id, show, handleClose, user}) {
  return (
    <div>
        {userTrc.map((item) => {
              if (id == item.id) {
                return (
                  <Modal size="lg" show={show} onHide={handleClose} centered>
                    <Modal.Body>
                      <Card className="border-0">
                        <Card.Body className="w-100">
                          <div className="d-flex justify-content-between align-items-center">
                            <img src={brandIcon} alt="" />
                            <div className="d-flex flex-column justify-content-center text-end">
                              <h3 className="m-0">Booking</h3>
                              <p className="m-0" style={{ color: "#999" }}>
                                <span
                                  style={{
                                    color: "#878787",
                                    fontWeight: "600",
                                  }}
                                >
                                  Saturday
                                </span>
                                , 22 Juy 2020
                              </p>
                            </div>
                          </div>

                          <div className="mt-5 d-flex justify-content-between align-items-start">
                            <div>
                              <h5>{item.userName}</h5>
                              <p style={{ color: "#959595" }}>Australia</p>

                              <div
                                className="rounded mt-4"
                                style={{
                                  width: "120px",
                                  padding: "8px",
                                  background: "#d9f99d",
                                  color: "#84cc16",
                                  fontWeight: "600",
                                  fontSize: "14px",
                                  textAlign: "center",
                                }}
                              >
                                Approve
                              </div>
                            </div>

                            <div>
                              <div>
                                <h6>Date Trip</h6>
                                <p style={{ color: "#959595" }}>
                                  26 August 2020
                                </p>
                              </div>
                              <div className="mt-4">
                                <h6>Accomodation</h6>
                                <p style={{ color: "#959595" }}>
                                  Hotel 4 Nights
                                </p>
                              </div>
                            </div>

                            <div>
                              <div>
                                <h6>Duration</h6>
                                <p style={{ color: "#959595" }}>
                                  6 Day 4 Night
                                </p>
                              </div>
                              <div className="mt-4">
                                <h6>Transporartion</h6>
                                <p style={{ color: "#959595" }}>
                                  Qatar Airways
                                </p>
                              </div>
                            </div>

                            <div>
                              <img src={barcode} alt="" />
                            </div>
                          </div>

                          <div className="mt-5">
                            <Table borderless>
                              <thead>
                                <tr>
                                  <th>No</th>
                                  <th>Full Name</th>
                                  <th>Gender</th>
                                  <th>Phone</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>1</td>
                                  <td>{user.fullName}</td>
                                  <td>random</td>
                                  <td>{user.phone}</td>
                                  <td className="fw-semibold">QTY</td>
                                  <td className="fw-semibold">
                                    {" "}
                                    <span className="me-4">:</span>
                                  </td>
                                </tr>
                                <tr>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td className="fw-semibold">Total</td>
                                  <td className="fw-semibold">
                                    <span className="me-4">:</span>
                                    {}
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                            <div className="w-100 d-flex justify-content-end gap-3">
                              <Button variant="danger" onClick={handleClose}>
                                Cancle
                              </Button>
                              <Button variant="success" onClick={handleClose}>
                                Approve
                              </Button>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Modal.Body>
                  </Modal>
                );
              }
            })}
    </div>
  )
}

export default ModalApprove