import { Container, Row, Col, Image, Button } from "react-bootstrap";
import {createBrowserRouter,RouterProvider,Route} from "react-router-dom"

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Discover from "./components/Discover";
import Home from "./components/Home";


const router = createBrowserRouter([
  {
      path:"/",
      element:<Home/>
  },
  {
    path:"/movies",
    element:<Discover/>
  }
])


function App() {
  return (
    <Container className="App">
      <RouterProvider router={router}/>
    </Container>
  );
}

export default App;
