import styles from "./Navbar.module.scss";
import Navbar from "react-bootstrap/Navbar";
import { BiTerminal } from "react-icons/bi";
import { CgUserlane } from "react-icons/cg";
import { SiCodefactor } from "react-icons/si";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      className="d-flex justify-content-between p-3 h-auto pb-4 pt-4 shadow p-3 mb-5 bg-white rounded"
      expand="lg"
      style={{
        position: "fixed",
        width: "100%",
        zIndex: "99",
      }}
    >
      <div className="d-flex ms-4 me-4">
        <Link to="/">
          <div className={`me-3 ${styles.blogText}`}>
            <span className="me-2">
              <BiTerminal className={`fs-5 ${styles.blogText} `} />
            </span>
            <span className={"fw-bold text-dark"}>Latest</span>
          </div>
        </Link>
        <div>
          <span className="me-2">
            <SiCodefactor className="fs-5" />
          </span>
          <span className="fw-bold">Post</span>
        </div>
      </div>
      <span>
        <CgUserlane className="fs-5" />
      </span>
    </Navbar>
  );
}
export default Header;
