import React from 'react'

export const SingIn = (props) => {
    return (
        <div>
            <h1>Hello {this.props.name} </h1>
            <button oncLick={props.changeName} >Cambiar de nombre</button>
        </div>
    )
}