import '../App.css'
import student1 from '../static/img/Group 48.png'
import star from '../static/img/star.png'
import dots from '../static/img/dots.png'


function Path(){
    return(
        <div>
            <p className='op'>Your learning path</p>
        
        <div className='shadow'>
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
        </div> 

        </div>
    );
}

export default Path