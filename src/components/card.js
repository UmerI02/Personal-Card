import image from '../mypic.png'
export default function Card(){
    return(
        <div className='card'>
            <img className='card--image' src={image}/>
            <div className='subcard'>
            <h1 id='name'>Umer Ibrar</h1>
            <h2 id='designation'>MERN Engineer</h2>
            <h3  id='website'><a href="https://www.linkedin.com/in/umer-ibrar-412676247">My Website</a></h3>
            <div className='card--links'>
            <button id="email"><i className="fa fa-envelope"></i> Email</button>
            <button id="linkedin"><i className='fa fa-linkedin'></i> Linkedin</button>
            </div>
            <h1>About</h1>
            <p>My name is Umer Ibrar. I am a student of Computer Science. I like to develop interactive and engaging websites. I am 22 years old</p>
            <h1>Interests</h1>
            <p>My interests are watching video games, movies, coding, gym, and shooting sports (practicing on precision and focus!). I am very passionate about learning how to be the best version of myself.</p>
            </div>
        <div className='bottom'>
            <button><i className='fa fa-twitter'></i></button>
            <button><i className='fa fa-facebook'></i></button>
            <button><i className='fa fa-instagram'></i></button>
            <button><i className='fa fa-github'></i></button>
        </div>
        </div>
    )
}