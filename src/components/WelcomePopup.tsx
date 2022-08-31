import React, {useState} from "react";

export const Popup = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className={`modal ${open ? 'visibility' : ''}`}
                 style={{
                     overflow: "hidden",
                     display: "block",
                     background: "rgba(0, 0, 0, 0.175)"
            }} tabIndex={-1}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Привет, давай знакомиться</h5>
                            <button type="button"
                                    onClick={() => setOpen(!open)}
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <input placeholder="Как тебя зовут?"/>
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    onClick={() => setOpen(!open)}
                                    className="btn btn-primary">Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}