// Here we store the ToDo component
function Todo({todo, index, remove}) {

    /* In order to remove object from the list, we add an ID to each element,
      defined by its index, same as the key 
      Also, to remove an object, we create a function removeTodo which is triggered by 
      an onClick event on the element 
      However, from the original function (index.js), we cannot access some of the elements
      in there, so we pass them as a parameter into the Todo function
      Compared to the original definition:
      <div className="todo" key={i} id={i} onClick={removeTodo} >
     {todo.text}</div>
     we no longer need key and id, also removeTodo is now handle (defined below)
     the (-) is just a style added to indicate that clicking on the item will remove it
     */ 
    function handle() {
        remove(index);
    }
    return <div className="todo" onClick={handle} >
     {todo.text} (-)</div>

}