import ReactDOM from 'react-dom';

const tooltipElement = document.getElementById("portal");

const Portal = ({ children }) => {
  return ReactDOM.createPortal(children, tooltipElement);
};

export default Portal