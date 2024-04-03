import './Heading.css';
import Clock from './Clock.jsx';
import logo from '../assets/logo.png';
import Stopwatch from './Stopwatch.jsx';

function Heading() {
    return(
      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className = "title">Pomodoro</h1>
        <Clock />
      </div>
    );
}

export default Heading;