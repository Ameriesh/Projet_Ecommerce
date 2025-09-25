import { useState } from 'react'
import './App.css'
import Button from './components/commons/button/Button'
function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        
      </h1>
      <Button variant='primary'>Ajouter au panier</Button>
      <Button variant='outline'>Retirer du panier</Button>
      <Button variant='secondary'>Retirer du panier</Button>
      <Button variant='secondary-outline'>agdhads</Button>
      

    </>
  )
}

export default App
