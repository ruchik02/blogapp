import React, { Component } from "react";
import BlogItem from "./BlogItem";

function Blogs(props) {
  return (
    <div className="col-12 col-lg-offset-4">
      <ul id="list" className=" list-group">
        {props.blogs.map((blogItem) => {
          return (
            <li key={blogItem.id} className="list-group-item d-flex ">
              <BlogItem
                blogItem={blogItem}
                editBlog={props.editBlog}
                deleteBlog={props.deleteBlog}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Blogs;
