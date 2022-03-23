import { useState, useEffect } from 'react';

export const Booklist = ({ language, getData }) => {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    const result = getData?.(language).then((response) =>
      setBookData(response)
    );
  }, [language, getData]);

  return (
    <ul>
      {bookData === null ? (
        <p>now loading...</p>
      ) : (
        bookData.data.items.map((x, index) => (
          <li key={index}>
            <p>
              <img
                src={x.volumeInfo.imageLinks.thumbnail}
                alt={x.volumeInfo.title}
              />
            </p>
            <p>
              <a
                href={x.volumeInfo.previewLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                {x.volumeInfo.title}
              </a>
            </p>
            <p>{x.volumeInfo.authors}</p>
            <p>{x.volumeInfo.publisher}</p>
            <p>{x.volumeInfo.description}</p>
            {/* <p>{x.selfLink}</p> */}
            <hr />
          </li>
        ))
      )}
    </ul>
  );
};
