import styled from "styled-components"

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage
}) => {
    return (
        <StatisticsWrapper>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positivePercentage}%</li>
        </StatisticsWrapper>
    )
}

const StatisticsWrapper = styled.ul`
    list-style: none;
`