import React, {Component} from 'react'
import './yahtzeedice.css'
import Dice from './dice'
import { v4 as uuidv4 } from 'uuid'


class Yahtzeedice extends Component{
    static defaultProps = {
        number:{
            1:"one",
            2:"two",
            3:"three",
            4:"four",
            5:"five",
            6:"six",
            9:"nine"
        },
        rolls:{
            1:[9,0],
            2:[9,0],
            3:[9,0],
            4:[9,0],
            5:[9,0],
            6:[9,0]
        },
        dice:9,
        ison:false,
        toggle(){},

    }
    constructor(props){
        super(props)
        this.state = {
            dice: this.props.dice,
            ison:this.props.ison
        }
        this.toggledice = this.toggledice.bind(this)
    }

    toggledice(){
        this.props.toggle(this.props.id,!this.state.ison)
    }
    render(){
        return(
            <div className='flex items-center justify-center m-2'>
                <Dice ison={this.state.ison} toggledicehandler={this.toggledice} key={`${uuidv4()}`}  diceno={this.state.dice} dice={`${this.props.number[this.state.dice]}`}/>
            </div>
        )
    }
}

export default Yahtzeedice;