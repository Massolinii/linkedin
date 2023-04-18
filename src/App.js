import "./App.css";
import MyNav from "./component/MyNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import MyFooter from "./component/MyFooter";

import MyProfilePage from "./component/MyProfilePage";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Container>
        <Row></Row>
        <Routes>
          <Route path="*" />
          <Route path="/" element={<MyProfilePage />} />
        </Routes>
      </Container>
      <MyFooter></MyFooter>
    </BrowserRouter>
  );
}

export default App;
