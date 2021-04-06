import React, {useMemo} from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();

    console.log(heroeId);

    const heroe = useMemo(() => getHeroesById(heroeId), [heroeId])

    if( !heroe ) {
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        history.goBack()
        
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = heroe;

    return (
        <div className="row mt-5 animate__animated animate__fadeInLeft">
            <div className="col-4">
                <h1>HeroScreen</h1>
                <hr />

                <img 
                    src={`../assets/heroes/heroes/${heroeId}.jpg`} 
                    alt={superhero}
                    className="img-thumbnail" 
                />
            </div>

            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"> <b> Alter ego: </b> {alter_ego}</li>
                    <li className="list-group-item"> <b> Publisher: </b> {publisher}</li>
                    <li className="list-group-item"> <b> First Appearance: </b> {first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button 
                    className="btn btn-outline-primary"
                    onClick={handleReturn}
                >
                    Return
                </button>
            </div>
        </div>
    )
}
