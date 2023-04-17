import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import MyProfilePage from "./component/MyProfilePage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Row>{/*MyNav*/}</Row>
        <Routes>
          <Route path="*" />
          <Route path="/" element={<MyProfilePage />} />
        </Routes>
        <Row>{/*MyFooter*/}</Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
