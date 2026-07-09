import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import defaultData from './defaultData.js';
import Detail from './pages/Detail.jsx';
import {Event1, Event2} from './pages/Event.jsx';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

function App() {
  // 사용할 데이터
  let [players, setPlayers] = useState(defaultData);
  let [data, setData] = useState([]);
  let [isCalled, setIsCalled] = useState(false);
  let navigate = useNavigate();

  return (
    <div className="App">

      {/* 상단바 영역 */}
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className='navBar'>KIA야옹이즈™</Navbar.Brand>
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
                  players.map(function(players, i) {
                    return (
                      <ListCard players={players} key={players.id} />
                    )
                  })
                }
              </div>
            </div>
            { isCalled === false ? <MoreBtn players={players} setPlayers={setPlayers} setData={setData} setIsCalled={setIsCalled} /> : null }
          </div>
        } />
        <Route path='/about' element={ 
          <div>
            <About/>
            <button onClick={ ()=>{ navigate('/') } }>Home</button>
          </div>
           }>
          <Route path='players' element={ <div> 선수소개 </div> } />
        </Route>
        <Route path='/event' element={ <Event /> }>
           <Route path='event1' element={ <Event1 /> }></Route>
           <Route path='event2' element={ <Event2 /> }></Route>
        </Route>
        <Route path='/detail/:id' element={ <Detail players={players} /> } />
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
      <img src={ props.players.img } className='img' onClick={ ()=>{ navigate(`/detail/${ props.players.id }`) } } />
      <h4> { props.players.name } </h4>
      <p> No.{ props.players.no } </p>
      <p> <strong>{ props.players.position }</strong> </p>
    </div>
  )
}

function MoreBtn(props) {
  return (
      <button onClick={()=>{
        axios.get('https://sj-j.github.io/ReactStudy2/data.json')
        .then((response)=>{
          props.setData(response.data);
          let copy = [...props.players];
          props.setPlayers( [...copy, ...response.data] )
          props.setIsCalled(true)
        }).catch(()=>{
          console.log('ajax 요청 실패');
        })
        console.log(props.players.length)
      }}> 선수 더보기 </button>
  )
}

function About() {
  return (
    <div>
      <h4> About 야옹이즈™… </h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4> 야옹이즈™ 이벤트 </h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;