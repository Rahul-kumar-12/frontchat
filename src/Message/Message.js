import React from 'react'
import "./message.css"
const Message = ({ user, message, classs, classes }) => {
    const date = new Date();
    const options = { hour12: true, hour: '2-digit', minute: '2-digit' };
    const timeString = date.toLocaleTimeString([], options);
    if (user) {
        return (
            <>
                <div className={`messageBox ${classs}`}>{`${user}:${message}`} <h6 className='date-time' style={{}}>{timeString}</h6> </div>
                <div className={`${classes}`} >
                    <img src='./Images/Robot.png' alt='logo' style={{ "width": "50px", "height": "50px", "borderRadius": "50%", "marginTop": "1rem" }} />
                    <br />
                </div>
            </>
        )

    }
    else {
        return (
            <>
                <div className={`messageBox ${classs} `}>{`you: ${message}`}  <h6 className='date-time'>{timeString}</h6> </div>
                <div className={`${classes}`}>
                    <img src='./Images/Robot.png' alt='logo' style={{ "width": "50px", "height": "50px", "borderRadius": "50%", "marginTop": "1rem" }} />
                    <br />
                    <br />
                </div>

            </>

        )
    }

}

export default Message;