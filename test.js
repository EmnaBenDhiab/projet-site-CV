console.log("coucou")
var name=""
var email=""
var phone=""
var university=""
var graduated=""
var experience=""
var actualJob=""
var skill1=""
var skill2=""
var skill3=""
var skill4=""
$("#idDiv").show()
$("#idDiv2").hide()
$("#Submit").click(function(){
  $("#idDiv").hide()
$("#idDiv2").show()
name = $("#name").val()
$("#name2").text("Name : "+name)
email = $("#email").val()
$("#email2").text(email)
phone = $("#phone").val()
$("#phone2").text(phone)
university = $("#university").val()
$("#university2").text(university)
graduated = $("#graduated").val()
$("#graduated2").text(graduated)
experience = $("#experience").val()
$("#experience2").text(experience)
actualJob = $("#actualJob").val()
$("#actualJob2").text(actualJob)
skill1 = $("#skill1").val()
$("#skill12").text(skill1)
skill2 = $("#skill2").val()
$("#skill22").text(skill2)
skill3 = $("#skill3").val()
$("#skill32").text(skill3)
skill4 = $("#skill4").val()
$("#skill42").text(skill4)
})

