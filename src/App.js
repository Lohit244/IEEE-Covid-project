import React, { useState } from 'react'
import './App.css';
import Data from './components/Data/Data'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, FormControl, Accordion, Card, Nav } from "react-bootstrap"
import Landing from './components/Landing/Landing';
function App() {
  const [searchValue, setSearchValue] = useState("")
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
        <Navbar.Brand href="#home">Covid Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#table" variant="dark">World Data</Nav.Link>
          </Nav>
          <FormControl type="search" placeholder="Search" md="4" className="w-50" onChange={(Event) => {
            setSearchValue(Event.target.value);
          }} value={searchValue} />
        </Navbar.Collapse>
      </Navbar>
      {/* Home */}
      <Landing it={items}/>
      {/* Table  Accordian*/}
      <Accordion className="text-center" defaultActiveKey="0">
        <Card id="table">
          <Accordion.Toggle as={Card.Header} eventKey="0">
            World Data
    </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Data term={searchValue} func = {setItems} />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default App;
