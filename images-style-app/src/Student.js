import styles from "./Students.module.css"

const Student = (props) =>{
    return <div className={styles.students}>
        <h3 style={{color:'red'}}>{props.firstName}</h3>
        <h3>Age: {props.age}</h3>
        <h3>Country: {props.country}</h3>
    </div>
}

export default Student;