
const Student = (props) =>{
    console.log(props);
    return <div>
        <h1>Name: {props.firstName}</h1>
        <h3>Age: {props.age}</h3>
        <h3>Country: {props.country}</h3>
    </div>
}

export default Student;