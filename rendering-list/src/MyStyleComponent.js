import {useState} from "react";
import Student from "./Student";
import styles from "./Students.module.css";




const MyStyleComponent = () => {
  const [students,setStudents] = useState([
    { id: 1, firstName: "Henry", age: "35", country: "UK" },
    { id: 2, firstName: "Jimmy", age: "25", country: "USA" },
    { id: 3, firstName: "Sammy", age: "29", country: "India" },
  ]);

  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");

  const onAdd = () => {
    students.push({
      id: Math.max(...students.map((student) => student.id)) + 1,
      firstName,
      age,
      country,
    });
    setStudents([...students]);
    reset();
  };

  const onDelete = (id) => {
    let studentIndex = students.findIndex((student) => student.id === id);
    if (studentIndex > -1) {
      students.splice(studentIndex, 1);
    }
    setStudents([...students]);
  };

  const reset = () => {
    setFirstName("");
    setAge("");
    setCountry("");
  };

  return (
    <div className={styles.divTable}>
      <div className={styles.divTableHeading}>
        <div className={styles.divTableRow}>
          <div className={styles.divTableHead}>
            <input type={"text"} id="txtFirstName" required value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Firstname"/>
          </div>
          <div className={styles.divTableHead}>
          <input type={"number"} id="txtAge" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age"/>
          </div>
          <div className={styles.divTableHead}>
          <input type={"text"} id="txtCountry" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="Country"/>
          </div>
          <div className={styles.divTableHead}>
            <button className={styles.addBtn} onClick={onAdd} id="btnAdd">Add</button>
          </div>
        </div>
      </div>
      <div className={styles.divTableHeading}>
        <div className={styles.divTableRow}>
          <div className={styles.divTableHead}>Firstname</div>
          <div className={styles.divTableHead}>Age</div>
          <div className={styles.divTableHead}>Country</div>
          <div className={styles.divTableHead}>Action</div>
        </div>
      </div>
      <div className={styles.divTableBody}>
          {students.map((stud) => (
            <Student
              key={stud.id}
              id={stud.id}
              firstName={stud.firstName}
              age={stud.age}
              country={stud.country}
              deleteStudent={onDelete}
            />
          ))}
      </div>
    </div>
  );
};

export default MyStyleComponent;
