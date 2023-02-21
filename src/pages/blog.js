import BlogNav from 'components/BlogNav'
import React from 'react'
import { GET_BLOG } from 'GraphQL/Query';
import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
const blog = () => {
    const {data:session}=useSession()
  const { data, loading, error} = useQuery(GET_BLOG);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
    <BlogNav/>
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
    {data.blog.map((blog) => (
    <div className=' w-full lg:max-w-full lg:flex mb-2'>
     <div>
        <Image className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg" width={10} height={10} alt="Avatar of Writer"/>
    </div>
        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
            Here is your Blog...
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">{blog.title}</div>
          <p class="text-gray-700 text-base">{blog.description}</p>
        </div>
        <div class="flex items-center">
          <Image class="w-10 h-10 rounded-full mr-4" width={10} height={10} src={session.user.image} alt="user image"/>
          <div class="text-sm">
            <p class="text-gray-900 leading-none">{session.user.name}</p>
            <p class="text-gray-600"></p>
          </div>
        </div>
      </div>
    </div>
     ))}
    </div>
    </div>
  );
};

export default blog;