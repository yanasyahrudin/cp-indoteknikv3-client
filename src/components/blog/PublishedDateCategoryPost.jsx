import React from 'react';

const PublishedDateCategoryPost = ({publicationDate, category}) => {
    return (
        <div className='flex justify-between'>
            <span className='text-gray-500 text-sm'>
                Published by <strong>Admin</strong> on{' '}
                <strong>{publicationDate}</strong>
            </span>
            <span className='text-gray-500 text-sm'>
                Category: <strong>{category}</strong>
            </span>
        </div>
    );
};

export default PublishedDateCategoryPost;
