import { useState } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";
import { GlobalStyle } from "./GlobalStyles";
import { Box } from "./Box";

export const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(state => state + 1)
        break;

      case 'neutral':
        setNeutral(state => state + 1)
        break;

      case 'bad':
        setBad(state => state + 1)
      break;

      default:
        console.log("Unknown feedback type");;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round(( good / countTotalFeedback() ) * 100)
  }


  return (
    <Box p="16px">
      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onLeaveFeedback}></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback()} positivePercentage={countPositiveFeedbackPercentage()} /> : <Notification message="There is no feedback" />}
      </Section>
      <GlobalStyle />
    </Box>
    );
  
}