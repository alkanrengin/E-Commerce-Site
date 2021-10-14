let userId;
if (JSON.parse(localStorage.getItem("userId")) != null) {
  userId = JSON.parse(localStorage.getItem("userId"));
} else if (JSON.parse(sessionStorage.getItem("userId") != null)) {
  userId = JSON.parse(sessionStorage.getItem("userId"));
}
$(document).ready(function () {
  const url = "https://www.jsonbulut.com/json/orderList.php";

  const data = {
    ref: "ce16b92206474a5ea51d575ce260b184",
    musterilerID: userId,
  };
  $.ajax({
    type: "get",
    url: url,
    data: data,
    dataType: "json",
    success: function (response) {
      let html = ``;
     
      let item = response.orderList[0];
      for (let i = 0; i < item.length; i++) {
        console.log(item[i]);
        html += `<div class="cart-container">
        <div class="row">
          <div class="col-lg-2">
            <img
              src="${item[i].normal}"  alt="" width="150" height="150"  />
          </div>
          <div class="col-lg-10">
            <h3">${item[i].urun_adi}</h3>
            <span">${item[i].fiyat} TL</span>
          </div>
        </div>
        </div>`;
      }
      $(".basket").append(html);}

     
  });
});
