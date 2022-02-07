$(document).ready(function () {
  $("td").click(function () {
    var content = $(this).text();
    if (content != "Not Available") {
      $(this).css("cursor", "pointer");
      $(this).toggleClass("highlight");
      }
    })
  })
