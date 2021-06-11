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
      let selected = data.find(beast =>{
        if(beast.title == title){
          return beast;
        }
      })

      this.setState({
        visibility:true,
        modalBeast:selected
      })
   }

  render() {
    return (
      <div className="App">
        <Header />

        <Main
         data={data}
         chosenBeast={this.chosenBeast}
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
