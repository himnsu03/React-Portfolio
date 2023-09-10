import React from "react";

import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterCircle,

    AiOutlineArrowUp,
} from "react-icons/ai";

import "../styles/footer.scss";
const Footer = () => {
    return (
        <footer>
            <div>

                <h2>Himanshu Sharma</h2>
                <p>him03oct@gmail.com</p>
            </div>

            <aside>
                <h2>Contact</h2>

                <article>
                    <h2>Social Media</h2>
                    </article>

                    <article>
                        <a href="https://twitter.com/himnsupndt" target={"blank"}>
                            <AiFillTwitterCircle />
                        </a>
                        <a href="https://instagram.com/himnsu03" target={"blank"}>
                            <AiFillInstagram />
                        </a>
                        <a href="https://github.com/himnsu03" target={"blank"}>
                            <AiFillGithub />
                        </a>
                        <a href="www.linkedin.com/in/himanshu-sharma-6005b3233" target={"blank"}>
                            <AiFillLinkedin />
                        </a>
                    </ article>
            </aside>
            
        </footer>
    );
};

export default Footer;