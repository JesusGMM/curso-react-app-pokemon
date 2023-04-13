import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './store/slices/pokemon';


export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { isLoading, pokemons = [], page } = useSelector(state => state.pokemons);

  console.log(pokemons);

  useEffect(() => {
    dispatch(getPokemons());
  }, [])


  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      {isLoading ?
        <div className="spinner-grow text-info" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        : ''
      }

      <div className="list-group">
        {
          pokemons.map(({ name, url }) => (
            <div key={name} className="list-group-item">
              <small> {name} </small>
            </div>
          ))
        }
      </div >

      <button
        className='btn btn-outline-primary mt-3'
        disabled={isLoading}
        onClick={() => dispatch(getPokemons(page))}
      >
        Next
      </button>
    </>
  )
}
