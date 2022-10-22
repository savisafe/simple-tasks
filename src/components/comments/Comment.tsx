import React, {useState} from "react";
import {useDispatch} from "react-redux";

import {UserIcon} from "../icons/UserIcon";
import EditIcon from "../icons/EditIcon";
import CheckMarkIcon from "../icons/CheckMarkIcon";
import {createCommentColOne, removeCardColOne, removeCommentColOne, updateCommentColOne} from "../reducer";
import CloseIcon from "../icons/TrashIcon";
import TrashIcon from "../icons/TrashIcon";

type Props = {
    userName: string;
    comment: string;
    commentId: string;
    id: number | null | undefined;
    comments: Array<any>;

}
export const Comment = ({userName, comment, id, commentId, comments}: Props) => {
    const dispatch = useDispatch()
    const [commentValue, setCommentValue] = useState(comment)
    const [newComment, setNewComment] = useState('')
    const [edit, setEdit] = useState(false)

    console.log(commentId)

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            setEdit(!edit)
            console.log(comment)
        }
    }

    return (
        <div
            style={{
                marginTop: 15,
                padding: 5,
                height: 100,
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
                    onClick={() => {
                        setEdit(!edit)
                    }}
                >
                    {edit ? (
                            <div style={{display: "flex"}}>
                                <div
                                    onClick={() => {
                                        dispatch(removeCommentColOne(Number(commentId)));
                                    }}
                                >
                                    <TrashIcon/>
                                </div>
                                <div>
                                    <CheckMarkIcon/>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div style={{display: "flex"}}>
                                <div>
                                    <EditIcon/>
                                </div>
                            </div>
                        )}
                </div>
            </div>
            <div
                style={{
                    textAlign: "left"
                }}>
                {edit ? (
                    <>
                        <textarea
                            style={{
                                width: '100%',
                                border: 'none',
                                outline: 'none',
                                height: 'auto',
                                background: `${edit ? '#0d6efd' : ''}`,
                                color: `${edit ? 'white' : ''}`,
                            }}
                            value={commentValue}
                            onChange={(e) => {
                                setCommentValue(e.target.value);
                                setNewComment(commentValue)
                            }}
                            placeholder="Изменить комментарий"
                            onKeyDown={handleKeyDown}
                        />
                    </>

                ) : (
                    <>
                        {comment}
                    </>
                )}
            </div>
        </div>

    )
}
