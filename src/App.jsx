import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';


import posts from './jsonExamples/posts.json'

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={new Date(post.publishedAt)}
                comments={post.comments}
              />
            )
          })}
        </main>
      </div>
    </>
  )
};

export default App;
