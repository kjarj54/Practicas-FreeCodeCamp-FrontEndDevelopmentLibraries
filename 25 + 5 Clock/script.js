document.addEventListener('DOMContentLoaded', function() {
    // Constants
    const breakDecrement = document.getElementById('break-decrement');
    const breakIncrement = document.getElementById('break-increment');
    const sessionDecrement = document.getElementById('session-decrement');
    const sessionIncrement = document.getElementById('session-increment');
    const breakLengthElement = document.getElementById('break-length');
    const sessionLengthElement = document.getElementById('session-length');
    const timerLabel = document.getElementById('timer-label');
    const timeLeft = document.getElementById('time-left');
    const startStopButton = document.getElementById('start_stop');
    const resetButton = document.getElementById('reset');
    const beepSound = document.getElementById('beep');
  
    let breakLength = 5;
    let sessionLength = 25;
    let timerRunning = false;
    let timerInterval;
  
    function updateDisplay() {
      breakLengthElement.textContent = breakLength;
      sessionLengthElement.textContent = sessionLength;
      timeLeft.textContent = `${String(sessionLength).padStart(2, '0')}:00`;
    }
  
    function startTimer() {
      timerRunning = true;
      startStopButton.textContent = 'Pause';
      timerInterval = setInterval(updateTime, 1000);
    }
  
    function pauseTimer() {
      timerRunning = false;
      startStopButton.textContent = 'Resume';
      clearInterval(timerInterval);
    }
  
    function updateTime() {
      const [minutes, seconds] = timeLeft.textContent.split(':').map(Number);
      if (minutes === 0 && seconds === 0) {
        beepSound.play();
        if (timerLabel.textContent === 'Session') {
          timerLabel.textContent = 'Break';
          sessionLength = Number(breakLengthElement.textContent);
        } else {
          timerLabel.textContent = 'Session';
          sessionLength = Number(sessionLengthElement.textContent);
        }
        updateDisplay();
      } else {
        const newSeconds = seconds === 0 ? 59 : seconds - 1;
        const newMinutes = newSeconds === 59 ? minutes - 1 : minutes;
        timeLeft.textContent = `${String(newMinutes).padStart(2, '0')}:${String(newSeconds).padStart(2, '0')}`;
      }
    }
  
    function resetTimer() {
      clearInterval(timerInterval);
      timerRunning = false;
      startStopButton.textContent = 'Start';
      timerLabel.textContent = 'Session';
      breakLength = 5;
      sessionLength = 25;
      updateDisplay();
      beepSound.pause();
      beepSound.currentTime = 0;
    }
  
    function handleStartStopClick() {
      if (timerRunning) {
        pauseTimer();
      } else {
        startTimer();
      }
    }
  
    function handleBreakDecrement() {
      if (breakLength > 1) {
        breakLength--;
        updateDisplay();
      }
    }
  
    function handleBreakIncrement() {
      if (breakLength < 60) {
        breakLength++;
        updateDisplay();
      }
    }
  
    function handleSessionDecrement() {
      if (sessionLength > 1) {
        sessionLength--;
        updateDisplay();
      }
    }
  
    function handleSessionIncrement() {
      if (sessionLength < 60) {
        sessionLength++;
        updateDisplay();
      }
    }
  
    // Event listeners
    breakDecrement.addEventListener('click', handleBreakDecrement);
    breakIncrement.addEventListener('click', handleBreakIncrement);
    sessionDecrement.addEventListener('click', handleSessionDecrement);
    sessionIncrement.addEventListener('click', handleSessionIncrement);
    startStopButton.addEventListener('click', handleStartStopClick);
    resetButton.addEventListener('click', resetTimer);
  
    // Initialize display
    updateDisplay();
  });
  