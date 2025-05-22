import React, { useEffect, useState } from 'react'
import axios from 'axios'
const BASE_URL = "https://dummyjson.com";
import { PiUserLight } from "react-icons/pi";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { cardsPerLoad } from '../productCards/ProductCards';
import LoadingUsers from '../loadingUsers/LoadingUsers';

const UserCards = () => {
    const [userData, setUserData] = useState([]);
    const [count, setCount] = useState(0);
    const [lastUser, setLastUser] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(`${BASE_URL}/users?limit=${cardsPerLoad}&skip=${count}`)
            .then((response) => {
                setUserData((prev) => {
                    const allUsers = { ...response.data, users: [...(prev.users || []), ...response.data.users] };
                    if (allUsers.users.length >= userData.total) {
                        setLastUser(true);
                    }
                    return allUsers;
                })
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                setLoading(false);
            })
    }, [count]);

    const handleSeeMore = () => {
        setCount(count + cardsPerLoad);
    }

    const [showButton, setShowButton] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <section className='section_users'>
            <div className='container mx-auto'>
                {
                    loading && <LoadingUsers />
                }
                <div className='users_wrapper py-[30px] grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 gap-x-[5px] gap-y-[8px] sm:gap-y-[12px] lg:gap-x-[10px] lg:gap-y-[16px] min-[700px]:gap-[7px] min-[480px]:grid-cols-2 min-[940px]:grid-cols-3 lg:grid-cols-4'>
                    {
                        userData?.users?.map((user) => (
                            <div key={user.id} className='users_card rounded-[8px] overflow-hidden border border-[#3d444d]'>
                                <div className='h-[42px] px-[12px] flex items-center justify-between gap-[4px] border-b border-b-[#3d444d]'>
                                    <PiUserLight className='text-[#8b919a] text-[22px] leading-[22px]' />
                                    {
                                        user.age > 30 && (<RiVerifiedBadgeFill className='text-[18px] text-[#0095f6]' />)
                                    }
                                </div>
                                <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Full name:<span className='text-white'> {user.firstName} {user.lastName}</span></p>
                                </div>
                                <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Username:<span className='text-[#0095f6] cursor-pointer'> @{user.username}</span></p>
                                </div>
                                <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Role:<span className='text-white capitalize'> {user.role}</span></p>
                                </div>
                                <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Email:<span className='text-white text-wrap'> {user.email}</span></p>
                                </div>
                                <div className='h-[30px] md:h-[42px] flex items-center border-b border-b-[#3d444d]'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>Phone Number:<span className='text-white'> {user.phone}</span></p>
                                </div>
                                <div className='h-[30px] md:h-[42px] flex items-center'>
                                    <p className='px-[12px] text-[11px] md:text-[14px] text-[#8b919a] line-clamp-1'>University:<span className='text-white'> {user.university}</span></p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {
                    !lastUser && showButton && <div className="flex items-center justify-center mb-[30px] sm:mb-[45px] lg:mb-[60px]">
                        <button
                            onClick={handleSeeMore}
                            className='cursor-pointer capitalize text-[11px] sm:text-[14px] font-medium px-[12px] py-[4px] sm:px-[16px] sm:py-[5px] text-[#f0f6fc] border border-[#3f934b] rounded-[6px] bg-[#238636]'>
                            See more
                        </button>
                    </div>
                }
            </div>
        </section>
    )
}

export default React.memo(UserCards);