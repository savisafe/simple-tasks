import React from "react";

import {Column} from "./Column";
import {CardsToDo} from "./Cards/CardsToDo";
import {CardsInProgress} from "./Cards/CardsInProgress";
import {CardsTesting} from "./Cards/CardsTesting";
import {CardsDone} from "./Cards/CardsDone";

export const Board = () => {

    return (
        <>
            <div className="container text-center"
                 style={{marginTop: "2%"}}>
                <div className="row">
                    <div className="col">
                        <Column name={`To do`}/>
                        <CardsToDo/>
                    </div>
                    <div className="col">
                        <Column name={`In progress`}/>
                        <CardsInProgress/>
                    </div>
                    <div className="col">
                        <Column name={`Testing`}/>
                        <CardsTesting/>
                    </div>
                    <div className="col">
                        <Column name={`Done`}/>
                        <CardsDone/>
                    </div>
                </div>
            </div>
        </>
    )
}