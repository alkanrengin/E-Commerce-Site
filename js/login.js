$(document).ready(function () {
  $("#FormGiris").submit(function (e) {
    e.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();
    const remember = $("#hatir").val();

    //login form validation
    if (email == "") {
      $.bootstrapGrowl("E-mail boş bırakılamaz.", {
        type: "danger",
        delay: 2000,
      });
      
    } else if (password == "") {
      $.bootstrapGrowl("Şifre boş bırakılamaz.", {
        type: "danger",
        delay: 2000,
      });
      
    }
     else {
      const pushObj = {
        ref: "ce16b92206474a5ea51d575ce260b184",
        userEmail: email,
        userPass: password,
        face: "no",
      };
      const url = "https://www.jsonbulut.com/json/userLogin.php";

      $.ajax({
        type: "get",
        url: url,
        data: pushObj,
        dataType: "json",
        success: function (response) {
          const status = response.user[0].durum;
          const mesaj = response.user[0].mesaj;
          let ref = localStorage.getItem("refferer");
          let splitRef = ref.split("/");
          if (status) {
            const item = JSON.stringify(response.user[0].bilgiler.userId);

           //Beni hatırla
            if ($("#hatir").is(":checked")) {
              localStorage.setItem("userId", item);
              sessionStorage.setItem("userId", item);
            } else {
              sessionStorage.setItem("userId", item);
            }
         
            $.bootstrapGrowl(mesaj, {
              type: "success",
              delay: 2000,
            });
           
            if (
              splitRef[3] == "detail.html" ||
              (sessionStorage.getItem("ItemFPage") != null &&
                splitRef[3] == "register.html")
            ) {
              setTimeout(() => {
                window.location.href = "detail.html";
              }, 1200);
            } else {
              setTimeout(() => {
                window.location.href = "index.html";
              }, 1200);
            }
          } else {
            $.bootstrapGrowl(mesaj, {
              type: "danger",
              delay: 2000,
            }
              
           );
          }
        },
      });
    }
  });
});
