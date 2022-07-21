import React, {Component} from 'react'
import Choice from './choice'

class Yahtzeechoice extends Component{
    static defaultProps = {
        points:{
            1:1,
            2:2,
            3:3,
            4:4,
            5:5,
            6:6,
            7:7,
            8:8,
            9:9,
            10:10,
            11:11,
            12:12,
            13:13,
            14:14,
            15:15,
        }
    }
    constructor(props){
        super(props)
        this.state = {
            upper:{
                1:[0,1],
                2:[0,1],
                3:[0,1],
                4:[0,1],
                5:[0,1],
                6:[0,1]
            },
            lower:{
                7:[0,1],
                8:[0,1],
                9:[0,1],
                10:[0,1],
                11:[0,1],
                12:[0,1],
                13:[0,1]
            }
        }
        this.crosschoice = this.crosschoice.bind(this)
        this.check = this.check.bind(this)
        this.count = this.count.bind(this)
        this.removechoice = this.removechoice.bind(this)
        this.isfree = this.isfree.bind(this)
        this.point = this.point.bind(this)
    }
    point(x){
        if(x<=6){
            return this.state.upper[x][0]
        }
        return this.state.lower[x][0]
        
    }
    count(i,arr){
        return arr.reduce((total,x) => (x===i ? total+1 : total), 0)
    }
    removechoice(x,point){
        if(x<=6){
            let y=this.state.upper
            y[x]=[point,0]
            this.setState({
                upper:y
            })
           
        } else{
            let y=this.state.lower
            y[x]=[point,0]
            this.setState({
                lower:y
            })
         
        }
        
      
    }
    check(x,values){
        let minarr = Array.from(new Set(values)).sort()
      
        if (x===1 || x===2 || x===3 || x===4 || x===5 || x===6){
            return this.count(x,values)*x
            }
        else{
            if(x===7){
                if(minarr.length<3){
                    return values.reduce((total,y) => (total+y), 0)
                }
                return 0
            }
            if(x===8){
                console.log(minarr)
                if(minarr.length<2){
                    return values.reduce((total,y) => (total+y), 0)
                }
                return 0
            }
            else if(x===9){
                if(
                    minarr.length ===2 && (
                    (this.count(minarr[0],values)===3 && this.count(minarr[1],values)===2)||
                    (this.count(minarr[0],values)===2 && this.count(minarr[1],values)===3) )
                ){
                        return 25
                }
                return 0
            }
            else if(x===10){
                if(
                    minarr.length>=4 && (
                    (minarr[0]===1 && minarr[1]===2 && minarr[2]===3 && minarr[3]===4) ||
                    (minarr[0]===2 && minarr[1]===3 && minarr[2]===4 && minarr[3]===5) )
                    ){
                    return 30
                }
                return 0
            }
            else if(x===11){
                if(
                    minarr.length===5 && (
                    (minarr[0]===1 && minarr[1]===2 && minarr[2]===3 && minarr[3]===4 && minarr[4]===5) ||
                    (minarr[0]===2 && minarr[1]===3 && minarr[2]===4 && minarr[3]===5 && minarr[4]===6) )
                    ){

                    return 40
                }
                return 0

            }
            else if(x===12){
                if((minarr.length===1)){
                        return 50
                }
                return 0
            }
            else if(x===13){
                return values.reduce((total, a) => total + a, 0)
            }
        
        }

    }
    
    crosschoice(x){
        let point = this.check(x, this.props.values)
        
        // console.log(1)
        this.props.summationhandler(point)
        this.removechoice(x,point) 
    }
    isfree(x){
        if(x<=6){
            return this.state.upper[x][1]
        }
        else{
            return this.state.lower[x][1]
        }
    }
    render(){
        return(
            <div className='flex flex-col'>
                <h1 className='underline text-xl font-medium py-2'>upper</h1>
                <ul className='flex flex-col  divide-y-2 divide-gray-300'>
                    <Choice unfreez={this.props.unfreez} crosschoice={this.crosschoice} choice={1} point={this.point} freez={this.isfree}/>
                    <Choice unfreez={this.props.unfreez} crosschoice={this.crosschoice} choice={2} point={this.point} freez={this.isfree}/>
                    <Choice unfreez={this.props.unfreez} crosschoice={this.crosschoice} choice={3} point={this.point} freez={this.isfree}/>
                    <Choice unfreez={this.props.unfreez} crosschoice={this.crosschoice} choice={4} point={this.point} freez={this.isfree}/>
                    <Choice unfreez={this.props.unfreez} crosschoice={this.crosschoice} choice={5} point={this.point} freez={this.isfree}/>
                    <Choice unfreez={this.props.unfreez} crosschoice={this.crosschoice} choice={6} point={this.point} freez={this.isfree}/>
                </ul>
                <h1 className='underline text-xl font-medium py-2'>lower</h1>
                <ul className='flex flex-col  divide-y-2'>
                    <Choice unfreez={this.props.unfreez} crosschoice={this.crosschoice} choice={7} point={this.point} freez={this.isfree}/>
                    <Choice unfreez={this.props.unfreez} crosschoice={this.crosschoice} choice={8} point={this.point} freez={this.isfree}/>
                    <Choice unfreez={this.props.unfreez} crosschoice={this.crosschoice} choice={9} point={this.point} freez={this.isfree}/>
                    <Choice unfreez={this.props.unfreez} crosschoice={this.crosschoice} choice={10} point={this.point} freez={this.isfree}/>
                    <Choice unfreez={this.props.unfreez} crosschoice={this.crosschoice} choice={11} point={this.point} freez={this.isfree}/>
                    <Choice unfreez={this.props.unfreez} crosschoice={this.crosschoice} choice={12} point={this.point} freez={this.isfree}/>
                    <Choice unfreez={this.props.unfreez} crosschoice={this.crosschoice} choice={13} point={this.point} freez={this.isfree}/>
                </ul>
            </div>
        )
    }
}

export default Yahtzeechoice;