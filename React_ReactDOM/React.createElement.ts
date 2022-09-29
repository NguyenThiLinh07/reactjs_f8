import React from 'react';
import ReactDOM from 'react-dom/client';
/*
    1. React.createElement() -> React a element
    2. So sánh với document.createElement() -> DOM element
    3. Thay đổi: id, className, style, ...
    4. Thêm: text, HTML
    5. Tạo 
        <h1 title="Hello" class="heading">Hello guys</h1>
    6. Tạo
        <ul>
            <li>Typescript</li>
            <li>ReactJS</li>
        </ul>
    7. Tạo
        <div class="post-item">
            <h2 title="Học React tại F8">Học ReactJS</h2>
            <p>Học ReactJS từ cơ bản tới nâng cao</p>
        </div>
*/

// DOM
const h1DOM = document.createElement('h1');
h1DOM.title = 'Hello'
h1DOM.className = 'heading'
h1DOM.innerText = 'Hello guys!'
document.body.appendChild(h1DOM)
console.log(2)                                                      ;

// React
// React.createElement(type, props, children, n);
// const root = ReactDOM.createRoot(
//     document.querySelector("#root")
// )
let root = ReactDOM.createRoot(document.getElementById("root"));
let h1React =  React.createElement('h1', {title: 'Hello', className: 'heading'}, 'Hello guys!')
// root.render(h1React)
root.render(h1React);

let ulReact = React.createElement(
    'ul', 
    null, 
    React.createElement('li', null, 'Typescript'),
    React.createElement('li', null, 'ReactJS')
    )
root.render(ulReact);

/**
 * <div class="post-item">
            <h2 title="Học React tại F8">Học ReactJS</h2>
            <p>Học ReactJS từ cơ bản tới nâng cao</p>
        </div>
 */

let divReact = React.createElement(
    'div',
    {className: 'post-item'},
    React.createElement(
        'h2',
        {title: 'Học React taij F8'},
        'Học ReactJS'
    ),
    React.createElement(
        'p',
        null,
        'Học ReactJS từ cơ bản đến nâng cao'
    )
)

root.render(divReact);