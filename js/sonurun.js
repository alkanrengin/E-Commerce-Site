const itemsInBucString = localStorage.getItem('bucketProducts');
    function handle( str ) {
        
        if (str != null) {
            const parsedBucketItems = JSON.parse(str);
            $("#productCount").text(parsedBucketItems.length);
        }else {
            $("#productCount").text("");
        }
    }
$(document).ready(function () {

    

    handle(itemsInBucString)



    const pushObj = {
        ref: "ce16b92206474a5ea51d575ce260b184",
        start: 0,
        count: 6,
        order:"desc"
    }

    const url = "https://www.jsonbulut.com/json/product.php";

    $.ajax({
        type: "get",
        url: url,
        data: pushObj,
        dataType: "json",
        success: function ( res ) {
            const lastAddedProducts = res.Products[0].bilgiler;

            
            cardBuild(lastAddedProducts)
            
        }
    });

    function cardBuild( obj ) {
        let html = ``;
        let i = 0
        for (const index in obj) {
            localStorage.setItem("products",JSON.stringify(obj))
            const productName = obj[index].productName;
            const price = obj[index].price;
            const brief = obj[index].brief;
            const productId = obj[index].productId;
            const description = obj[index].description;
            const normal = obj[index].images[0].normal;

            
            
            
            html +=`
            <div class="mb-4 col-xl-2 col-lg-2 col-md-4 col-6 card sonUrun sonUrunIndex ucard ">
            
              <img src="`+normal+ `" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">`+ productName.slice(0, 10) + `</h5>
                <p class="card-text">`+price + " ₺" + `</p>
                <a onclick="fncItem(${i})" href="detail.html" class="btn btn-success">Ürüne Git</a>
              </div>
            </div>
            `
        i++;
        }
        $("#sonUrun").append(html);
    }});
    function fncClick(i) {
        let itempage = JSON.stringify(item[i]);
        localStorage.removeItem("ItemFPage");
        sessionStorage.removeItem("ItemFPage");
        localStorage.setItem("ItemFPage", itempage);
        sessionStorage.setItem("ItemFPage", itempage);
      }