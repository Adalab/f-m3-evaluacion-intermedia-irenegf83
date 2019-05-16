import React from 'react';
import Pokemon from './Pokemon';
import './PokeList.css';
import PropTypes from 'prop-types';

class PokeList extends React.Component {
    render() {
        const { pokemonArr } = this.props;
        return (
            <ul className="container">
                {pokemonArr.map(data => (
                    <li key={data.id}>
                        <Pokemon data={data} />
                    </li>
                ))}
            </ul>
        );
    }
}

PokeList.propTypes = {
    pokemonArr: PropTypes.arrayOf(PropTypes.object)
};

export default PokeList;
