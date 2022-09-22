import React from "react";
import {UserIcon} from "../icons/UserIcon";

type Props = {
    userName: string;
    comment: string;
}
export const CommentsColOne = ({userName, comment}: Props) => {


    return (
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
                    {userName}
                </div>
            </div>
            <div
                style={{
                    textAlign: "left"
                }}>
                {comment}
            </div>
        </div>

    )
}
