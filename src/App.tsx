import Header from "./components/Header";

// CSS
import "./global.css";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";

const posts = [
  {
    id: 1,
    author: {
      user: "gabrielNicodemos",
      name: "Gabriel Nicodemos",
      role: "Desenvolvedor Front-End",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa!" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-11-13 14:15:00"),
  },
  {
    id: 2,
    author: {
      user: "maykbrito",
      name: "Mayk Brito",
      role: "Desenvolvedor e Professor",
    },
    content: [
      { type: "paragraph", content: "Fala Pessoal" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz",
      },
      {
        type: "paragraph",
        content:
          "no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
    publishedAt: new Date("2022-11-13 16:42:00"),
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts &&
            posts.map((post) => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
        </main>
      </div>
    </div>
  );
}

export default App;
