import React from 'react';
import ErrorBoundry from './ErrorBoundry'
const Card = ({name, email, id})=>{

    return (
        <ErrorBoundry>
            <div className="dim tc grow bg-light-yellow br3 pa3 ma2 dib bw2 shadow-5">
                <img src = {`https://robohash.org/${id}?200*200`} alt="robots" />
                <div>   
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </ErrorBoundry>
    )
}

export default Card