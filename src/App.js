import "./App.css";
import MyNav from "./component/MyNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";


function App() {
  return (
    <BrowserRouter>
    <MyNav/>
      <Container>
        <Row></Row>
        <Routes>
          <Route path="*" />
          <Route path="/profile" element={<></>} />
        </Routes>
        
      </Container>
      <MyFooter></MyFooter>
    </BrowserRouter>
  );
}

export default App;


