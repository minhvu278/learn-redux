// export const markComplete = () => {
//     const markCompleteAction = dispatch => {
//         dispatch({
//             type: 'MARK_COMPLETE',
//             payload: 'My Payload'
//         })
//     }
//     return markCompleteAction
// }

import axios from "axios";

export const getTodos = () => async dispatch => {
    try {
        const respose = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=3')
        dispatch({
            type: 'GET_TODOS',
            payload: respose.data
        })
    } catch (error) {
        console.log(error)
    }
}



export const markComplete = id => dispatch => {
    dispatch({
        type: 'MARK_COMPLETE',
        payload: id
    })
}

export const addTodo = newTodo => async dispatch => {
    try {
        await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)
    } catch (error) {
        console.log(error)
    }
    dispatch({
        type: 'ADD_TODO',
        payload: newTodo
    })
}

export const deleteTodo = id => async dispatch => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        dispatch({
            type: 'DELETE_TODO',
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}
