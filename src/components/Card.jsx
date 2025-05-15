import '../style.css';
import { fetchgiphy } from '../helpers/fetchgiphy';
import { useState, useEffect } from 'react';

export const Card = ({ gifname }) => {

  const [gifList, setgifList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await fetchgiphy(gifname);
      setgifList(data);
    }
    getData();
  }, [gifname])

  return (
    <>
      {
        gifList.length > 0 && (
          gifList.map(gif => {
            return (
              <div className='card' key={gif.id}>
                <img src={gif.images.original.url} alt="gif" />
                <h2>{gif.title}</h2>
              </div>
            )
          })
        )
      }
    </>
  )
}
