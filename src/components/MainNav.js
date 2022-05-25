import React, { useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './MainNav.css';
import Box from '@material-ui/core/Box';

const MainNav = () => {
  // const [isDesktop, setIsDesktop] = useState(true);
  // const [isMobile, setIsMobile] = useState(false);

  // const desktop = useMediaQuery({ query: 'minWidth:992' });
  // const mobile = useMediaQuery({ query: 'maxWidth:767' });

  // useEffect(() => {
  //   if (mobile) setIsMobile(mobile);
  // }, [mobile]);

  // useEffect(() => {
  //   if (desktop) setIsDesktop(desktop);
  // }, [desktop]);

  // const [aqdValue, setAqdValue] = useState('');
  // const [acaValue, setAcaValue] = useState('');
  // const [ltValue, setLtValue] = useState('');
  // const [iclValue, setIclValue] = useState('');
  const [icl, setIclSize] = useState('');
  const [vault, setVault] = useState('');
  const [inputs, setInputs] = useState({
    aqdValue: '',
    acaValue: '',
    ltValue: '',
    iclValue: '',
  });

  const { aqdValue, acaValue, ltValue, iclValue } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target; //e.target에서 name, value 추출
    setInputs({
      ...inputs, //기존의 inputs 객체 복사
      [name]: value, //name키를 가진 값을 value로 설정
    });
  };

  const reset = (e) => {
    setInputs({
      aqdValue: '',
      acaValue: '',
      ltValue: '',
      iclValue: '',
    });
    setVault('');
    setIclSize('');
    console.log(vault);
    console.log(iclValue);
    console.log(aqdValue);
  };

  // const handleChange = async (e) => {
  //   console.log(acaValue);
  //   var number = Number(e.target.value);
  //   setAcaValue({ [e.target.name]: number });
  //   console.log(acaValue);
  //   console.log(typeof acaValue);
  // };

  // const sum = () => {
  //   const Sum = Number(acaValue) + Number(aqdValue) + 1;
  //   console.log(Sum);
  // };

  const calculateIclSize = () => {
    const calculate =
      5.568 -
      0.458 * Number(aqdValue) +
      0.474 * Number(acaValue) +
      0.768 * Number(ltValue);
    setIclSize(Number(calculate).toFixed(2));
    console.log(typeof calculate);
    console.log(typeof icl);
  };

  const calculateVaultValue = () => {
    const vaultValue =
      -1077.44 +
      129.82 * Number(aqdValue) +
      -134.3 * Number(acaValue) +
      -217.59 * Number(ltValue) +
      283.3 * Number(iclValue);
    setVault(Number(vaultValue).toFixed(2));
    console.log(vault);
    console.log(typeof vault);
  };

  return (
    <>
      <Navbar collapseOnSelect className='navbar'>
        <Navbar.Brand href='/' className='navbar-brand'>
          LOOCUS IOL
        </Navbar.Brand>
        {/* <Navbar.Collapse className='justify-content-end'>
          <Nav activeKey={window.location.pathname} className='access'>
            <Nav.Link to='/signup' id='signup'>
              Signup
            </Nav.Link>
            <Nav.Link to='/login' id='login'>
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Navbar>

      <br />

      <div className='contents'>
        <form id='input' style={{ display: 'inline-flex' }}>
          <label>
            AQD
            <input
              type='number'
              id='aqdvalue'
              name='aqdValue'
              placeholder='Aqd(mm)'
              value={aqdValue}
              onChange={onChange}
            />
          </label>

          <label>
            ACA
            <input
              type='number'
              id='acavalue'
              name='acaValue'
              placeholder='ACA(mm)'
              value={acaValue}
              onChange={onChange}
            />
          </label>

          <label>
            LT
            <input
              type='number'
              id='ltvalue'
              name='ltValue'
              placeholder='LT(mm)'
              value={ltValue}
              onChange={onChange}
            />
          </label>

          <label id='icl-value'>
            ICL size
            <input
              type='number'
              id='iclvalue'
              name='iclValue'
              placeholder='ICL Size(mm)'
              value={iclValue}
              onChange={onChange}
            />
          </label>
        </form>

        <div className='buttons'>
          <button
            className='button btn-three'
            onClick={() => {
              calculateIclSize();
              calculateVaultValue();
            }}
          >
            Calculate
          </button>

          <button className='button btn-two' onClick={reset}>
            Reset
          </button>
        </div>

        <br />

        <div className='results' style={{ display: 'inline-flex' }}>
          <label id='cr'>Optimal ICL Size</label>
          <div id='icl'>{icl}</div>
          <label id='cr'>Post-operative ICL Vault</label>
          <div id='vaultvalue'>{vault}</div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
