$(document).ready(function () {

   

    const url = "https://www.jsonbulut.com/json/news.php";

    const data = {
        ref:"ce16b92206474a5ea51d575ce260b184",
        start: 0
    }
    $.ajax({
        type: "get",
        url: url,
        data: data,
        dataType: "json",
        success: function (response) {
            const haber = response.News[0].Haber_Bilgileri;
            console.log('haber :>> ', haber);
            addCard( haber )
        }
    });
});

function addCard( obj ) {
    let html = ``;
    for (const item of obj) {
        console.log('item.category_id :>> ', item.category_id);
        html += `<div class="news card">
        <img src="${item.picture}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">`+item.title.slice(0,15)+`</h5>
          <p class="card-text">`+item.l_description+`</p>
         
        </div>
      </div>`
    }
    $("#news").append(html);
}
function getDetail(clicked_id) {
    sessionStorage.setItem("haberId",clicked_id)
    window.location.href = "newsDetail.html";
} 