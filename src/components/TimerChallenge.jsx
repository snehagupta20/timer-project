import React, { useRef, useState } from 'react'
import ResultModal from './ResultModal';


// let timer;

const TimerChallenge = ({ title, targetTime }) => {

    const timer = useRef();
    const dialog = useRef();
    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart() {
        timer.current = setTimeout(() => {
            setTimerExpired(true);
            dialog.current.showModal();
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    function handleStop() {
        clearTimeout(timer.current);
        setTimerStarted(false);
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} result="lost"></ResultModal>
            <section className='challenge'>
                <h2>{title}</h2>
                {/* {timerExpired && <p>You Lost!</p>} */}
                <p className='challenge-time'>
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerStarted ? 'active' : ''}>
                    {timerStarted ? 'Timer is running' : 'Timer is not running'}
                </p>
            </section>
        </>
    )
}

export default TimerChallenge
