import React, { useState } from 'react';
import './App.css';
import colorsGenerator from './common/functions/colorsGenerator'
import ColorFilter from './common/interfaces/ColorFilter'
import colorNameList from './common/constants/colorNameList'

function App() {
  const [category, setCategory] = useState(colorNameList[0])
  const [saturation, setSaturation] = useState('')

  let colorFilter:ColorFilter = {
    category: category,
    saturation: saturation
  }
  // generate array of colors in format hsl()
  let colors:Array<string> = colorsGenerator(colorFilter)

  return (
    <div className="App">
      {/*input box*/}
      <div className="input-wrapper">
        <div className="input-group">
          <label htmlFor="category">category: </label>
          <select name="category" id="category" value={category} onChange={(event) => setCategory(event.target.value)}>
            {
              colorNameList.map(colorName => {
                return <option key={colorName} value={colorName}>{colorName}</option>
              })
            }
          </select>
        </div>
        <div className="input-group">
          <input type="checkbox" id="saturation" name="saturation" value="darker" onChange={(event) => setSaturation(event.target.checked ? event.target.value: '')}></input>
          <label htmlFor="saturation">darker</label>
        </div>
      </div>

      {/*color box*/}
      <div className="color-box-wrapper">
        {
          colors.map((color, idx) => {
            return <div key={idx} className='color-box' style={{backgroundColor: color}}></div>
          })
        }
      </div>
    </div>
  );
}

export default App;
