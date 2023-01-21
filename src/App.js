import React from "react"
import useWordGame from "./hooks/useWordGame"

function App() {
    const {newNumhandleChange,newNum} = useWordGame()
    const {
        textBoxRef, 
        handleChange, 
        text, 
        isTimeRunning, 
        timeRemaining, 
        startGame,
        wordCount} = useWordGame(newNum)
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={textBoxRef}
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
            <h4>set the time below with seconds</h4>
            <input
                    type="number"
                    value={newNum}
                    onChange={newNumhandleChange}
                    className="inpnum"
                />
        </div>
    )
}

export default App
