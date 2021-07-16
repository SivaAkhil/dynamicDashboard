import ReactDOM from "react-dom";
import { connect } from "react-redux";

import "./modal.css";

const Modal = (props) => {
  const { children, status } = props;

  if (status) {
    return ReactDOM.createPortal(
      <div className="modal-overlay">
        <div className="modal-content">{children}</div>
      </div>,
      document.getElementById("modal")
    );
  }

  return null;
};

const mapStatetoProps = (state) => {
  return {
    status: state.modal.status,
  };
};

export default connect(mapStatetoProps)(Modal);
