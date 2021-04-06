import React, {useMemo} from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublishers'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className="card-columns animate__animated animate__fadeIn">
            {
                heroes.map(hero => (
                    <HeroCard 
                        key={hero.id}
                        {...hero}
                    >
                    </HeroCard> 
                ))
            }
        </div>
    )
}
