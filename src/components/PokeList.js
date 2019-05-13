import React from 'react';
import Pokemon from './Pokemon'
import PropTypes from 'prop-types';

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

PokeList.propTypes = {
    pokemonArr: PropTypes.arrayOf(PropTypes.object),
}

export default PokeList;