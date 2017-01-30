// This code runs when the page loads
$(function() {

  $(".thumbnail").on("click", function(event) {
    event.preventDefault()
    var elementThatWasClicked = $(this)
    console.log(elementThatWasClicked)
    // remove the element  remove
    elementThatWasClicked.parent().remove()
    // traversing .parent()
  })

})
