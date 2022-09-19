import React from "react";
import  ReactDOM  from "react-dom";
import { faker } from "@faker-js/faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
          <ApprovalCard>
               <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    content="Nice blog post" 
                    avatar={faker.image.avatar()} /> 
          </ApprovalCard>
           <CommentDetail 
                author="Alex" 
                timeAgo="Today at 2:00AM" 
                content="Very interesting" 
                avatar={faker.image.avatar()} /> 
           <CommentDetail 
                author="Jane" 
                timeAgo="Yesterday at 5:00PM" 
                content="you are awesome" 
                avatar={faker.image.avatar()} /> 
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))



