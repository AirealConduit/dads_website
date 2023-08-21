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
                  <div className='category'>Call</div>
                  <img src={firstCard} alt =""/>
                  <h2 className='title'>Phone number: <br></br> 777-777-7777</h2>
                  <div className='description'>We respond between the times of 00:00 - 24:00</div>
                </a>
              </div>
              <div className='card'>
                <a href="#">
                  <div className='category'>E-mail</div>
                  <img src={secondCard} alt =""/>
                  <h2 className='title'>E-mail: <br></br> WorkEmail@gmail.com </h2>
                  <div className='description'>We respond all times of the day</div>
                </a>
              </div>
            </div>
            </body>
            <footer className="App-footer">
            <p>
            FOOTER
            </p>
            </footer>
    
      </div>
  );
}

export default Contact;
