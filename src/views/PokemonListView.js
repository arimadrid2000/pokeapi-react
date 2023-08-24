import React, { useState,useEffect } from 'react'
import PokemonList from '../components/PokemonList'
import { useFetch } from '../hooks/useFetch'
import pokemon from '../imgs/pokemon.svg';

function PokemonListView() {
    const [search, setSearch] = useState('');
    const [pokemons, setPokemons] = useState(null);
    const { data } = useFetch('https://pokeapi.co/api/v2/pokemon/?limit=60');
  
    useEffect(() => {
      setPokemons(data?.results);
    }, [data?.results])
    
    const handlerChange=(e)=>{
      setSearch(e.target.value);
      filterFunction(e?.target.value);
    }
  
    const filterFunction = async (text) => {
      if(!search) {
        setPokemons(data?.results);
      } else {
        let filterData = data?.results.filter((item) => item.name.toLowerCase().includes(text.toLowerCase()));
        if (filterData.length > 0) {
          setPokemons(filterData);
        } else {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${text}`);
          if(response.ok) {
            const data = await response.json();
            setPokemons([data]);
          }
        }
      }
    }
  
  
    return (
        <div className='p-5'>
            <div className='text-center'>
                <img src={pokemon} alt="pokemon" className='mx-auto w-25 mb-5'/>
            </div>
          <div className='container mb-5'>
            <div className='row justify-content-end'>
                <div className="col-lg-4 col-md-8 col-sm-12 align-self-end">
                    <input className="form-control" value={search} onChange={handlerChange} placeholder="Escriba el nombre del pokemon que desea buscar"></input>
                </div>
            </div>
          </div>
          <PokemonList pokemons={pokemons}/>
        </div>
    )
}

export default PokemonListView