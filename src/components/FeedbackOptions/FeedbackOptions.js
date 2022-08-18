import PropTypes from 'prop-types';
import { FeedbackWrapper } from './FeedbackOptions.styled';

export const FeedbackOptions = ({
    options,
    onLeaveFeedback
}) => {
    return (
        <FeedbackWrapper>
            {options.map(option => (
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
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

