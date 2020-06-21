export const ADD_TODO = "ADD_TODO";


export const add_todo = newTodo => {
    console.log(" Adding a Todo item! ")
    return { type: ADD_TODO, payload: newTodo}
}
