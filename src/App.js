import "./App.css";
import MyNav from "./component/MyNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import MyFooter from "./component/MyFooter";

import MyProfilePage from "./component/MyProfilePage";
import NotFound from "./component/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <MyNav />
        </Row>
        <Routes>
          <Route path="/profile/:userID" element={<MyProfilePage />} />
          <Route path="/profile" element={<MyProfilePage />} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
        <Row>
          <MyFooter></MyFooter>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
