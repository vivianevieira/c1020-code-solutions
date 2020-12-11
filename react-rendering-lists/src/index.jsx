import React from 'react';
import ReactDOM from 'react-dom';

class PokeList extends React.Component {
  render() {
    const listItems = pokedex.map(card =>
      <li key={card.number}>
        {card.name}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
}

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

ReactDOM.render(
  <PokeList />,
  document.getElementById('root')
);
