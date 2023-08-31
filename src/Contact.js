import firstCard from './images/phone.jpg';
import secondCard from './images/email.jpg';
import './App.css';

function Contact() {
  return (
    <div className="App">
    <header className="App-header">
            
            </header>
            <body className="App-body">
            <br></br><br></br>
            <div className='contact-container'>
              <div className='card'>
                <a href="#">
                  <div className='category'>Call / Text</div>
                  <img src={firstCard} alt =""/>
                  <h2 className='title'>Phone number: <br></br> 954-625-4476</h2>
                  <div className='description'>We respond between the times of 8:00 AM - 5:00 PM</div>
                </a>
              </div>
              <div className='card'>
                <a href="#">
                  <div className='category'>E-mail</div>
                  <img src={secondCard} alt =""/>
                  <h2 className='title'>E-mail: <br></br> Ariel18555@gmail.com </h2>
                  <div className='description'>We respond at all times of the day!</div>
                </a>
              </div>
            </div>
            </body>
    
      </div>
  );
}

export default Contact;
