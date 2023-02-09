import client from '@sanity/client';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

import imageUrlBuilder from '@sanity/image-url';


const sanityClient = client({
  projectId: 'b8t0hci4',
  dataset: 'production',
  useCdn: true
});

const builder = imageUrlBuilder(sanityClient);

function generateImageUrl(source) {
  return builder.image(source).url();
}


const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "post"]`;

    sanityClient
      .fetch(query)
      .then(result => {
        setPosts(result);
      })
      .catch(error => {
        console.error('Error fetching posts: ', error);
      });
  }, []);

    return (
      <>
        <Navbar />
        <br></br><br></br>  
      <div>
        <ul>
          {posts.map(post => (

          <div id={post._id}class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <a href="#">
               <img src={generateImageUrl(post.mainImage)} alt={post.title} />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.body}.</p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </a>
              </div>
          </div>
          ))}
        </ul>
      </div>
      </>
      
    );
};

export default Posts;
