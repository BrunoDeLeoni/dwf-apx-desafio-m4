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

    function sendForm() {
        const form  = document.querySelector(".contact__form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let data = new FormData(form);
            let name = data.get("name");
            let email = data.get("email");
            let message = data.get("message");

            console.log(name, email, message);
        
            fetch("https://apx-api.vercel.app/api/utils/dwf", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({
                    to: "brunobarbaradeleoni@gmail.com",
                    message: {
                        Nombre: name,
                        Email: email,
                        Mensaje: message,
                    },
                }),
            })
            .then(r => r.json())
            .catch(e => console.error('Error:', e))
            .then(r => console.log('Success:', r));
        });
    };

    sendForm();

};
