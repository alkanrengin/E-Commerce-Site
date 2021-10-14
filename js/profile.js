let user;
if (localStorage.getItem("userId") != null) {
  user = localStorage.getItem("userId");
} else if (sessionStorage.getItem("userId") != null) {
  user = sessionStorage.getItem("userId");
}
const userData = JSON.parse(user);

$(document).ready(function () {
  $("#FormGuncel").submit(function (e) {
    e.preventDefault();
    const name = $("#userN").val();
    const surname = $("#userS").val();
    const phone = $("#userP").val();
    const email = $("#email").val();
    const password = $("#password").val();
    if (name == "") {
      $("#userN").cursor();
    } else if (surname == "") {
      $("#userS").cursor();
    } else if (phone == "") {
      $("#userP").cursor();
    } else if (email == "") {
      $("#email").cursor();
    } else if (password == "") {
      $("#password").cursor();
    }
    const data = {
      ref: "ce16b92206474a5ea51d575ce260b184",
      userId: userData,
      userName: name,
      userSurname: surname,
      userMail: email,
      userPhone: phone,
      userPass: password,
    };
    const url = "https://www.jsonbulut.com/json/userSettings.php";

    $.ajax({
      type: "get",
      url: url,
      data: data,
      dataType: "json",
      success: function (response) {
        if (response.user[0].durum) {
          html = `<div class="alert alert-primay mt-2" role="alert" id="alert">
          Bilgileriniz başarıyla güncellendi!
        </div>`;
          $("#guncel").append(html);
          setTimeout(function () {
            $("#alert").remove();
          }, 2000);
        } else {
          html = `<div class="alert alert-danger mt-2" role="alert" id="alert">
          ${response.user[0].mesaj}. Lütfen bilgilerinizi kontrol ediniz.
        </div>`;
          $("#guncel").append(html);
          setTimeout(function () {
            $("#alert").remove();
          }, 2000);
        }
      },
    });
  });
});