import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import MyFooter from "./component/MyFooter";


function App() {
  return (
    <BrowserRouter>
   
      <Container>
        
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


