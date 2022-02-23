const formComponent = (formEl) => {
    let divEl = document.createElement("div");
    divEl.innerHTML = 
    `
        <!-- BOX -->
        <div class="form__box">
            <h2 class="form__title">Contact</h2>
            <!-- FORM -->
            <div class="form__formulario">
                <div class="form__fielset">
                    <label for="name" class="form__label">Name</label>
                    <input type="text" id="name" class="form__input-name">
                </div>
                <div class="form__fielset">
                    <label for="email" class="form__label">Email</label>
                    <input type="email" id="email" class="form__input-email">
                </div>
                <div class="form__fielset">
                    <label for="message" class="form__label">Message</label>
                    <textarea type="textarea" id="message" class="form__input-textarea"></textarea>
                </div>
                <!-- BUTTON SEND -->
                <div class="form__button-send">
                    <button class="form__button">Send</button>
                </div>
            </div>
        </div>
    
    `
    formEl.appendChild(divEl);
};
