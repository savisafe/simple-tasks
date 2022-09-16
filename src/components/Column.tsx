import React, {useState} from "react";

type Props = {
    name: string
}
export const Column = ({name}: Props) => {
    const [nameCol, setNameCol] = useState(name)
    const [open, setOpen] = useState(false)

    const handleKeyDown = (e: any) => {
        if (e.key === 'Enter') {
            setOpen(!open)
        }
    }

    return (
        <div style={{
            padding: 20,
            margin: 5,
            border: "1px solid rgba(0, 0, 0, 0.175)",
            borderRadius: 8,
        }}>
            <div onClick={() => setOpen(!open)}
                 className={open ? 'display-none' : ''}
                 style={{
                     cursor: "pointer",
                     fontWeight: 700,
                     fontSize: 18,
                 }}
            >{nameCol}</div>
            <div style={{
                display: "flex",
                justifyContent: "space-around",
            }}>
                <textarea
                    style={{
                        height: 30,
                        width: 150,
                    }}
                    className={open ? '' : 'display-none'}
                    name="name"
                    value={nameCol}
                    onChange={(e) => setNameCol(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
                <button
                    onClick={() => setOpen(!open)}
                    className={open ? '' : 'display-none'}
                    style={{
                        border: "1px solid rgba(0, 0, 0, 0.175)",
                        borderRadius: 8,
                        background: "transparent",
                    }}
                >rename
                </button>
            </div>
        </div>
    )
}