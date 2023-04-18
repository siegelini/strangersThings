import { useState, useEffect } from "react";
import { fetchAllPost } from "../api";

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const postList = await fetchAllPost();
      setPosts(postList.data.posts);
    }
    getPosts();
  }, []);

  return (
    <div className="postsCards">
      {posts.map((posts) => {
        return (
          <div style={{margin: '10px', boxShadow: '0 4px 10px black' }} key={posts.author.username}>
            <h1 style={{color: "white", background: "rgb(170, 69, 69)", margin: "0", padding:" 10px" }}>Username: {posts.author.username}</h1>
            <h2>Title: {posts.title}</h2>
            <p> {posts.description}</p>
            <h2>Price: {posts.price}</h2>
          </div>
        )
      })}
    </div>
  )
}