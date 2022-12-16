// import React, { useState } from "react";
import { MyDiv, MyImagen } from "../assets/style/ComponentesEstilizados.js";
import imagenFooter from "../assets/imagen/rickFooter.png";

const Footer = () => {
  const year = new Date().getFullYear();
  const companyName = "Rick and Morty Api";
  // const [click, setClick] = useState(0);
  // const handle = () => {
  //   setClick(click + 1);
  // };
  // window.addEventListener("beforeunload", handle);
  // console.log(click);
  return (
    <>
      <MyDiv>
        <footer className="page-footer font-small blue pt-4">
          <div className="container-fluid text-center text-md-left">
            <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                <MyImagen src={imagenFooter} alt="imagen footer" />
              </div>
              <hr className="clearfix w-100 d-md-none pb-0" />

              {/* <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                </ul>
              </div> */}

              {/* <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#!">Link 1</a>
                  </li>
                  <li>
                    <a href="#!">Link 2</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>

          <div className="footer-copyright text-center py-3">
            © {year} Copyright:
            <a href="https://rickandmortyapi.com/"> {companyName}</a>
          </div>
        </footer>
      </MyDiv>
    </>
  );
};

export default Footer;
