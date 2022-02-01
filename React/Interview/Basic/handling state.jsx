// Function components use React hooks to handle state, It uses the useState hook to set the state of a variable inside the component
function ClassRoom(props) {
  let [studentCount, setStudentCount] = useState(0);
  const addStudent = () => {
    setStudentCount(++studentCount);
  };

  return (
    <div>
      <p>Number of Students: {studentCount}</p>
      <button onClick={addStudent}>Add Student</button>
    </div>
  );
}
