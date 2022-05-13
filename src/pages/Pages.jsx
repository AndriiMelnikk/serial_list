import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./home/home";
import SerialLIstComponent from "./serialLIst/serialListContainer";
import { AiOutlineLeft } from "react-icons/ai";

const Pages = () => {
  return (
    <PagesS>
      <Navbar>
        <div>
          <button>
            <Routes>
              <Route exact path='/' element={<></>} />
              <Route
                path='*'
                element={
                  <Link to='/'>
                    <AiOutlineLeft />
                  </Link>
                }
              />
            </Routes>
          </button>
        </div>
        <div>
          <h1>Super Film</h1>
        </div>
      </Navbar>

      <div>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/serial' element={<SerialLIstComponent />} />
          <Route path='*' element={<div>erro</div>} />
        </Routes>
      </div>
    </PagesS>
  );
};
export default Pages;

const PagesS = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 40px 1fr;
  h1 {
    font-size: 1.3em;
    font-weight: 300;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-transform: uppercase;
  }
  > div:nth-child(1) {
    height: 100%;
    overflow: hidden;
  }
  > div:nth-child(2) {
    overflow-y: scroll;
  }
`;
const Navbar = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr 40px;
  button {
    width: 100%;
    height: 100%;
    border: none;
    background-color: rgba(255, 255, 255, 0);
    font-size: 1em;
    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      color: red;
    }
  }
`;
