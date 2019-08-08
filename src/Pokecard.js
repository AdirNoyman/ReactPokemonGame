import React, { Component } from 'react';
import './Pokecard.css';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';


class Pokecard extends Component {
    render() {
        const props = this.props;
        const id = (props.id).toString();
        let imgSrc = `${POKE_API}${id.padStart(3, 0)}.png`;
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{props.name}</h1>
                <div className="Pokecard-image">
                    <img src={imgSrc} alt={props.name} />
                </div>
                <div className="Pokecard-data">Type: {props.type}</div>
                <div className="Pokecard-data">EXP: {props.base_exp}</div>

            </div>
        );
    }
}

export default Pokecard;