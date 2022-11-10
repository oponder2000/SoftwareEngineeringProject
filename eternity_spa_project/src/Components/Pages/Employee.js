
import React from 'react';
import '../Employee.css';
//import doctor1 from './doctor7.jpg';

function Employee(props) {
    return (
        <div className="Employee">
            <div className="spaces">
                <div className="grid1">
            <img className="img-1" alt="doctor" src={props.src} />
            <div className="bio-box">
            <h1><u> Bio</u></h1>
                            <p className="p3">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna aliqua. Molestie a iaculis at erat pellentesque. 
                             Tempus egestas sed sed risus pretium quam vulputate dignissim. 
                             Platea dictumst vestibulum rhoncus est pellentesque elit. 
                             Enim ut sem viverra aliquet eget sit amet tellus. 
                             Sit amet nulla facilisi morbi tempus. Fames ac turpis egestas maecenas. 
                             Tristique senectus et netus et malesuada fames ac turpis. 
                             Sed viverra ipsum nunc aliquet bibendum enim facilisis. 
                             Ut porttitor leo a diam sollicitudin.
                             Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras.
                            </p>
                            </div>
            </div> 
            <div className="grid2"> 
            <h1><u> James Thomas </u></h1><br />
            <div className="about-box">
                <h1><u> About Work </u></h1> <br />
                <p className="p2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                 Nunc mi ipsum faucibus vitae aliquet nec. Gravida in fermentum et sollicitudin. 
                 Diam in arcu cursus euismod quis viverra nibh cras pulvinar. 
                 At urna condimentum mattis pellentesque id nibh tortor id. 
                 Lectus nulla at volutpat diam ut. Ornare arcu odio ut sem nulla. 
                 Sapien pellentesque habitant morbi tristique senectus. 
                 Odio aenean sed adipiscing diam donec adipiscing tristique. 
                 Netus et malesuada fames ac. Blandit turpis cursus in hac habitasse. 
                 Et leo duis ut diam quam nulla. Ipsum a arcu cursus vitae congue mauris rhoncus aenean. 
                 Id aliquet lectus proin nibh nisl condimentum id venenatis a. Ut eu sem integer vitae justo. 
                 Eu lobortis elementum nibh tellus molestie nunc non blandit massa. 
                 Enim sed faucibus turpis in eu mi bibendum neque. 
                 Tristique nulla aliquet enim tortor at auctor urna. 
                 Praesent semper feugiat nibh sed pulvinar proin gravida hendrerit lectus. 
                 Tincidunt praesent semper feugiat nibh sed pulvinar proin.</p><br />

                 <p className="p1"> Curabitur gravida arcu ac tortor dignissim. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. 
                    Ipsum nunc aliquet bibendum enim facilisis gravida. Eget mi proin sed libero. 
                    Pharetra pharetra massa massa ultricies mi quis. Fusce id velit ut tortor pretium viverra suspendisse. 
                    Nam at lectus urna duis convallis convallis tellus id. Vestibulum morbi blandit cursus risus.
                     Elementum sagittis vitae et leo duis. Nec ultrices dui sapien eget mi proin. 
                     Pharetra magna ac placerat vestibulum.</p> <br /></div>
            <br />
            <div className="work-box">
                <h1><u> Work Experience </u></h1> 
                <ul className="l1">
                    <li> Job 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li> Job 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                    <li> Job 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>         
                </ul>
                </div>
                </div>
                </div>    
        </div>
    )
}

export default Employee