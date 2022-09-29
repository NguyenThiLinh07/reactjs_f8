// jsx - là cứ pháp mở rộng cho javascript xml giúp viết html trong react
const courses = [
    {
        name: 'HTML, CSS'
    },
    {
        name: 'responsive'
    },
    {
        name: 'reactjs'
    },
    {
        name: 'reactjs'
    }
]

const ul = <ul>
    <li>Javscript</li>
    <li>ReactJS</li>
</ul>

const ul1 = <ul>
        {courses.map((course, index) => <li key={index}>{course.name}</li>)}
    </ul>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(ul);
root.render(ul1);