import '../App.css'
import student1 from '../static/img/Group 48.png'
import student2 from '../static/img/Group 49.png'
import student3 from '../static/img/Group 50.png'
import star from '../static/img/star.png'
import dots from '../static/img/dots.png'


function Path(){
    return(
        <div >
            <p className='op'>Your learning path</p>
    <div className='shadow'></div>    
        <div className='paths-line'>

                <div className='paths'>
                    <p className='paths-title'>Sketch from A to Z</p>
                    <p className='paths-lenght'>12 hours of video tutorials </p>
                    <p className="paths-students">423 students</p>
                    <div className='paths-bottom'>
                        <img className='student' src={student1} alt="" />
                        <img className='star' src={star} alt="" />
                        <img className='twoDots' src={dots} alt="" />
                    </div>
                </div>

                <div className='paths'>
                    <p className='paths-title'>Intro to React</p>
                    <p className='paths-lenght'>8 hours of video tutorials</p>
                    <p className="paths-students">648 students</p>
                    <div className='paths-bottom'>
                        <img className='student' src={student2} alt="" />
                        <img className='star' src={star} alt="" />
                        <img className='twoDots' src={dots} alt="" />
                    </div>
                </div>

                <div className='paths'>
                    <p className='paths-title'>Become a Manager</p>
                    <p className='paths-lenght'>24 hours of video tutorials</p>
                    <p className="paths-students">562 students</p>
                    <div className='paths-bottom'>
                        <img className='student' src={student3} alt="" />
                        <img className='star' src={star} alt="" />
                        <img className='twoDots' src={dots} alt="" />
                    </div>
                </div>
    
            </div> 

        </div>
    );
}

export default Path