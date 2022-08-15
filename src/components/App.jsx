import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from "./GlobalStyles";
import { Box } from "./Box";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  onLeaveFeedback = e => {
    if(e.currentTarget.textContent === "Good") {
      this.setState({
        good: this.state.good +1
      })
    } else if(e.currentTarget.textContent === "Neutral") {
      this.setState({
        neutral: this.state.neutral +1
      })
    } else {
      this.setState({
        bad: this.state.bad +1
    })
  }
}

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round(( this.state.good / this.countTotalFeedback() ) * 100)
  }

  render() {
    return (
          <Box p="16px">
            <Section title="Please leave feedback">
              <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback}></FeedbackOptions>
            </Section>
            <Section title="Statistics">
              {this.countTotalFeedback() ? <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()} /> : <Notification message="There is no feedback" />}
            </Section>
            <GlobalStyle />
          </Box>
        );
  }
}