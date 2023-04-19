import "./App.css";
import MyNav from "./component/MyNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import MyFooter from "./component/MyFooter";

import MyProfilePage from "./component/MyProfilePage";
import MyHomePage from "./component/MyHomePage";
import NotFound from "./component/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <MyNav />
        </Row>
        <Routes>
          <Route path="*" />
          <Route path="/home" element={<MyHomePage />} />
          <Route
            path="/profile/:userID"
            element={
              <>
                <MyProfilePage /> <MyFooter />
              </>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <MyProfilePage /> <MyFooter />
              </>
            }
          />
          <Route path="/profile/:userID" element={<MyProfilePage />} />
          <Route
            path="/profile"
            element={
              <>
                <MyProfilePage /> <MyFooter />
              </>
            }
          />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
