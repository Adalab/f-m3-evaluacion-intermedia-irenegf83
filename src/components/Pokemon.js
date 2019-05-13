import React from 'react';

class Pokemon extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            classFavorite: ''
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => {
            let newClass;
            
            prevState.classFavorite === '' ? newClass = 'favorite' : newClass = '';
            // if(prevState.classFavorite === '') {
            //     newClass = 'favorite';
            // } else {
            //     newClass = '';
            // }
            return {
                classFavorite: newClass
            }
            
        });
    }
    render() {
        const { data } = this.props;
        const { classFavorite } = this.state;
        return (
            <li className={`card ${classFavorite}`} onClick={this.handleClick}>
                <img src={data.url} alt=""/>
                <h2>{data.name}</h2>
                <ol>
                {data.types.map(type => {
                    return(
                    <li>{type}</li>
                    )
                })}
                </ol>
            </li>
        );
    }
}

export default Pokemon;