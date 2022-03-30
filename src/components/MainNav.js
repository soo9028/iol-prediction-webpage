import { Toast } from "bootstrap";
import React, { Component, useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Carousel,
  Card,
  Image,
  InputGroup,
  Row,
  Col,
  FormGroup,
} from "react-bootstrap";
import "./MainNav.css";

const MainNav = () => {
  const [aqdValue, setAqdValue] = useState();
  const [acaValue, setAcaValue] = useState();
  const [ltValue, setLtValue] = useState();
  // const [sum, setSum] = useState();
  const [icl, setIclSize] = useState();
  const [vault, setVault] = useState();

  // const calculateSum = () => {
  //   setSum(new Number(aqdValue + acaValue + ltValue));
  // };

  const reset = () => {
    setAcaValue("");
    setAqdValue("");
    setLtValue("");
    setIclSize("");
    setVault("");
  };

  const calculateIclSize = () => {
    const calculate = (
      5.568 -
      0.458 * aqdValue +
      0.474 * acaValue +
      0.768 * ltValue
    ).toFixed(4);
    setIclSize(calculate);
  };

  const calculateVault = () => {
    const calculateVault = Math.round(
      -1077.44 +
        129.82 * aqdValue +
        -134.3 * acaValue +
        -217.59 * ltValue +
        283.3 * icl
    );
    setVault(calculateVault);
    console.log(typeof calculateVault);
    console.log(icl);
  };

  // console.log(typeof aqdValue);
  // console.log(typeof acaValue);
  // console.log(typeof ltValue);

  return (
    <>
      <Navbar className="navbar">
        <Navbar.Brand className="navbar-brand" href="#home">
          LOOCUS IOL
        </Navbar.Brand>
      </Navbar>

      <br />

      <form id="input" style={{ display: "flex" }}>
        <label>
          AQD
          <input
            type="number"
            id="aqdvalue"
            name="aqdvalue"
            value={aqdValue}
            pattern="(?=.*\d).{1,8}"
            required
            title="최소 1자, 최대 7자까지 입력가능합니다."
            placeholder="Aqd(mm)"
            onChange={(e) => {
              setAqdValue(Number(e.target.value));
            }}
          />
        </label>

        <label>
          ACA
          <input
            type="number"
            id="acavalue"
            name="acavalue"
            value={acaValue}
            pattern="(?=.*\d).{1,8}"
            required
            title="최소 1자, 최대 7자까지 입력가능합니다."
            placeholder="ACA(mm)"
            onChange={(e) => {
              setAcaValue(Number(e.target.value));
            }}
          />
        </label>

        <label>
          LT
          <input
            type="number"
            id="ltvalue"
            name="ltvalue"
            value={ltValue}
            pattern="(?=.*\d).{1,8}"
            required
            title="최소 1자, 최대 7자까지 입력가능합니다."
            placeholder="LT(mm)"
            onChange={(e) => {
              setLtValue(Number(e.target.value));
            }}
          />
        </label>
      </form>

      <div id="calculate" style={{ display: "inline-flex" }}>
        <div className="box-3">
          <div
            className="btn btn-three"
            onClick={() => {
              calculateIclSize();
              calculateVault();
            }}
          >
            <span>Calculate</span>
          </div>

          <div
            className="btn btn-two"
            onClick={() => {
              reset();
            }}
          >
            <span>Reset</span>
          </div>
        </div>
      </div>

      <br />

      <div className="results" style={{ display: "inline-flex" }}>
        <label id="cr">Optimal ICL Size</label>
        <input id="icl" placeholder="" value={icl}></input>
        <label id="cr">Post-operative ICL Vault</label>
        <input id="vaultvalue" placeholder="" value={vault}></input>
      </div>

      {/* 
        <FormControl
          type="number"
          value={aqdValue}
          placeholder="AQD(mm)"
          className="mb-2"
          onChange={(e) => {
            setAqdValue(Number(e.target.value));
          }}
        />

        <FormControl
          type="number"
          value={acaValue}
          placeholder="ACA(mm)"
          className="mb-2"
          aria-label="ACA"
          id="aca"
          onChange={(e) => {
            setAcaValue(Number(e.target.value));
          }}
        />

        <FormControl
          type="number"
          value={ltValue}
          placeholder="LT(mm)"
          className="mb-2"
          aria-label="LT"
          id="lt"
          onChange={(e) => {
            setLtValue(Number(e.target.value));
          }}
        /> */}

      {/* <div id="calculate" style={{ display: "inline-flex" }}>
          <Button
            variant="outline-success"
            onClick={() => {
              calculateIclSize();
              calculateVault();
            }}
          >
            Calculate
          </Button>
        </div>
        <div id="clear" style={{ display: "inline-flex" }}>
          <Button
            id="clearBtn"
            className="primary"
            variant="outline-primary"
            onClick={() => reset()}
          >
            Clear
          </Button>
        </div>
      </Form>

      <Form className="input">
        <Form.Group as={Row} className="mb-3">
          <Col xs="2" id="ICLSize">
            <Form.Text>Optimal ICL Size</Form.Text>
          </Col>

          <Col sm="2">
            <FormControl
              type="text"
              value={icl}
              placeholder=""
              className="mb-2"
              aria-label="AQD"
              id="aqd"
            />
          </Col>

          <Col xs="2" id="ICLSize">
            <Form.Text>Post-operative ICL Vault</Form.Text>
          </Col>

          <Col sm="2">
            <FormControl
              type="text"
              value={vault}
              placeholder=""
              className="mb-2"
              aria-label="AQD"
              id="aqd"
            />
          </Col>
        </Form.Group>
      </Form> */}
    </>
  );
};

export default MainNav;
