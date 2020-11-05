bookValidation = () => {
  userName = document.bookingForm.your_name.value;
  userEmail = document.bookingForm.your_email.value;
  userPhone = document.bookingForm.your_phone.value;
  userParcel = document.bookingForm.your_parceltype.value;
  userOrigin = document.bookingForm.your_origin.value;
  userDestination = document.bookingForm.your_destination.value;
  userQuantity = document.bookingForm.your_quantity.value;
  userWeight = document.bookingForm.your_weight.value;
  userWidth = document.bookingForm.your_width.value;
  userHeight = document.bookingForm.your_height.value;

  if (
    userName == null ||
    userName == "" ||
    userEmail == null ||
    userEmail == "" ||
    userPhone == null ||
    userPhone == "" ||
    userParcel == null ||
    userParcel == "" ||
    userOrigin == null ||
    userOrigin == "" ||
    userDestination == null ||
    userDestination == "" ||
    userQuantity == null ||
    userQuantity == "" ||
    userWeight == null ||
    userWeight == "" ||
    userWidth == null ||
    userWidth == "" ||
    userHeight == null ||
    userHeight == ""
  ) {
    document.querySelector(".screen-reader").textContent =
      "Oops! There was a problem with your submission. Please complete the form and try again.";
    return false;
  } else {
    // window.open("thank-you.html", "_blank");
    document.querySelector(".screen-reader").textContent =
      " Thank you! We will send a mail to you shortly";
  }
};

contactForm = () => {
  varName = document.contactForm.your_name.value;

  if (Name == null || Name == "") {
    alert("Hello");
  }
};