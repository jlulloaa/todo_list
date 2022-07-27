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
    <div className="app">
      <div className="todo-list">
        {/* In order to remove object from the list, we add an ID to each element,
            defined by its index, same as the key 
            Also, to remove an object, we create a function removeTodo which is triggered by 
            an onClick event on the element.
            After refactoring the code, the <div>...</div> element is now defined in the file todo.js,
            in here only we call that function with the parameters needed. Just for completeness, the following 
            is the original <div> content:
            <div className="todo" key={i} id={i} onClick={removeTodo} >
            {todo.text}</div>
            */}
          
          {todos.map((todo, i) =>
            <Todo index={i} key={i} todo={todo} remove={removeTodo}/>
          )}
          {/* Here we add the call to the functions in form.js, by calling the main function in there, 
          with the additional attribute "addTodo" to manage a new element added: */}
          <TodoForm addTodo={addTodo}/>
          {/* REMEMBER to add the new file form.js in the main html file!! */}
      </div>
    </div>
  );
}

// This is what transfers the components defined in the js(x) codes into the (virtual) DOM. 
// The syntax is: RenderDOM.render(<WebComponentToAdd/>, <WhereToPlaceComponent>)
//  <WebComponentToAdd/>: Single overall component, defined by the return argument of the main 'function', 
// In this case is 'APP' (e.g. return of the function App())
// Strictly speaking, <WebComponentToAdd> can be any SINGLE html tag, for example: <h1>Title</h1>, <p>Paragraph</p>, etc.
// However, something like <h1>Title</h1><p>Paragraph</p> is not allowed, as they are two elements together. 
// In this case, both must be enclosed in e.g. a div element: <div><h1>Title</h1><p>Paragraph</p> </div>
// To understand how ReactDOM works, try the following examples:
// ReactDOM.render(<h1>Title</h1>, document.getElementById('root'))
// ReactDOM.render(<h1>Title</h1><p>Paragraph</p>, document.getElementById('root'))
// ReactDOM.render(<div><h1>Title</h1><p>Paragraph</p></div>, document.getElementById('root'))
// ReactDOM.render(<div className="app"><App/></div>, document.getElementById('root'));

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// One of the main advantages of JSX is how it simplifies including html components directly from javascript. 
// For example, instead of doing this:
// var mainDoc = document.getElementById('root');
// var newParagraph = document.createElement('p');
// const msg = "Hello, this is a pragraph";
// newParagraph.innerHTML = msg;
// mainDoc.appendChild(newParagraph);

// in JSX we can simply do:
// var mainDoc = document.getElementById('root');
// const msg = "Hello, this is a pragraph";
// ReactDOM.render(<p>{msg}</p>, mainDoc)