$(document).ready(function () {
    $("#add-basket").click(function (e) {
      e.preventDefault();
      const userId = JSON.parse(sessionStorage.getItem("userId"));
      let item = JSON.parse(localStorage.getItem("ItemFPage"));
      let itemId = item.productId;
      const data = {
        ref: "ce16b92206474a5ea51d575ce260b184",
        customerId: userId,
        productId: itemId,
        html: userId,
      };
      const url = "https://www.jsonbulut.com/json/orderForm.php";
      if (userId != null) {
        $.ajax({
          type: "get",
          url: url,
          data: data,
          dataType: "json",
          success: function (response) {
            let html = `<div class="alert alert-primay" role="alert">
            Ürün Başarıyla Sepete Eklenmiştir. 
          </div>`;
            $(".detail").append(html);
          },
        });
      } else {
        window.location.href = "register.html";
      }
    });
  });
  