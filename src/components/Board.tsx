import React, {useState} from "react";
import {Column} from "./Column";
import {Card} from "./Card";

export const Board = () => {

    return (
        <>
            <div className="container text-center"
                 style={{marginTop: "2%"}}>
                <div className="row">
                    <div className="col">
                        <Column name={`To do`}/>
                        <Card/>
                    </div>
                    <div className="col">
                        <Column name={`In progress`}/>
                        <Card/>
                    </div>
                    <div className="col">
                        <Column name={`Testing`}/>
                        <Card/>
                    </div>
                    <div className="col">
                        <Column name={`Done`}/>
                        <Card/>
                    </div>
                </div>
            </div>
        </>
    )
}