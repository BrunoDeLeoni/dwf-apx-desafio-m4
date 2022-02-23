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
                <img class="header__main-mobile-burguer-img" src="/images/img-main-burguer.png">
                <ul class="header__main-mobile">
                    <div class="header__main-mobile-burguer">
                        <li class="header__main-mobile-item">Portfolio</li>
                        <li class="header__main-mobile-item">Services</li>
                        <li class="header__main-mobile-item">Contact</li>
                    </div>
                </ul>
                <!-- MAIN DESKTOP -->
                <div class="header__main-desktop">
                
                </div>
            </div>
        </div>
    `
    headerEl.appendChild(divEl);
};

