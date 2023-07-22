import './Footer.css';

function Footer(){
    return(
        <>
        <div className="footerContainer">
            <div className="trade">
                <p>This page is for portfolio purposes only. <br></br>- Stephanie Livengood</p>
            </div>
            <div className="sitemap">
                <p>
                <a href="/">Home</a>
                <a href="">Projects</a>
                <a href="">Contact</a>
                </p>
            </div>
            <div className="social">
                <p>
            <a href="https://www.linkedin.com/in/slivengood01/"><img id="LI" src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-1024.png" alt="" /></a>
            <a href="https://github.com/Stephanie01011011"><img id="git"src="https://cdn0.iconfinder.com/data/icons/social-media-2183/512/social__media__social_media__github_-512.png" alt="" /></a>
            <a href="https://www.instagram.com/stephiirenee/"><img id="insta"src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/instagram_icon-instagram_buttoninstegram-1024.png" alt="" /></a>
            </p>
            </div>
        </div>
        </>
    )
}

export default Footer;