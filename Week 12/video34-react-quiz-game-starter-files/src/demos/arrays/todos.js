const tasks = ["Make some tea", "Meditate", "Plan out the day", "Go for a run"];
// => <ul> with <li> elements

function Todos() {
  // Manually create a list of JSX:
  // const taskListItems = [
  //   <li key={0}>{tasks[0]}</li>,
  //   <li key={1}>{tasks[1]}</li>,
  //   <li key={2}>{tasks[2]}</li>,
  //   <li key={3}>{tasks[3]}</li>,
  // ];

  // List creation via for loop:
  // const taskListItems = [];
  // for (let i = 0; i < tasks.length; i++) {
  //   taskListItems.push(<li key={i}>{tasks[i]}</li>);
  // }

  // Arrays have functional methods: forEach, map, filter, find, findIndex, etc.
  // const taskListItems = [];
  // tasks.forEach((item, i) => {
  //   taskListItems.push(<li key={i}>{item}</li>);
  // });

  // Arrow function with explicit return:
  // const taskListItems = tasks.map((item, i) => {
  //   return <li key={i}>{item}</li>;
  // });

  // Arrow function with implicit return:
  const taskListItems = tasks.map((item, i) => <li key={i}>{item}</li>);

  return (
    <ul>
      {tasks.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default Todos;
