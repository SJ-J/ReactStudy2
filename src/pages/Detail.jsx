import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
    
        let [count, setCount] = useState(0);
        let [viewBox, setViewBox] = useState(true);
        let [price, setPrice] = useState(0);
    
        let {id} = useParams();
        // id가 일치하는 항목을 find()로 찾음
        let player = props.players.find(player => player.id == id)

    useEffect( ()=>{
        let timer = setTimeout(() => { setViewBox(false); }, 2000);

        return ()=>{
            clearTimeout(timer);
        }
    }, [])

    useEffect( ()=>{
        const numericValue = String(price).replace(/[^0-9]/g, "");
        setPrice(numericValue);
        if (price != numericValue) {
            alert('연봉은 숫자만 입력해 주세요!');
        }
    }, [price])

    return (
            <div className="container">
            { viewBox == true ? <Box count={count} setCount={setCount}></Box> : null }
            <div className="row">
                <div className="col-md-6">
                <img src={ player.img } className='img' />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5"> { player.name } </h4>
                <p> No.{ player.no } </p>
                <p> <strong>{ player.position }</strong> </p>
                <p>연봉 <strong>{ price == '' ? 0 : price }</strong>만 원</p>
                <input placeholder="지불할 금액을 적어주세요." onChange={ (e)=>setPrice(e.target.value) }></input>
                </div>
            </div>
            </div>
    )
}

function Box(props) {
    return (
        <div className="alert alert-warning">
            <h5>Pitch Clock!</h5>
            <p>2초 이내 투구 시 창억떡 할인</p>
            <p>{ props.count }</p>
            <button onClick={()=>{ props.setCount(props.count + 1) }}>공 던지기</button>
        </div>
    )
}

export default Detail;