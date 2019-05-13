import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            classFavorite: '',
            habilitiesFav: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => {
            let newClass;
            let newHabilitiesFav;
            
            prevState.classFavorite === '' ? newClass = 'favorite' : newClass = '';
            prevState.habilitiesFav === '' ? newHabilitiesFav = 'fav' : newHabilitiesFav = '';
            // if(prevState.classFavorite === '') {
            //     newClass = 'favorite';
            // } else {
            //     newClass = '';
            // }
            return {
                classFavorite: newClass,
                habilitiesFav: newHabilitiesFav
            }
            
        });
    }
    render() {
        const { data } = this.props;
        const { classFavorite, habilitiesFav } = this.state;
        return (
            <li className={`card ${classFavorite}`} onClick={this.handleClick}>
                <img src={data.url} alt=""/>
                <h2>{data.name}</h2>
                <ol className="card__habilities">
                {data.types.map(type => {
                    return(
                    <li className={`habilities ${habilitiesFav}`}>{type}</li>
                    )
                })}
                </ol>
            </li>
        );
    }
}

Pokemon.propTypes = {
    data: PropTypes.object,
}

export default Pokemon;