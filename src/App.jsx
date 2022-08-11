import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import './global.css';
import styles from './App.module.css';

function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Lorem"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eveniet dolores neque ut aliquid asperiores ad id culpa, voluptatem aspernatur ea eos sapiente, debitis tempora consequatur quo nostrum vel? Ratione."
          />
          <Post
            author="Fernandes"
            content="new post"
          />
        </main>
      </div>
    </>
  )
};

export default App;
