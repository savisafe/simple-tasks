import React from "react";
import {UserIcon} from "../icons/UserIcon";
import {useSelector} from "react-redux";

export const CommentsColOne = () => {
    const cards = useSelector((state: any) => state.userName.cardsColOne)
    const userName = useSelector((state: any) => state.userName.userName)



    return (
        <>
            {
                cards.map((e: any, i: any) => (
                    <div
                        key={i}
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
                            {e.comments}
                        </div>
                    </div>
                ))
            }
        </>

    )
}
