import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function PokemonDetailView() {
  const { id } = useParams();
  const [ pokemon, setPokemon ] = useState(null);

  const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  const fetchData = async () => {
    let data = null;
    const response = await fetch(`${apiUrl}/${id}`);
    if(response.ok) {
      data = await response.json();
    }
    setPokemon(data);
  }
  
  
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div>
      {
        pokemon ? (
          <div className='container'>
            <div className='row justify-content-start'>
              <div className='col-4'>
                <Link to="/" className="btn btn-secondary mb-5 mt-5">
                    Volver
                </Link>
              </div>
            </div>
            <div className='row justify-content-center'>
                <div className="card bg-danger text-white border-warning mb-3 w-50">
                  <img src={pokemon?.sprites?.other.dream_world.front_default} className="card-img-top h-50 mt-5" alt={pokemon?.name} />
                  <div className="card-body">
                    <h1 className="card-title text-center display-3">{pokemon.name.toUpperCase()}</h1>
                    <div className='container'>
                      <div className='row justify-content-between'>
                        <div className='col-4 text-center'>
                          <p className="card-text"><small className="badge text-bg-success rounded-pill text-white">Exp: {pokemon.base_experience}</small></p>
                        </div>
                        <div className='col-4 text-center'>
                          <p className="card-text"><small className="badge text-bg-primary rounded-pill text-white">Talla: {pokemon.height}</small></p>
                        </div>
                        <div className='col-4 text-center'>
                          <p className="card-text"><small className="badge text-bg-warning rounded-pill text-white">Peso: {pokemon.weight}</small></p>
                        </div>
                      </div>
                    <div className='container mt-5'>
                      <div className='row justify-content-center'>
                        <div className='col-4 text-center'>
                          <h5 className="card-text lead">Tipo:<p><small className="badge text-bg-secondary rounded-pill text-white">{pokemon?.types.map((type) => type.type.name.toUpperCase())}</small>
                            </p></h5>
                        </div>
                        <div className='col-4 text-center'>
                          <h5 className="card-text lead">Transformacion:<small className="badge text-bg-info rounded-pill text-white"> {pokemon?.forms.map((form) => form.name.toUpperCase())}</small></h5>
                        </div>
                        <div className='col-4 text-center'>
                          <h5 className="card-text lead">Habilidades:<small className="badge text-bg-dark rounded-pill text-white"> {pokemon?.abilities.map((ability) =>ability.ability.name.toUpperCase())}</small></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Cargando...</p>
        )
      }
    </div>
  )
}

export default PokemonDetailView