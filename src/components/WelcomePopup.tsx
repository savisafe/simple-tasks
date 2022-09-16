import React, {useState} from "react";
import {useDispatch} from "react-redux";

import {setUserName} from "./reducer";

export const WelcomePopup = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('')

    const handleKeyDown = (e:any) => {
        if (e.key === 'Enter') {
            dispatch(setUserName(name))
            setOpen(!open)
        }
    }

    const onChangeUserName = (name:any) => {
        dispatch(setUserName(name))
    }

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
                            <textarea
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onKeyDown={handleKeyDown}
                                style={{
                                    borderRadius: 8,
                                    height: 30,
                                    border: "1px solid rgba(0, 0, 0, 0.175)",
                                    whiteSpace: "nowrap",
                                }}
                                placeholder=" Как тебя зовут?"
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                    onClick={() => {
                                        onChangeUserName(name)
                                        setOpen(!open)
                                    }}
                                    className="btn btn-primary"
                                    disabled={name === ''}
                            >Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}