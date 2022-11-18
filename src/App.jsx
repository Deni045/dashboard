import bg from '../src/static/img/BG.png'
import './App.css';
import Left from '../src/components/Left';
import Middle from '../src/components/Middle'
import Right from '../src/components/right';

function App() {
  return (
    <div className="contaier">

      <img className='bg' src={bg} alt="" />
      <div className='box'>
        <Left/>
        <Middle/>
        <Right/>
      </div>
      
    </div>
  );
}

export default App;
