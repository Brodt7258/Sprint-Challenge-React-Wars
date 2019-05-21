import React from 'react';

import CharacterItem from '../CharacterItem/CharacterItem';

import './ContentList.css';

const ClassList = ({ characters }) => {
  return (
    <ul className="content-list">
      {characters.map(e => (
        <CharacterItem character={e} key={e.name} />
      ))}
    </ul>
  );
};

export default ClassList;