import React from 'react'

const Phrase = ( {phRandom} ) => {

  return (
    <>
    <div className="phrase">
        <p className="parag1">{phRandom.phrase}</p>
        
    </div>
    <div className="author">
      <p className="parag2">Fuente: {phRandom.author}</p>
    </div>
    </>
  )
}

export default Phrase