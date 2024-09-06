import {useContext} from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'


const Main = () => {
    
    
 const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
} = useContext(Context);

const handleCardClick = (promptText) => {
    setInput(promptText);
};

  return (
    <div className='main'>
      <div className="nav">
        <p>Shivanshu's Gemini</p>
        <img src={assets.my_icon}/>
      </div>
      <div className="main-container">
        {!showResult ? (
            <>
            <div className="greet">
            <p><span>Hello, Dev.</span></p>
            <p>How can I help you today...</p>
        </div>
        <div className="cards" >
            <div className="card" onClick={() => { handleCardClick("Suggest beautiful places to see on an upcoming road trip ");}}>
                <p>Suggest beautiful places to see on an upcoming road trip</p>
                <img src={assets.compass_icon}/>
            </div>
            <div className="card" onClick={() => { handleCardClick("Briefly summarize this concept: Urban Planning ");}}>
                <p>Briefly summarize this concept: Urban Planning</p>
                <img src={assets.bulb_icon}/>
            </div>
            <div className="card" onClick={() => { handleCardClick("Brainstorm team bonding activities for our work retreat ");}}>
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon}/>
            </div>
            <div className="card" onClick={() => { handleCardClick("Create a script for the youtube video about coding ");}}>
                <p>Create a script for the youtube video about coding</p>
                <img src={assets.code_icon}/>
            </div>
        </div>
        </>
        ):(
            <div className="result">
            <div className="result-title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
                <img src={assets.gemini_icon} />
                {loading ? (
                    <div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                ) : (
                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
            </div>
        </div>  
        )}
        
        
        

        
        <div className="main-bottom">
            <div className="search-box">
               <input onChange={(e)=>{setInput(e.target.value);}} value={input} type='text' placeholder='Enter a prompt here'/>
                <div>
                   <img src={assets.gallery_icon} />
                   <img src={assets.mic_icon} />
                   <img onClick={()=>{onSent();}} src={assets.send_icon} /> 
                </div>
            </div>
            <p className="bottom-info">
              Shivanshu's Gemini may display incorrect info,including about people, so double-check its responses.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Main
