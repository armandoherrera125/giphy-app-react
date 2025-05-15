import './style.css';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { useState } from 'react';

export const GiphyApp = () => {

  const [search, setSearch] = useState('Hulk');
  const handleSearch = ( newSearch ) => {
    setSearch(newSearch);
  }

  return (
    <div className="container">
      <h1>GifExpertApp</h1>
      <Input handleSearch={handleSearch} />
      <div className="card-grid">
        <Card gifname={search} />
      </div>
    </div>
  )
}
