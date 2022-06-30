function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ])

  // addTodo allows to pass the new element added to the list (through the parameter text)
  // into the form managed in the file form.js
  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted:false}]; /* by adding the new elements, we're actually creating a new list made up of the old elements and appending the new one */
    setTodos(newTodos); /* here we update the state with the new list */
  }
  /* removeTodo removes an element from the list, by clicking on it 
  When refactoring this app, we define todo.js and form.js to tidy up and separate components physically in different files.
  This not only simplifies reading of the code, but also the functions itself. In particular, the 
  removeTodo no longer deals with an "event" (e), but with an index directly:
  */
  const removeTodo = index => { /* e => { */
    // const index = Number(e.target.id); /* We take the index from the id of each element */
    let temp = [...todos]; /* get a handle of the current ToDo elements */
    temp.splice(index, 1); /* remove the element */
    setTodos(temp); /* update the state to the new list, lacking the removed element */

  }
  return(
    /* In order to remove object from the list, we add an ID to each element,
        defined by its index, same as the key 
        Also, to remove an object, we create a function removeTodo which is triggered by 
        an onClick event on the element.
        After refactoring the code, the <div>...</div> element is now defined in the file todo.js,
        in here only we call that function with the parameters needed. Just for completeness, the following 
        is the original <div> content:
        <div className="todo" key={i} id={i} onClick={removeTodo} >
         {todo.text}</div>
        */
	  <div className="app">
		  <div className="todo-list">
		      {todos.map((todo, i) =>
		        <Todo index={i} key={i} todo={todo} remove={removeTodo}/>
		      )}
{/* Here we add the call to the functions in form.js, by calling the main function in there, 
		      with the additional attribute "addTodo" to manage a new element added: */}
		      <TodoForm addTodo={addTodo}/>
		  </div>
		</div>
      /* REMEMBER to add the new file form.js in the main html file!! */
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
