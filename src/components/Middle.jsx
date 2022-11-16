import '../App.css'
import Learn from './Learn';

function middle(){
    return(
        <div className="middle">
            <div className="title">
              <p className="hi">Hi toda,</p>
              <p className="learn">What will you learn today?</p>   
            </div>
             <Learn/>
        </div>
    );
}

export default middle