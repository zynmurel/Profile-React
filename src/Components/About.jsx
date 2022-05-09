const About = (props) => {
    const active= props.active;

    return ( 
        <div className="about">
            <div className="image">
                <div className="c1"></div>
                <div className="c2"></div>
                <div className="c3"></div>
             <img className="sean" src="images/seanphoto.png" alt="imagesean" />
        </div>
        {active==="link"&&<div className="link">
                <h1>About me</h1>
                <p>I am a college student from Bohol Island State University (Balilihan Campus) taking up Bachelor of Science and Information Technology. I want to be a computer programmer and still learning a lot. I am currently learning ReactJS.</p>
            </div>}
            {active==="inform"&&<div className="inform">
                <h1>Information</h1>
                <p><span>Name: </span>Sean Maruel A. Comingues</p>
                <p><span>Birthday: </span>January 28, 1999</p>
                <p><span>Gender: </span>Male</p>
                <p><span>Address: </span>Poblacion, Bilar, Bohol</p>
                <p><span>Phone: </span>+639876543210</p>
                <p><span>Email: </span>comingues99@gmail.com</p>
                <p><span>Github: </span>zynmurel</p>
            </div>}
            {active==="skill"&&<div className="skill">
                <h1>Skills</h1>
                <div className="left">
                <h3>Knowledge: </h3>
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>ReactJS</p>
                <p>Java</p>
                </div>
                <div className="right">
                <h3>Tool/s: </h3>
                <p>Visual Studio</p>
                <p>Photoshop</p>
                <p>iTerm</p>
                </div>
            </div>}
            {active==="personal"&&<div className="personal">
                <h1>Personal</h1>
                <p></p>
            </div>}
        </div>
     );
}
 
export default About;