// categories.js'den url sonrası paramı almak için
const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get("categoryId");

let items = [];
$(document).ready(function () {
  const url = "https://www.jsonbulut.com/json/product.php";
  const data = {
    ref: "ce16b92206474a5ea51d575ce260b184",
    start: 0,
    categoryId: categoryId,
    order: "desc",
  };
  $.ajax({
    type: "get",
    url: url,
    data: data,
    dataType: "json",
    success: function (response) {
      const item = response.Products[0].bilgiler;
      items = item;
      let html = ``;
      if (item != null) {
        for (let i = 0; i < item.length; i++) {
          console.log(item[i]);
          html += `
          <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-3 news-card">
            <div class="ucard style="width: 20rem" id="news-card">
                <img src="${item[i].images[0].normal}" class="card-img-top" alt="${item[i].productName}" />
                <div class="card-body">
                <h5 id="item-title" onclick="fncItem(${i})">${item[i].productName}</h5>
                <p class="card-text">
                  ${item[i].price} ₺
                </p>
                <button type="button" onclick="fncItem(${i})" class="btn btn-success">
                  Ürüne Git
                </button>
                </div>
            </div>
          </div>`;
        }
      } else {
        html += `<h4>Aradığınız kategoriye ait ürün bulunamadı!</h4>`;
      }
      $("#urun").append(html);
    },
  });
});
function fncItem(i) {
  let itempage = JSON.stringify(items[i]);
  localStorage.removeItem("ItemFPage");
  sessionStorage.removeItem("ItemFPage");
  localStorage.setItem("ItemFPage", itempage);
  sessionStorage.setItem("ItemFPage", itempage);
  window.location.href = "detail.html";
}
