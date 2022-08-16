import PropTypes from 'prop-types';
import { FeedbackWrapper } from './FeedbackOptions.styled';

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

