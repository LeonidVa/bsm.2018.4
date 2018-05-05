import React, {Component} from 'react'
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

            let timer = {hours: '00', minutes: '00', seconds: '00'}

            if (time.getTime() <= endOfTimer) {
                timer = countdown(null, endOfTimer)
            }

            that.setState({
                hoursLeft: timer.hours < 10 ? "0" + timer.hours : timer.hours,
                minutesLeft: timer.minutes < 10 ? "0" + timer.minutes : timer.minutes,
                secondsLeft: timer.seconds < 10 ? "0" + timer.seconds : timer.seconds
            })
        }, 1000)
    }

    componentDidMount = () => {
        const {timerDuration} = this.props;
        if (window.localStorage.getItem("timer")) {
            const time = new Date()                          //часы, минуты, секунды, милисекунды
            timerDuration ?
                window.localStorage.setItem("timer", time.getTime() + (Number(timerDuration))) :
                window.localStorage.setItem("timer", time.getTime() + (2 * 60 * 60 * 1000))

        }
        this.setCountdown()
    }

    componentWillUnmount = () => {
        clearInterval(this.timerLoop);
    }

    render() {
        const {hoursLeft, minutesLeft, secondsLeft} = this.state;
        return (
            <div className="timer" style={{fontSize: `${this.props.size}em`, display: 'flex', color: this.props.timerColor}}>
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