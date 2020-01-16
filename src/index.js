const stories = document.querySelectorAll(".story-card");

stories.forEach( (story) => {
  document.addEventListener( "scroll", (event) => {
    // console.log(story);
    const storyPosition = story.offsetTop - window.scrollY;
    // If the story is 10px from the top, we display it
    if (storyPosition < 200 && !story.classList.contains("opacity-1")) {
      story.classList.add("opacity-1");
    } 
  });
});

document.addEventListener( "scroll", (event) => {
  document.querySelector(".fa-angle-double-down").style.opacity = 0;
});