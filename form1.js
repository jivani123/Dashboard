$(document).ready(function () {
    $("form").submit(function (event) {
      var formData = {
        fname: $("#fname").val(),
        femail: $("#femail").val(),
        fphone: $("#fphone").val(),
        fpass: $("#fpass").val(),
        fcpass: $("#fcpass").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "process.php",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });
  
      event.preventDefault();
    });
  });