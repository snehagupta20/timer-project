import React, { useState } from 'react'

const TimerChallenge = ({title, targetTime}) => {

    const [timerStarted, setTimerStarted] = useState(false);
    const [timerExpired, setTimerExpired] = useState(false);

    function handleStart(){
        setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
        setTimerStarted(true);
    }

    function handleStop(){
        
    }

  return (
    <section className='challenge'>
      <h2>{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>
            {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : ''}>
        { timerStarted ? 'Timer is running' : 'Timer is not running'}
      </p>
    </section>
  )
}

export default TimerChallenge
