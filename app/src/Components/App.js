import React, {useState, useEffect} from 'react';
import * as Yup from 'yup';
import axios from 'axios';
import Form from './Form';
import formSchema from '../Validation/formSchema';
import User from './User'

function App() {
  const initialFormValues = {
    name: '',
    email: '',
    password:'',
    role: '',
    color: '#000000',
    url: '',
    bday: '',
    terms: false,
  }

  const initialFormErrors = {
    name: '',
    email: '',
    password:'',
    role: '',
    url: '',
    bday: '',
    terms: '',
  }

  const initialUsers = []
  const initialDisabled = true;

  //creating states for app
  const [users, setUsers] = useState(initialUsers) //array
  const [formValues, setFormValues] = useState(initialFormValues) //object
  const [errors, setErrors] = useState(initialFormErrors) //object
  const [disabled, setDisabled] = useState(initialDisabled) //boolean

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        setUsers([res.data, ...users])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const onInputChange = event => {
    const {name, value} = event.target;
    Yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => {
        setErrors({
          ...errors,
          [name]: ''
        })
      })
      .catch(err => {
        setErrors({
          ...errors,
          [name]: err.errors[0]
        })
      })
    setFormValues({
      ...formValues,
      [name]:value
    })
  }

  const onCheckboxChange = event => {
    const {name, checked} = event.target;

    Yup
      .reach(formSchema, name)
      .validate(checked)
      .then(() => {
        setErrors({
          ...errors,
          [name]: ''
        })
      })
      .catch(err => {
        setErrors({
          ...errors,
          [name]:err.errors[0]
        })
      })


    setFormValues({
      ...formValues,
      [name]:checked
    })
  }

  const onColorChange = event => {
    const {name, value} = event.target;
    setFormValues({
      ...formValues,
      [name]:value
    })
  }

  const onSubmit = event => {
    event.preventDefault()

    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      role: formValues.role,
      color: formValues.color,
      url: formValues.url,
      bday: formValues.bday
    }

    postNewUser(newUser);
  }

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    })
  }, [formValues])

  return (
    <div>
      <h1>Users</h1>
      <Form 
        values={formValues} 
        onInputChange={onInputChange} 
        onCheckboxChange={onCheckboxChange}
        onColorChange={onColorChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={errors}
      />
      {
        users.map(user => {
          return (
            <User key={user.id} info={user}/>
          )
        })
      }
    </div>
  );
}

export default App;
