const servicesComponent = (servicesEl) => {
    let divEl = document.createElement("div");
    divEl.innerHTML = 
    `
        <!-- BOX -->
        <div class="services__box">
        <!-- TITLE -->
        <h2 class="services__title">My Services</h2>
            <template class="services__template">
                <!-- SERVICES -->
                <div class="services__container">
                    <!-- IMAGE -->
                    <img src="/images/img-services.png" class="services__container-img">
                    <!-- TITLE -->
                    <h4 class="services__container-title">Service</h4>
                    <!-- DESCRIPTION -->
                    <p class="services__container-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo obcaecati ea libero voluptatum quisquam vitae aspernatur sed praesentium, nemo, eligendi et officiis saepe nisi. Consequatur laborum qui magni id deserunt!</p>
                </div>
            </template>
        </div>
    `
    servicesEl.appendChild(divEl);
};

function addServices(params){

    const template = document.querySelector(".services__template");
    const container = document.querySelector(".services__box");
    
    
    template.content.querySelector(".services__container-title").textContent = params.titleService;
    template.content.querySelector(".services__container-description").textContent = params.descriptionService;
    template.content.querySelector(".services__container-img").src = params.photoService;
    
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getServices(){
    return fetch("https://preview.contentful.com/spaces/ccfsme2o764k/environments/master/entries?access_token=Au3n8HFpCZMuChg5XtRgZn1oWD6UqXAeYO4H5iTXYog&content_type=tddyServices")        
    .then((r) => {
        return r.json();
    })
    .then((data) => {
        const fieldsCollections = data.items.map((item) => {
            return {
                titleService: item.fields.titleService,
                descriptionService: item.fields.descriptionService,
                photoService: searchImagen(item.fields.photoService.sys.id, data).fields.file.url,
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
    getServices()
    .then((item) => {
        for (const i of item) {
            addServices(i)
        }
    })
}

main();