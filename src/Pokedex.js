import React, { Component } from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css';

class Pokedex extends Component {

    render() {
        let title;
        if (this.props.isWinner) {

            title = <h1 className="Pokedex-winner">Winning Hand</h1>;

        } else {

            title = <h1 className="Pokedex-loser">Losing Hand</h1>;
        }
        return (

            <div className="Pokedex">
                {title}
                <h4>Total experience: {this.props.exp}</h4>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map(pok => (

                        <Pokecard
                            id={pok.id}
                            name={pok.name}
                            type={pok.type}
                            base_exp={pok.base_experience}
                        />

                    ))}
                </div>

            </div>

        );

    }
}



export default Pokedex;