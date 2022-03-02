const newProductComponent = (newProductEl) => {
    let divEl = document.createElement("div");
    divEl.innerHTML = 
    `
        <!-- BOX -->
        <div class="new-product__box">
            <template class="new-product__template">            
                <!-- IMAGE -->
                <img class="new-product__img" src="./images/img-new-product.png">
                <!-- SIN IMAGE -->
                <div class="new-product__container">
                    <!-- TITLE -->
                    <h2 class="new-product__container-title">NEW PRODUCT</h2>
                    <!-- DESCRIPTION -->
                    <p class="new-product__container-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed aliquid excepturi quam nulla quasi, harum necessitatibus esse dolorum, similique voluptate doloremque cupiditate exercitationem soluta. Sequi vero velit eligendi recusandae quasi.</p>
                </div>
            </template>     
        </div>
    `;
    newProductEl.appendChild(divEl);
};

function addNewProduct(params){

    const template = document.querySelector(".new-product__template");
    const container = document.querySelector(".new-product__box");
    
    
    template.content.querySelector(".new-product__container-title").textContent = params.titleNewProduct;
    template.content.querySelector(".new-product__container-text").textContent = params.descriptionNewProduct;
    template.content.querySelector(".new-product__img").src = params.photoNewProduct;
    
    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
}

function getNewProduct(){
    return fetch("https://preview.contentful.com/spaces/ccfsme2o764k/environments/master/entries?access_token=Au3n8HFpCZMuChg5XtRgZn1oWD6UqXAeYO4H5iTXYog&content_type=tddyNewProduct")
    .then((r) => {
        return r.json();
    })
    .then((data) => {
        const fieldsCollections = data.items.map((item) => {
            return {
                titleNewProduct: item.fields.titleNewProduct,
                descriptionNewProduct: item.fields.descriptionNewProduct,
                photoNewProduct: searchImagen(item.fields.photoNewProduct.sys.id, data).fields.file.url,
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
    getNewProduct()
    .then((item) => {
        for (const i of item) {
            addNewProduct(i)
        }
    })
}

main();