import PropTypes from "prop-types";
import "./style.scss";

const ContentWrapper = ({ children, style }) => {
  return (
    <div className="contentWrapper" style={style}>
      {children}
    </div>
  );
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired, // Adaugarea validarii pentru propietatea "children"
  style: PropTypes.object, // Poți adăuga și validarea pentru propietatea "style" dacă este necesar
};

export default ContentWrapper;
