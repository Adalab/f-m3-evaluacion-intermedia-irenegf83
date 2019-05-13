import React from 'react';
import Pokemon from './Pokemon'

class PokeList extends React.Component {
    render() {
        const { pokemonArr } = this.props;
        return (
            <ul className="container">
                {pokemonArr.map(data => <Pokemon data={data} />)}
            </ul>
        );
    }
}

export default PokeList;