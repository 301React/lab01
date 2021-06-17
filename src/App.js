import React, { Component } from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer'
import data from './components/data.json';
import SelectedBeast from './components/SelectedBeast';


 class App extends React.Component {
   constructor(props){
    super(props);
     this.state={
      dataHorn:data,
      visibility:false,
      modalBeast :{}
     }
   }

   changeVisibilityOff=()=>{
      this.setState({
        visibility:false 
      })
   } 

   chosenBeast = (title)=>{
      let selected = this.state.dataHorn.find(beast =>{
        if(beast.title == title){
          return beast;
        }
      })

      this.setState({
        visibility:true,
        modalBeast:selected
      })
   }

   filtered = (filteredHorns) =>{
    this.setState ({
      dataHorn: filteredHorns
    })
   }

  render() {
    return (
      <div className="App">
        <Header />

        <Main
         data={this.state.dataHorn}
         chosenBeast={this.chosenBeast}
         filtered = {this.filtered}
       />
       
        <SelectedBeast
          modalBeast={this.state.modalBeast}
          visibility = {this.state.visibility}
          modalOff = {this.changeVisibilityOff}
        />

        <Footer />
      </div>
    );
  }
}
export default App;
