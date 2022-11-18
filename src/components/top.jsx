import '../App.css'
import ser from '../static/img/Search.png'
import bell from '../static/img/bell.png'


function Top(){
    return(
        <div className="top">

            <img className='Search' src={ser} alt="" />

            <p className='Search-text'>Search</p>

            <div className="bellShadow"></div>

            <div className="bellRing">
                 <img className='bell' src={bell} alt="" />
            </div>
            
        </div>
    );
}

export default Top