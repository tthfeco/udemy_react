import img from '../assets/react-core-concepts.png';
import './Header.css';

const descriptions = ['Fundamental', 'Curcial', 'Core']

function genRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  return (
    <header>
      <img src={img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {descriptions[genRandomInt(3)]} React concepts you will need for almost
        any app you are going to build!
      </p>
    </header>
  );
}