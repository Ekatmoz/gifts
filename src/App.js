import { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {

  const [gifts, setGifts] = useState(data);
  
  const removeItem = (id) => {
    let newGifts = gifts.filter(gift => gift.id !== id)
    setGifts(newGifts);
  }
  return (
    <div>
      <div className="header">
        <img className="cover" src='https://images.unsplash.com/photo-1513297887119-d46091b24bfa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' width="900px" alt="background"/>
        <div className="box">
          <h1>Holly Jolly Christmas</h1>
          <p className='par'>Choose one of {gifts.length} gifts bellow to make your loved ones happy!</p>
        </div>
      </div>

      <div>
        {gifts.map((gift => {
          const {id, title, image} = gift;

          return(
            <div key={id}>
              <div className='container'>
                <p>{id} - {title}</p>
              </div>
              <div className='container'>
                <img src={image} alt='present' width='400px'/>
              </div>
              <div className='container'>
        <button className="btn" onClick={() => removeItem(id)}>Remove</button>
      </div>
            </div>
          )
        }))}
      </div>
      <div className="container">
        <button className="btn" onClick={() => setGifts([])}>Delete all</button>
      </div>
    </div>
  );
}

export default App;
