import { useState, useEffect } from 'react';

function useAlbum(albumId) {
  const [album, setAlbum] = useState(null);
  const endpoint = `${process.env.REACT_APP_API_URL}/album/${albumId}`;

  useEffect(() => {
    const request = fetch(endpoint);

    request
      .then((apiResponse) => {
        if (!apiResponse.ok) {
          console.error(apiResponse.statusText);
          return;
        }

        return apiResponse.json();
      })
      .then((apiResult) => {
        setAlbum(apiResult);
      });
  }, [endpoint]);

  return album;

}

export default useAlbum;