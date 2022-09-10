import React, { useRef, useState } from "react";
import './styles/App.css';

import PostList from "./components/PostList";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import PostsNotFound from "./components/UI/title/PostsNotFound";
import MySelect from "./components/UI/select/MySelect";

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript - 1', body: 'JavaScript is programming language'},
    {id: 2, title: 'JavaScript - 2', body: 'JavaScript is programming language'},
    {id: 3, title: 'JavaScript - 3', body: 'JavaScript is programming language'}
  ])

  const [selectedSort, setSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter((item) => item.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  
  return (  

    <div className="App">
      <PostForm create={createPost}/>
        <hr style={{margin: "10px 0"}}/>
        <MySelect 
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="search"
            options={[
              {name: 'Name', value: "title"},
              {name: 'Description', value: "body"}
            ]}

        />
      {
        (!posts.length)?
        <PostsNotFound>Post Not Found</PostsNotFound>:
        <PostList remove={removePost} posts={posts}/>
        }
    </div>
    
  );
}

export default App;
