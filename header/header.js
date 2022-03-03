const headerComponent = (headerEl) => {
    let divEl = document.createElement("div");
    divEl.innerHTML = 
    `
        <!-- BOX -->        
        <div class="header__box">
            <!-- ISOTIPO -->
            <a class="header__isotipo" href="/index.html"><img class="header__isotipo-img" src="/images/img-isotipo.png"></a>
            <!-- MAIN -->
            <div class="main">
                <!-- MAIN MOBILE -->
                <img class="header__main-mobile-button" src="/images/img-main-burguer.png">
                <div class="header__main-mobile">
                    <div class="header__main-mobile-container-close">
                        <button class="header__main-mobile-button-close">X</button>
                    </div>
                    <div class="header__main-mobile-container">
                        <a class="header__main-mobile-item" href="/services.html">Services</a>
                        <a class="header__main-mobile-item" href="/portfolio.html">Portfolio</a>
                        <a class="header__main-mobile-item" href="/contact.html">Contact</a>
                    </div>
                </div>
                <!-- MAIN DESKTOP -->
                <div class="header__main-desktop">
                    <a class="header__main-desktop-item" href="/services.html">Services</a>
                    <a class="header__main-desktop-item" href="/portfolio.html">Portfolio</a>
                    <a class="header__main-desktop-item" href="/contact.html">Contact</a>
                </div>
            </div>
        </div>
    `
    
    headerEl.appendChild(divEl);
    
    function clickMain (){
        const openMainEl = document.querySelector(".header__main-mobile-button");
        const closeMainEl = document.querySelector(".header__main-mobile-button-close");
        const mainEl = document.querySelector(".header__main-mobile");
    
        openMainEl.addEventListener("click", () => {
            mainEl.style.display = "flex";
        })
    
        closeMainEl.addEventListener("click", () => {
            mainEl.style.display = "none";
        })
    };
    
    clickMain();

};
