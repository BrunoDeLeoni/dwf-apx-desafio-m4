const formComponent = (formEl) => {
    let divEl = document.createElement("div");
    divEl.innerHTML = 
    `
        <!-- BOX -->
        <div class="contact__box">
            <h2 class="contact__title">Contact</h2>
            <!-- FORM -->
            <div class="contact__form">
                <div class="contact__fielset">
                    <label for="name" class="contact__label">Name</label>
                    <input type="text" id="name" class="contact__input-name">
                </div>
                <div class="contact__fielset">
                    <label for="email" class="contact__label">Email</label>
                    <input type="email" id="email" class="contact__input-email">
                </div>
                <div class="contact__fielset">
                    <label for="message" class="contact__label">Message</label>
                    <textarea type="textarea" id="message" class="contact__input-textarea"></textarea>
                </div>
                <!-- BUTTON SEND -->
                <div class="contact__button-send">
                    <button class="contact__button">Send</button>
                </div>
            </div>
        </div>
    
    `
    formEl.appendChild(divEl);
};
