import React, {Component} from 'react'
import { v4 as uuidv4 } from 'uuid'

class Dice extends Component{
    static defaultProps = {

    }
    constructor(props){
        super(props)
        this.state = {
            ison: this.props.ison
        }
    }

    
    
    render(){
        return(
            <div className='dice' onClick={this.props.toggledicehandler}>
            {/* <div className={`${this.props.dice} w-20 h-20 flex justify-center items-center p-2 rounded-lg  `}> */}
            <div className={`${this.props.dice} ${ this.props.ison?"bg-white shadow-[0px_10px_10px_-1px_rgba(0,0,0,0.9)]":"bg-purple-300"} w-16 h-16 flex justify-center items-center p-2 rounded-xl `}>
                <div className=' w-full h-full grid grid-cols-3 grid-rows-3'>
                    {Array.from({length:this.props.diceno}).map(point=>{
                        return (
                            <div key={uuidv4()} className='point self-center place-self-center w-3 h-3 rounded-full bg-purple-800'></div>
                        )
                    })}
                </div>
            </div>
        </div>
        )
    }
}

export default Dice;