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
        <div className='w-[220px] h-[100vh] px-3 py-5 fixed overflow-scroll no-scrollbar'>
            <img src="Logo3.svg" alt="" className='px-5' />
            <div className='flex flex-col mt-5 gap-1 font-medium'>
                <div className='flex flex-row bg-[#3366ff] text-white text-xs rounded-lg px-3 py-2 gap-2'>
                    <img src="icon.svg" alt="" />
                    <p>Dashboard</p>
                </div>
                <div className='flex flex-row bg-[#fff] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <img src="ad_units.svg" alt="" />
                    <p>Device</p>
                </div>
                <div className='flex flex-col  text-black text-xs gap-2'>
                    <div className='flex flex-row bg-[#f3f5f8] rounded-lg px-5 py-2 gap-2'>
                        <img src="contacts.svg" alt="" />
                        <div className='flex flex-row gap-20' onClick={toggleContact}>
                            <p>Contacts</p>
                            <img src="caret-down2.svg" alt="" className='w-[10px]'/>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-6 my-3 ml-14 ${isMenuVisible ? '' : 'hidden'}`}>
                        <div className='flex flex-row gap-2'>
                            <img src="contacts.svg" alt="" />
                            <p>Contacts</p>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <img src="diversity_3.svg" alt="" />
                            <p>Groups</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col  text-black text-xs gap-2'>
                    <div className='flex flex-row bg-[#f3f5f8] rounded-lg pl-5 py-2 gap-2'>
                        <img src="chat_bubble.svg" alt=""/>
                        <div className='flex flex-row gap-12' onClick={toggleMessage}>
                            <p>Message List</p>
                            <img src="caret-down2.svg" alt="" className='w-[10px]'/>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-6 my-3 ml-14 ${isMessageVisible ? '' : 'hidden'}`}>
                        <div className='flex flex-row gap-2'>
                            <img src="all_inbox.svg" alt="" />
                            <p>Messenger</p>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <img src="move_to_inbox.svg" alt="" />
                            <p>Incoming Chat</p>
                        </div>
                        <div className='flex flex-row gap-2'>
                            <img src="forward_to_inbox.svg" alt="" />
                            <p>Outgoing Chat</p>
                        </div>
                    </div>
                </div>
                <p className='text-xs'>Tools</p>
                <div className='flex flex-row bg-[#fff] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <img src="podcasts.svg" alt="" />
                    <p>Broadcast</p>
                </div>
                <div className='flex flex-row bg-[#fff] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <img src="campaign.svg" alt="" />
                    <p>Campaign</p>
                </div>
                <div className='flex flex-row bg-[#fff] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <img src="autoplay.svg" alt="" />
                    <p>Auto Reply</p>
                </div>
                <div className='flex flex-row bg-[#fff] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <img src="support_agent.svg" alt="" />
                    <p>Customer Service</p>
                </div>
                <div className='flex flex-row bg-[#fff] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <img src="bar_chart.svg" alt="" />
                    <p>Analytics</p>
                </div>
                <div className='flex flex-row bg-[#fff] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <img src="api.svg" alt="" />
                    <p>Forwardin API</p>
                </div>
                <p className='text-xs'>Others</p>
                <div className='flex flex-row bg-[#fff] text-black text-xs rounded-lg px-5 py-2 gap-2'>
                    <img src="gear.svg" alt="" />
                    <p>Settings</p>
                </div>
            </div>
        </div>
    )
    }

    export default Sidebar