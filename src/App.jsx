
import './App.css'
import Button from './components/Button'
import Phrase from './components/Phrase'
import phrases from './utils/phrases.json'
import getRandomArray from './utils/getRandomArray'
import { useState } from 'react'

const imgs = [1,2,3,4]

function App() {
  
  const [phraseRandom, setPhraseRandom] = useState(getRandomArray(phrases))
  const [numberImg, setNumberImg] = useState(getRandomArray(imgs))

  const appStyle = {
    backgroundImage:`url('/fortuna2/fondo${numberImg}.png')`
  }

  return (
    <div style={appStyle} className="App">

      <h1 className='title'>GALLETAS DE LA <br></br>FORTUNA</h1>
      <Button 
      setPhRandom={setPhraseRandom} 
      setNumImg={setNumberImg}/>
      <Phrase phRandom={phraseRandom}/>      
    </div>
  )
}

export default App
