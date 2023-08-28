import React, {useState} from "react";
// import img from '../logo.svg' (this method is to import image locally)

function Header() {
  const [showOverlay, setShowOverlay] = useState(false);
  const imgclick = () =>{
    setShowOverlay(!showOverlay)
  }
  
  return (
   <header>
     <div className="inner" onclick={imgclick}>
      <div className="img">
      <img 
      src="https://roni-linktree.vercel.app/static/media/profile.267fce3792e672e0a0f1.jpg" alt="Profile" />
     
      <div className={`overlay ${showOverlay ? "show" : ""}`}>
      <img src="https://roni-linktree.vercel.app/static/media/camera.6317244a5381be929492c969c7c62821.svg" alt="change prifile pic" />
      </div>
      </div>
   
    <img 
    src="https://roni-linktree.vercel.app/static/media/desktop.8b4369de8ab30a8ae240d027dafeccf0.svg" alt="Share" />
    
     
     </div>
     <h1>@Naynayy!!!</h1>
     {/* <img src={img} alt="" /> */}
   </header>
  )
}

export default Header