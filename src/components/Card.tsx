import React, {useState} from "react";
import {CommentIcon} from "./icons/CommentIcon";

export const Card = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpen(!open)}
                style={{
                    margin: '0 5px',
                    padding: '0 20px',
                    border: "1px solid rgba(0, 0, 0, 0.175)",
                    borderRadius: 8,
                    background: "transparent"
                }}
            >+
            </button>
            <div className={open ? '' : 'display-none'}
                 style={{
                     padding: 20,
                     margin: 5,
                     border: "1px solid rgba(0, 0, 0, 0.175)",
                     borderRadius: 8
                 }}>
                <div style={{
                    padding: 10,
                    margin: '10px 5px',
                    border: "1px solid rgba(0, 0, 0, 0.175)",
                    borderRadius: 8
                }}>
                    name card
                </div>
                <div style={{
                    textAlign: "left",
                    padding: 10,
                    margin: '10px 5px',
                    border: "1px solid rgba(0, 0, 0, 0.175)",
                    borderRadius: 8
                }}>
                    text card
                </div>
                <div style={{
                    textAlign: "left",
                    marginLeft: 10
                }}>
                    <CommentIcon/> {0}
                </div>
            </div>
        </>
    )
}