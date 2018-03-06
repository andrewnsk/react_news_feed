import React, {Component} from "react";
import { connect } from "react-redux";
import { Button } from 'reactstrap';
import { removeArticle } from "../actions/index";

const mapStateToProps = state => {
    return { articles: state.articles };
};

const mapDispatchToProps = dispatch => {
    return {
        removeArticle: id => dispatch(removeArticle(id))
    };
};

class ConnectedList extends Component {

      handleClick = (id) => {
        console.log('this is:', id);
        this.props.removeArticle(id);
      };

    render() {
        return (
            <div>
                <h3 className="pb-3 mb-4 font-italic border-bottom">
                    Hot news
                </h3>
                {console.log(this.props)}
                {this.props.articles.map(el => (
                    <div className="blog-post" key={el.id}>
                        <h2 className="blog-post-title">{el.title}</h2>
                        <p className="blog-post-meta">{ el.time } by <a href={ "/users/" + el.author }>{ el.author }</a></p>

                        <p>{ el.text }</p>
                        <Button color="danger" onClick={this.handleClick.bind(this, el.id)}>Remove</Button>
                    </div>
                ))}
            </div>
        );
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;

