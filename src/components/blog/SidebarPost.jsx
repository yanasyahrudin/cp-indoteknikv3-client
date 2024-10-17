import React from 'react';

const SidebarPost = ({ latestPosts }) => {

    const postsToDisplay = latestPosts.slice(0, 4);

    // Extract and filter unique categories
    const uniqueCategories = [...new Set(postsToDisplay.map((post) => post.category))];

    return (
        <div className='w-full mt-5 lg:mt-0 md:mt-5'>
            <div className='p-6 md:p-8 bg-gradient-to-bl from-neutral-50 to-blue-100 shadow-md rounded-xl'>
                <h3 className='text-gray-700 font-semibold text-lg md:text-xl'>Post Terbaru</h3>
                <div className='p-2 rounded-xl mt-2'>
                    <ul>
                        {postsToDisplay.map((post) => (
                            <li key={post.id} className='my-3 md:my-4'>
                                <img 
                                    className='rounded-xl w-full md:w-3/4 lg:w-full object-cover' 
                                    src={post.image} 
                                    alt={post.title} 
                                />
                                <a
                                    href={post.link}
                                    className='block text-blue-900 hover:underline mt-2 md:mt-3 text-base md:text-lg'
                                >
                                    {post.title}
                                </a>
                                <p className='text-xs md:text-sm text-gray-500'>
                                    {new Date(post.date).toLocaleDateString()}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='p-6 md:p-8 bg-gradient-to-bl from-neutral-50 to-blue-100 shadow-md rounded-xl mt-8'>
                <h3 className='text-gray-700 font-semibold text-lg md:text-xl'>Kategori</h3>
                <div className='p-2 rounded-xl mt-2'>
                    <ul>
                        {uniqueCategories.map((category, index) => (
                            <li key={index} className='my-2 md:my-3 p-2'>
                                <a
                                    href={`/blog?category=${encodeURIComponent(category)}`}
                                    className='text-blue-900 bg-gradient-to-bl from-neutral-50 to-blue-100 py-2 px-4 rounded-xl shadow-md hover:text-blue-500 block md:inline-block text-sm md:text-base'
                                >
                                    {category}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SidebarPost;
