import React from 'react';
import PropTypes from 'prop-types';

const Article = ({articleTitle, articleText}) => {
    return (
        <li className="list__item">
            <h2>{articleTitle}</h2>
            <p>{articleText}</p>
        </li>
    );
};

Article.propTypes = {
    articleTitle: PropTypes.string.isRequired,
    articleText: PropTypes.string.isRequired,
}

export default Article;