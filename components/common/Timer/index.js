import React, {Component} from 'react'
import countdown from 'countdown';

class Timer extends Component {

    state = {
        hoursLeft: 12,
        minutesLeft: 12,
        secondsLeft: 12
    };

    setCountdown = (endOfTimer) => {
        const that = this;
        this.timerLoop = setInterval(() => {
            let time = new Date();
            let timer = {hours: 0, minutes: 0, seconds: 0};
            if (time.getTime() <= endOfTimer) {
                timer = countdown(null, endOfTimer)
            }
            that.setState({
                hoursLeft: timer.hours,
                minutesLeft: timer.minutes,
                secondsLeft: timer.seconds
            })
        }, 1000)
    };

    componentDidMount = () => {
        const timerCountFrom = 'WP3C8HmqrW';
        let tcfValue = window.localStorage.getItem(timerCountFrom);
        if (!tcfValue) {
            const time = new Date();
            tcfValue = time.getTime();
            window.localStorage.setItem(timerCountFrom, tcfValue)
        }
        const {timerDuration} = this.props;
        let endOfTimer = parseInt(tcfValue) + parseInt(timerDuration);
        this.setCountdown(endOfTimer)
    };

    componentWillUnmount = () => {
        clearInterval(this.timerLoop);
    };

    render() {
        const {hoursLeft, minutesLeft, secondsLeft} = this.state;
        if (hoursLeft === 0 && minutesLeft === 0 && secondsLeft === 0) {
            return (<div className="timer" style={{fontSize: `${this.props.size}em`, display: 'flex', color: this.props.timerColor}}>Сейчас!</div>)
        } else {
            const h = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
            const m = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
            const s = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
            return (
                <div className="timer" style={{fontSize: `${this.props.size}em`, display: 'flex', color: this.props.timerColor}}>
                    <div className="timer-numbers">{h}</div>
                    <div className="timer-separator">:</div>
                    <div className="timer-numbers">{m}</div>
                    <div className="timer-separator">:</div>
                    <div className="timer-numbers">{s}</div>
                </div>
            )
        }

    }
}

export default Timer