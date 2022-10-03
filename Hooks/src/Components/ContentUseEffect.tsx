import { hasFormSubmit } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";

const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];

const ContentUseEffect = () => {
  interface Post {
    obj: {
      [name: string]: string | number;
    }[];
  }

  const [title, setTitle] = useState<string>("");
  const [posts, setPosts] = useState<Post["obj"]>([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
    }
  // useEffect(callback)
  //   useEffect(() => {
  //     document.title = title;
  //   })

  // useEffect(callback, [])
  //   useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/${type}`)
  //       .then((res) => res.json())
  //       .then((posts) => setPosts(posts));
  //   }, []);

  // useEffect(callback, [deps])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
        setShowGoToTop(window.scrollY >= 200);
    }

    window.addEventListener('scroll', handleScroll);
  }, [])

  return (
    <div>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "white",
                  border: "none",
                  cursor: "pointer",
                  backgroundColor: "red",
                  padding: "5px",
                  margin: "5px",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
      {
        showGoToTop && (
            <button
                style={{
                    position: 'fixed',
                    right: '20px',
                    bottom: '20px'
                }}
                onClick={handleScrollToTop}
            >
                Go to top
            </button>
        )
      }
    </div>
  );
};

export default ContentUseEffect;
