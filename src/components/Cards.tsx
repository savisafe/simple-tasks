import React, {useState} from "react";

import {CommentIcon} from "./icons/CommentIcon";
import {useDispatch, useSelector} from "react-redux";
import {
    setTitle,
    setText,
    resetCard,
} from "./reducer";


export const Cards = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [save, setSave] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newText, setNewText] = useState('')
    const userName = useSelector((state: any) => state.userName.userName)
    const title = useSelector((state: any) => state.userName.card.title)
    const text = useSelector((state: any) => state.userName.card.text)
    const card = [useSelector((state: any) => state.userName.card)]

    const onChangeTitleCard = (newTitle: any) => {
        dispatch(setTitle(newTitle))
    }
    const onChangeTextCard = (newText: any) => {
        dispatch(setText(newText))
    }
    const clearCard = (title:any, text:any) => {
        dispatch(resetCard(title))
        dispatch(resetCard(text))
    }

    console.log(card)

    return (
        <>
            <div
                className={open ? '' : 'display-none'}
                style={{
                    padding: 15,
                    margin: 5,
                    border: "1px solid rgba(0, 0, 0, 0.175)",
                    borderRadius: 8
                }}>
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
                <textarea
                    style={{
                        margin: 4,
                        minHeight: 150,
                        width: '100%',
                        borderRadius: 8,
                        border: "1px solid rgba(0, 0, 0, 0.175)",
                    }}
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                />
                <div
                    style={{
                        textAlign: "left",
                        marginLeft: 10
                    }}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                        <button type="button"
                                onClick={() => {
                                    resetCard(newTitle)
                                    resetCard(newText)
                                    onChangeTitleCard(newTitle)
                                    onChangeTextCard(newText)
                                    setOpen(!open);
                                    setSave(!save);
                                }}
                                disabled={newTitle === ''}
                                className="btn btn-primary">Сохранить
                        </button>
                    </div>
                </div>
            </div>

            {(card || []).map((e: any) => (
                <div className={save ? '' : 'display-none'}>
                    <div
                        style={{
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
                        >{e.title || ''}</div>
                        <div
                            style={{
                                textAlign: 'left',
                                wordWrap: "break-word",
                            }}
                        >{e.text || ''}</div>
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
            ))}

            <button
                onClick={() => {
                    setOpen(!open)
                }}
                className={open ? 'display-none' : ''}
                style={{
                    fontWeight: 700,
                    fontSize: 18,
                    margin: '0 5px',
                    padding: '0 20px',
                    border: "1px solid rgba(0, 0, 0, 0.175)",
                    borderRadius: 8,
                    background: "transparent",
                }}
            >+
            </button>
        </>
    )
}