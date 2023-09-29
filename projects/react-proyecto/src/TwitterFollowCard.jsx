import { useState } from 'react'
import PropTypes from 'prop-types';
export function TwitterFollowCard({ userName, children }) {
    const [isFollowing, setIsFollowing] = useState(false)

   
   
   
    const text = isFollowing ? 'Siguiendo' : 'seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El Avatar de Jehiel"
          src={`https://unavatar.io/${userName}`}/>
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{(userName)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
            {text}
            <span className='tw-unfollowCard'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

// Define PropTypes para tus props
TwitterFollowCard.propTypes = {
  userName: PropTypes.string.isRequired,
  
  children: PropTypes.node.isRequired,

};