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
                <img class="header__main-mobile-img" src="/images/img-main-burguer.png">
                <div class="header__main-mobile"></div>
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
};

