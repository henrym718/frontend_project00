const Modal = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="modal-close-button" onClick={onClose}>
                            X
                        </button>
                        <div className="modal-content">{children}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
