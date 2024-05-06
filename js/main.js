document.addEventListener("DOMContentLoaded", function () {
  var paragraph = document.getElementById("paragraph").querySelector("p");
  var fullText =
    "The Creative Parking Solutions Management System™ is designed to remotely monitor, assess and coordinate parking activity within a particular parking garage. Our system provides a one-of-a-kind parking experience by updating you on the live number of spaces left unfilled as well as the number of vehicles present. Having real-time knowledge of available parking spaces within your establishment has never been easier! Our system also eradicates the need to keep manual records as it automatically generates and stores reports for assessments and future reference.";
  var truncatedText = paragraph.textContent;
  var readMoreLess = document.createElement("span");
  readMoreLess.classList.add("read-more-less");
  readMoreLess.textContent = "Read More";

  paragraph.insertAdjacentElement("afterend", readMoreLess); // Insert the button after the paragraph

  readMoreLess.addEventListener("click", function () {
    if (paragraph.textContent === truncatedText) {
      paragraph.textContent = fullText;
      readMoreLess.textContent = "Read Less";
    } else {
      paragraph.textContent = truncatedText; // Restore truncated content
      readMoreLess.textContent = "Read More";
    }
  });
});
