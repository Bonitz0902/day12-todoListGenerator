import { useRef } from 'react';
import { useDispatch } from "react-redux";
import { addTodo } from "./todoListSlice";

const TodoGenerator = (props) =>{
    const inputTodoRef = useRef();
    const dispatch = useDispatch();

    const onSubmitClick = () => {
        const newTodo = inputTodoRef.current.value;
        if(newTodo === '') return;
        dispatch(addTodo(newTodo));
        inputTodoRef.current.value = null;
    }

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