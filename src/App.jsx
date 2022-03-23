import { Booklist } from "./components/Booklist";

const App = () => {
  const languages = ["React", "Vue", "Angular"];
  return (
    // 🔽 編集（コンポーネントに props を設定）
    <>
      <h1>react app</h1>
      <Booklist language={languages[0]} />
      <Booklist language={languages[1]} />
      <Booklist language={languages[2]} />
    </>
  );
};
export default App;