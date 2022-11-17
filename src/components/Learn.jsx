import '../App.css'
import toda from '../static/img/toda.png'
import dots from '../static/img/classic dot.png'

function learn(){
    return(
        <div className='learn-box'>
        <div className='toda-box_lighter'>       
            <div className='toda-box_light'>
                <div className='toda-box'>
        
                  <img className='toda' src={toda} alt="" />  
        
                    <div className='learn-text'>
                      <p className='art'>Artificial Intelligence for Marketing</p>
                      <p className='art-learn'>Learn how artificial intelligence is reshaping the way marketing is done at both large and small organizations.</p>
                      <div>
                           <a className='learn-button' href="#">Learn now</a>
                      </div>
        
                      <div className='dots'>
                        
                            <div className="dotsDots">
                               <div className='classicDots'></div>   
                            </div>
                            <div className="dotsDots">
                                <div className='classicDots'></div>
                            </div>
                            <div className="dotsDots">
                                <div className='classicDots'></div>
                            </div>
                            <div className="dotsDots">
                                <div className='classicDots'></div> 
                            </div> 
        
                      </div>
                    </div>
        
                </div>
            </div>
        </div> 
        </div>
    );
}

export default learn