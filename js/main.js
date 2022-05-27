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
        document.querySelector(".header-image").classList.remove("image-disabled");

        const starIcon = document.querySelector(".star-icon")
        const userRating = document.createElement("div")
        userRating.classList.add("user-rating")
        userRating.innerHTML = `
        <p>You selected ${ratingSelected} out of 5</p>
        `
        document.querySelector(".card-header").appendChild(userRating)
        document.querySelector(".card-header").removeChild(starIcon)

        textContainer.innerHTML = `
            <h1 class="card-heading">Thank You!</h1>
            <p>
                We appreciate you taking the time to give a rating. If you ever need more support,
                don’t hesitate to get in touch!
            </p>
            `;
      };