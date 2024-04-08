import Student from "./Student";
import styles from "./MyStyles.module.css"

const MyStyleComponent = () => {
  return (
    <div className={styles.students}>
      <Student firstName="Henry" age="35" country="UK" />
      <Student firstName="Jimmy" age="25" country="USA" />
      <Student firstName="Sammy" age="30" country="India" />
      <div className={styles.student}>Tests</div>
    </div>
  );
};

export default MyStyleComponent;
