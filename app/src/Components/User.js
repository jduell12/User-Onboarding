import React from 'react'
import {StyledUser, StyledH2} from './StyledForm'

export default function User(props){
    const {name, email, password, role, color, url, bday} = props.info

    return (
        <StyledUser style={{color: color}}>
            <StyledH2>Name:</StyledH2> <p>{name}</p> <br/>
            <StyledH2>Email:</StyledH2> <p>{email}</p><br/>
            <StyledH2>Password:</StyledH2> <p>{password}</p><br/>
            <StyledH2>Role:</StyledH2> <p>{role}</p><br/>
            <StyledH2>Url:</StyledH2> <p>{url}</p> <br/>
            <StyledH2>Birthday:</StyledH2><p>{bday}</p>
        </StyledUser>
    )
}