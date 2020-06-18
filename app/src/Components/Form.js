import React from 'react'
import {StyledForm, StyledInnerForm, StyledButton, StyledErrorDiv} from './StyledForm'


export default function Form(props){
    const {values, onInputChange, onCheckboxChange, onColorChange, onSubmit, disabled, errors} = props

    return (
        <div>
            <StyledForm onSubmit={onSubmit}>
                <h2>Create a User</h2>
                <StyledErrorDiv>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.role}</div>
                    <div>{errors.terms}</div>
                    <div>{errors.url}</div>
                    <div>{errors.bday}</div>
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
                            name='password'
                            value={values.password}
                            onChange={onInputChange}
                        />
                    </label>

                    <label htmlFor='dateInput'>
                        Birthday: &nbsp;
                        <input 
                            type='date'
                            id='dateInput'
                            name='bday'
                            value={values.bday}
                            onChange={onInputChange}
                        />
                    </label>

                    <label>
                        Role &nbsp;
                        <select
                            onChange={onInputChange}
                            value={values.role}
                            name='role'
                        >
                            <option value=''>-- Select a Role --</option>
                            <option value='Gamer'>Gamer</option>
                            <option value='Student'>Student</option>
                            <option value='Instructor'>Instructor</option>
                            <option value='Hobbiest'>Hobbiest</option>
                            <option value='Developer'>Developer</option>
                        </select>
                    </label>

                    <label htmlFor='urlInput'>
                        Enter your personal url: &nbsp;
                        <input 
                            type='url'
                            name='url' 
                            id='urlInput'
                            value={values.url}
                            onChange={onInputChange}
                        />
                    </label>

                    <label htmlFor='colorImput'>
                        Choose a personal color: &nbsp;
                        <input 
                            type='color'
                            id='colorInput'
                            name='color'
                            value={values.color}
                            onChange={onColorChange}
                        />
                    </label>
                    
                    <label htmlFor='checkboxInput'>
                        Terms of Service &nbsp;
                        <input 
                            type='checkbox'
                            id='checkboxInput'
                            name='terms'
                            value={values.terms}
                            onChange={onCheckboxChange}
                            checked={values.terms}
                        />
                        
                    </label>
                    <StyledButton disabled={disabled}>Submit</StyledButton>
                </StyledInnerForm>
            </StyledForm>
        </div>
    )
}
