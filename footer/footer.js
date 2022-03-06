const footerComponent = (footerEl) => {
    let divEl = document.createElement("div");
    divEl.innerHTML = 
    `
    <!-- BOX -->
        <div class="footer__box">
            <!-- DVLP DESING -->
            <div class="footer__logo">
                <img class="footer__logo-img" src="./images/img-logotipo.png">
                <label class="footer__logo-label">© 2022 Bruno De Leoni</label>
            </div>
            <!-- LINK -->
            <div class="footer__link">
                <div class="footer__link-box">
                    <a id="instagram" class="footer__link-web" href="http://instagram.com/tddy.visiontecnologica/">Instagram</a>
                    <img class="footer__link-img" src="./images/img-footer-instagram.png" alt="instagram">
                </div>
                <div class="footer__link-box">
                    <a id="linkedin" class="footer__link-web" href="http://linkedin.com/">Linkedin</a>
                    <img class="footer__link-img" id="linkedin" src="./images/img-footer-linkedin.png" alt="linkedin">
                </div>
                <div class="footer__link-box">
                    <a id="github" class="footer__link-web" href="http://github.com/">GitHub</a>
                    <img class="footer__link-img" src="./images/img-footer-github.png" alt="github">
                </div>
            </div>
        </div>
    `
    footerEl.appendChild(divEl);    
};
