import React, { useState } from 'react';
import './styles/Notifications.css';
import NotificationFeed from './NotificationFeed';
import NotificationDrawer from './NotificationDrawer';
import Navbar from 'scenes/navbar';
import Footer from './Footer';

const Notifications = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <>

    <Navbar />
    <div className='notifications'>
      <div className='notification__sidebar'>
        <div className='notificationSidebar__top'>
          <h1 className='sidebar__title'>Notifications</h1>
          <p className='sidebar__text'>You’re all caught up! check, back later for new notifications, improve your notification settings. </p>
       
          <p className='sidebar__settings'>View settings</p>
       
        </div>
   
      </div>
      <div className='notification__feed'>
        {[...Array(24)].map((_, index) => (
          <NotificationFeed key={index} />
        ))}
      </div>
      <div className='notification__widgets'>
        <div className='notificationWidget__container'>
          <img
            className='notificationWidget__image'
            src='https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg'
            alt='Promotional'
          />
        </div>
      </div>

      {/* Add NotificationDrawer here */}
      <NotificationDrawer open={drawerOpen} onClose={toggleDrawer} />
    </div>
    <Footer/>

    </>
  );
};

export default Notifications;
