// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const submitBtn = document.getElementById("submit-button");

const contactPage = document.getElementById("contact-page");

submitBtn.addEventListener("click", function changeContact() {
  const paragraph = document.createElement("p");
  const thankYou = document.createTextNode("Thank you for your message!");
  paragraph.appendChild(thankYou);

  contactPage.replaceChildren(paragraph);
  contactPage.style.fontSize = "24px";
});

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
