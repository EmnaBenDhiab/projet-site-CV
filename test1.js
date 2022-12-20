console.log("coucou")
var name=""
$("#idDiv").show()
$("#idDiv2").hide()
$("#Submit").click(function(){
  $("#idDiv").hide()
$("#idDiv2").show()
name = $("#name").val()
email = $("#email").val()
console.log(email)
phone = $("#phone").val()
console.log(phone)
university = $("#university").val()
console.log(university) 
$("#name2").text("Name : "+name)
})

