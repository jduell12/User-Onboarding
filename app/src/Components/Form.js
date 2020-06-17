import React from 'react'
import {StyledForm, StyledInnerForm, StyledButton, StyledErrorDiv} from './StyledForm'


export default function Form(props){
    const {values, onInputChange, onCheckboxChange, onSubmit, disabled, errors} = props

    return (
        <div>
            <StyledForm onSubmit={onSubmit}>
                <h2>Creating a User</h2>
                    <StyledErrorDiv>
                    <p>{errors.name}</p>
                    <p>{errors.email}</p>
                    <p>{errors.password}</p>
                    <p>{errors.terms}</p>
                </StyledErrorDiv>
                <StyledInnerForm>
                    <label htmlFor='nameInput'>
                        Name: &nbsp;
                        <input 
                            id='nameInput'
                            type='text' 
                            value={values.name}
                            onChange={onInputChange}
                            name='name'
                        />
                    </label>

                    <label htmlFor='emailInput'>
                        Email: &nbsp;
                        <input
                            type='text'
                            id='emailInput'
                            name='email'
                            value={values.email}
                            onChange={onInputChange}
                        />
                    </label>

                    <label htmlFor='passwordInput'>
                        Password: &nbsp;
                        <input 
                            type='password'
                            id='passwordInput'
                            value={values.password}
                            onChange={onInputChange}
                        />
                    </label>
                    
                    <label htmlFor='checkboxInput'>
                        Terms of Service &nbsp;
                        <input 
                            type='checkbox'
                            id='checkboxInput'
                            value={values.terms}
                            onChange={onCheckboxChange}
                        />
                        
                    </label>
                    <StyledButton disabled={disabled}>Submit</StyledButton>
                </StyledInnerForm>
            </StyledForm>
        </div>
    )
}
