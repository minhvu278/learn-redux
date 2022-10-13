const initialState = {
    todos: [
        {
            id: 1,
            title: 'Viec 1',
            complete: false
        },
        {
            id: 2,
            title: 'Viec 2',
            complete: false
        },
        {
            id: 3,
            title: 'Viec 3',
            complete: false
        },
    ]
}

const todoReducer = (state = initialState, action) => {
    return state
}

export default todoReducer