import fire from '../static/img/fire.png'
import dim from '../static/img/dim.png'
import base from '../static/img/firebase.png'
import Principle from '../static/img/principle.png'

import arrow from '../static/img/arrowRight.png'

function Course(){
    return(
        <div className="course">
            <p className="course-text">Course In Progress</p>

        <div className="courser">
            <div className="cor-bg">
                <div className='cor'>
                <div className="cor-icon">
                    <div className="cor-icon_bg">
                        <img className='fire' src={fire} alt="" />
                    </div>
                </div>
                <div className="cor-text">
                    <p className="cor-title">
                    Build Your First Application
                    </p>
                    <p className="cor-cor">
                    Codeigniter
                    </p>
                    
                </div>
                    <div className="arrow-arrow">
                        <img className='cor-arrow' src={arrow} alt="" />
                    </div>
               </div> 
            </div>


            <div className="cor-bg">
                <div className='cor'>
                <div className="cor-icon_dim">
                    <div className="cor-icon_bg">
                        <img className='dim' src={dim} alt="" />
                    </div>
                </div>
                <div className="cor-text">
                    <p className="cor-title">
                    Build something beautiful
                    </p>
                    <p className="cor-cor">
                    Sketch
                    </p>
                    
                </div>
                    <div className="arrow-dim">
                        <img className='cor-arrow' src={arrow} alt="" />
                    </div>
               </div> 
            </div>


            <div className="cor-bg">
                <div className='cor'>
                <div className="cor-icon_base">
                    <div className="cor-icon_bg">
                        <img className='base' src={base} alt="" />
                    </div>
                </div>
                <div className="cor-text">
                    <p className="cor-title">
                    Firebase on Android: Cloud Fire 
                    </p>
                    <p className="cor-cor">
                    Firebase
                    </p>
                    
                </div>
                    <div className="arrow-Firebase">
                        <img className=' cor-arrow' src={arrow} alt="" />
                    </div>
               </div> 
            </div>


            <div className="cor-bg">
                <div className='cor'>
                <div className="cor-icon_Principle">
                    
                        <img className='Principle' src={Principle} alt="" />
                    
                </div>
                <div className="cor-text">
                    <p className="cor-title">
                    Creating Custom Animations 
                    </p>
                    <p className="cor-cor">
                    Principle
                    </p>
                    
                </div>
                    <div className="arrow-Principle">
                        <img className='cor-arrow' src={arrow} alt="" />
                    </div>
               </div> 
            </div>
        </div>

        </div>
    );
}

export default Course