import React, {useState, useEffect} from 'react';
import Form from './Form'

function App() {
  const initialFormValues = {
    name: '',
    email: '',
    password:'',
    terms: false,
  }

  const initialFormErrors = {
    name: '',
    email: '',
    password:'',
    terms: '',
  }

  const initialUsers = []
  const initialDisabled = true;

  //creating states for app
  const [users, setUsers] = useState(initialUsers) //array
  const [formValues, setFormValues] = useState(initialFormValues) //object
  const [errors, setErrors] = useState(initialFormErrors) //object
  const [disabled, setDisabled] = useState(initialDisabled) //boolean

  const onInputChange = event => {
    const {name, value} = event.target;

    setFormValues({
      ...formValues,
      [name]:value
    })
  }

  const onCheckboxChange = event => {
    const {name, checked} = event.target;

    setFormValues({
      ...formValues,
      [name]:checked
    })
  }

  const onSubmit = event => {
    event.preventDefault()
  }

  return (
    <div>
      <h1>Users</h1>
      <Form 
        values={formValues} 
        onInputChange={onInputChange} 
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
        disabled={disabled}
        errors={errors}
      />
    </div>
  );
}

export default App;
