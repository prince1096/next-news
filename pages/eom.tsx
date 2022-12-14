export const EOM = ({ employee }: any) => {
  console.log(employee);
  return (
    <div className="page-container">
      <div>
        <h1>Employee Of the Month</h1>

        <div>
          <h3>{employee.name}</h3>
          <h6>{employee.position}</h6>
          <img src={employee.image} alt="dev guy" />
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
