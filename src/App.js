import React from 'react';
import './App.css';
// import { Button } from 'react-bootstrap';

var string = [];
var string2 = [];
var result = 0;

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        sign:null,
        order:1,
        display:'',
        result:'',
        operation: false,
        signs:true,
    };
  }
  insertNumber(number){
    if(this.state.operation){
      this.setState({display:'',operation:false});
    }
    if(this.state.order === 1)
    string.push(number);
    else
    string2.push(number);

    this.setState(({ display }) => ({display: display + number,signs:false}));
  }

  insertSign(sign){
    this.setState({sign:sign,order:2});
    this.setState(({ display }) => ({display: display + sign,}));
  }

  calculate(){
    var sign=this.state.sign;
    if(sign === '+'){
      result = parseInt(string) + parseInt(string2);
    }
    else if(sign === '-'){
      result = parseInt(string) - parseInt(string2);
    }
    else if(sign === '/'){
      result =parseInt(string) / parseInt(string2);
    }
    else if(sign === '*'){
      result = parseInt(string) * parseInt(string2);
    }
    string.splice(0);
    string2.splice(0);
    this.setState({display: result,operation:true,signs:true,order:1});
  }
  render(){
    return (
      
      <div className="App">
        <div className='table'>
          <div className='header-row'>
            <input disabled className='display' value={this.state.display}></input>
          </div>
          <div className='row'>
            <button className='buttons'><p className='buttons-content' onClick={()=> this.insertNumber(1)}>1</p></button>
            <button className='buttons'><p className='buttons-content' onClick={()=> this.insertNumber(2)}>2</p></button>
            <button className='buttons'><p className='buttons-content' onClick={()=> this.insertNumber(3)}>3</p></button>
            <button disabled={this.state.signs} className='buttons'><p className='buttons-content' onClick={()=> this.insertSign('+')}>+</p></button>
            <button disabled={this.state.signs} className='buttons'><p className='buttons-content' onClick={()=> this.insertSign('/')}>/</p></button>
          </div>
          <div className='row'>
            <button className='buttons'><p className='buttons-content' onClick={()=> this.insertNumber(4)}>4</p></button>
            <button className='buttons'><p className='buttons-content' onClick={()=> this.insertNumber(5)}>5</p></button>
            <button className='buttons'><p className='buttons-content' onClick={()=> this.insertNumber(6)}>6</p></button>
            <button disabled={this.state.signs} className='buttons'><p className='buttons-content' onClick={()=> this.insertSign('-')}>-</p></button>
            <button disabled={this.state.signs} className='buttons'><p className='buttons-content' onClick={()=> this.calculate()}>=</p></button>
          </div>
          <div className='row'>
            <button className='buttons'><p className='buttons-content' onClick={()=> this.insertNumber(7)}>7</p></button>
            <button className='buttons'><p className='buttons-content' onClick={()=> this.insertNumber(8)}>8</p></button>
            <button className='buttons'><p className='buttons-content' onClick={()=> this.insertNumber(9)}>9</p></button>
            <button disabled={this.state.signs} className='buttons'><p className='buttons-content' onClick={()=> this.insertSign('*')}>*</p></button>
            <button className='buttons'><p className='buttons-content' onClick={()=> this.reset()}>CE</p></button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
