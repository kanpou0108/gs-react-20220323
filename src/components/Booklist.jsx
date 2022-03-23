export const Booklist = ({ language, getData }) => {
  // 🔽 関数を実行（`?` を使用することで，`getData` が存在する場合のみ関数を実行可能）
  const result = getData?.(language);

  return (
    <>
      <p>this is {result} list component</p>
    </>
  );
};