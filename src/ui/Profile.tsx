'use client'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
const Profile = () => {
  return (
    <div>
         <TwitterTimelineEmbed
         sourceType="profile"
         screenName="sonnysangha"
         options={{height: 400}}
/>
    </div>
  )
}

export default Profile