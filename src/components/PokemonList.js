import React from 'react';
import PokemonCard from './PokemonCard';

function PokemonList({ pokemons }) {
    return (
            <div className="container text-center p-3">
                    <div className='row row-cols-1 row-cols-md-3 g-4'>
                            {
                                pokemons?.map((pokemon) => (
                                    <div className='col-lg-2 col-md-4 col-sm-12' key={pokemon.name}>
                                        <PokemonCard pokemon={pokemon}/>
                                    </div>
                                ))
                            }
                    </div>
            </div>
    )
}

export default PokemonList