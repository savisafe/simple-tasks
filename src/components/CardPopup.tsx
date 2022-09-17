import React, {useState} from "react";
import {UserIcon} from "./icons/UserIcon";
import {setCardsToDo} from "./reducer";
import {useDispatch, useSelector} from "react-redux";

type Props = {
    userName: string;
    title: string;
    text: string;
}

export const CardPopup = ({userName, title, text}: Props) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [change, setChange] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const cardsToDo = useSelector( (state:any) => state.userName.cardsToDo)

    console.log(cardsToDo)

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
                            <h5 className="modal-title">
                                {change ? (
                                    <textarea
                                        value={newTitle}
                                        onChange={(e) => setNewTitle(e.target.value)}
                                        style={{
                                            margin: 4,
                                            fontWeight: 700,
                                            height: 30,
                                            width: '100%',
                                            borderRadius: 8,
                                            border: "1px solid rgba(0, 0, 0, 0.175)",
                                        }}
                                        placeholder="Название вашей карточки"
                                    />
                                ) : (
                                    <div
                                        onClick={() => setChange(!change)}>
                                        {title}
                                    </div>
                                )}
                            </h5>
                            <button type="button"
                                    onClick={() => setOpen(!open)}
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <div style={{
                                textAlign: 'left'
                            }}>
                                {text}
                            </div>
                        </div>
                        <div
                            className="modal-body">

                            <div
                                style={{
                                    color: 'rgba(0, 0, 0, 0.175)',
                                    fontSize: 12,
                                    textAlign: "left",
                                }}>
                                Автор: {userName}
                            </div>

                            <div>
                                0 комментариев
                            </div>

                            <div style={{
                                marginTop: 15,
                                display: "flex",
                                alignItems: "center",
                            }}
                            >
                                <textarea
                                    style={{
                                        width: '80%',
                                        borderRadius: 8,
                                        height: 38,
                                        border: "1px solid rgba(0, 0, 0, 0.175)",
                                    }}
                                    placeholder="Написать комментарий"
                                />
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    style={{
                                        marginLeft: 8
                                    }}
                                >Отправить
                                </button>
                            </div>

                            <div
                                style={{
                                    marginTop: 15,
                                    padding: 5,
                                    display: "block",
                                    borderRadius: 8,
                                    border: "1px solid rgba(0, 0, 0, 0.175)",
                                }}>
                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}>
                                    <div
                                        style={{
                                            width: 30
                                        }}>
                                        <UserIcon/>
                                    </div>
                                    <div
                                        style={{
                                            marginLeft: 8,
                                            color: 'rgba(0, 0, 0, 0.175)',
                                            fontSize: 12,
                                            textAlign: "left",
                                        }}>
                                        Имя пользователя
                                    </div>
                                </div>
                                <div
                                    style={{
                                        textAlign: "left"
                                    }}>Комментарий пользователя
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            {change ? (
                                <button type="button"
                                        onClick={() => {
                                            setChange(!change)
                                        }}
                                        className="btn btn-primary"
                                >Сохранить
                                </button>
                            ) : (
                                <>
                                    <button type="button"
                                            onClick={() => {
                                                setChange(!change)
                                            }}
                                            className="btn btn-link"
                                    >Изменить карточку
                                    </button>

                                    <button type="button"
                                            onClick={() => {

                                            }}
                                            className="btn btn-danger"
                                    >Удалить карточку
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}