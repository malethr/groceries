$(document).ready(function(){
    $("#formOne").submit(function(event) {
      var inputLists = ["gro1","gro2","gro3","gro4"];

      inputLists.forEach(function(inputList){
        var userInput = [];
        userInput.push($("input#" + inputList).val());
        var sortArray = userInput.sort();
        $("ul").append("<li>"+($(sortArray.val())+"</li>");
      });

    $("#formOne").hide();
    $("#output").show();

    event.preventDefault();
  });
});
