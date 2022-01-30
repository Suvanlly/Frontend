// Render the following component with props
<Student Info name="Vicky" rollNumber="23" />;

// Function component: any prop provided as an argument to a functional component can be directly used inside HTML elements
function StudentInfo(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.rollNumber}</h2>
    </div>
  );
}

// Class component: props need to use this keyword to handle
class StudentInfo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.rollNumber}</h2>
      </div>
    );
  }
}
