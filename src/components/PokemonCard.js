import React from 'react'
import { useFetch } from '../hooks/useFetch';
import { Link } from 'react-router-dom';

function PokemonCard({ pokemon }) {

    let data;

    const url = pokemon?.url;
    const response = useFetch(url);

    if(response.data) {
        data = response.data;
    } else {
        data = pokemon;
    }
  return (
    <div className="card border-danger bg-secondary h-75">
        <img src={data?.sprites?.other.dream_world.front_default} className="card-img-top h-50 mt-5" alt={pokemon.name} />
        <div className='card-body text-white pb-5'>
            <h3 className="card-title">{ pokemon.name }</h3>
            <Link to={`/pokemon/${data?.id}`} className="btn btn-danger text-white">
                Ver Detalle
            </Link>
        </div>
    </div>
)
}

export default PokemonCard