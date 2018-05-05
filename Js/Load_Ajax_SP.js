$(document).ready(function () {
    $.ajax({
        url: "https://api.myjson.com/bins/kro6t",
        method: "GET",
        success: function (data) {
            var html = "";
            for (var i = 0; i < data.length; i++) {
                html += '    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">';
                html += '                <div class="border-grid">';
                html += '                  <div class="scale-image">';
                html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                html += '                    <img src="' + data[i].imageUrl + '">';
                html += '                </a>';
                html += '                        <div class="textbox">';
                html += '                           <div class="hover-image">';
                html += '                               <div class="hover-beau">';
                html += '                                    <div class="sp-hover">';
                html += '                <span class= ' + "order-sp" + ' item-id=' + data[i].id + '>';
                html += '                    <i class="fa fa-shopping-cart"></i> Thêm vào giỏ</span>';
                html += '                                    </div>';
                html += '                                   <div class="sp-hover">';
                html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                html += '                                        <span>';
                html += '                                           <i class="fa fa-eye"></i>';
                html += '                                            Xem chi tiết';
                html += '                                        </span>';
                html += '                </a>';
                html += '                                    </div>';
                html += '                                    <div class="priceleft">';
                html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                html += '                        <hr>';
                html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                html += '                                    </div>';
                html += '                                    <div class="clearfix"></div>';
                html += '                                </div>';
                html += '                            </div>';
                html += '                        </div>';
                html += '                    </div>';
                html += '                    <div class="cont">';
                html += '                        <div class="content-price">';
                html += '                    <a href="./details-product.html">' + data[i].name + '</a>';
                html += '                        </div>';
                html += '                        <div class="price">';
                html += '                            <div class="price-left">';
                html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                html += '                        </br>' + '</br>';
                html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                html += '                            </div>';
                html += '                            <div class="star">';
                html += '                                <span class="fa fa-stack">';
                html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                                </span>';
                html += '                                <span class="fa fa-stack">';
                html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                                </span>';
                html += '                                <span class="fa fa-stack">';
                html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                                </span>';
                html += '                                <span class="fa fa-stack">';
                html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                                </span>';
                html += '                                <span class="fa fa-stack">';
                html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                html += '                                </span>';
                html += '                            </div>';
                html += '                            <div class="clearfix"></div>';
                html += '                        </div>';
                html += '                    </div>';
                html += '<div class="order-mobile">';
                html += '                <span class= ' + "order-sp" + ' item-id=' + data[i].id + '>';
                html += '                    <i class="fa fa-shopping-cart"></i> Thêm vào giỏ</span>';
                html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                html += '                                        <span class="chitiet">';
                html += '                                           <i class="fa fa-eye"></i>';
                html += '                                            Xem chi tiết';
                html += '                                        </span>';
                html += '                </a>';
                html += '</div>';
                html += '                    <div class="new">';
                html += '                        <span>MỚI</span>';
                html += '                    </div>';
                html += '                </div>';
                html += '            </div>';
            } $('.new-list').html(html);
            $('.order-sp').click(function () {
                var temp = $(this).attr("item-id");
                for (var index = 0; index < listData.length; index++) {
                    if (temp == listData[index].getID) {
                        for (var i = 0; i < gioHang.length; i++) {
                            if (gioHang[i].name == listData[index].name) {
                                gioHang[i].quantity++;
                                window.localStorage.setItem('gioHang', JSON.stringify(gioHang));
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
    $('#baodaoplung').click(function () {
        $.ajax({
            url: "https://api.myjson.com/bins/kro6t",
            method: "GET",
            success: function (data) {
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    html += '    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">';
                    html += '                <div class="border-grid">';
                    html += '                  <div class="scale-image">';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                    <img src="' + data[i].imageUrl + '">';
                    html += '                </a>';
                    html += '                        <div class="textbox">';
                    html += '                           <div class="hover-image">';
                    html += '                               <div class="hover-beau">';
                    html += '                                    <div class="sp-hover">';
                    html += '                <span class= ' + "order-sp" + ' item-id=' + data[i].id + '>';
                    html += '                    <i class="fa fa-shopping-cart"></i> Thêm vào giỏ</span>';
                    html += '                                    </div>';
                    html += '                                   <div class="sp-hover">';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                                        <span>';
                    html += '                                           <i class="fa fa-eye"></i>';
                    html += '                                            Xem chi tiết';
                    html += '                                        </span>';
                    html += '                </a>';
                    html += '                                    </div>';
                    html += '                                    <div class="priceleft">';
                    html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                    html += '                        <hr>';
                    html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                    html += '                                    </div>';
                    html += '                                    <div class="clearfix"></div>';
                    html += '                                </div>';
                    html += '                            </div>';
                    html += '                        </div>';
                    html += '                    </div>';
                    html += '                    <div class="cont">';
                    html += '                        <div class="content-price">';
                    html += '                    <a href="./details-product.html">' + data[i].name + '</a>';
                    html += '                        </div>';
                    html += '                        <div class="price">';
                    html += '                            <div class="price-left">';
                    html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                    html += '                        </br>' + '</br>';
                    html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                    html += '                            </div>';
                    html += '                            <div class="star">';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                            </div>';
                    html += '                            <div class="clearfix"></div>';
                    html += '                        </div>';
                    html += '                    </div>';
                    html += '<div class="order-mobile">';
                    html += '                <span class= ' + "order-sp" + ' item-id=' + data[i].id + '>';
                    html += '                    <i class="fa fa-shopping-cart"></i> Thêm vào giỏ</span>';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                                        <span class="chitiet">';
                    html += '                                           <i class="fa fa-eye"></i>';
                    html += '                                            Xem chi tiết';
                    html += '                                        </span>';
                    html += '                </a>';
                    html += '</div>';
                    html += '                    <div class="new">';
                    html += '                        <span>MỚI</span>';
                    html += '                    </div>';
                    html += '                </div>';
                    html += '            </div>';
                } $('.new-list').html(html);
                $('.order-sp').click(function () {
                    var temp = $(this).attr("item-id");
                    for (var index = 0; index < listData.length; index++) {
                        if (temp == listData[index].getID) {
                            for (var i = 0; i < gioHang.length; i++) {
                                if (gioHang[i].name == listData[index].name) {
                                    gioHang[i].quantity++;
                                    window.localStorage.setItem('gioHang', JSON.stringify(gioHang));
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
    })
    $('#taingheheadphone').click(function () {
        $.ajax({
            url: "https://api.myjson.com/bins/dk8j1",
            method: "GET",
            success: function (data) {
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    html += '    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">';
                    html += '                <div class="border-grid">';
                    html += '                  <div class="scale-image">';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                    <img src="' + data[i].imageUrl + '">';
                    html += '                </a>';
                    html += '                        <div class="textbox">';
                    html += '                           <div class="hover-image">';
                    html += '                               <div class="hover-beau">';
                    html += '                                    <div class="sp-hover">';
                    html += '                <span class= ' + "order-sp" + ' item-id=' + data[i].id + '>';
                    html += '                    <i class="fa fa-shopping-cart"></i> Thêm vào giỏ</span>';
                    html += '                                    </div>';
                    html += '                                   <div class="sp-hover">';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                                        <span>';
                    html += '                                           <i class="fa fa-eye"></i>';
                    html += '                                            Xem chi tiết';
                    html += '                                        </span>';
                    html += '                </a>';
                    html += '                                    </div>';
                    html += '                                    <div class="priceleft">';
                    html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                    html += '                        <hr>';
                    html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                    html += '                                    </div>';
                    html += '                                    <div class="clearfix"></div>';
                    html += '                                </div>';
                    html += '                            </div>';
                    html += '                        </div>';
                    html += '                    </div>';
                    html += '                    <div class="cont">';
                    html += '                        <div class="content-price">';
                    html += '                    <a href="./details-product.html">' + data[i].name + '</a>';
                    html += '                        </div>';
                    html += '                        <div class="price">';
                    html += '                            <div class="price-left">';
                    html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                    html += '                        </br>' + '</br>';
                    html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                    html += '                            </div>';
                    html += '                            <div class="star">';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                            </div>';
                    html += '                            <div class="clearfix"></div>';
                    html += '                        </div>';
                    html += '                    </div>';
                    html += '<div class="order-mobile">';
                    html += '                <span class= ' + "order-sp" + ' item-id=' + data[i].id + '>';
                    html += '                    <i class="fa fa-shopping-cart"></i> Thêm vào giỏ</span>';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                                        <span class="chitiet">';
                    html += '                                           <i class="fa fa-eye"></i>';
                    html += '                                            Xem chi tiết';
                    html += '                                        </span>';
                    html += '                </a>';
                    html += '</div>';
                    html += '                    <div class="new">';
                    html += '                        <span>MỚI</span>';
                    html += '                    </div>';
                    html += '                </div>';
                    html += '            </div>';
                } $('.new-list').html(html);
                $('.order-sp').click(function () {
                    var temp = $(this).attr("item-id");
                    for (var index = 0; index < listData.length; index++) {
                        if (temp == listData[index].getID) {
                            for (var i = 0; i < gioHang.length; i++) {
                                if (gioHang[i].name == listData[index].name) {
                                    gioHang[i].quantity++;
                                    window.localStorage.setItem('gioHang', JSON.stringify(gioHang));
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
    })
    $('#kinhcuongluc').click(function () {
        $.ajax({
            url: "https://api.myjson.com/bins/13297t",
            method: "GET",
            success: function (data) {
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    html += '    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">';
                    html += '                <div class="border-grid">';
                    html += '                  <div class="scale-image">';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                    <img src="' + data[i].imageUrl + '">';
                    html += '                </a>';
                    html += '                        <div class="textbox">';
                    html += '                           <div class="hover-image">';
                    html += '                               <div class="hover-beau">';
                    html += '                                    <div class="sp-hover">';
                    html += '                <span class= ' + "order-sp" + ' item-id=' + data[i].id + '>';
                    html += '                    <i class="fa fa-shopping-cart"></i> Thêm vào giỏ</span>';
                    html += '                                    </div>';
                    html += '                                   <div class="sp-hover">';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                                        <span>';
                    html += '                                           <i class="fa fa-eye"></i>';
                    html += '                                            Xem chi tiết';
                    html += '                                        </span>';
                    html += '                </a>';
                    html += '                                    </div>';
                    html += '                                    <div class="priceleft">';
                    html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                    html += '                        <hr>';
                    html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                    html += '                                    </div>';
                    html += '                                    <div class="clearfix"></div>';
                    html += '                                </div>';
                    html += '                            </div>';
                    html += '                        </div>';
                    html += '                    </div>';
                    html += '                    <div class="cont">';
                    html += '                        <div class="content-price">';
                    html += '                    <a href="./details-product.html">' + data[i].name + '</a>';
                    html += '                        </div>';
                    html += '                        <div class="price">';
                    html += '                            <div class="price-left">';
                    html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                    html += '                        </br>' + '</br>';
                    html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                    html += '                            </div>';
                    html += '                            <div class="star">';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                            </div>';
                    html += '                            <div class="clearfix"></div>';
                    html += '                        </div>';
                    html += '                    </div>';
                    html += '<div class="order-mobile">';
                    html += '                <span class= ' + "order-sp" + ' item-id=' + data[i].id + '>';
                    html += '                    <i class="fa fa-shopping-cart"></i> Thêm vào giỏ</span>';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                                        <span class="chitiet">';
                    html += '                                           <i class="fa fa-eye"></i>';
                    html += '                                            Xem chi tiết';
                    html += '                                        </span>';
                    html += '                </a>';
                    html += '</div>';
                    html += '                    <div class="new">';
                    html += '                        <span>MỚI</span>';
                    html += '                    </div>';
                    html += '                </div>';
                    html += '            </div>';
                } $('.new-list').html(html);
                $('.order-sp').click(function () {
                    var temp = $(this).attr("item-id");
                    for (var index = 0; index < listData.length; index++) {
                        if (temp == listData[index].getID) {
                            for (var i = 0; i < gioHang.length; i++) {
                                if (gioHang[i].name == listData[index].name) {
                                    gioHang[i].quantity++;
                                    window.localStorage.setItem('gioHang', JSON.stringify(gioHang));
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
    })
    $('#gayselfie').click(function () {
        $.ajax({
            url: "https://api.myjson.com/bins/7k7ll",
            method: "GET",
            success: function (data) {
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    html += '    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">';
                    html += '                <div class="border-grid">';
                    html += '                  <div class="scale-image">';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                    <img src="' + data[i].imageUrl + '">';
                    html += '                </a>';
                    html += '                        <div class="textbox">';
                    html += '                           <div class="hover-image">';
                    html += '                               <div class="hover-beau">';
                    html += '                                    <div class="sp-hover">';
                    html += '                <span class= ' + "order-sp" + ' item-id=' + data[i].id + '>';
                    html += '                    <i class="fa fa-shopping-cart"></i> Thêm vào giỏ</span>';
                    html += '                                    </div>';
                    html += '                                   <div class="sp-hover">';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                                        <span>';
                    html += '                                           <i class="fa fa-eye"></i>';
                    html += '                                            Xem chi tiết';
                    html += '                                        </span>';
                    html += '                </a>';
                    html += '                                    </div>';
                    html += '                                    <div class="priceleft">';
                    html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                    html += '                        <hr>';
                    html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                    html += '                                    </div>';
                    html += '                                    <div class="clearfix"></div>';
                    html += '                                </div>';
                    html += '                            </div>';
                    html += '                        </div>';
                    html += '                    </div>';
                    html += '                    <div class="cont">';
                    html += '                        <div class="content-price">';
                    html += '                    <a href="./details-product.html">' + data[i].name + '</a>';
                    html += '                        </div>';
                    html += '                        <div class="price">';
                    html += '                            <div class="price-left">';
                    html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                    html += '                        </br>' + '</br>';
                    html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                    html += '                            </div>';
                    html += '                            <div class="star">';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                            </div>';
                    html += '                            <div class="clearfix"></div>';
                    html += '                        </div>';
                    html += '                    </div>';
                    html += '<div class="order-mobile">';
                    html += '                <span class= ' + "order-sp" + ' item-id=' + data[i].id + '>';
                    html += '                    <i class="fa fa-shopping-cart"></i> Thêm vào giỏ</span>';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                                        <span class="chitiet">';
                    html += '                                           <i class="fa fa-eye"></i>';
                    html += '                                            Xem chi tiết';
                    html += '                                        </span>';
                    html += '                </a>';
                    html += '</div>';
                    html += '                    <div class="new">';
                    html += '                        <span>MỚI</span>';
                    html += '                    </div>';
                    html += '                </div>';
                    html += '            </div>';
                } $('.new-list').html(html);
                $('.order-sp').click(function () {
                    var temp = $(this).attr("item-id");
                    for (var index = 0; index < listData.length; index++) {
                        if (temp == listData[index].getID) {
                            for (var i = 0; i < gioHang.length; i++) {
                                if (gioHang[i].name == listData[index].name) {
                                    gioHang[i].quantity++;
                                    window.localStorage.setItem('gioHang', JSON.stringify(gioHang));
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
    })
    $('#pinsacduphong').click(function () {
        $.ajax({
            url: "https://api.myjson.com/bins/ftx6x",
            method: "GET",
            success: function (data) {
                var html = "";
                for (var i = 0; i < data.length; i++) {
                    html += '    <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">';
                    html += '                <div class="border-grid">';
                    html += '                  <div class="scale-image">';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                    <img src="' + data[i].imageUrl + '">';
                    html += '                </a>';
                    html += '                        <div class="textbox">';
                    html += '                           <div class="hover-image">';
                    html += '                               <div class="hover-beau">';
                    html += '                                    <div class="sp-hover">';
                    html += '                <span class= ' + "order-sp" + ' item-id=' + data[i].id + '>';
                    html += '                    <i class="fa fa-shopping-cart"></i> Thêm vào giỏ</span>';
                    html += '                                    </div>';
                    html += '                                   <div class="sp-hover">';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                                        <span>';
                    html += '                                           <i class="fa fa-eye"></i>';
                    html += '                                            Xem chi tiết';
                    html += '                                        </span>';
                    html += '                </a>';
                    html += '                                    </div>';
                    html += '                                    <div class="priceleft">';
                    html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                    html += '                        <hr>';
                    html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                    html += '                                    </div>';
                    html += '                                    <div class="clearfix"></div>';
                    html += '                                </div>';
                    html += '                            </div>';
                    html += '                        </div>';
                    html += '                    </div>';
                    html += '                    <div class="cont">';
                    html += '                        <div class="content-price">';
                    html += '                    <a href="./details-product.html">' + data[i].name + '</a>';
                    html += '                        </div>';
                    html += '                        <div class="price">';
                    html += '                            <div class="price-left">';
                    html += '                        <span class="price-new">' + data[i].newPrice + '</span>';
                    html += '                        </br>' + '</br>';
                    html += '                        <span class="price-old">' + data[i].oldPrice + '</span>';
                    html += '                            </div>';
                    html += '                            <div class="star">';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                                <span class="fa fa-stack">';
                    html += '                                    <i class="fa fa-star-o fa-stack-2x"></i>';
                    html += '                                </span>';
                    html += '                            </div>';
                    html += '                            <div class="clearfix"></div>';
                    html += '                        </div>';
                    html += '                    </div>';
                    html += '<div class="order-mobile">';
                    html += '                <span class= ' + "order-sp" + ' item-id=' + data[i].id + '>';
                    html += '                    <i class="fa fa-shopping-cart"></i> Thêm vào giỏ</span>';
                    html += '                <a href="./details-product.html?id=' + data[i].id + '">';
                    html += '                                        <span class="chitiet">';
                    html += '                                           <i class="fa fa-eye"></i>';
                    html += '                                            Xem chi tiết';
                    html += '                                        </span>';
                    html += '                </a>';
                    html += '</div>';
                    html += '                    <div class="new">';
                    html += '                        <span>MỚI</span>';
                    html += '                    </div>';
                    html += '                </div>';
                    html += '            </div>';
                } $('.new-list').html(html);
                $('.new-list img').css("padding", "15px");
                $('.order-sp').click(function () {
                    var temp = $(this).attr("item-id");
                    for (var index = 0; index < listData.length; index++) {
                        if (temp == listData[index].getID) {
                            for (var i = 0; i < gioHang.length; i++) {
                                if (gioHang[i].name == listData[index].name) {
                                    gioHang[i].quantity++;
                                    window.localStorage.setItem('gioHang', JSON.stringify(gioHang));
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
    })
})
