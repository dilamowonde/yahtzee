import React, {Component} from 'react'
import './yahtzeedesicion.css'
import Yahtzeechoice from './yahtzeechoice'


class Yahtzeedesicion extends Component{
    static defaultProps = {

    }
    constructor(props){
        super(props)
        this.state = {
            points: 0
        }
        this.total = this.total.bind(this)
        this.newgame = this.newgame.bind(this)
    }
    total(point){
        this.setState({
            points: this.state.points+point
        })
    }

    newgame(){
        if(this.props.again===0){
            return <Yahtzeechoice  unfreez={this.props.unfreez} summationhandler={this.total} values = {this.props.result}/>
        }
        return <h1>Play a game</h1>
    }
    render(){
        console.log(this.props)
        return(
            <div className='decision w-full p-2 bg-white'>
                <div className='bg-white border-b-2 px-16'>
                    <div className='felx flex-col space-y-3'>

                        {this.newgame()}
                        {this.state.points}
                    </div>

                </div>
            </div>
        )
    }
}

export default Yahtzeedesicion; 