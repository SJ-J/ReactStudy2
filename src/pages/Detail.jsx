import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {

    useEffect( ()=>{
        let timer = setTimeout(() => { setViewBox(false); }, 2000);

        return ()=>{
            clearTimeout(timer);
        }
    }, [])

    let [count, setCount] = useState(0);
    let [viewBox, setViewBox] = useState(true);

    let {id} = useParams();
    // id가 일치하는 항목을 find()로 찾음
    let player = props.players.find(player => player.id == id)

    return (
            <div className="container">
            { viewBox == true ? <Box /> : null }
            { count }
            <button onClick={()=>{ setCount(count + 1) }}>공 주기</button>
            <div className="row">
                <div className="col-md-6">
                <img src={ player.img } className='cute-img' />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5"> { player.name } </h4>
                <p> No.{ player.no } </p>
                <p> <strong>{ player.position }</strong> </p>
                </div>
            </div>
            </div>
    )
}

function Box() {
    return (
        <div className="alert alert-warning">
            2초 이내 투구 시 창억떡 할인
        </div>
    )
}

export default Detail;