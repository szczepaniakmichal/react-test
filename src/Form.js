import React, { useState } from "react";
import { connect } from "react-redux";

import { addRate, editRate } from "./actions/appActions";

const Form = ({
                    addRate,
                    author = '',
                    callback,
                    editRate,
                    comment = '',
                    id,
                    rate = 0,
              }) => {

    const [authorInput, setAuthorInput] = useState(author);
    const [rateInput, setRateInput] = useState(rate);
    const [commentInput, setCommentInput] = useState(comment);

    const buttonText = id ? 'Edycja oceny' : 'Dodaj ocene';

    const handleChangeAuthor = (e) => setAuthorInput(e.target.value);
    const handleChangeRate = (e) => setRateInput(e.target.value);
    const handleChangeComment = (e) => setCommentInput(e.target.value);
    const handleOnSubmit = (e) => {

        e.preventDefault();
        if (!authorInput.length) return;
        const rateObject = {
            author: authorInput,
            comment: commentInput,
            id,
            rate: Number(rateInput),
        }

        console.log(rateObject);

        id ? editRate(rateObject) : addRate(rateObject);

        if (id) {
            callback();
        }
    }

    return (
        <form action="" onSubmit={handleOnSubmit}>
            <div>
                <label htmlFor="">Autor
                    <input type="text"
                           value={authorInput}
                           onChange={handleChangeAuthor}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="">Ocena
                    <input type="number"
                           value={rateInput}
                           onChange={handleChangeRate}
                    />
                </label>
            </div>
            <div>
                <label htmlFor="">Opinia
                    <input type="text"
                           value={commentInput}
                           onChange={handleChangeComment}
                    />
                </label>
            </div>
            <button type="submit">{buttonText}</button>
        </form>
    );
};

const connectActionsToProps = ({
    addRate,
    editRate
})

const FormConsumer = connect(null, connectActionsToProps)(Form)

export default FormConsumer;