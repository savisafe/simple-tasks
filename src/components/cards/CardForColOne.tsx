import React, {useState} from "react";
import {CommentIcon} from "../icons/CommentIcon";
import {UserIcon} from "../icons/UserIcon";
import {useDispatch, useSelector} from "react-redux";
import {changeCardColOne, removeCardColOne} from "../reducer";

type Props = {
    userName: string;
    title: string;
    text: string;
    id: number | null | undefined;
    col: string;
}

export const CardForColOne = ({userName, title, text, id, col}: Props) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [change, setChange] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const [newText, setNewText] = useState(text)

    const changeCard = (title: any, text: any) => {
        const cards = {
            title,
            text,
            id,
        }
        dispatch(changeCardColOne(cards))
    }

    return (
        <>
            <div onClick={() => setOpen(!open)}>
                <div
                    style={{
                        cursor: "pointer",
                        padding: 20,
                        margin: 5,
                        border: "1px solid rgba(0, 0, 0, 0.175)",
                        borderRadius: 8
                    }}>
                    <div
                        style={{
                            fontWeight: 700,
                            wordWrap: "break-word",
                        }}
                    >{title}</div>
                    <div
                        style={{
                            textAlign: 'left',
                            wordWrap: "break-word",
                        }}
                    >{text}</div>
                    <div
                        style={{
                            width: '100%'
                        }}
                    >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            color: 'rgba(0, 0, 0, 0.175)',
                            fontSize: 12,
                        }}>
                            {userName || 'Пользователь'}
                            <div>
                                <CommentIcon/> {0}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`modal ${open ? '' : 'visibility'}`}
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
                                    onClick={() => {
                                        setOpen(!open);
                                    }}
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <div style={{
                                textAlign: 'left'
                            }}>
                                {change ? (
                                    <textarea
                                        value={newText}
                                        onChange={(e) => setNewText(e.target.value)}
                                        style={{
                                            width: '100%',
                                            minHeight: 200,
                                            margin: 4,
                                            fontWeight: 700,
                                            borderRadius: 8,
                                            border: "1px solid rgba(0, 0, 0, 0.175)",
                                        }}
                                        placeholder=""
                                    />
                                ) : (
                                    <div
                                        style={{
                                            wordBreak: 'break-all'
                                        }}
                                        onClick={() => setChange(!change)}>
                                        {text}
                                    </div>
                                )}
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
                                <div>
                                    Колонка: {col}
                                </div>
                                <div>
                                    Автор: {userName}
                                </div>
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
                                            changeCard(newTitle, newText)
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
                                                dispatch(removeCardColOne(Number(id)));
                                                setOpen(!open);
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