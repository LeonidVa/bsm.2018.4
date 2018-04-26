import React, { Component } from 'react'
import countdown from 'countdown';

class Timer extends Component {

    state = {
        hoursLeft: 88,
        minutesLeft: 88,
        secondsLeft: 88
    }

    setCountdown = () => {
        const that = this;

        this.timerLoop = setInterval(() => {
            const time = new Date()
            const endOfDay =  time.getTime() + ((24 * 1000 * 60 * 60) - (time.getHours() * 1000 * 60 * 60 + time.getMinutes() * 1000 * 60 + time.getSeconds() * 1000 + time.getMilliseconds()))
            let timer = countdown(null, endOfDay) 

            that.setState({
                hoursLeft: timer.hours,
                minutesLeft: timer.minutes,
                secondsLeft: timer.seconds
            })
        }, 1000)
    }
    componentDidMount = () => {
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