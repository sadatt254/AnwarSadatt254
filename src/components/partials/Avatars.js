import React from 'react';

const AvatarCard = (props) =>{
    return(
        <div className="avatar-card">
            <img 
                src={props.avatarImg} 
                alt={props.alternative}/>            
        </div>  
    );
}

export default AvatarCard;