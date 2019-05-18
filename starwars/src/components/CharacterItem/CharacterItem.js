import React from 'react';

import './CharacterItem.css';

const CharacterItem = ({ character }) => {
  return (
    <li className="char-item">
      <h2>{character.name}</h2>
      <ul className="char-details">
        <li><strong>birth year:</strong> {character.birth_year}</li>
        <li><strong>gender:</strong> {character.gender}</li>
        <li><strong>height:</strong> {character.height} cm</li>
        <li><strong>mass:</strong> {character.mass} kg</li>
        <li><strong>eye color:</strong> {character.eye_color}</li>
        <li><strong>hair color:</strong> {character.hair_color}</li>
        <li><strong>skin color:</strong> {character.skin_color}</li>
      </ul>
    </li>
  );
};

export default CharacterItem;