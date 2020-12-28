import React from 'react';

const Scroll =({children})=>{
    return (<div style={{ overflow: 'scroll',
        overflowX: 'hidden',height: '700px'}}>{children}</div>)
}

export default Scroll;