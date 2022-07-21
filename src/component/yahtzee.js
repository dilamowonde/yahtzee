import React, {Component} from 'react'
import Yahtzeeroll from './yahtzeeroll'
import Yahtzeedesicion from './yahtzeedesicion'
import './yahtzee.css'

class Yahtzee extends Component{
    static defaultProps = {

    }
    constructor(props){
        super(props)
        this.state = {
            dice:[],
            newgame:0
        }
        this.result = this.result.bind(this)
        this.unfreez = this.unfreez.bind(this)
        this.ok = this.ok.bind(this)
        this.newgame = this.newgame.bind(this)
    }

    result(val){
        let result = Object.values(val).map(dice=>{
            return dice[0]
        })
        this.setState({
            dice:result,
            rollagain:0
        })
        // console.log( result)
        return(result)

    }
    ok(){
        if(this.state.rollagain){
            return 1
        }return 0
    }
    unfreez(){
        this.setState({
            rollagain:1
        })
        this.ok(1)
        this.setState({
            rollagain:0
        })

    }
    newgame(x){
        if(this.state.newgame===0){

            this.setState({
                newgame:0
            })
            this.ok(1)
            this.setState({
                newgame:1
            })
        }
        if(this.state.newgame===1){
            this.ok(1)
           
        }
        
    }
    render(){
        return(
            <div className='yahtzee bg-gradient-to-r from-blue-200 to-blue-700  w-screen h-screen overflow-auto'>
                <div className="flex justify-center items-center">
                    <div className="flex flex-col justify-center items-center overflow-visible  md:w-2/5  bg-black"> 
                        <Yahtzeeroll newgame={this.newgame} again={this.state.rollagain} rollresult={this.result}/>
                        <Yahtzeedesicion newgame={this.newgame} again={this.state.rollagain} unfreez={this.unfreez} result={this.state.dice}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Yahtzee;