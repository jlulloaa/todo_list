// This file hosts all functions relative to the form part of the ToDo list
// The parts specific to the form are:
// - value: Takes input from the user ([value, setValue])
// - form tag (<form>...</form>)
// together with the form tag, we need to be able to handle the onClick events from this file

function TodoForm({addTodo}) {
    // Here we define the variable and function to add new items to the list:
    const [value, setValue] = React.useState('');

    // handleSubmit actually places the new text added in the text box as a new element in the list:
    const handleSubmit = e => {
        e.preventDefault(); /* so it doesn't update the page immediately */
        if (!value) return; /* if nothing written, nothing added... */
        /* 
        By moving this function to the file form.js, we cannot handle directly the "todos" variable,
        so, we need to create an auxiliar function (in index.js) through which we pass that. 
        That function is addTodo
        */
        // const newTodos = [...todos, {text:value, isCompleted:false}]; /* by adding the new elements, we're actually creating a new list made up of the old elements and appending the new one */
        // setTodos(newTodos); /* here we update the state with the new list */
        addTodo(value);
        setValue(''); /* now we clear the form and set it to be empty again */
    }

      /* Add form element to add new elements to the list. 
       The onSubmit event in the form is responsible to add the 
       new element to the list (otherwise, it will only be in the 
       text box, but won't be added to the actual list */

    return  (
      <form onSubmit={handleSubmit}>
        <input 
        type="text"
        className="input"
        value={value}
        placeholder="Add new item to the list..."
        // This actually adds the elements written in the box. 
        // That new element can be accessed via e.target.value:
        onChange={e => setValue(e.target.value)}
        />
    </form>
    );
}