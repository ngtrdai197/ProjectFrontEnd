$(document).ready(function () {
    $.ajax({
        url: "https://api.myjson.com/bins/yp4i5",
        method: "GET",
        success: function (data) {
            var listData = data;
            var gioHang = [];
            var html = "";
            var countProduct = JSON.parse(window.localStorage.getItem('gioHang', JSON.stringify(gioHang)));
            for (var i = 0; i < data.length; i++) {
                html += '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
                html += '        <div class="border-grid">';
                html += '            <div class="scale-image">';
                html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                html += '                    <img src="' + data[i].imageUrl + '">';
                html += '                </a>';
                html += '                <div class="textbox">';
                html += '                    <h3>Sản phẩm đang chọn</h3>';
                html += '                </div>';
                html += '            </div>';
                html += '            <div class="cont">';
                html += '                <div class="content-price">';
                html += '                    <a href="./details-product.html?id=' + data[i].id + '">' + data[i].name + '</a>';
                html += '                </div>';
                html += '                <div class="price">';
                html += '                    <div class="priceleft">';
                html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                html += '                        <div class="clearfix"></div>';
                html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                html += '                    </div>';
                html += '                    <div class="star">';
                html += '                        <span class="fa fa-stack">';
                html += '                            <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                        </span>';
                html += '                        <span class="fa fa-stack">';
                html += '                            <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                        </span>';
                html += '                        <span class="fa fa-stack">';
                html += '                            <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                        </span>';
                html += '                        <span class="fa fa-stack">';
                html += '                            <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                        </span>';
                html += '                        <span class="fa fa-stack">';
                html += '                            <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                        </span>';
                html += '                    </div>';
                html += '                    <div class="clearfix"></div>';
                html += '                </div>';
                html += '            </div>';
                html += '            <div class="hover-image">';
                html += '                <span class= ' + "order-sp" + ' item-id=' + data[i].id + '>';
                html += '                    <i class="fa fa-shopping-cart"></i> Thêm vào giỏ</span>';
                html += '                <div>';
                html += '                    <a href="./details-product.html?id=' + data[i].id + '">';
                html += '                        <div class="chitiet">';
                html += '                            <span>';
                html += '                                <i class="fa fa-eye"></i>';
                html += '                                Xem chi tiết';
                html += '                            </span>';
                html += '                        </div>';
                html += '                    </a>';
                html += '                </div>';
                html += '                <div class="clearfix"></div>';
                html += '            </div>';
                html += '            <div class="new">';
                html += '                <span>MỚI</span>';
                html += '            </div>';
                html += '        </div>';
                html += '    </div>';
            } $('.new-list').html(html);
            $('.order-sp').click(function () {
                var temp = $(this).attr("item-id");
                for (var index = 0; index < listData.length; index++) {
                    if (temp == listData[index].getID) {
                        for (var i = 0; i < gioHang.length; i++) {
                            if (gioHang[i].name == listData[index].name) {
                                gioHang[i].quantity++;
                                window.localStorage.setItem('gioHang', JSON.stringify(gioHang));
                                alert("Thêm sản phẩm vào giỏ thành công!");
                                return;
                            }
                        }
                        gioHang.push({
                            name: listData[index].name,
                            price: listData[index].newPrice,
                            quantity: 1,
                            url_GH: listData[index].getUrl
                        });
                        window.localStorage.setItem('gioHang', JSON.stringify(gioHang));
                        alert("Thêm sản phẩm vào giỏ thành công!");
                    }
                }
                $('.num_product').html(countProduct.length);
            });
        },
        error: function (errror) {

        }
    })
    $.ajax({
        url: "https://api.myjson.com/bins/9t7f1",
        method: "GET",
        success: function (data) {
            var html = "";
            for (var i = 0; i < data.length; i++) {
                html += '<div class="col-lg-3 col-md-3 col-sm-6 col-xs-12">';
                html += '        <div class="border-grid">';
                html += '            <div class="scale-image">';
                html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                html += '                    <img src="' + data[i].imageUrl + '">';
                html += '                </a>';
                html += '                <div class="textbox">';
                html += '                    <h3>Sản phẩm đang chọn</h3>';
                html += '                </div>';
                html += '            </div>';
                html += '            <div class="cont">';
                html += '                <div class="content-price">';
                html += '                    <a href="./details-product.html?id=' + data[i].id + '">' + data[i].name + '</a>';
                html += '                </div>';
                html += '                <div class="price">';
                html += '                    <div class="priceleft">';
                html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                html += '                        <div class="clearfix"></div>';
                html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                html += '                    </div>';
                html += '                    <div class="star">';
                html += '                        <span class="fa fa-stack">';
                html += '                            <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                        </span>';
                html += '                        <span class="fa fa-stack">';
                html += '                            <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                        </span>';
                html += '                        <span class="fa fa-stack">';
                html += '                            <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                        </span>';
                html += '                        <span class="fa fa-stack">';
                html += '                            <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                        </span>';
                html += '                        <span class="fa fa-stack">';
                html += '                            <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                        </span>';
                html += '                    </div>';
                html += '                    <div class="clearfix"></div>';
                html += '                </div>';
                html += '            </div>';
                html += '            <div class="hover-image">';
                html += '                <span class= ' + "order-sp" + ' item-id=' + data[i].id + '>';
                html += '                    <i class="fa fa-shopping-cart"></i> Thêm vào giỏ</span>';
                html += '                <div>';
                html += '                    <a href="./details-product.html?id=' + data[i].id + '">';
                html += '                        <div class="chitiet">';
                html += '                            <span>';
                html += '                                <i class="fa fa-eye"></i>';
                html += '                                Xem chi tiết';
                html += '                            </span>';
                html += '                        </div>';
                html += '                    </a>';
                html += '                </div>';
                html += '                <div class="clearfix"></div>';
                html += '            </div>';
                html += '            <div class="new">';
                html += '                <span>MỚI</span>';
                html += '            </div>';
                html += '        </div>';
                html += '    </div>';
            } $('.new-list2').html(html);

            $('.order-sp').click(function () {
                var temp = $(this).attr("item-id");
                for (var index = 0; index < listData.length; index++) {
                    if (temp == listData[index].getID) {
                        for (var i = 0; i < gioHang.length; i++) {
                            if (gioHang[i].name == listData[index].name) {
                                gioHang[i].quantity++;
                                window.localStorage.setItem('gioHang', JSON.stringify(gioHang));
                                alert("Thêm sản phẩm vào giỏ thành công!");
                                return;
                            }
                        }
                        gioHang.push({
                            name: listData[index].name,
                            price: listData[index].newPrice,
                            quantity: 1,
                            url_GH: listData[index].getUrl
                        });
                        window.localStorage.setItem('gioHang', JSON.stringify(gioHang));
                        alert("Thêm sản phẩm vào giỏ thành công!");
                    }
                }
                $('.num_product').html(gioHang.length);
            });
        },
        error: function (errror) {

        }
    })

    $.ajax({
        url: "https://api.myjson.com/bins/112ux9",
        method: "GET",
        success: function (data) {
            var html = "";
            for (var i = 0; i < data.length; i++) {
                html += '    <div class="border-grid">';
                html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                html += '                    <img src="' + data[i].imageUrl + '">';
                html += '                </a>';
                html += '                <div class="cont">';
                html += '                    <div class="content-price">';
                html += '                    <a href="./details-product.html?id=' + data[i].id + '">' + data[i].name + '</a>';
                html += '                    </div>';
                html += '                    <div class="price">';
                html += '                        <div class="star">';
                html += '                            <span class="fa fa-stack">';
                html += '                                <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                            <span class="fa fa-stack">';
                html += '                                <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                            <span class="fa fa-stack">';
                html += '                               <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                            <span class="fa fa-stack">';
                html += '                               <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                            <span class="fa fa-stack">';
                html += '                                <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                        </div>';
                html += '                        <div class="priceleft">';
                html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                html += '                        <div class="clearfix"></div>';
                html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                html += '                        </div>';
                html += '                    </div>';
                html += '                </div>';
                html += '                <div class="clearfix"></div>';
                html += '            </div>';
            } $('.content-bottom-new-list').html(html);
        },
        error: function (errror) {

        }
    })

    $.ajax({
        url: "https://api.myjson.com/bins/100a19",
        method: "GET",
        success: function (data) {
            var html = "";
            for (var i = 0; i < data.length; i++) {
                html += '    <div class="border-grid">';
                html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                html += '                    <img src="' + data[i].imageUrl + '">';
                html += '                </a>';
                html += '                <div class="cont">';
                html += '                    <div class="content-price">';
                html += '                    <a href="./details-product.html?id=' + data[i].id + '">' + data[i].name + '</a>';
                html += '                    </div>';
                html += '                    <div class="price">';
                html += '                        <div class="star">';
                html += '                            <span class="fa fa-stack">';
                html += '                                <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                            <span class="fa fa-stack">';
                html += '                                <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                            <span class="fa fa-stack">';
                html += '                               <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                            <span class="fa fa-stack">';
                html += '                               <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                            <span class="fa fa-stack">';
                html += '                                <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                        </div>';
                html += '                        <div class="priceleft">';
                html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                html += '                        <div class="clearfix"></div>';
                html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                html += '                        </div>';
                html += '                    </div>';
                html += '                </div>';
                html += '                <div class="clearfix"></div>';
                html += '            </div>';
            } $('.content-bottom-new-list2').html(html);
        },
        error: function (errror) {

        }
    })

    $.ajax({
        url: "https://api.myjson.com/bins/9r299",
        method: "GET",
        success: function (data) {
            var html = "";
            for (var i = 0; i < data.length; i++) {
                html += '    <div class="border-grid">';
                html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                html += '                    <img src="' + data[i].imageUrl + '">';
                html += '                </a>';
                html += '                <div class="cont">';
                html += '                    <div class="content-price">';
                html += '                    <a href="./details-product.html?id=' + data[i].id + '">' + data[i].name + '</a>';
                html += '                    </div>';
                html += '                    <div class="price">';
                html += '                        <div class="star">';
                html += '                            <span class="fa fa-stack">';
                html += '                                <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                            <span class="fa fa-stack">';
                html += '                                <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                            <span class="fa fa-stack">';
                html += '                               <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                            <span class="fa fa-stack">';
                html += '                               <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                            <span class="fa fa-stack">';
                html += '                                <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                            </span>';
                html += '                        </div>';
                html += '                        <div class="priceleft">';
                html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                html += '                        <div class="clearfix"></div>';
                html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                html += '                        </div>';
                html += '                    </div>';
                html += '                </div>';
                html += '                <div class="clearfix"></div>';
                html += '            </div>';
            } $('.content-bottom-new-list3').html(html);
        },
        error: function (errror) {

        }
    })

})