import React from 'react';

const AvatarCard = (props) =>{
    return(
        <div className="avatar-card">
            <div className="left"></div>
            <div className="right">
                <img 
                    src={props.avatarImg} 
                    alt={props.alternative}/>
            </div>            
        </div>  
    );
}

export default AvatarCard;