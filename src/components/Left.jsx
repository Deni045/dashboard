
import '../App.css';
import Bar from '../components/Bar'
import Avatar from '../components/Avatar';
import Middle from '../components/Middle'

function left() {
  return (
    <div className='left' >
      <p className='logo'  data-descr='.'>Elearn</p>
     <Bar/>
     <Avatar/>
     <div className='line'></div>
     
    </div>
  );
}

export default left;