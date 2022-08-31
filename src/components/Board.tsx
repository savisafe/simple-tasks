import React, {useState} from "react";

export const Board = () => {
    const [nameCol, setNameCol] = useState('To Do')
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="container text-center" style={{marginTop: "2%"}}>
                <div className="row">
                    <div className="col"
                         style={{padding: 20, margin: 5, border: "1px solid rgba(0, 0, 0, 0.175)", borderRadius: 8}}>

                        <div>
                            <div onClick={() => setOpen(!open)}
                                 className={open ? 'display-none' : ''}
                                 style={{cursor: "pointer"}}
                            >{nameCol}</div>
                            <div style={{display: "flex", justifyContent: "space-around"}}>
                                <textarea
                                    style={{height: 30, width: 150}}
                                    className={open ? '' : 'display-none'}
                                    name="name"
                                    value={nameCol}
                                    onChange={(e) => setNameCol(e.target.value)}
                                />
                                <button
                                    onClick={() => setOpen(!open)}
                                    className={open ? '' : 'display-none'}
                                    style={{border: "1px solid rgba(0, 0, 0, 0.175)", borderRadius: 8, background: "transparent"}}
                                >rename
                                </button>
                            </div>


                        </div>
                    </div>
                    <div className="col"
                         style={{padding: 20, margin: 5, border: "1px solid rgba(0, 0, 0, 0.175)", borderRadius: 8}}>
                        In Progress
                    </div>
                    <div className="col"
                         style={{padding: 20, margin: 5, border: "1px solid rgba(0, 0, 0, 0.175)", borderRadius: 8}}>
                        Testing
                    </div>
                    <div className="col"
                         style={{padding: 20, margin: 5, border: "1px solid rgba(0, 0, 0, 0.175)", borderRadius: 8}}>
                        Done
                    </div>
                </div>
            </div>
        </>
    )
}