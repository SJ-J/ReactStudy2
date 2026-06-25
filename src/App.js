import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
// import dog_covy from './img/covy.jpg'
// import dog_bbomi from './img/bbomi.png'
// import dog_dal from './img/dal.png'
import { useState } from 'react';

import data from './data.js';
// import 작명 from './data.js';

function App() {
  // 사용할 데이터
  let [dogs] = useState(data);

  return (
    <div className="App">
      {/* 상단바 영역 */}
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

      {/* 콘텐츠 영역 */}
      <div className='container'>
        <div className='row'>
          {
            dogs.map(function(list, i) {
              return (
                <Contents dogs={dogs} i={i} key={i}/>
              )
            })
          }
        </div>
      </div>

      

    </div>
  );
}

/* 컴포넌트 영역 */
function Contents(props) {
  return (
    <div className='col-md-4'>
      <img src={ props.dogs[props.i].img } className='cute-img' />
      <h4> { props.dogs[props.i].name } </h4>
      <p> { props.dogs[props.i].age }세</p>
    </div>
  )
}

export default App;