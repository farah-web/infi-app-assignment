import React, { useState, useEffect } from 'react'

const Timer = (props) => {

    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;


    useEffect(() => {
        timerRun();
        const interval = setInterval(timerRun, 10)

        return () => {

            clearInterval(interval)
        }
    }, [])

    const timerRun = () => {

        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;

        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
    }

    return (
        <div className='timer'>
            {props.counter ?
                (
                    <div>
                        <span className='timer__digits'>{time.h >= 10 ? time.h : '0' + time.h}</span>&nbsp;:&nbsp;
                        <span className='timer__digits'>{time.m >= 10 ? time.m : '0' + time.m}</span>&nbsp;:&nbsp;
                        <span className='timer__digits'>{time.s >= 10 ? time.s : '0' + time.s}</span>&nbsp;:&nbsp;
                        <span className='timer__digits'>{time.ms >= 10 ? time.ms : '0' + time.ms}</span>
                    </div>
                )
                : (
                    <div>
                    </div>
                )
            }

        </div>
    )
}

export default Timer


