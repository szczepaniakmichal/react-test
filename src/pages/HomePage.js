import React from "react";

import { Article } from "../components/Article";

const articles = [
    {
        id: 1,
        title: "title-1",
        author: "author-1",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem commodi consequuntur distinctio eum illum nihil quidem quis sed veniam! Adipisci autem eligendi incidunt laboriosam omnis optio perspiciatis quibusdam totam!"
    },    {
        id: 2,
        title: "title-2",
        author: "author-2",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem commodi consequuntur distinctio eum illum nihil quidem quis sed veniam! Adipisci autem eligendi incidunt laboriosam omnis optio perspiciatis quibusdam totam!"
    },
    {
        id: 3,
        title: "title-3",
        author: "author-3",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda autem commodi consequuntur distinctio eum illum nihil quidem quis sed veniam! Adipisci autem eligendi incidunt laboriosam omnis optio perspiciatis quibusdam totam!"
    },
];

export const HomePage = () => {
    const content = articles.map(article => (
        <Article key={article.id} {...article} />
    ));

    return (
        <>
            {content}
        </>

)
}
