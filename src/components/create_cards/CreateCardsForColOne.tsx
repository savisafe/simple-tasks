import React, {useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {setCardsColOne} from "../reducer";
import {CardForColOne} from "../cards/CardForColOne";

type Props = {
    name: string;
}
export const CreateCardsForColOne = ({name}: Props) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [save, setSave] = useState(false)
    const [newTitle, setNewTitle] = useState('')
    const [newText, setNewText] = useState('')
    const userName = useSelector((state: any) => state.userName.userName)
    const cards = useSelector((state: any) => state.userName.cardsColOne)

    const onChangeCard = (title: any, text: any) => {
        const cards = {
            title,
            text,
            id: Date.now(),
            comments: [],
        }
        dispatch(setCardsColOne(cards))
    }

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
                                    onChangeCard(newTitle, newText)
                                    setOpen(!open);
                                    setSave(!save);
                                    setNewTitle('')
                                    setNewText('')
                                }}
                                disabled={newTitle === ''}
                                className="btn btn-primary">Сохранить
                        </button>
                    </div>
                </div>
            </div>

            {
                cards.map((e: any, i: any) => (
                    <CardForColOne
                        key={i}
                        userName={userName}
                        title={e.title}
                        text={e.text}
                        id={e.id}
                        col={name}
                    />
                ))
            }

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