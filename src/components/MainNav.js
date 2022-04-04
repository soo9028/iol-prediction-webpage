import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './MainNav.css';

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

  const [aqdValue, setAqdValue] = useState('');
  const [acaValue, setAcaValue] = useState('');
  const [ltValue, setLtValue] = useState('');
  // const [sum, setSum] = useState();
  const [icl, setIclSize] = useState('');
  const [vault, setVault] = useState('');

  // const calculateSum = () => {
  //   setSum(new Number(aqdValue + acaValue + ltValue));
  // };

  const reset = () => {
    setAcaValue('');
    setAqdValue('');
    setLtValue('');
    setIclSize([]);
    setVault([]);

    console.log(vault);
    console.log(icl);
    console.log(aqdValue);
  };

  const calculateIclSize = () => {
    const calculate =
      5.568 - 0.458 * aqdValue + 0.474 * acaValue + 0.768 * ltValue;
    setIclSize(calculate);

    const vaultValue =
      -1077.44 +
      129.82 * aqdValue +
      -134.3 * acaValue +
      -217.59 * ltValue +
      283.3 * calculate;
    setVault(vaultValue);
    console.log(icl);
  };

  // console.log(typeof aqdValue);
  // console.log(typeof acaValue);
  // console.log(typeof ltValue);

  return (
    <>
      <Navbar collapseOnSelect className='navbar'>
        <Navbar.Brand href='/' className='navbar-brand'>
          LOOCUS IOL
        </Navbar.Brand>
        <Navbar.Collapse className='justify-content-end'>
          <Nav activeKey={window.location.pathname}>
            <Nav.Link to='/signup'>Signup</Nav.Link>
            <Nav.Link to='/login'>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <br />

      <div className='contents'>
        <form id='input' style={{ display: 'inline-flex' }}>
          <label>
            AQD
            <input
              type='number'
              id='aqdvalue'
              name='aqdvalue'
              value={aqdValue}
              placeholder='Aqd(mm)'
              onChange={(e) => {
                setAqdValue(Number(e.target.value));
              }}
            />
          </label>

          <label>
            ACA
            <input
              type='number'
              id='acavalue'
              name='acavalue'
              value={acaValue}
              pattern='(?=.*\d).{1,8}'
              required
              title='최소 1자, 최대 7자까지 입력가능합니다.'
              placeholder='ACA(mm)'
              onChange={(e) => {
                setAcaValue(Number(e.target.value));
              }}
            />
          </label>

          <label>
            LT
            <input
              type='number'
              id='ltvalue'
              name='ltvalue'
              value={ltValue}
              pattern='(?=.*\d).{1,8}'
              required
              title='최소 1자, 최대 7자까지 입력가능합니다.'
              placeholder='LT(mm)'
              onChange={(e) => {
                setLtValue(Number(e.target.value));
              }}
            />
          </label>
        </form>

        <div className='buttons'>
          <button
            className='button btn-three'
            onClick={() => {
              calculateIclSize();
            }}
          >
            Calculate
          </button>

          <button
            className='button btn-two'
            onClick={() => {
              reset();
            }}
          >
            Reset
          </button>
        </div>

        <br />

        <div className='results' style={{ display: 'inline-flex' }}>
          <label id='cr'>Optimal ICL Size</label>
          <input id='icl' placeholder='' value={icl}></input>
          <label id='cr'>Post-operative ICL Vault</label>
          <input id='vaultvalue' placeholder='' value={vault}></input>
        </div>
      </div>
    </>
  );
};

export default MainNav;
