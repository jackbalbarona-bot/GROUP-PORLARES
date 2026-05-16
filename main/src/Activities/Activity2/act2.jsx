import React, { useState } from 'react';

function SecretMessage() {
  
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>React State Toggle</h2>
      
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Secret' : 'Show Secret'}
      </button>

      {}
      {isVisible && (
        <div style={{ marginTop: '20px', color: 'green' }}>
          <strong>Surprise!</strong> Kunta Magbuotan kana !. 
        </div>
      )}
    </div>
  );
}

export default SecretMessage;