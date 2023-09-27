// News letter
function newsLetter() {
  window.alert("Subscribe made successfully!");
}

//Viti ne footer
document.getElementById("year").textContent = new Date().getFullYear();

// Contact
function getMessage() {
  let firstName = document.getElementById("name").value;
  let lastName = document.getElementById("surname").value;

  if (!isNaN(firstName)) {
    document.getElementById("message").textContent = "Something went wrong";
    document.getElementsByClassName("alert-success")[0].style.display = "block";
    document
      .getElementsByClassName("alert-success")[0]
      .classList.add("alert-danger");
    return false;
  } else {
    document.getElementById("message").textContent =
      "Thank you " + firstName + " " + lastName + ". We got your message!";
    document.getElementsByClassName("alert-success")[0].style.display = "block";
  }
}
