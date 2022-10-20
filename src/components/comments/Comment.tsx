import React, {useState} from "react";
import {UserIcon} from "../icons/UserIcon";
import EditIcon from "../icons/EditIcon";
import CheckMarkIcon from "../icons/checkMarkIcon";

type Props = {
    userName: string;
    comment: string;
}
export const Comment = ({userName, comment}: Props) => {
    const [commentValue, setCommentValue] = useState('')
    const [edit, setEdit] = useState(false)

    return (
        <div
            style={{
                marginTop: 15,
                padding: 5,
                display: "block",
                borderRadius: 8,
                border: "1px solid rgba(0, 0, 0, 0.175)",
                background: `${edit ? '#0d6efd' : ''}`,
            }}>
            <div
                style={{
                    display: "flex",
                    justifyContent: 'space-between',
                    alignItems: "center",
                }}>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            width: 30
                        }}>
                        <UserIcon fill={edit ? 'white' : '#1C53F4'}/>
                    </div>
                    <div
                        style={{
                            marginLeft: 8,
                            color: `${edit ? 'white' : 'rgba(0, 0, 0, 0.175)'}`,
                            fontSize: 12,
                            textAlign: "left",
                        }}>
                        {userName}
                    </div>
                </div>
                <div
                    style={{
                        marginTop: '-10px',
                        color: 'rgba(0, 0, 0, 0.175)',
                    }}
                    onClick={() => {setEdit(!edit)}}
                >
                    {edit ? (<CheckMarkIcon/>) : (<EditIcon/>)}
                </div>
            </div>
            <div
                style={{
                    textAlign: "left"
                }}>
                {edit ? (
                    <input
                        style={{
                            width: '100%',
                            border: 0,
                            height: 'auto',
                            background: `${edit ? '#0d6efd' : ''}`,
                            color: `${edit ? 'white' : ''}`,

                        }}
                        value={comment}
                        onChange={(e) => setCommentValue(e.target.value)}
                        placeholder="Изменить комментарий"
                    />
                ) : (
                    <>
                        {comment}
                    </>
                )}


            </div>
        </div>

    )
}
