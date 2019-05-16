import React from 'react';
import './Pokemon.css';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classFavorite: '',
            habilitiesFav: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => {
            let newClass;
            let newHabilitiesFav;

            prevState.classFavorite === '' ? (newClass = 'favorite') : (newClass = '');
            prevState.habilitiesFav === '' ? (newHabilitiesFav = 'fav') : (newHabilitiesFav = '');
            return {
                classFavorite: newClass,
                habilitiesFav: newHabilitiesFav
            };
        });
    }

    render() {
        const { data } = this.props;
        const { classFavorite, habilitiesFav } = this.state;
        return (
            <div className={`card ${classFavorite}`} onClick={this.handleClick}>
                <img src={data.url} alt="" />
                <h2>{data.name}</h2>
                <ol className="card__habilities">
                    {data.types.map((type, index) => {
                        return (
                            <li
                                className={`habilities ${habilitiesFav}`}
                                key={index}
                            >
                                {type}
                            </li>
                        );
                    })}
                </ol>
            </div>
        );
    }
}

Pokemon.propTypes = {
    data: PropTypes.object
};

export default Pokemon;
