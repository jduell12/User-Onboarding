import React from 'react'
import {StyledForm} from './StyledForm'

export default function User(props){
    const {name, email, password} = props.info

    return (
        <StyledForm>
            <h2>Name</h2>
            <p>{name}</p>
            <h3>Email</h3>
            <p>{email}</p>
            <h3>Password</h3>
            <p>{password}</p>
        </StyledForm>
    )
}