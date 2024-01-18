$(function () {
  console.log("Custom Js Loaded");

//   $(".home h1").hide();
  let starIndex = 1; // Keep track of the active star
  const starAmount = 5; // Total number of stars
  let increasing = true; // Flag to track the direction of animation

  const animateStars = () => {
    // Remove the class from the previous star
    if (starIndex <= 1) {
      $(".testimonialRating .oneOff2").removeClass("rotateAnimation");
      increasing = true;
    } else if (starIndex >= 5) {
      $(".testimonialRating .oneOff4").removeClass("rotateAnimation");
      increasing = false;
    }
    const prevChild = increasing
      ? ".testimonialRating .oneOff" + (starIndex - 1)
      : ".testimonialRating .oneOff" + (starIndex + 1);
    const currentChild = ".testimonialRating .oneOff" + starIndex;
    console.log(prevChild, currentChild);
    $(prevChild).removeClass("rotateAnimation");
    $(currentChild).addClass("rotateAnimation");

    // Update starIndex based on the direction of animation
    if (increasing) {
      starIndex = starIndex !== starAmount ? starIndex + 1 : starAmount;
    } else {
      starIndex = starIndex !== 1 ? starIndex - 1 : 1;
    }
  };

  // Set interval to call animateStars every 2000 milliseconds
  const intervalId = setInterval(animateStars, 2000);

  // Optionally, you can clear the interval when needed (for example, when the component unmounts)
  // clearInterval(intervalId);
});
