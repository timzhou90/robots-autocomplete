import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

    const cardComponent = robots.map(
        (card, index)=>{
            return  <Card key={card+index} name={card.name} email = {card.email} id={card.id}/>
        }
    )

    return (<div>
       {cardComponent}
    </div>
)
        
}

export default CardList