import React from 'react';

const CharacterItem = ({ character }) => {
  return (
    <li>{character.name}</li>
  );
};

export default CharacterItem;