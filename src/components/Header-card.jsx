import React from 'react'

function Headerlink(props) {
    return (
        <div className='Header-links'>
            <a href="#"
                className={
                    props.active === props.path ? 'Header-link active' : 'Header-link'
                }
            >{props.name}</a>
        </div>
    )
}

export default Headerlink