import React from 'react'
import './mainframe.css'
import visualone from '../../assets/visualone.jpg'

function MainFrame() {
  return (
    <div className='mainframe'>
        <div className="main__contents">
            <div className="main__content-frame">
                <h2>
                    With a promise of Care &<br/> Convenience.
                </h2>
                <br />
                <p>
                    Introducing the future of healthcare with HealTether -<br />
                    Where compassionate caregiving meets state-of-the-art technology,<br />
                    Ensuring a healthier, happier you. <br />
                </p>

                <div className='main__buttons'>
                    <div className="main__button1 main__button">
                        <a href="#get-started">Get Started</a>
                    </div>
                    <div className="main__button2 main__button">
                        <a href="#book-a-demo">Book a Demo</a>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="vision">
            <img src={visualone} alt="" className='visual-img' />
        </div>
    </div>
  )
}

export default MainFrame