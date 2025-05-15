import { useState } from 'react';
import { fetchgiphy } from '../helpers/fetchgiphy';
import '../style.css';
export const Input = ({ handleSearch }) => {

  const [input, setInput] = useState('');

  const handleInputChange = ({ target }) => {
    setInput(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === '') return;
    handleSearch(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input"
        placeholder="Buscar gifs"
        value={input}
        onChange={handleInputChange}
      />
    </form>
  )
}
