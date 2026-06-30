import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import Detail from './pages/Detail.jsx';
import {Event1, Event2} from './pages/Event.jsx';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {
  // 사용할 데이터
  let [dogs] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      {/* 상단바 영역 */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className='navBar'>견짱시대™</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={ ()=>{ navigate('/') } }>Home</Nav.Link>
            <Nav.Link onClick={ ()=>{ navigate('/about') } }>About</Nav.Link>
            <Nav.Link onClick={ ()=>{ navigate('/event') } }>Event</Nav.Link>
            {/* <Nav.Link onClick={ ()=>{ navigate(-1) } }>뒤로가기</Nav.Link> */}
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
                      <ListCard dogs={dogs} key={dogs.id} />
                    )
                  })
                }
              </div>
            </div>
          </div> 
        } />
        <Route path='/about' element={ 
          <div>
            <About/>
            <button onClick={ ()=>{ navigate('/') } }>Home</button>
          </div>
           }>
          <Route path='dogs' element={ <div> 견짱소개 </div> } />
          <Route path='managers' element={ <div> 매니저소개 </div> } />
        </Route>
        <Route path='/event' element={ <Event /> }>
           <Route path='event1' element={ <Event1 /> }></Route>
           <Route path='event2' element={ <Event2 /> }></Route>
        </Route>
        <Route path='/detail/:id' element={ <Detail dogs={dogs} /> } />
        <Route path='*' element={ <div>잘못 들어오셨어욤;;</div> } />
      </Routes>
      
    </div>
  );
}

/* 컴포넌트 영역 */
function ListCard(props) {
  let navigate = useNavigate();
  return (
    <div className='col-md-4'>
      <img src={ props.dogs.img } className='cute-img' onClick={ ()=>{ navigate(`/detail/${ props.dogs.id }`) } } />
      <h4> { props.dogs.name } </h4>
      <p> { props.dogs.age }세 </p>
      <p> 전담 매니저 <strong>{ props.dogs.manager }</strong> </p>
    </div>
  )
}

function About() {
  return (
    <div>
      <h4> About 견짱시대™… </h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4> 견짱시대™ 이벤트 </h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;