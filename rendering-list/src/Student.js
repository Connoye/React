import styles from "./Students.module.css";

const Student = (props) => {
  console.log(props.id);
  return (
    <div className={styles.divTableRow} key={props.id}>
      <div className={styles.divTableCell}>{props.firstName}</div>
      <div className={styles.divTableCell}>{props.age}</div>
      <div className={styles.divTableCell}>{props.country}</div>
      <div className={styles.divTableCell}>
        <button className={styles.deleteBtn} id="btnDelete" onClick={()=>props.deleteStudent(props.id)}>Delete</button>
      </div>
    </div>
  );
};

export default Student;
