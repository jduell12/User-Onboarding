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

                    <label>
                        
                    </label>
                    <StyledButton disabled={disabled}>Submit</StyledButton>
                </StyledInnerForm>
            </StyledForm>
        </div>
    )
}
