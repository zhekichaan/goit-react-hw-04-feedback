import styled from "styled-components"

export const FeedbackOptions = ({
    options,
    onLeaveFeedback
}) => {
    return (
            <FeedbackWrapper>
                <button onClick={onLeaveFeedback}>Good</button>
                <button onClick={onLeaveFeedback}>Neutral</button>
                <button onClick={onLeaveFeedback}>Bad</button>
            </FeedbackWrapper>
    )
}

const FeedbackWrapper = styled.div`
    display: flex;
    gap: 8px;
`