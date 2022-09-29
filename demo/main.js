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
var h1DOM = document.createElement('h1');
h1DOM.title = 'Hello';
h1DOM.className = 'heading';
h1DOM.innerText = 'Hello guys!';
document.body.appendChild(h1DOM);
// ReactDOM
var root = document.querySelector('#root');
var h1React = React.createElement('h1', { title: 'Hello', className: 'heading' }, 'Hello guys!');
// root.render(h1React)
ReactDOM.render(h1React, root);
