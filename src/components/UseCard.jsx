import './UseCard.css';
import PropTypes from 'prop-types';


const UseCard = ({ title, description }) => {
  return (
    <div className="use-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

UseCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default UseCard;