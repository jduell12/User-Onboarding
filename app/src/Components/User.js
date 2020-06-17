import React from 'react'
import {StyledForm, StyledH2} from './StyledForm'

export default function User(props){
    const {name, email, password, role} = props.info

    return (
        <StyledForm>
            <StyledH2>Name:</StyledH2> <p>{name}</p> <br/>
            <StyledH2>Email:</StyledH2> <p>{email}</p><br/>
            <StyledH2>Password:</StyledH2> <p>{password}</p><br/>
            <StyledH2>Role:</StyledH2> <p>{role}</p><br/>
        </StyledForm>
    )
}