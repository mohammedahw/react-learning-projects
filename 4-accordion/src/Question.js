import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({info, title}) => {
    const [data, setData] = useState(false)

    const showInfo = () => {
        if (data === info) {
            setData(false)
        } else {
            setData(info)
        }
    }

    return (
    <article className="question">
        <header>
        <h4>{title}</h4>
        <button className="btn" onClick={showInfo}>
            {data ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        </header>
        <p>{data}</p>
    </article>
    );
    };

export default Question;