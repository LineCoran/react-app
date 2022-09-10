import React from "react";
import classes from './PostNotFound.module.css'

const PostsNotFound = ({children}) => {
    return (
        <h2 className={classes.notFound}>
            {children}
        </h2>
    )
}

export default PostsNotFound;