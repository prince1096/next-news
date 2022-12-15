import styles from "../styles/EOM.module.css";
import { Toolbar } from "../components/toolbar";

export const EOM = ({ employee }: any) => {
  console.log(employee);
  return (
    <div className="page-container">
      <Toolbar />

      <div className={styles.main}>
        <h1>Employee Of the Month</h1>

        <div className={styles.employeeOfTheMonth}>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          <img src={employee.image} alt="dev guy" />
          {/* <Image src={employee.image} alt="dev guy" /> */}

          <p>{employee.description}</p>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext: any) => {
  const apiResponse = await fetch(
    "https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth"
  );

  const employee = await apiResponse.json();

  return {
    props: {
      // employee: employee
      employee,
    },
  };
};

export default EOM;
