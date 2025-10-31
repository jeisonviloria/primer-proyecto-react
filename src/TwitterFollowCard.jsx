import { useState } from "react"    
export function TwitterFollowCard({ children, userName }) {
const [isFollowing, setIsFollowing] = useState(false)


    const text = isFollowing ? 'siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
        ? 'tw-followerCard-button is-following' 
        : 'tw-followerCard-button'

        const handleClick = () => {
            setIsFollowing(!isFollowing)
        }
  return (
    <article className="tw-followerCard">
      <header className="tw-followerCard-header">
        <img className="tw-followerCard-avatar" src={`https://unavatar.io/x/${userName}`} alt={`el avatar de ${userName}`} />
        <div className="tw-followerCard-info">
          <strong>{children}</strong>
          <span className="tw-followerCard-username">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  )
}

