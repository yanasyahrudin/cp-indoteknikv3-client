import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaWhatsappSquare, FaEnvelopeSquare } from 'react-icons/fa'; // Import WhatsApp and Email icons

const SharePost = ({ currentPostTitle }) => {
    const pageUrl = encodeURIComponent(window.location.href); // Get the current page URL

    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${currentPostTitle}`;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
    const whatsappShareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentPostTitle)}%20${pageUrl}`;
    const emailShareUrl = `mailto:?subject=${encodeURIComponent(currentPostTitle)}&body=Check out this post: ${pageUrl}`;

    return (
        <div>
            <div className='mt-40'>
                <section>
                    <div className='max-w-xs mt-20 shadow-md rounded-xl mx-2 p-4 md:p-5 bg-gradient-to-bl from-neutral-50 to-blue-100 flex flex-col items-center justify-center text-center '>
                        <p className='text-indigo-900  text-xl md:text-2xl font-bold rounded-xl p-4'>
                            Share this post:
                        </p>

                        <ul className='flex flex-row items-center justify-center text-center '>
                            <li className='mx-2'>
                                <a
                                    href={twitterShareUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='Share on Twitter'
                                >
                                    <FaSquareXTwitter className='h-8 w-8 text-blue-900 hover:text-blue-500' />
                                </a>
                            </li>

                            <li className='mx-2'>
                                <a
                                    href={facebookShareUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='Share on Facebook'
                                >
                                    <FaFacebookSquare className='h-8 w-8 text-blue-900 hover:text-blue-500' />
                                </a>
                            </li>

                            <li className='mx-2'>
                                <a
                                    href={whatsappShareUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='Share on WhatsApp'
                                >
                                    <FaWhatsappSquare className='h-8 w-8 text-blue-900 hover:text-blue-500' />
                                </a>
                            </li>

                            <li className='mx-2'>
                                <a
                                    href={emailShareUrl}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    aria-label='Share via Email'
                                >
                                    <FaEnvelopeSquare className='h-8 w-8 text-blue-900 hover:text-blue-500' />
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default SharePost;
