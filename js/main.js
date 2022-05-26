let ratingSelected;
      const textContainer = document.querySelector(".text-container");
      const errorMsg = document.querySelector(".error-msg");
      const ratingBtns = document.querySelectorAll(".btn-rating");
      const cardBody = document.querySelector(".card");

      ratingBtns.forEach((button) =>
        button.addEventListener("click", (e) => {
          clearError();
          ratingSelected = e.target.value;
          ratingBtns.forEach((button) =>
            button.classList.remove("btn__active")
          );
          button.classList.add("btn__active");
        })
      );

      document.querySelector(".btn-submit").addEventListener("click", () => {
        if (ratingSelected) displaySummary();
        else showError();
      });

      const displaySummary = () => {
        const initialHeight = cardBody.clientHeight;
        cardBody.style.minHeight = `${initialHeight}px`;
        cardBody.classList.add("hidden");

        setTimeout(() => {
          swapData();
          cardBody.classList.remove("hidden");
          cardBody.style.minHeight = `0px`;
        }, 300);
      };

      const showError = () => {
        errorMsg.classList.remove("hidden");
        errorMsg.innerHTML = "Please give us a rating to proceed.";
      };

      const clearError = () => {
        errorMsg.classList.add("hidden");
        errorMsg.innerHTML = "";
      };

      const swapData = () => {
        document
          .querySelector(".card-background")
          .classList.add("card__center");
        document.querySelector(".rating-control").classList.add("disabled");

        document.querySelector(".card-header").innerHTML = `
            <img class="header-image" src="./images/illustration-thank-you.svg" alt="" />
            <div class="user-rating"><p>You selected ${ratingSelected} out of 5</p></div>
            `;
        textContainer.innerHTML = `
            <h1 class="card-heading">Thank You!</h1>
            <p>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </p>
            `;
      };