import '../App.css'
import wave from '../static/img/waves.png'
import pop from '../static/img/popup.png'

function Bottom(){
    return(
        <div>
            <p className='points'>Your learning point </p>

            <div className="stats">
                <div className="number">
                    <p className='numbers'>60</p>
                    <p className='numbers'>40</p>
                    <p className='numbers'>20</p>
                    <p className='numbers'>0</p>
                </div>
                <div className="bot">
                       <div className='inner'>
                            <img className='pop' src={pop} alt="" />
                            <img className='wave' src={wave} alt="" />
                        </div>
                    <div className="months">
                        <p className='month'>Oct</p>
                        <p className='month'>Mar</p>
                        <p className='month'>Jul</p>
                        <p className='month'>Aug</p>
                    </div> 
                </div>
                

            </div>
        </div>
    );
}

export default Bottom