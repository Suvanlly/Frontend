// Function components use React hooks to handle state
// It uses the useState hook to set the state of a variable inside the component
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

// Convert it into a class component

class ClassRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { studentCount: 0 };
    this.addStudent = this.addStudent.bind(this);
  }
  addStudent() {
    this.setState((prevState) => {
      return {
        studentCount: prevState.studentCount++,
      };
    });
  }
  render() {
    return (
      <div>
        <P>Number of Students: {this.state.studentCount}</P>
        <button onClick={this.addStudent}>Add Student</button>
      </div>
    );
  }
}

export default ClassRoom;
