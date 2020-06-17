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
  }

  const initialUsers = []
  const initialDisabled = true;

  //creating states for app
  const [users, setUsers] = useState(initialUsers) //array
  const [formValues, setFormValues] = useState(initialFormValues) //object
  const [errors, setErrors] = useState(initialFormErrors) //object
  const [disabled, setDisabled] = useState(initialDisabled) //boolean

  const onInputChange = event => {

  }

  const onCheckboxChange = event => {

  }

  const onSubmit = event => {
    event.preventDefault()
  }

  return (
    <div>
      <h1>Creating Users</h1>
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
