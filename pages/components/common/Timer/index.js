import React, { Component } from 'react'
import countdown from 'countdown';

class Timer extends Component {

    state = {
        hoursLeft: '88',
        minutesLeft: '88',
        secondsLeft: '88'
    }

    setCountdown = () => {
        const that = this;

        this.timerLoop = setInterval(() => {
            let endOfTimer = window.localStorage.getItem("timer");
            let time = new Date()
            
            let timer = { hours: '00', minutes: '00', seconds: '00' }
            
            if (time.getTime() <= endOfTimer){
                timer = countdown(null, endOfTimer)
            }

            that.setState({
                hoursLeft: timer.hours,
                minutesLeft: timer.minutes,
                secondsLeft: timer.seconds
            })
        }, 1000)
    }
 
    componentDidMount = () => {
        if (!window.localStorage.getItem("timer")) {
            const time = new Date()                          //часы, минуты, секунды, милисекунды
            window.localStorage.setItem("timer", time.getTime() + (2 * 60 * 60 * 1000))
        }
        this.setCountdown()
    }

    componentWillUnmount = () => {
        clearInterval(this.timerLoop);
    }
    render() {
        const { hoursLeft, minutesLeft, secondsLeft } = this.state;
        return(
            <div className="timer" style={{fontSize: `${this.props.size}em`, display: 'flex'}}>
                <div className="timer-numbers">
                    {hoursLeft}
                </div>
                <div className="timer-separator">:</div>
                <div className="timer-numbers">
                    {minutesLeft}
                </div>
                <div className="timer-separator">:</div>
                <div className="timer-numbers">
                    {secondsLeft}
                </div>
            </div>
        )
    }
}

export default Timer