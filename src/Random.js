
import React from 'react';
class Random extends React.Component {
    render() {
      let superRandomCharacters = '1234567890abcdef'.split('');
      function  superRandomColor() {
        let col = "#";
        for (let i = 0; i < 6; i++)
          col += superRandomCharacters[Math.floor(Math.random() * 16)];
          let color = {backgroundColor: col}    
        return color;
      }

      return <h1 style={superRandomColor()} className="App-header">{this.props.name}</h1>;
    }
}
  
Random.defaultProps = {
   name: "world",
};
  
export default Random;
