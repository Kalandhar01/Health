import React from 'react';
import Card from '../../Components/Recent_Post/Athu';
import { image1, image2, image3, image4, image5, image6 } from '../../assets';

const Blog = () => {
  
  const posts = [
    { image: image1, title: "Push yourself"},
    { image: image2, title: "Fitness is not a destination" },
    { image: image3, title: "Stronger every day" },
    { image: image4, title: "Sweat now" },
    { image: image5, title: "Don’t stop until" },
    { image: image6, title: "Your only limit" },
    { image: image6, title: "Your only limit" },
    { image: image6, title: "Your only limit" }
  ];

  return (
    <>
      <div className='mt-52'>
        {/* Page Title */}
        <h1 className='primary_text text-[36px] px-14 max-sm:p-0 max-sm:text-[22px] max-sm:pl-9'>
          Recent Posts
        </h1>

        {/* Cards Section */}
        <div className='w-full flex justify-center items-start px-14 max-sm:w-full max-sm:p-4'>
          <div className='mt-10 grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-2 lg:grid-rows-2'>
            {posts.map((post, index) => (
              <Card key={index} image={post.image} title={post.title} />
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div className='flex justify-center mt-20 mb-10'>
          <button className='px-6 py-2 bg-[#d59900] text-white rounded-lg hover:bg-[#b88b00] transition duration-300'>
            View More Posts
          </button>
        </div>
      </div>
    </>
  );
}

export default Blog;
