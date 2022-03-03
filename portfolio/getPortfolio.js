const portfolioComponent = (portfolioEl) => {
    let divEl = document.createElement("div");
    divEl.innerHTML = 
    `
        <!-- BOX -->
        <div class="portfolio__box">
            <!-- TITLE -->
            <div class="portfolio__title-box">
                <h2 class="portfolio__title">My Portfolio</h2>
            </div>
            <div class="portfolio__container-items">    
                <template class="portfolio__template">
                    <!-- WORKS -->
                    <div class="portfolio__container">
                        <!-- IMAGE -->
                        <img src="./images/img-services.png" class="portfolio__container-img">
                        <!-- TITLE -->
                        <h4 class="portfolio__container-title">Work</h4>
                        <!-- DESCRIPTION -->
                        <p class="portfolio__container-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo obcaecati ea libero voluptatum quisquam vitae aspernatur sed praesentium, nemo, eligendi et officiis saepe nisi. Consequatur laborum qui magni id deserunt!</p>
                        <!-- LINK -->
                        <a class="portfolio__container-link" href="http://www.google.com.ar">Ver mas...</a>
                        </div>
                </template>
            </div>
        </div>
    `
    portfolioEl.appendChild(divEl);
};

function addPortfolio(params){

    const template = document.querySelector(".portfolio__template");
    const container = document.querySelector(".portfolio__container-items");
    
    template.content.querySelector(".portfolio__container-img").src = params.photoPortfolio;
    template.content.querySelector(".portfolio__container-title").textContent = params.titlePortfolio;
    template.content.querySelector(".portfolio__container-description").textContent = params.descriptionPortfolio;
    template.content.querySelector(".portfolio__container-link").href = params.urlPortfolio;
    
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getPortfolio(){
    return fetch("https://preview.contentful.com/spaces/ccfsme2o764k/environments/master/entries?access_token=Au3n8HFpCZMuChg5XtRgZn1oWD6UqXAeYO4H5iTXYog&content_type=tddyWorks")        
    .then((r) => {
        return r.json();
    })
    .then((data) => {
        const fieldsCollections = data.items.map((item) => {
            return {
                photoPortfolio: searchImagen(item.fields.photoWork.sys.id, data).fields.file.url,
                titlePortfolio: item.fields.titleWork,
                descriptionPortfolio: item.fields.descriptionWork,
                urlPortfolio: item.fields.urlWork,
            }
        })
        return fieldsCollections;
    }) 
}

function searchImagen(idPhoto, data){
    const i = data.includes.Asset.find((item) => {
        return item.sys.id == idPhoto;
    })
    return i;
}

function main(){
    getPortfolio()
    .then((item) => {
        for (const i of item) {
            addPortfolio(i)
        }
    })
}

main();
