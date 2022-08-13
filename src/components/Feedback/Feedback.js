import { Component } from 'react';
import { Box } from 'components/Box';


export class Feedback extends Component {
   
    render() {
        return (
            <div>
                <Box>
                    <h2>Please leave feedback</h2>
                    <div>
                        <button onClick={this.sendFeedback}>Good</button>
                        <button onClick={this.sendFeedback}>Neutral</button>
                        <button onClick={this.sendFeedback}>Bad</button>
                    </div>
                </Box>
                <Box>
                    <h2>Statistics</h2>
                    <ul>
                        <li>Good: {this.state.good}</li>
                        <li>Neutral: {this.state.neutral}</li>
                        <li>Bad: {this.state.bad}</li>
                        <li>Total: {this.countTotalFeedback()}</li>
                        <li>Positive feedback: {this.countPositiveFeedbackPercentage()}%</li>
                    </ul>
                </Box>
            </div>
        )
    }
}