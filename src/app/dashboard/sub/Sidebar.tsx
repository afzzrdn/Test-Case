    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'

    const Sidebar = () => {
    const [isMenuVisible, setMenuVisible] = useState(true);
    const [isMessageVisible, setMessageVisible] = useState(true);

    const toggleContact = () => {
    setMenuVisible(!isMenuVisible);
  };
    const toggleMessage = () => {
    setMessageVisible(!isMessageVisible);
  };
    return (
        <div className='w-[220px] h-[100vh] px-3 py-5 fixed overflow-scroll no-scrollbar dark:text-white'>
            <img src="Logo3.svg" alt="" className='px-5' />
            <div className='flex flex-col mt-5 gap-1 font-medium'>
                <div className='flex flex-row bg-[#3366ff] text-white text-xs rounded-lg px-3 py-2 gap-2'>
                    <img src="icon.svg" alt="" />
                    <p>Dashboard</p>
                </div>
                <div className='flex flex-row bg-[#fff] dark:bg-[#121212] dark:text-white text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <FontAwesomeIcon icon={['fas', 'mobile-screen']} />
                    <p>Device</p>
                </div>
                <div className='flex flex-col  text-black text-xs gap-2'>
                    <div className='flex flex-row bg-[#f3f5f8] dark:bg-[#1F1F21] rounded-lg px-5 py-2 gap-2 dark:text-white'>
                        <FontAwesomeIcon icon={['fas', 'address-book']} />
                        <div className='flex flex-row gap-20 dark:text-white' onClick={toggleContact}>
                            <p>Contacts</p>
                            <FontAwesomeIcon icon={['fas', 'caret-down']} />
                        </div>
                    </div>
                    <div className={`flex flex-col gap-6 my-3 ml-14 ${isMenuVisible ? '' : 'hidden'}`}>
                        <div className='flex flex-row gap-2 dark:text-white'>
                            <FontAwesomeIcon icon={['fas', 'address-book']} />
                            <p>Contacts</p>
                        </div>
                        <div className='flex flex-row gap-2 dark:text-white'>
                            <FontAwesomeIcon icon={['fas', 'users']} />
                            <p>Groups</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col  text-black dark:text-white text-xs gap-2'>
                    <div className='flex flex-row bg-[#f3f5f8] dark:bg-[#1F1F21] rounded-lg pl-5 py-2 gap-2'>
                        <FontAwesomeIcon icon={['fas', 'message']} />
                        <div className='flex flex-row gap-12 ' onClick={toggleMessage}>
                            <p>Message List</p>
                            <FontAwesomeIcon icon={['fas', 'caret-down']} />
                        </div>
                    </div>
                    <div className={`flex flex-col gap-6 my-3 ml-14 ${isMessageVisible ? '' : 'hidden'}`}>
                        <div className='flex flex-row gap-2'>
                            <FontAwesomeIcon icon={['fas', 'images']} />
                            <p>Messenger</p>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <FontAwesomeIcon icon={['fas', 'inbox']} />
                            <p>Incoming Chat</p>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <FontAwesomeIcon icon={['fas', 'right-from-bracket']} />
                            <p>Outgoing Chat</p>
                        </div>
                    </div>
                </div>
                <p className='text-xs'>Tools</p>
                <div className='flex flex-row bg-[#fff] dark:text-white dark:bg-[#121212] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <FontAwesomeIcon icon={['fas', 'podcast']} />
                    <p>Broadcast</p>
                </div>
                <div className='flex flex-row bg-[#fff] dark:text-white dark:bg-[#121212] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <FontAwesomeIcon icon={['fas', 'bullhorn']} />
                    <p>Campaign</p>
                </div>
                <div className='flex flex-row bg-[#fff] dark:text-white dark:bg-[#121212] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <FontAwesomeIcon icon={['fas', 'arrows-rotate']} />
                    <p>Auto Reply</p>
                </div>
                <div className='flex flex-row bg-[#fff] dark:text-white dark:bg-[#121212] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <FontAwesomeIcon icon={['fas', 'user-gear']} />
                    <p>Customer Service</p>
                </div>
                <div className='flex flex-row bg-[#fff] dark:text-white dark:bg-[#121212] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <FontAwesomeIcon icon={['fas', 'chart-simple']} />
                    <p>Analytics</p>
                </div>
                <div className='flex flex-row bg-[#fff] dark:text-white dark:bg-[#121212] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <FontAwesomeIcon icon={['fas', 'code']} />
                    <p>Forwardin API</p>
                </div>
                <p className='text-xs'>Others</p>
                <div className='flex flex-row bg-[#fff] dark:text-white dark:bg-[#121212] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <FontAwesomeIcon icon={['fas', 'gear']} />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
    }

    export default Sidebar