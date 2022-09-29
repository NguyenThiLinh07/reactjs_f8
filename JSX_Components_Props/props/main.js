const photos = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "albumId": 1,
      "id": 7,
      "title": "officia delectus consequatur vero aut veniam explicabo molestias",
      "url": "https://via.placeholder.com/600/b0f7cc",
      "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "albumId": 1,
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis",
      "url": "https://via.placeholder.com/600/54176f",
      "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    }
]

const PhotoItem = ({photo}) =>{
    return(
        <div className="photo-item">
            <h1 className="id">STT: {photo.id}</h1>
            <img src={photo.thumbnailUrl}/>
            <h2 className="photo-title" onClick={()=>alert(photo.title)}>{photo.title}</h2>
        </div>
    )
}

function PostItem(props) {
    return (
        <div className="post-item">
            <img src={props.image}/>
            <h2 className="post-title">{props.title}</h2>
            <p className="post-desc">{props.description}</p>
            <p className="post-published">{props.postPublished}</p>
        </div>
    )
}

function App() {
    return (
        <div id="wrapper">
            <PostItem
                image = "https://didongviet.vn/dchannel/wp-content/uploads/2022/01/cute-didongviet.jpg"
                title = "Hello guys!"
                description = "Bạn có ngôn ngữ C#"
                postPublished = "Một ngày trước - 1 phút đọc"
            />
            <PostItem
                image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjDbJ1GQyHjGe3iZKeXSS4yS22z1EQvmut3OrvJ83dEw&s"
                title = "XIN CHÀO BẠN NHA!"
                description = "Bạn biết ngôn ngữ gì rồi"
                postPublished = "Một ngày trước - 5 phút đọc"
            />
            <PostItem
                image = "https://kenh14cdn.com/thumb_w/660/2018/5/14/screen-shot-2018-05-14-at-95102-pm-15263096678601566792350.png"
                title = "XIN CHÀO BẠN NHA!"
                description = "Bạn biết ngôn ngữ gì rồi"
                postPublished = "Một ngày trước - 5 phút đọc"
            />
        </div>
    )
}

function App1() {
    const handleClick = () => {

    }
    return (
        <div id="photo-list">
            {photos.map((photo) => <PhotoItem 
                key = {photo.id}
                photo = {photo}
            />)}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
root.render(<App1/>);