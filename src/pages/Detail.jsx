import { useParams } from "react-router-dom";

function Detail(props) {

    let {id} = useParams();
    console.log(id);

    return (
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={ props.dogs[id].img } className='cute-img' />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5"> { props.dogs[id].name } </h4>
                <p> { props.dogs[id].age }세 </p>
                <p> 전담 매니저 <strong>{ props.dogs[id].manager }</strong> </p>
                </div>
            </div>
            </div>
    )
}

export default Detail;