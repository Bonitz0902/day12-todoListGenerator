import { useRef } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "./todoListSlice";
import { v4 as uuidv4 } from 'uuid';

//TODO: remove unused props
const TodoGenerator = (props) =>{
    const inputTodoRef = useRef();
    const dispatch = useDispatch();

    const onSubmitClick = () => {
        const newTodo = inputTodoRef.current.value;
        //TODO: better to check if input only has whitespaces
        if(newTodo === '') return;
        dispatch(addTodo({id: uuidv4(), text: newTodo, done: false}));
        inputTodoRef.current.value = null;
    }

    //TODO: use more meaningful variable name instead of 'e'
    const onInputKeyDown = (e) => {
        if (e.key === 'Enter') {
          onSubmitClick();
        }
      };

    return(
        <div className="TodoGenerator">
            <input ref={inputTodoRef} type="text" onKeyDown={onInputKeyDown}  />
            <button onClick={onSubmitClick}>add</button>
        </div>
    );
}

export default TodoGenerator;