import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "20%" }}
    >
      <Spinner animation="border" variant="primary" />
    </div>
  );
}

export default Loader;
