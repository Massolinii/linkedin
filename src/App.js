import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>{/*MyNav*/}</Row>
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
