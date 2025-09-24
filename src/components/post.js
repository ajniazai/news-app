import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
import Comment from "./comment";



export default class Post extends React.Component {
        render() {
                return(
                    <div className="card w-75">
                        <div className="card-header bg-success text-white">
                            username and time
                        </div>
                        <div className="card-body">
                            Post Content
                        </div>
                        <div className="card-footer bg-success text-white">
                            <LikeButton />
                            <ReplyButton />
                            <Comment />
                            <Comment />
                        </div>

                    </div>

            );
        }
}