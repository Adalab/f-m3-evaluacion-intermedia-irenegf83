import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <li>
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