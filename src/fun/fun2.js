import React, { Component } from 'react'

export default class Fun2 extends Component {

    // constructor(props){
    //   super()
    //   this.state ={
    //     nub : props.cont
    //   };
    // }

    componentDidUpdate(){
        console.log('componentDidupdate');
    }

  render() {
    return (
        
        <>
        <h3>date : {this.props.cont}</h3>
        </>

    )
  }
}
