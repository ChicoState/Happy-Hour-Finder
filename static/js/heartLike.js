const button = document.querySelector(".heart-like-button");

button.addEventListener("click", () => {
  if (button.classList.contains("liked")) {
    button.classList.remove("liked");
  } else {
    button.classList.add("liked");
  }
});


function testAlgo() {
  console.log("sending Test Algo");
  $(document).ready(function () {
    $.ajax({
      type: "POST",
      url: "/detail/{{stock.id}}/",
      data: {
        video: "gwg", // from form
      },
      success: function () {
        console.log("Success");
        // $('#message').html("<h2>Contact Form Submitted!</h2>")
      },
    });
    return false; //<---- move it here
  });
}