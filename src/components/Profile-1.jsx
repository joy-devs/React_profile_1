import React from 'react';

const ProfileSeg = ({ age, name, profilePic, bio }) => {
    return (
        <div className="section">
            <div className='pic'>
            <img src={profilePic} alt={name} />
            </div>
            
            <div className="content">
                <h3>{name}</h3>
                <p>Age: {age}</p>
                <p>{bio}</p>
            </div>
        </div>
    );
};

export default ProfileSeg;
