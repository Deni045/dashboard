import '../App.css';
import home from '../static/img/home.png'
import path from '../static/img/path.png'
import fav from '../static/img/fav.png'
import note from '../static/img/note.png'
import cer from '../static/img/Certificate.png'
import aw from '../static/img/award.png'
import set from '../static/img/setting.png'

function Bar(){
    return(
        <div>
            <div className='Bar'>
                <img className='Bar-icon' src={home} alt="" />
                <p className='Bar-text'>Home</p>
            </div>

            <div className='Bar'>
                <img className='Bar-icon' src={path} alt="" />
                <p className='Bar-text'>My Courses</p>
            </div>

            <div className='Bar'>
                <img className='Bar-icon' src={fav} alt="" />
                <p className='Bar-text'>Favorite</p>
            </div>

            <div className='Bar'>
                <img className='Bar-icon_note' src={note} alt="" />
                <p className='Bar-text'>Test</p>
            </div>

            <div className='Bar'>
                <img className='Bar-icon_aw' src={aw} alt="" />
                <p className='Bar-text'>Achievements</p>
            </div>

            <div className='Bar'>
                <img className='Bar-icon_cer' src={cer} alt="" />
                <p className='Bar-text'>Certificate</p>
            </div>

            <div className='Bar'>
                <img className='Bar-icon_set' src={set} alt="" />
                <p className='Bar-text'>Settings</p>
            </div>

        </div>
    );
}

export default Bar