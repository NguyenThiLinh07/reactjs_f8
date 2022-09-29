import React from "react";
import Header from "./layout/Header";
class TodoApp extends React.Component {
    state = {
        todos: [
            {
                id: 1,
                title: 'Nấu cơm',
                completed: true
            },
            {
                id: 2,
                title: 'Rửa bát',
                completed: false
            },
            {
                id: 3,
                title: 'Lau nhà',
                completed: false
            },
            {
                id: 4,
                title: 'Giặt đồ',
                completed: false
            },
            {
                id: 5,
                title: 'Học bài',
                completed: false
            },

        ]
    }

    render() {
        return (
            <div>
                <Header/>
                <ul>
                    {this.state.todos.map(todo => 
                        <li key={todo.id}>{todo.title}</li>    
                    )}
                </ul>
            </div>
        )
    }
}

export default TodoApp;