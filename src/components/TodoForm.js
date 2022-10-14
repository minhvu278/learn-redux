import React, {useState} from 'react';
import {uuid} from 'uuidv4';
import {v4} from 'uuid';
import {connect} from "react-redux";
import {addTodo} from "../store/actions/todoAction";

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState('')

    const onTitleChange = event => {
        setTitle(event.target.value)
    }

    const onFormSubmit = event => {
        event.preventDefault()

        if (title !== '') {
            const newTodo = {
                id: v4,
                title,
                complete: false
            }
            addTodo(newTodo)
            setTitle('')
        }
    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input type="text"
                       name="title"
                       onChange={onTitleChange}
                       value={title}
                />
                <input type="submit" value='Add'/>
            </form>
        </div>
    );
};

const mapStateToProps = state => ({})

export default connect(mapStateToProps, {addTodo}) (TodoForm)