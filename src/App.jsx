import { Booklist } from "./components/Booklist";
// 🔽 Link を追加
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const App = () => {
  const languages = ["React", "Vue", "Angular"];

  return (
    // 🔽 編集
    <BrowserRouter>
      <h1>react app</h1>
      <ul>
        <li>
          <Link to="/react">React</Link>
        </li>
        <li>
          <Link to="/vue">Vue</Link>
        </li>
        <li>
          <Link to="/angular">Angular</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route path="/react" element={<Booklist language={languages[0]} />} />
        <Route path="/vue" element={<Booklist language={languages[1]} />} />
        <Route path="/angular" element={<Booklist language={languages[2]} />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;