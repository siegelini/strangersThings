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
    <div className="posts-content">
      {posts.map((posts) => {
        return (
<<<<<<< HEAD
          <div className="post-card" key={posts._id}>
=======
          <div className="post-card" key={posts.author.username}>
>>>>>>> 952b54eddd78fe70a37663f6a7bd894f4f172959
            <h1 className="post-name">
              <span>Username: {posts.author.username}</span>
              <i
                style={{ padding: "5px", color: "gold" }}
                className="material-icons"
              >
                bookmark_add
              </i>
            </h1>
            <h2 className="post-title">Title: {posts.title}</h2>
            <img src="https://emojis.wiki/thumbs/emojis/panda.webp" />
            <p className="post-description"> {posts.description}</p>
            <h2 className="post-price">Price: {posts.price}</h2>
          </div>
        );
      })}
    </div>
  );
}
