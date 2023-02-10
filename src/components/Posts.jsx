import client from '@sanity/client';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

import imageUrlBuilder from '@sanity/image-url';
import Footer from './Footer';


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
  const [spinner, setSpinner] = useState(false);  

  useEffect(() => {
    const query = `*[_id in ["43302127-32f7-4b66-a7f4-a7a468f5764d", "636b1b75-b079-429d-ad53-913361f14227"]]`;


    setSpinner(false);

    sanityClient
    
      .fetch(query)
      .then(result => {
        console.log(result);
        setPosts(result);
        setSpinner(false);
      })
      .catch(error => {
        console.error('Error fetching posts: ', error);
      });
  }, []);
  

  

  return (
    <>
      <Navbar />
      <br />
      <br />
      {spinner && (
            <p>something is loading</p>
            )}
      <div className="flex flex-wrap">
        {posts.map((post, index) => (
          <div
            key={index}
            className={`w-1/2 mx-auto my-5 ${
              index % 2 === 0 ? "pr-5" : "pl-5"
            }`}
          >
            <div className="bg-white max-w-sm border border-gray-200 rounded-lg shadow">
              <a href="http://localhost:3333/desk/post;636b1b75-b079-429d-ad53-913361f14227">
                <img
                  className="object-contain h-150 w-150"
                  src={generateImageUrl(post.mainImage)}
                  alt={post.title}
                  style={{ width: '500px', height: '350px' }}
                />
              </a>
              <div className="p-5 style={{ height: '250px' }}">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {post.title}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {post.body}.
                </p>
                <a
                  href="http://localhost:3333/desk/post;43302127-32f7-4b66-a7f4-a7a468f5764d"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    aria-hidden="true"
                    className="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Posts;
