import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
// import dog_covy from './img/covy.jpg'
// import dog_bbomi from './img/bbomi.png'
// import dog_dal from './img/dal.png'
import { useState } from 'react';
import data from './data.js';
// import 작명 from './data.js';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  // 사용할 데이터
  let [dogs] = useState(data);

  return (
    <div className="App">

      {/* 상단바 영역 */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className='navBar'>견짱시대™</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#">뭐하지</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* 라우터 영역 */}
      <Routes>
        <Route path='/' element={ 
          <div>
            <div className='container'>
              <div className='row'>
                {
                  dogs.map(function(dogs, i) {
                    return (
                      <ListCard dogs={dogs} key={i}/>
                    )
                  })
                }
              </div>
            </div>
          </div> 
        } />
        <Route path='/about' element={ 
          <div>
            <Link to="/"> Home </Link>
          </div>
           } />
        <Route path='/detail' element={ 
          <div>
            <Link to="/"> Home </Link>
          </div>
           } />
      </Routes>
      

    </div>
  );
}

/* 컴포넌트 영역 */
function ListCard(props) {
  return (
    <div className='col-md-4'>
      <img src={ props.dogs.img } className='cute-img' />
      <h4> { props.dogs.name } </h4>
      <p> { props.dogs.age }세 </p>
      <p> 전담 매니저 <strong>{ props.dogs.manager }</strong> </p>
    </div>
  )
}

export default App;