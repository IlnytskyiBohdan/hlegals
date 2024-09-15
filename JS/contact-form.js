document.addEventListener("submit", formSubmit);

      function formSubmit(event) {
        event.preventDefault();
        console.log(event, "event");
        const name = event.target[0].value;
        const message = event.target[1].value;
        const phone = event.target[2].value;
        const email = event.target[3].value;
        const result = document.querySelector(".result");
        result.innerHTML = `Your name: ${name},<br/> Your message: ${message}, <br/> Your phone: ${phone}, <br/> Your email: ${email}`;
        result.style.display = "none";
      }


