import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};
class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
            author: "",
            text: "",
            time: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const { title, author, text, } = this.state;
        const time = (new Date(Date.now()-(new Date()).getTimezoneOffset() * 60000)).toISOString().slice(0, 17).replace('T', ' ');
        const id = uuidv1();
        this.props.addArticle({ title, author, text, id, time});
        this.setState({ title: "", author: "", text: ""});
    }
    render() {
        const { title, author, text } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        className="form-control"
                        id="author"
                        value={author}
                        onChange={this.handleChange}
                    />

                    <label htmlFor="text">Text</label>
                    <textarea
                        className="form-control"
                        id="text"
                        value={text}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    Save
                </button>
            </form>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;