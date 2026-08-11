import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

function Contract() {

    let state = useSelector((state)=>{ return state.wishlist });

    return (
        <div>
            <h3>잡아야 한다</h3>
            <Table>
                <thead>
                    <tr>
                    <th>No.</th>
                    <th>선수명</th>
                    <th>포지션</th>
                    <th>FA</th>
                    <th>연봉</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <td>{ state[0].id }</td>
                    <td>{ state[0].name }</td>
                    <td>{ state[0].position }</td> */}
                    {
                        state.map(function(state, i) {
                            return (
                                <tr>
                                    <td>{ state.id }</td>
                                    <td>{ state.name }</td>
                                    <td>{ state.position }</td>
                                    <td>{ state.fa }</td>
                                    <td>{ state.salary } 원</td>
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