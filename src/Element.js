import React, { useState } from "react";

import Form from "./Form";

const Element = ({author, comment, id, rate}) => {

    const [isVisibleForm, setVisibleForm] = useState(false);

    const toggleElements = () => setVisibleForm(prev => !prev);

    const formOrButtonElement = isVisibleForm ? (
        <Form
            author={author}
            callback={toggleElements}
            comment={comment}
            id={id}
            rate={rate}
        />
    ) : (
        <button onClick={toggleElements}>
            Edytuj książkę
        </button>
    );


    return (
        <li>
            <p>
                Autor oceny: {author}
            </p>
            <p>
                Ocena: {rate}
            </p>
            <p>
                komentarz: {comment}
            </p>
            {formOrButtonElement}
        </li>
    );
}

export default Element;