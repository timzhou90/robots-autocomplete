import React from 'react';

const Scroll =({children})=>{
    return (<div style={{ overflow: 'scroll',height: '700px'}}>{children}</div>)
}

export default Scroll;