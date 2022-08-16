import styled from "styled-components";
import PropTypes from 'prop-types';


export const FeedbackOptions = ({
    options,
    onLeaveFeedback
}) => {
    return (
            <FeedbackWrapper>
                {Object.keys(options).map(option => (
                    <button
                        key={option}
                        type="button"
                        name={option}
                        onClick={() => onLeaveFeedback(option)}
                    >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                ))}
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