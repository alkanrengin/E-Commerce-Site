$(document).ready(function () {
       $("#FormKayit").submit(function (e) {
        e.preventDefault();

        const name = $("#userN").val();
        const surname = $("#userS").val();
        const phone = $("#userP").val();
        const email = $("#email").val();
        const password = $("#password").val();
    
        //login form validation
        if (name == "") {
          $.bootstrapGrowl("İsim boş bırakılamaz.", {
            type: "danger",
            delay: 2000,
          });
        } else if (surname == "") {
          $.bootstrapGrowl("Soyisim boş bırakılamaz.", {
            type: "danger",
            delay: 2000,
          });
     
        } else if (phone == "") {
          $.bootstrapGrowl("Telefon boş bırakılamaz.", {
            type: "danger",
            delay: 2000,
          });
         
        } else if (email == "") {
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
          userName: name,
          userSurname: surname,
          userPhone: phone,
          userMail: email,
          userPass: password,
        };
        const url = "https://www.jsonbulut.com/json/userRegister.php";
  
        $.ajax({
          type: "get",
          url: url,
          data: pushObj,
          dataType: "json",
          success: function (response) {
            const status = response.user[0].durum;
            const mesaj = response.user[0].mesaj;
            if (status) {
                $.bootstrapGrowl(mesaj, {
                    type: "success",
                    delay: 2000,
                  });
              setTimeout(() => {
                window.location.href = "login.html";
              }, 1200);
            } else {
                $.bootstrapGrowl(mesaj, {
                    type: "danger",
                    delay: 2000,
                  });
            }
          },
        });
      }
    });
  });
  