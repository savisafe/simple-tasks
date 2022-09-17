import React, {useState} from "react";
import {CommentIcon} from "./icons/CommentIcon";
import {CardPopup} from "./CardPopup";

type Props = {
    userName: string;
    title: string;
    text: string;
}

export const Card = ({userName, title, text}: Props) => {
    const [save, setSave] = useState(false)
    const [open, setOpen] = useState(false)

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

            {open ? (
                <CardPopup
                    title={title}
                    text={text}
                    userName={userName}
                />
            ) : (
                <></>
            )}


        </>
    )
}