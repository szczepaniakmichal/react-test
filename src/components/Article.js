import React from "react";

export const Article = ({ title, author, text }) => (
    <div className="article">
        <h3>{title}</h3>
        <address>{author}</address>
        <p>{text}</p>
    </div>
);