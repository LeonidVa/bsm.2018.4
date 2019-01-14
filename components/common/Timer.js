import React, {Component} from 'react'
import countdown from 'countdown';
import styled from 'styled-components';

const Timer = styled.div`
    margin: .10em 0;
    margin-right: 0.33em;
    align-items: center;
    color: #ffffff;
    @media (max-width: 900px) {
        font-size: 1.2em;
    }
    @media (max-width: 660px) {
        font-size: 1em;
    }
`;

class Comp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hoursLeft: 0,
            minutesLeft: 0,
            secondsLeft: 0,
            size: 1.6,
            duration: 0,
            color: "#ffffff",
        };

        if (props.size !== undefined && props.size !== null) {
            this.state.size = props.size
        }
        if (props.duration !== undefined && props.duration !== null) {
            this.state.duration = props.duration
        }
        if (props.color !== undefined && props.color !== null) {
            this.state.color = props.color
        }

    }


    setCountdown(endOfTimer) {
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

    componentDidMount() {
        const timerCountFrom = 'WP3C8HmqrW';
        let tcfValue = window.localStorage.getItem(timerCountFrom);
        if (!tcfValue) {
            const time = new Date();
            tcfValue = time.getTime();
            window.localStorage.setItem(timerCountFrom, tcfValue)
        }
        let endOfTimer = parseInt(tcfValue) + parseInt(this.state.duration) * 1000;
        this.setCountdown(endOfTimer)
    };

    componentWillUnmount() {
        clearInterval(this.timerLoop);
    };

    render() {
        const {hoursLeft, minutesLeft, secondsLeft} = this.state;
        if (this.props.duration > 0 && hoursLeft === 0 && minutesLeft === 0 && secondsLeft === 0) {
            return (<div className="timer" style={{fontSize: `${this.state.size}em`, display: 'flex', color: this.state.color}}>Сейчас!</div>)
        } else {
            const h = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
            const m = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
            const s = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
            return (
                <Timer className="timer" style={{fontSize: `${this.state.size}em`, display: 'flex', color: this.state.color}}>
                    <div className="timer-numbers">{h}</div>
                    <div className="timer-separator">:</div>
                    <div className="timer-numbers">{m}</div>
                    <div className="timer-separator">:</div>
                    <div className="timer-numbers">{s}</div>
                </Timer>
            )
        }

    }
}

export default Comp