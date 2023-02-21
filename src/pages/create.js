import React, { useState } from 'react'
import BlogNav from 'components/BlogNav'
import BlogFooter from 'components/BlogFooter'
import { ADD_BLOG } from 'GraphQL/Mutation'
import { GET_BLOG } from 'GraphQL/Query'
import { useMutation,useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
const create = () => {
    const router=useRouter();
    const[title,setTitle]=useState(null);
    const [image,setImage]=useState('')
    const[description,setDescription]=useState(null);
    const {refetch}=useQuery(GET_BLOG);
    const [addBlog] = useMutation(ADD_BLOG, {
        onCompleted: () => {
        console.log('mutation completed');
        refetch();
        router.push('/blog');
        },
      });
    const handleSubmit=async(event)=>{
        event.preventDefault();
        addBlog({variables:{title,description,image}});
        setTitle('');
        setDescription('');
    };
    const uploadImage=(event)=>{
        setImage(event?.target.files[0])
        console.log(event?.target.files[0])
    }
    return (
    <>
    <BlogNav/>
    <div className='p-8 max-w-lg bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 mx-auto my-auto mt-5'>
    <form onSubmit={handleSubmit}>
    <div className='mb-6'>
    <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Image</label>
    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="image" type="file" accept=".png,.jpg,jpeg" onChange={uploadImage} />
    </div>
    <div className="mb-6">
        <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
        <input type="text" id="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-teal-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="title" required/>
    </div>
    <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
        <textarea id="message" rows="4" value={description} onChange={(e)=>setDescription(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"></textarea>
    </div>
        <button type="submit" className="text-white bg-teal-500  hover:bg-teal-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-teal-500 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Submit</button>
    </form>
    </div>
    <BlogFooter/>
    </>


  )
}

export default create