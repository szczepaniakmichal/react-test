import * as React from 'react'
//import { Component } from 'react';
//import Moment  from 'react-moment';

import './comE.css';

export default class ComE extends React.Component{
      constructor(props){
        super(props);
        this.state = { 
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
            seconds: new Date().getSeconds(),
            time: new Date()
        }
    }

        componentDidMount(){
            this.timerId = window.setInterval(this.updateDate.bind(this), 1000)
        }

        componentWillUnmount(){
            window.clearInterval(this.timerId)
        }

        updateDate(){
            this.setState({
                hour: new Date().getHours(),
                minutes: new Date().getMinutes(),
                seconds: new Date().getSeconds(),
                time: new Date()
            })
        }

        // addZero(){
        //     if(this.seconds.length === 1){
        //         this.seconds = '0' + this.seconds;
        //     } else {
        //         this.seconds = this.seconds;
        //     }
        // }

        
        render(){
            
            const { title='zegar' } = this.props
            const dateStr = {
                hour: this.state.hour,
                minutes: this.state.minutes,
                seconds: this.state.seconds
            }

            // if(this.state.seconds.length === 1){
            //     this.state.seconds =  setState(prevState => {
            //         return{
            //             seconds: prevState.seconds =+ '0' + seconds,
            //         }
            //     }
            
            
            return(
                <div>
                    <p>ComE { title } </p>
                    <div>
                        <time> { dateStr.hour } : { dateStr.minutes } : {dateStr.seconds}</time>
                    </div>
                    <div>
                        <time>{ this.state.time.toLocaleTimeString() }</time>
                    </div>
                    
                </div>
            )
        }
}



