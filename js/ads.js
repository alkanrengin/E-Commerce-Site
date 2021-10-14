$(document).ready(function () {
    const url = "https://www.jsonbulut.com/json/advertisement.php";
  
    const pushObj = {
      ref: "ce16b92206474a5ea51d575ce260b184",
      advertisementId: 43,
    };
    $.ajax({
      type: "get",
      url: url,
      data: pushObj,
      dataType: "json",
      success: function (res) {
        reklam(res);
      },
      error: function (err) {
        console.error(err);
      },
    });
  
    function reklam(res) {
      let html = ``;
      const ads = res.ads["0"].ads;
      html += `
         <a href="${ads.href}" target="_blank"><img src="${ads.dosya}" class="reklam"></a>`;
      $("#reklam").html(html);
    }
  });