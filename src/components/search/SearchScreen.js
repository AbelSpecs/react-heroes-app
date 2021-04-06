import React, {useState, useMemo} from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    console.log(location.search);
    console.log(queryString.parse(location.search));
    const {q = ''} = queryString.parse(location.search);
    console.log(q);

    const [values, handleInputChange, reset] = useForm({
        searchText: ''
    });
    
    const { searchText } = values;
    
    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
        console.log(searchText);
        reset();
    }
    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr />

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control"
                            name="searchText"
                            onChange={handleInputChange}
                            value={searchText}
                            autoComplete="off"
                        />

                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary"
                        >
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                     <h4>Results</h4>
                     <hr />
                     {
                         heroesFiltered.map(hero => (
                             <HeroCard
                                key={hero.id}
                                {...hero}    
                            />
                         ))
                     }

                     {
                         (q === '') &&
                         <div className="alert alert-info">
                            <p className="text-center">Search your Hero</p>

                         </div>
                     }

                    {
                         (q !== '' && heroesFiltered.length === 0) &&
                         <div className="alert alert-danger">
                            <p className="text-center">There is no hero with that name</p>

                         </div>
                     }
                </div>
            </div>
        </div>
    )
}
