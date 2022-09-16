import React, {useState} from "react";
import {UserIcon} from "./icons/UserIcon";

export const CardPopup = () => {
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
                            <h5 className="modal-title">Карточка</h5>
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
                                Текст карточкиТекст карточкиТекст карточкиТекст карточкиТекст карточкиТекст
                                карточкиТекст карточкиТекст карточкиТекст карточкиТекст карточкиТекст карточкиТекст
                                карточкиТекст карточкиТекст карточкиТекст карточкиТекст карточкиТекст карточкиТекст
                                карточкиТекст карточкиТекст карточкиТекст карточкиТекст карточкиТекст карточкиТекст
                                карточки
                            </div>
                        </div>
                        <div className="modal-body">
                            <div>
                                0 комментариев
                            </div>

                            <div style={{
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
                                }}>Комментарий пользователя</div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button"
                                    onClick={() => {
                                        // onChangeUserName(name)
                                        setOpen(!open)
                                    }}
                                    className="btn btn-primary"
                                // disabled={name === ''}
                            >Сохранить
                            </button>

                            <button type="button"
                                    onClick={() => {
                                        // onChangeUserName(name)
                                        setOpen(!open)
                                    }}
                                    className="btn btn-link"
                                // disabled={name === ''}
                            >Изменить карточку
                            </button>

                            <button type="button"
                                    onClick={() => {
                                        // onChangeUserName(name)
                                        setOpen(!open)
                                    }}
                                    className="btn btn-danger"
                                // disabled={name === ''}
                            >Удалить карточку
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}