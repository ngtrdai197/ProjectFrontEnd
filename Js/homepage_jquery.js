var listData = [];
var gioHang = [];
$(document).ready(function () {
    $('#show-info').hide();
    $('#click-info').click(function () {
        $('#show-info').slideToggle();

    });
    $('#show-info2').hide();
    $('#click-info2').click(function () {
        $('#show-info2').slideToggle();
    });

    
    $.ajax({
        url: "https://api.myjson.com/bins/1bi191", //link danh sách sản phẩm
        method: "GET",
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                listData.push({
                    name: data[i].name,
                    newPrice: data[i].newPrice,
                    getID: data[i].id,
                    getUrl: data[i].imageUrl
                });
            }
        },
        error: function (errror) {

        }
    })
});