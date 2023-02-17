import React, { Component } from "react";
import Link from "next/link";

function BlogItem(props) {
  var blog = props.blogItem;
  return (
    <>
      <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
      <Link href={`/blogs/${blog.id}/edit`} className="ml-auto">
        Edit
      </Link>
      <button
        className="btn btn-sm btn-danger ml-5"
        onClick={() => props.deleteBlog(blog.id)}
      >
        Delete
      </button>
    </>
  );
}

export default BlogItem;
