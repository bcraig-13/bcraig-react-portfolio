import React from "react";
import "./Contact.css";

function Contact() {
    return(
        <div className="container" style={{marginTop:"100px"}}>
            <div className="row">
                <div className="col-lg-6">
                    <h1>Contact</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <p>Want to get in touch? Feel free to contact me through any of the following:</p>
                    <br />
                    <p>Github: <a href="https://github.com/bcraig-13" target="_blank">https://github.com/bcraig-13</a></p>
                    <br />
                    <p>LinkedIn: <a href="https://www.linkedin.com/in/brandon-craig-4735b7203/" target="_blank">https://www.linkedin.com/in/brandon-craig-4735b7203/</a></p>
                    <br />
                    <p>Email: <a href="mailto:thegamingraven13@gmail.com">thegamingraven13@gmail.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
