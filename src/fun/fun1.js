import React, { Component } from 'react'
import Fun2 from "./fun2";

export default class Fun1 extends Component {

    constructor() {
        super();
        this.state = {
            cont: 0,  // cont value ne state ma initialize kariyu
        };
    }

    Abcd = () => {
        // setState method thi cont ni value update kariye
        this.setState({
            cont: this.state.cont + 1  // cont ni value 1 thi vadhao
        });
    }

    componentDidUpdate(){
        console.log('componentDidupdate');
    }


    render() {
        return ( 
            <>
                <h3>cont: {this.state.cont}</h3>  {/* h3 tag change nathi karyo */}
                <button onClick={() => this.Abcd()}>ok</button>  {/* Button ma Abcd method call */}
                <Fun2  cont = {this.state.cont}   />
            </>
        );
    }
}
