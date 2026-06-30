import { useParams } from "react-router-dom";

function Detail(props) {

    let {id} = useParams();
    // id가 일치하는 항목을 find()로 찾음
    let dog = props.dogs.find(dog => dog.id == id)

    return (
            <div className="container">
            <div className="row">
                <div className="col-md-6">
                <img src={ dog.img } className='cute-img' />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5"> { dog.name } </h4>
                <p> { dog.age }세 </p>
                <p> 전담 매니저 <strong>{ dog.manager }</strong> </p>
                </div>
            </div>
            </div>
    )
}

export default Detail;