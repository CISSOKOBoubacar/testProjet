
import { QueryClient, QueryClientProvider } from "react-query";
import { useUsersQuery } from "./usersQuery";
import React, { useState, useEffect } from 'react'
import Link from "./Link";
import TestElements from "./tests/TestElements";
import TestEvents from "./tests/TestEvents";
import FormTest from "./FormTest";
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
  integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
  crossorigin="anonymous"
/>

function App() {
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAllUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsers(data)
      } catch (err) {
        setError('Something went wrong!')
      }
    }
    fetchAllUsers()
  }, [])

  return (
    <div className="container">
      <header>
        <h1> 
Scénarios de test courants avec la bibliothèque de tests React</h1>
      </header>
      <main>
        <div className="info">
          <p>
            This page aims to provide a non-exhaustive reference to common test cases
            using <a href="https://github.com/testing-library/react-testing-library">react-testing-library</a> and <a href="https://jestjs.io">Jest</a>.
          </p>
          <p>
            Notice that throughout the examples different approaches are used.
            This is intentional in order to showcase the API.
          </p>
          <p>
            <b><a href="https://rafaelquintanilha.com/react-testing-library-common-scenarios/">Check the complete blog post</a> for more details.</b>
          </p>
          <p>Other useful links:</p>
          <ul>
            <li><a href="https://testing-library.com/docs/react-testing-library/intro">Official Docs</a></li>
            <li><a href="https://testing-library.com/docs/learning">Learning Material</a></li>
            <li><a href="https://testing-library.com/docs/guide-which-query">Which Query Should I use?</a></li>
          </ul>
        </div>
     
        
        <Link />
            
        <TestElements />
       
        <TestEvents/>
        <p>test login</p>
        <FormTest/>

  
        
      
      </main>
      <footer>
        @
        {' '}
        {(new Date()).getFullYear()}
      </footer>
    </div>
  );
}

export default App;