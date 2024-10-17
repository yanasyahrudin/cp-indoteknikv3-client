import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import blogPosts from './../data/blogPostsData';
import { Helmet } from 'react-helmet';

// BlogPost Component
function BlogPost({ post }) {
    return (
        <div className='rounded-lg shadow-md flex flex-col sm:flex-row gap-4'>
            <div className='w-full sm:w-1/4 sm:py-4 sm:pl-4'>
                <Link to={post.link}>
                    <img
                        className='w-full sm:w-56 rounded-xl'
                        src={post.image}
                        alt={post.title}
                    />
                </Link>
            </div>
            <div className='w-full sm:py-4 pr-4 px-4 pb-4 lg:px-0 md:px-0'>
                <Link to={post.link}>
                    <h2 className='text-xl sm:text-2xl font-bold text-blue-900'>
                        {post.title}
                    </h2>
                </Link>
                <p className='text-xs sm:text-sm text-gray-500 mb-2'>
                    <strong>Posted on:</strong>{' '}
                    {new Date(post.date).toLocaleDateString()}
                </p>
                <p className='text-xs sm:text-sm text-gray-600 mb-4'>
                    <strong>Category:</strong> {post.category}
                </p>
                <p className='text-gray-700 text-sm sm:text-base'>
                    {post.content}
                </p>
            </div>
        </div>
    );
}

// Main App Component
function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const navigate = useNavigate();
    const location = useLocation();

    // Parse URL query parameters on component mount
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const category = queryParams.get('category') || 'All';
        const search = queryParams.get('search') || '';
        
        setSelectedCategory(category);
        setSearchTerm(search);
    }, [location.search]);

    // Update URL query parameters when search term or category changes
    useEffect(() => {
        const queryParams = new URLSearchParams();
        if (selectedCategory !== 'All') {
            queryParams.set('category', selectedCategory);
        }
        if (searchTerm) {
            queryParams.set('search', searchTerm);
        }
        navigate(`?${queryParams.toString()}`);
    }, [searchTerm, selectedCategory, navigate]);

    // Filtering and sorting blog posts
    const filteredPosts = blogPosts
        .filter((post) => {
            const matchesCategory =
                selectedCategory === 'All' ||
                post.category === selectedCategory;
            const matchesSearch = post.title
                .toLowerCase()
                .includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <div className='lg:w-[1200px] mx-4 lg:mx-auto py-8 lg:py-10 bg-gradient-to-bl from-neutral-50 to-blue-100 px-4 sm:px-8 mt-10 mb-10 rounded-xl'>
            <Helmet>
                <title>Blog | Indo Teknik</title>
                <meta
                    name='description'
                    content='Ini adalah halaman blog dari indo teknik'
                />
                <meta
                    name='keywords'
                    content='servis diesel pekanbaru, servis injector pekanbaru, servis injection pump pekanbaru, servis fabrikasi pekanbaru'
                />
            </Helmet>
            
            <header className='text-center mb-6 sm:mb-10'>
                <h1 className='text-3xl sm:text-4xl font-bold text-blue-900 animate-bounceIn'>
                    Indo Teknik Blog
                </h1>
                <p className='text-base sm:text-lg text-gray-700 mt-2 animate-bounceIn'>
                    Your go-to source for diesel and automotive knowledge
                </p>
            </header>

            <section className='flex flex-col sm:flex-row justify-between mb-6 sm:mb-10 gap-4'>
                <input
                    type='text'
                    className='w-full sm:w-2/3 p-3 rounded-lg shadow text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    placeholder='Search blog posts...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    className='w-full sm:w-auto p-3 rounded-lg shadow text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                >
                    <option value='All'>All Categories</option>
                    <option value='Spare Parts'>Spare Parts</option>
                    <option value='Workshop'>Workshop</option>
                    <option value='Fabrication'>Fabrication</option>
                </select>
            </section>

            <section className='grid grid-cols-1 gap-6'>
                {filteredPosts.length > 0 ? (
                    filteredPosts.map((post) => (
                        <BlogPost key={post.id} post={post} />
                    ))
                ) : (
                    <p className='text-gray-700 text-center'>
                        No blog posts found.
                    </p>
                )}
            </section>
        </div>
    );
}

export default App;
