$(function () {
  function updateHourColors() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present future");
      } else if (blockHour === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past future");
      } else {
        $(this).addClass("future");
        $(this).removeClass("past present");
      }
    });
  }

  function loadEvents() {
    $(".time-block").each(function () {
      var blockId = $(this).attr("id");
      var savedEvent = localStorage.getItem(blockId);

      if (savedEvent) {
        $(this).find(".description").val(savedEvent);
      }
    });
  }

  $(".saveBtn").on("click", function () {
    var blockId = $(this).parent().attr("id");
    var eventText = $(this).siblings(".description").val();
    localStorage.setItem(blockId, eventText);
  });

  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));

  updateHourColors();
  loadEvents();
  setInterval(updateHourColors, 60000);
});

$(function () {
  function updateHourColors() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-")[1]);
      var description = $(this).find(".description");

      if (blockHour < currentHour) {

        $(this).addClass("past");
        $(this).removeClass("present future");
        description.val("Past event");
      } else if (blockHour === currentHour) {

        $(this).addClass("present");
        $(this).removeClass("past future");
        description.val("Current hour");
      } else {
       
        $(this).addClass("future");
        $(this).removeClass("past present");
        description.val("");
      }
    });

    
    $(".description").prop("readonly", true);
  }

});
