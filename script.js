userInput.addEventListener("submit", (e) => {
    e.preventDefault();
    const newCard = createCard();
    if(userPhoto.value !== ""){
        newCard.cardImg.setAttribute("src", userPhoto.value)
        newCard.cardImg.setAttribute("alt", userCity.value)
    }else{
        newCard.cardImg.setAttribute("src", "https://www.clipartkey.com/mpngs/m/216-2164799_vector-illustration-of-crossroads-direction-road-signs.png")
        newCard.cardImg.setAttribute("alt", "roadsigns")
    }
    newCard.cardTitleCity.textContent = userCity.value;
    newCard.cardTitleState.textContent = userState.value;
    newCard.cardText.textContent = userWhy.value;

    cardsContainer.appendChild(newCard);
    userPhoto.value = ""
    userCity.value = ""
    userState.value = ""
    userInput.value = ""
    userWhy.value = ""
    
  });

  function createCard(){
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    card.setAttribute("style", "width: 18rem; max-height: 24rem;");
  
    let cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img-top");
  
    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
  
    let cardTitleCity = document.createElement("h5");
    cardTitleCity.setAttribute("class", "card-title-city");

    let cardTitleState = document.createElement("h6");
    cardTitleState.setAttribute("class", "card-title-state");
  
    let cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
  
    let btn = document.createElement("a");
    btn.setAttribute("class", "btn btn-primary");
    btn.textContent = "Edit";

    let rmBtn = document.createElement("a");
    rmBtn.setAttribute("class", "btn btn-danger");
    rmBtn.textContent = "Remove";
  
    cardBody.appendChild(cardTitleCity);
    cardBody.appendChild(cardTitleState)
    cardBody.appendChild(cardText);
    cardBody.appendChild(btn);
    cardBody.appendChild(rmBtn);
    card.appendChild(cardImg);
    card.appendChild(cardBody);
  
    card.cardImg = cardImg;
    card.cardTitleCity = cardTitleCity;
    card.cardTitleState = cardTitleState;
    card.cardText = cardText;

    rmBtn.addEventListener("click", function(){
        card.remove();
      })

    btn.addEventListener("click", function(){
      let newCity = prompt("What city do you want to change to?")
      if(newCity.value === ""){
      }else{
        card.cardTitleCity.textContent = newCity.value
      }
      let newState = prompt("What state is your new city in?")
      if(newState.value === ""){
      }else{
        card.cardTitleState.textContent = newState.value
      }
      let newPicture = prompt("What is the URL of your new picture?")
      if(newPicture.value === ""){
      }else{
        card.cardImg.setAttribute("src", newPicture.value)
      }
    })
  
    return card;
  }

