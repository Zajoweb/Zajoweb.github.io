//Animation on buttons in menu
const list = document.querySelectorAll(".list");

function activeLink()
{
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeLink));

//Scrolling
$(document).ready(function()
{
  $('a').on("click", function(event)
  {
    if (this.hash !== "")
    {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
        window.location.hash = hash;
      });
    }
  });
});
