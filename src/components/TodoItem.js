import { useDispatch } from "react-redux";
import { toggleDone, deleteTodo} from "./todoListSlice";

const TodoItem = (props) =>{
    const style = props.done ? {textDecoration: "line-through"}: {};
    const dispatch = useDispatch();
    const handleToggleClick = () =>{
        dispatch(toggleDone(props.id));

    }
    const handleDelete = (event) => {
        //TODO: better to check with user before delete
        dispatch(deleteTodo(props.id));
        event.stopPropagation();
    }
    
    return(
        <div  className="TodoItem" onClick={handleToggleClick}>
            <span style={style}>{props.item}</span> 
            <div onClick={handleDelete}>✖</div>
        </div>
    );
}

export default TodoItem;