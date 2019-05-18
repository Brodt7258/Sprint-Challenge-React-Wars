import React from 'react';

import CharacterItem from '../CharacterItem/CharacterItem';

const ClassList = ({ characters }) => {
  return (
    <ul>
      {characters.map(e => (
        <CharacterItem character={e} key={e.name} />
      ))}
    </ul>
  );
};

export default ClassList;