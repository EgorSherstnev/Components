import React from "react";
import  ReactDOM  from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";

const App = props => {
    console.log(props);
    return (
        <div className="ui container comments">
           <CommentDetail author="Sam" /> 
           <CommentDetail author="Alex" /> 
           <CommentDetail author="Jane" /> 
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))



