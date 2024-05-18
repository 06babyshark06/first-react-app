import { useState } from "react";
import ButtonBase from "../common/ButtonBase";
const fakePosts = [
  { id: 1, title: "Post 1", content: "This is the body of post 1" , pastPost:{
    id: 11, title: "1 year ago", content: "This is the body of post 1"
  }},
  { id: 2, title: "Post 2", content: "This is the body of post 2" },
  { id: 3, title: "Post 3", content: "This is the body of post 3" }
];

const PostListView = () => {
  const [posts, setPosts] = useState(fakePosts);
  const addNewPost = () => {
    const updatedPosts = [
      ...posts,
      {
        id: posts.length + 1,
        title: `Post ${posts.length + 1}`,
        content: `This is the body of post ${posts.length + 1}`,
      },
    ];
    setPosts(updatedPosts);
  };
  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };
  const updatePastPost = (id, newTitle) => {
    const updatedPosts = posts.map((post)=>{
        if (post.id === id) {
            return {...post, pastPost: {...post.pastPost, title: newTitle}};
        }
        return post;
    })
    setPosts(updatedPosts);
  }
  return (
    <>
      <ButtonBase text="Add new post" onClick={addNewPost} />
      <ul>
        {posts.map((post,index) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <ButtonBase text="Delete" onClick={() => deletePost(post.id)} />
            {/* <h4>{post.pastPost.title}</h4>
            <p>{post.pastPost.content}</p> */}
            <ButtonBase text="Update title" onClick={()=> {updatePastPost(post.id, "title")}}/>
          </li>
        ))}
      </ul>
    </>
  );
};
export default PostListView;
