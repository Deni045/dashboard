import avatar from '../static/img/avatar.png'
import arrow from '../static/img/arrow.png'

function Avatar(){
    return(
        <div>
            <div className='avatar-box'>
                <img className='avatar' src={avatar} alt="" />
                <div className='text-box'>
                <p className='name'>Toda D.</p>
                <p className='sub'>Premium account</p>   
                </div>
                
                <img className='arrow' src={arrow} alt="" />
            </div>
        </div>
    );
}

export default Avatar