import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
const BASE_URL = "https://dummyjson.com";
import { cardsPerLoad } from "../productCards/ProductCards";
import LoadingPosts from "../loadingPosts/LoadingPosts";

const PostCards = () => {
    const [postsData, setPostsData] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [lastPost, setLastPost] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/posts?limit=${cardsPerLoad}&skip=${count}`)
            .then((response) => {
                setPostsData((prev) => {
                    const allPosts = { ...response.data, posts: [...(prev.posts || []), ...response.data.posts] };
                    if (allPosts.posts.length >= postsData.total) {
                        setLastPost(true);
                    }
                    return allPosts;
                })
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            })
    }, [count])
    const handleSeeMore = () => {
        setCount((count + cardsPerLoad));
    }

    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className='section_posts text-[#fff]'>
            <div className="container mx-auto">
                {
                    loading && <LoadingPosts />
                }
                <div className='posts_wrapper py-[30px] grid grid-cols-1 min-[320px]:grid-cols-2 md:grid-cols-3 gap-x-[5px] gap-y-[8px] sm:gap-y-[12px] lg:gap-x-[10px] lg:gap-y-[16px] min-[700px]:gap-[7px] min-[940px]:grid-cols-3 lg:grid-cols-4'>
                    {
                        postsData?.posts?.map((post) => (
                            <div key={post.id} className='posts_card overflow-hidden rounded-[8px] border border-[#3d444d] pb-[8px]'>
                                <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>#{post.tags[0]} #{post.tags[1]} #{post.tags[2]}</p>
                                </div>
                                <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Views: <span className='text-white'>{post.views}</span></p>
                                </div>
                                <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Likes: <span className='text-white'>{post.reactions.likes}</span></p>
                                </div>
                                <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Dislikes: <span className='text-white'>{post.reactions.dislikes}</span></p>
                                </div>
                                <div className='h-[102px] md:h-[180px] py-[8px] md:py-[12px]'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-8'>Text: <span className='text-white'>{post.body}</span></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {!lastPost && showButton && (
                    <div className="flex items-center justify-center mb-[30px] sm:mb-[45px] lg:mb-[60px]">
                        <button
                            onClick={handleSeeMore}
                            className='cursor-pointer capitalize text-[11px] sm:text-[14px] font-medium px-[12px] py-[4px] sm:px-[16px] sm:py-[5px] text-[#f0f6fc] border border-[#3f934b] rounded-[6px] bg-[#238636]'>
                            See more
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}
export default React.memo(PostCards);