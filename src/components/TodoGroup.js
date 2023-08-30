import TodoItem from './TodoItem';

const TodoGroup = (props) => {
    return (
        <div className="TodoGroup">
            {props.todos.map((todo, index) => {
                //TODO: can remove index
                //TODO: can pass whole todo as props instead
                return <TodoItem key={todo.id} id={todo.id} item={todo.text} done={todo.done}/>
            })}
        </div>
    );
}

export default TodoGroup;