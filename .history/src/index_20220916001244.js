import React from "react";
import  ReactDOM  from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";

const App = () => {
    return (
        <div className="ui container comments">
           <CommentDetail author="Sam" timeAgo="Today at 4:45PM" textContent="Nice blog post" userAvatar={faker.image.avatar()}/> 
           <CommentDetail author="Alex" timeAgo="Today at 2:00AM" textContent="Very interesting" /> 
           <CommentDetail author="Jane" timeAgo="Yesterday at 5:00PM" textContent="you are awesome" /> 
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))



