import React from 'react';
import Article from "./Article";
import { articles } from "../../constants/articles";

const Content = () => {

    return (
        <main>
            <section className="posts">
                <div className="container">
                    <h1>
                        Posts
                    </h1>
                    <ul className="list">
                        {articles.map(({title, text, id}) => {
                            return (
                                <Article
                                    key = {id}
                                    articleTitle = {title}
                                    articleText = {text}
                                />
                            )
                        })}
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default Content;