import React from "react";
import { connect } from "react-redux";
const mapStateToProps = state => {
    return { articles: state.articles };
};
const ConnectedList = ({ articles }) => (
    <div className="col-md-8 blog-main">
        <h3 class="pb-3 mb-4 font-italic border-bottom">
            Hot news
        </h3>
        {articles.map(el => (
            <div className="blog-post" key={el.id}>
                <h2 className="blog-post-title">{el.title}</h2>
                <p className="blog-post-meta">{ el.time } by <a href={ "/users/" + el.author }>{ el.author }</a></p>

                <p>{ el.text }</p>

            </div>
        ))}
    </div>
);
const List = connect(mapStateToProps)(ConnectedList);
export default List;

