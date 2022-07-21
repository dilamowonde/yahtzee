import React, {Component} from 'react'
import Yahtzeedice from './yahtzeedice'
import './yahtzeeroll.css'
import { v4 as uuid } from 'uuid'

class Yahtzeeroll extends Component{
    static defaultProps = {

    }
    constructor(props){
        super(props)
        this.state = {
            rolls:{},
            chance:3
        }
        this.nextroll = this.nextroll.bind(this)
        this.chances = this.chances.bind(this)
        this.rolls = this.rolls.bind(this)
        this.toggle = this.toggle.bind(this)
    }

    toggle(id,ison){
        this.setState({
            rolls:{
                ...this.state.rolls,
                [id]:[
                    this.state.rolls[id][0],
                    ison
                ]
            }
        })
    }
    chances(){
        if(this.state.chance===3 || this.state.chance===4)return("Play Yahtzee")
        else if(this.state.chance===0){
            return("Decision")
        }
        else return(`${this.state.chance} Roll Left`)
    }
    nextroll(){
        const rolls ={}
        this.props.newgame(1)
        if(this.state.chance===0){
            this.setState({
                chance : 2
            })
        }
        for(let i=1;i<6;i++){
            if(Object.keys(this.state.rolls).length){
                if(this.state.rolls[i][1]){
                    rolls[i]=[
                        Math.floor(Math.random()*6)+1,
                        1
                    ]
                }else{
                    rolls[i]=[
                        this.state.rolls[i][0],
                        0
                    ]
                }
            }else{
                rolls[i]=[
                    Math.floor(Math.random()*6)+1,
                    1
                ]
                
            }
            
        }
        if (this.state.chance===4){
            this.setState({
                rolls:rolls,
                chance:2
            })
        }
        else if(this.state.chance!==0){
            this.setState({
                rolls:rolls,
                chance:this.state.chance-1
            })
        }else{
            this.setState({
                rolls:rolls,
                chance:2
            })
        }
        this.props.rollresult(rolls)
        
    }


    rolls(){
        if(this.props.again){
            this.nextroll()
            this.setState({
                chance :2
            })
        }
        if(this.state.chance===3){
            this.props.newgame(1)
            this.setState({
                chance:4
            })
            return (
                <div>Play</div>
            )
        }
        else if( Object.keys(this.state.rolls).length===0){
            return(
                <div className='flex p-2 '>
            
                    
                    <Yahtzeedice key={uuid()}/>
                    <Yahtzeedice key={uuid()}/>
                    <Yahtzeedice key={uuid()}/>
                    <Yahtzeedice key={uuid()}/>
                    <Yahtzeedice key={uuid()}/>
                    
                </div> 
            )
        }else
        return(
            <div className='flex p-2 '>
                {
                    Object.keys(this.state.rolls).map(roll=>{
                        return <Yahtzeedice key={uuid()} toggle={this.toggle} id={roll} ison={this.state.rolls[roll][1]} dice={this.state.rolls[roll][0]} />
                    })
                }
            </div>
        )
    }
    render(){
        console.log(this.props)
        return(
            <div className='roll bg-purple-700 p-5 w-full'>

            <div className='flex flex-col  items-center justify-center space-y-4'>
                <div className='text-6xl font-san font-extralight text-white'>
                    <span>Yahtzee!</span>
                </div>
                <div className='flex flex-col space-y-5'>

                    {
                        this.rolls()
                    }
                    
                    <div>   
                        <button onClick={this.nextroll} className='font-bold w-32 px-3 py-2 rounded-lg bg-gradient-to-r bg-white shadow-[0px_5px_15px_-1px_rgba(0,0,0,0.9)] hover:shadow-[0px_0px_10px_-1px_rgba(0,0,0,0.9)] from-blue-800 to-blue-600  shadow-black hover:from-blue-900  hover:to-blue-700'>
                            {
                                <span className='text-white font-normal text-base'>
                                    {this.chances()}
                                </span>
                            }
                        </button>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Yahtzeeroll;