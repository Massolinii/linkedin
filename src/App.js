import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Test from "./component/test";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>{/*MyNav*/}</Row>
        <Test />
        <Routes>
          <Route path="*" />
          <Route path="/profile" element={<></>} />
        </Routes>
        <Row>{/*MyFooter*/}</Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
