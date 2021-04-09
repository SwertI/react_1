import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

let posts = [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
]
let dialogs = [
    { id: 1, name: 'Alex' },
    { id: 2, name: 'Aleksaaaa' },
    { id: 3, name: 'Alexey' },
]
let messages = [
    { id: 1, message: 'HI' },
    { id: 2, message: 'Message 222' },
    { id: 3, message: 'Message 333' },
]
ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages} />
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
