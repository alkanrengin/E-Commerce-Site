$(document).ready(function () {
    const data = {
      ref: "ce16b92206474a5ea51d575ce260b184",
    };
    const url = "https://www.jsonbulut.com/json/companyCategory.php";
    $.ajax({
      type: "get",
      url: url,
      data: data,
      dataType: "json",
      success: function (response) {
        let html = ` `;
        let topCategories = response.Kategoriler[0].Categories.filter(x => x.TopCatogryId === "0");
        console.log(topCategories)
        for (let i = 0; i < topCategories.length; i++) {
          let subCategories = response.Kategoriler[0].Categories.filter(x => x.TopCatogryId === topCategories[i].CatogryId);
          if (topCategories[i].TopCatogryId == 0) {
            html += `
            <ul class="anamenu"><li> 
                  <a href="product.html?categoryId=${topCategories[i].CatogryId}" >
                ${topCategories[i].CatogryName}
              </a>
              `
              html +=  `<ul class="altmenu">
              `
              
              for (let j = 0; j < subCategories.length; j++) {
                 html+= `<li><a href="product.html?categoryId=${subCategories[j].CatogryId}">${subCategories[j].CatogryName}</a></li>`
                  
              }
              html += `</ul></li></ul>`
          } 
        }
        $("#solmenu").html(html);
      },
    });
  });
  