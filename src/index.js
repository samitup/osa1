import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {

    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        setGood(good + 1)
    }

    const handleNeutral = () => {
        setNeutral(neutral + 1)
    }

    const handleBad = () => {
        setBad(bad + 1)
    }
    const Statistics = (props) => {
        let total = good + neutral + bad
        let average = ((good - bad) / (total))
        let positive = (good / total) * 100
        if ((good + neutral + bad) !== 0) {

            return (
                <div>
                    <h2>statistic</h2>
                    <Statistic text="good" value={good} />
                    <Statistic text="neutral" value={neutral} />
                    <Statistic text="bad" value={bad} />
                    <Statistic text="all" value={total} />
                    <Statistic text="average" value={average} />
                    <Statistic text="positive" value={positive} per="%"/>
                </div>
            )
        } else {
            return (
                <p>No feedback given</p>
            )
        }

    }
    const Statistic = ({ text, value,per }) => (
        <table>
            <tbody>
            <tr>
            <td>{text}</td>
            <td>{value}</td>
            <td>{per}</td>
            </tr>
            </tbody>
        </table>
    )
    const Button = (props) => (
        <div>
            <button onClick={handleGood}>Good</button>
            <button onClick={handleNeutral}>Neutral</button>
            <button onClick={handleBad}>Bad</button>
        </div>
    )


    return (
        <div>
            <h1>give feedback</h1>
            <Button />
            <Statistics />
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)