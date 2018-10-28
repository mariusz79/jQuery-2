$(document).ready(function(){
    $("th").addClass("underline");  //underline all h2 elements
    $("tr").addClass("border");     //adds a border to all ul elements
    $("tr:nth-child(odd)").addClass("selection");
    $("tr:nth-child(even)").addClass("selectionLight");

})