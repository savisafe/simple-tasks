import React from "react";

import {Column} from "./Column";
import {CreateCard} from "./CreateCard";
import {Card} from "./Card";
import {useSelector} from "react-redux";

export const Board = () => {
    const cardsToDo = useSelector( (state:any) => state.userName.cardsToDo)
    const userName = useSelector((state: any) => state.userName.userName)

    return (
        <>
            <div className="container text-center"
                 style={{marginTop: "2%"}}>
                <div className="row">
                    <div className="col">
                        <Column name={`To do`}/>
                        <CreateCard/>
                        {
                            cardsToDo.map( (e:any,i:any) => (
                                <Card
                                    key={i}
                                    userName={userName}
                                    title={e.title}
                                    text={e.text}
                                />
                            ))
                        }

                    </div>
                    <div className="col">
                        <Column name={`In progress`}/>

                    </div>
                    <div className="col">
                        <Column name={`Testing`}/>

                    </div>
                    <div className="col">
                        <Column name={`Done`}/>

                    </div>
                </div>
            </div>
        </>
    )
}