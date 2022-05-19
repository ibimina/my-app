import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import mina from "./mina.jpg";

const author = { firstName: "Ibimina", lastName: "Hart" };
const techs = ["HTML", "CSS", "Javascript", "React", "Git"];
const formattedTech = techs.map((tech) => <li key={tech}>{tech}</li>);
const joined = "May 17, 2022";

const Header = () => (
  <header>
    <img src={mina} alt="avatar" className="avatar" />
    <h1>
      {" "}
      {author.firstName} {author.lastName}
    </h1>
    <p className="title">Frontend developer, Nigeria</p>
  </header>
);
const Main = () => (
  <main>
    <h3>SKILLS</h3>
    <ul>{formattedTech}</ul>
  </main>
);
const Footer = () => (
  <footer>
    <p> joined on {joined}</p>
  </footer>
);

const App = () => (
  <div className="app">
    <Header />
    <Main />
    <Footer />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


