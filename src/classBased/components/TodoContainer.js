import React from "react"
import TodosList from "./TodoList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import {v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
    state = {
     todos: [],   
    }
    handleChange = id => {
        this.setState(prevState => {
            return{
            todos:prevState.todos.map(todo => {
                if(todo.id===id){
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                    
                }
                return todo
            }),
        }
    })
    };

    delTodo = id => {
        this.setState({
            todos:[
                ...this.state.todos.filter(todo => {
                    return todo.id!==id;
                })
            ]
        });
        
    };

    addTodoItem = title => {
        const newTodo = {
            id: 3,
            title: title,
            completed: false

        };
        this.setState({
            todos: [...this.state.todos,newTodo]
        });
    };

    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id ===id){
                    todo.title = updatedTitle
                }
                return todo
            }),
        })
    }
    componentDidMount(){
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if(loadedTodos) {
            this.setState({
                todos: loadedTodos
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.todos !== this.state.todos){
            const temp = JSON.stringify(this.state.todos)
            localStorage.setItem("todos",temp)

        }
    }
    render() {

        return(
            <div className="container">
                <div className="inner">
                <Header />
                <InputTodo addTodoProps = {this.addTodoItem}/> 
                <TodosList 
                todos = {this.state.todos}
                handleChangeProps = {this.handleChange}
                deleteTodoProps = {this.delTodo} 
                setUpdate = {this.setUpdate}
                />
            </div>
            </div>
        );
    }
}
export default TodoContainer
