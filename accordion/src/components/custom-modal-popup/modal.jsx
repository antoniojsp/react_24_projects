


export default function Modal({ id, header, body, footer, closeModal }) {


    return (
        <div id={id || "Modal"} className="modal">
            <div className="modal-content">
                <div className="header">
                    <span className="close-modal-icon" onClick={closeModal}> &times; </span>
                    {header ? header : <h1>"Header"</h1>}
                </div>
                <div className="body">
                    {body ? body : <div>
                        <p>This is our body</p>
                    </div>
                    }
                </div>
                <div className="footer">
                    {footer ? footer : <h2>
                        This is Our footer
                    </h2>
                    }
                </div>
            </div>
        </div>
    )
}