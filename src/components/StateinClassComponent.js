import React, { Component } from 'react'
import '../state.css'
export default class StateinClassComponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"Govardhan",
             count:0
        }
    }
    
    render() {

        setTimeout(()=>{
            this.setState({
                name:"Govardhan D",
                
            })
        },2000)
        return (
            <div className='demo'>
                <h1>Welcome {this.state.name}</h1>
                <h1>count {this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1
                    })
                }}>Increment count</button>
                <br/>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count-1
                    })
                }}>Decrement count</button>
                <br/>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count=0
                    })
                }}>reset count</button>
    
            </div>
        )
    }
}
