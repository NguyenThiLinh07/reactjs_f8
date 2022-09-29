function Header() {
    return(
        <div className="header">Header nè</div>
    )
}

class Content extends React.Component {
    render() {
        return(
            <div className="content">Content nừ</div>
        )
    }
}

function PostItem() {
    return(
        <div className="post-item">
            <img src="https://didongviet.vn/dchannel/wp-content/uploads/2022/01/cute-didongviet.jpg" alt="hehe"/>
            <h2 className="post-title">Hello guys!</h2>
            <p className="post-desc">Bạn có ngôn ngữ C#</p>
            <p className="post-published"> Một ngày trước - 1 phút đọc</p>
        </div>
    )
}

const app = (
    <div className="wrappper">
        <Header/>
        <Content/>
        <div className="footer">Footer</div>
    </div>
)

function App () {
    return (
        <div id="wrapper">
            <PostItem/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(app);
root.render(<App/>);