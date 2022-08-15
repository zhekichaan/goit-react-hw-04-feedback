import styled from "styled-components";
import PropTypes from 'prop-types';


export const FeedbackOptions = ({
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

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired
}

const FeedbackWrapper = styled.div`
    display: flex;
    gap: 8px;
`