import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addYears } from "../store";
import { addV, changeName } from "../store/userSlice.js";

function Contract() {

    let state = useSelector((state)=>{ return state });
    let dispatch = useDispatch()

    return (
        <div>
            <h3>V{ state.user.v }</h3>
            <h3>잡아야 한다</h3>
            <h5>누가? { state.user.name }가… </h5>
            <button onClick={()=>{ dispatch( changeName() ) }}>🐯</button>
            <button onClick={()=>{ dispatch( addV(10) ) }}>🥇🥉</button>
            <Table>
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>선수명</th>
                    <th>포지션</th>
                    <th>FA</th>
                    <th>연봉</th>
                    <th>계약기간</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.wishlist.map(function(player, i) {
                            return (
                                <tr key={i}>
                                    <td>{ player.id }</td>
                                    <td>{ player.name }</td>
                                    <td>{ player.position }</td>
                                    <td>{ player.fa }</td>
                                    <td>{ player.salary } 원</td>
                                    <td>{ player.years } 년 
                                        <button onClick={()=>{
                                            dispatch( addYears(player.id) )
                                        }}>+</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                </Table> 
        </div>
    )
}

export default Contract;