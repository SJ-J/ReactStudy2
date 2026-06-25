import { Button, Container, Nav, Navbar, Row, Stack } from 'react-bootstrap';
import './App.css';
import bgImg from './img/mainbg.png'
import dog_covy from './img/covy.jpg'
import dog_bbomi from './img/bbomi.png'
import dog_dal from './img/dal.png'

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" className='navBar'>견짱시대™</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img src={dog_covy} className='cute-img' />
            <h4>임코비</h4>
            <p>4세</p>
          </div>
          <div className='col-md-4'>
            <img src={dog_bbomi} className='cute-img' />
            <h4>뽀미</h4>
            <p>5세</p>
          </div>
          <div className='col-md-4'>
            <img src={dog_dal} className='cute-img' />
            <h4>박달</h4>
            <p>15세</p>
          </div>
        </div>

      </div>

    </div>
  );
}



export default App;