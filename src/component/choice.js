import React, {Component} from 'react'

class Choice extends Component{
    static defaultProps = {
        choices:{
            1:["Ones","1 point per 1"],
            2:["Twos","2 point per 2"],
            3:["Threes","3 point per 3"],
            4:["Fours","4 point per 4"],
            5:["Fives","5 point per 5"],
            6:["Sixes","6 point per 6"],
            7:["Three of Kind","Sum all doce if 3 are the same"],
            8:["Four of Kind","Sum all doce if 4 are the same"],
            9:["Full House","25 point for a full house"],
            10:["Small Straight","30 points for a small straight"],
            11:["Large Straight","Sum all doce if 40 are the same"],
            12:["Yahtzee","50 points for Yahtzee"],
            13:["Chance","sum of all dices"],
        }

    }
    constructor(props){
        super(props)
        this.state = {
            iscrossed: !this.props.freez(this.props.choice)
        }
        this.crosschoice = this.crosschoice.bind(this)
        this.crosseselement = this.crosseselement.bind(this)
    }
    crosschoice(){
        this.props.unfreez()
        if (!this.state.iscrossed){
            this.props.crosschoice(this.props.choice)
            this.setState({
                iscrossed:true,
                point:this.props.point(this.props.choice)
            })
        }
    }
    crosseselement(){
        if(this.state.iscrossed){
            return(
                <div>
                    <span>{this.state.point}</span>
                </div>
            )
        }
        return(
            <div>
                <span>{this.props.choices[this.props.choice][1]}</span>
            </div>
        )
    }
    render(){
        return(
            <li onClick={this.crosschoice} className={`${this.state.iscrossed?"bg-blue-200/50":""} border-b-1 py-1 px-2 rounded`}>
                <div className='flex justify-between'>
                    <div>
                        <span>{this.props.choices[this.props.choice][0]}</span>
                    </div>
                    {
                        this.crosseselement()
                    }
                    
                </div>
            </li>
        )
    }
}

export default Choice;