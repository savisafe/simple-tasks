import React, {useState} from "react";
import {CommentIcon} from "./icons/CommentIcon";
import {useDispatch, useSelector} from "react-redux";

import {resetCard, setCard} from "./WelcomePopup/reducer";

export const Card = () => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [save, setSave] = useState(false)
    const [nameCard, setNameCard] = useState('')
    const [valueCard, setValueCard] = useState('')
    const userName = useSelector((state: any) => state.userName.userName)

    const onChangeNameCard = (nameCard:any) => {
        dispatch(setCard(nameCard))
        console.log(nameCard)
    }
    const resetNameCard = (nameCard:any) => {
        dispatch(resetCard(nameCard))
        console.log(nameCard)
    }

    return (
        <>
            <div>
                <div className={open ? '' : 'display-none'}
                     style={{
                         padding: 20,
                         margin: 5,
                         border: "1px solid rgba(0, 0, 0, 0.175)",
                         borderRadius: 8
                     }}>
                <textarea
                    style={{
                        fontWeight: 700,
                        height: 30,
                        width: '100%',
                        borderRadius: 8,
                        border: "1px solid rgba(0, 0, 0, 0.175)",
                    }}
                    className={open ? '' : 'display-none'}
                    name="name"
                    value={nameCard}
                    onChange={(e) => {
                        setNameCard(e.target.value)
                    }}
                />
                    <textarea
                        style={{
                            minHeight: 150,
                            width: '100%',
                            borderRadius: 8,
                            border: "1px solid rgba(0, 0, 0, 0.175)",
                        }}
                        className={open ? '' : 'display-none'}
                        name="name"
                        value={valueCard}
                        onChange={(e) => setValueCard(e.target.value)}
                    />
                    <div style={{
                        textAlign: "left",
                        marginLeft: 10
                    }}>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <button type="button"
                                    onClick={() => {
                                        if (nameCard === '') {
                                            setOpen(open);
                                            setSave(save);
                                        } else {
                                            onChangeNameCard(nameCard)
                                            setOpen(!open);
                                            setSave(!save);
                                        }
                                    }}
                                    className="btn btn-primary">Сохранить
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={save ? '' : 'display-none'}
                 style={{
                     padding: 20,
                     margin: 5,
                     border: "1px solid rgba(0, 0, 0, 0.175)",
                     borderRadius: 8
                 }}>
                <div
                    style={{
                        fontWeight: 700,
                    }}
                >{nameCard}</div>
                <div
                    style={{
                        textAlign: 'left'
                    }}
                >{valueCard}</div>
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

            <button
                onClick={() => {
                    if (nameCard != '') {
                        resetNameCard(nameCard)
                    }
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