const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

let arrayOfProductImg = [`https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg`,
    `https://i.pinimg.com/originals/ff/46/7f/ff467f7f168b3e0b9e7411ab0f99ff19.jpg`,
    `https://th.bing.com/th/id/OIP.dwundeHQCQIq9-l4y5VJ3wHaIj?rs=1&pid=ImgDetMain`,
    `https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product/2/7/27-10-2017_visvim_ballisticbackpack20l_navy_0117103003068-ny_cw_m2.jpg`,
    `https://th.bing.com/th/id/OIP.d8sXs0NlyBtFj1i2rvnmRAHaJc?rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP.E7bRYCYkdhr3vJAq6Y7wYgHaH9?rs=1&pid=ImgDetMain`];

let shirt = [`https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg`,
    `https://th.bing.com/th/id/OIP.HtkAfQPOO2dPzdznV8TvaAHaJd?rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP.QVNXMNDuXjRhppRMd5aUnAAAAA?w=384&h=500&rs=1&pid=ImgDetMain`,
    `https://i.pinimg.com/474x/dc/ba/e1/dcbae130dcf95ddbef0f7f495149a7a1.jpg`,
    `https://cdn.walletmonitor.com/img/c1ded3fc56aae6d6e7ab87aee463508e.jpg`,
    `https://i.pinimg.com/originals/fb/1c/c6/fb1cc65be27db01dbd3e23598349405c.jpg`]

let jacket = [`https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg`,
    `https://th.bing.com/th/id/OIP.vq_PqrM_IYo_szo9ctln1wHaHa?rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP.32L8GpszV_Tkd6BqbBx9FgHaIg?w=522&h=600&rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP.R4KjTQ2m-rGWuF4_wGqZgQAAAA?w=384&h=500&rs=1&pid=ImgDetMain`,
    `https://m.media-amazon.com/images/I/51IF1vPniSL._AC_.jpg`,
    `https://i5.walmartimages.com/asr/ea183e63-1a04-4cdf-b00a-3cddeb314c10_1.a8e3551230f5eb7a712e3a454cef459a.jpeg`]

let casual = [`https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg`,
    `https://th.bing.com/th?id=OIF.73S5%2fR%2fsc965Jle%2fVzlkIA&rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP.pk8pHm8iGB6NdWtmYfZEkwAAAA?w=460&h=460&rs=1&pid=ImgDetMain`,
    `https://static.thcdn.com/images/small/original/productimg/960/960/11130836-1784315820307489.jpg`,
    `https://editorialist.com/webcompressed/2021/8/015/012/373/15012373~maltese_0.jpg`,
    `https://www.cross-sportswear.com/cdn/shop/products/M_BLANK_Stripe_BLANK_Polo_BLANK_LS_Twilight_BLANK_Blue_Cross_BLANK_Sportswear_600x.jpg?v=1663063190`]

let gold = [`https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg`,
    `https://th.bing.com/th/id/OIP.ISennuw2cvTesKySw5ViaAHaHa?rs=1&pid=ImgDetMain`,
    `https://product-images.therealreal.com/JHA26217_3_enlarged.jpg`,
    `https://th.bing.com/th/id/OIP.kc31adS-4f_x1qFa20ofhAHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP.CFniTX2StKNxVxHRwZ3GZwHaHa?w=768&h=768&rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP.phDoPuXoSNiQ6z_wC9yfkwAAAA?w=400&h=400&rs=1&pid=ImgDetMain`]

let petite = [`https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg`,
    `https://th.bing.com/th/id/OIP.7vSqRL0vRJqqYIgz-4zNDgHaHa?rs=1&pid=ImgDetMain`,
    `https://cdn.shopify.com/s/files/1/0955/0732/products/S2012673B_2_1024x1024.jpg?v=1580610764`,
    `https://th.bing.com/th/id/R.f74864f78d71a484091da31a98bc8360?rik=yf1wJz9ZATkkiw&pid=ImgRaw&r=0`,
    `https://crownring.com/images/xlarge/B093-01B.jpg`,
    `https://content-pravins.sparkstone.co.uk/13/3/images/catalog/i/xl_4990-A6224102-2.jpg`]

let white = [`https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg`,
    `https://th.bing.com/th/id/OIP.LFX6J2_9r_Ue5nT9JfvPkAHaHa?rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP._7QXLBM6i9gQuwiPVu5O_wAAAA?w=400&h=400&rs=1&pid=ImgDetMain`,
    `https://i.pinimg.com/originals/11/95/a0/1195a0717307b49593d8133dc814220a.jpg`,
    `https://i.pinimg.com/originals/d5/59/f2/d559f27ffd6d512d78712881fcc876de.jpg`,
    `https://th.bing.com/th/id/OIP.7a8QYzjg6y5wBf_Rpz3RDgHaHa?w=400&h=400&rs=1&pid=ImgDetMain`]

let owl = [`https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg`,
    `https://www.cerrone.com.au/wp-content/uploads/2020/10/g48384...G48530-RG.jpg`,
    `https://th.bing.com/th/id/OIP.RN8bnP_u1xpVsE1TIVaMFQHaHa?w=600&h=600&rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP.aM2A0JkD4tV37Q289MFAwQAAAA?w=360&h=360&rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP.yzsHutIqdcQMEy4fZYjFswAAAA?w=322&h=430&rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP.6C-P8NL1MzpIvpaoNrNuMgHaHa?w=1140&h=1140&rs=1&pid=ImgDetMain`]

let hard = [`https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg`,
    `https://www.bhphotovideo.com/images/images2500x2500/wd_wdbu6y0020bbk_wesn_2tb_elements_portable_hard_1322074.jpg`,
    `https://th.bing.com/th/id/OIP.Jte7NzHmt06R6BPIiY53YQHaHa?w=500&h=500&rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP.1g7avnre6DkLSWmay9UyQgHaIO?w=629&h=699&rs=1&pid=ImgDetMain`,
    `https://th.bing.com/th/id/OIP.l2PuAJ3kyqCLohgmUPPdhAHaFj?w=640&h=480&rs=1&pid=ImgDetMain`,
    `https://m.media-amazon.com/images/I/716DRhB9DaL._AC_SS450_.jpg`]

let sanDisk = [`https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg`,
    `https://th.bing.com/th/id/OIP.BDaxkJ5kWu8SWsBUD8vCqgHaFj?rs=1&pid=ImgDetMain`,
    `https://c1.neweggimages.com/ProductImageCompressAll1280/20-173-352_R03.jpg`,
    `https://cf.shopee.ph/file/33ed249252ed39bb82bbe416cfd30af4_tn`,
    `https://i.pinimg.com/originals/a1/23/51/a12351a0bd17a27a7cfb79e52b11cef2.jpg`,
    `https://th.bing.com/th/id/OIP.fRWs9zRP6GYZcl7s4l83vgAAAA?w=320&h=320&rs=1&pid=ImgDetMain`]

async function fetchProductDetails(productId) {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
    const result = await response.json();

    if (productId == 1) {
        let productImg = document.getElementsByClassName(`product-img-1`);
        [...productImg].map((img, index) => {
            if (index <= arrayOfProductImg.length) {
                img.src = arrayOfProductImg[index];
            }
        });
    }

    if (productId == 2) {
        let productImg = document.getElementsByClassName(`product-img-1`);
        [...productImg].map((img, index) => {
            if (index <= shirt.length) {
                img.src = shirt[index];
            }
        });
    }

    if (productId == 3) {
        let productImg = document.getElementsByClassName(`product-img-1`);
        [...productImg].map((img, index) => {
            if (index <= jacket.length) {
                img.src = jacket[index];
            }
        });
    }

    if (productId == 4) {
        let productImg = document.getElementsByClassName(`product-img-1`);
        [...productImg].map((img, index) => {
            if (index <= casual.length) {
                img.src = casual[index];
            }
        });
    }

    if (productId == 5) {
        let productImg = document.getElementsByClassName(`product-img-1`);
        [...productImg].map((img, index) => {
            if (index <= gold.length) {
                img.src = gold[index];
            }
        });
    }

    if (productId == 6) {
        let productImg = document.getElementsByClassName(`product-img-1`);
        [...productImg].map((img, index) => {
            if (index <= petite.length) {
                img.src = petite[index];
            }
        });
    }

    if (productId == 7) {
        let productImg = document.getElementsByClassName(`product-img-1`);
        [...productImg].map((img, index) => {
            if (index <= white.length) {
                img.src = white[index];
            }
        });
    }

    if (productId == 8) {
        let productImg = document.getElementsByClassName(`product-img-1`);
        [...productImg].map((img, index) => {
            if (index <= owl.length) {
                img.src = owl[index];
            }
        });
    }

    if (productId == 9) {
        let productImg = document.getElementsByClassName(`product-img-1`);
        [...productImg].map((img, index) => {
            if (index <= hard.length) {
                img.src = hard[index];
            }
        });
    }

    if (productId == 10) {
        let productImg = document.getElementsByClassName(`product-img-1`);
        [...productImg].map((img, index) => {
            if (index <= sanDisk.length) {
                img.src = sanDisk[index];
            }
        });
    }
    return result;
}

async function displayProductDetails() {
    const productDetails = await fetchProductDetails(productId);
    console.log(productDetails);


    let productTitle = document.querySelector(`.product-title`);
    productTitle.innerHTML = productDetails.title;
    let productDescription = document.querySelector(`.product-description`);
    productDescription.innerHTML = productDetails.description;
    let rating = document.querySelector(`.rating-review`);
    rating.innerHTML = productDetails.rating.rate + `<box-icon name='star' class='star' type='solid' color='#FFA651' ></box-icon> | ` + productDetails.rating.count + ` Ratings`
    let price = document.querySelector(`.price`);
    price.innerHTML = `₹${productDetails.price} <span class='discount'>MRP <span class = 'line-through'>₹150 </span><span class = 'off'> (60% OFF)</span></span>`;

    let badgeCount = parseInt(localStorage.getItem(`badgeCount`)) || 0;
    let updateBadge = () => {
        let badge = document.querySelector(`.badge`);
        badgeCount++
        badge.innerHTML = badgeCount;
        badge.style.visibility = `visible`;
        localStorage.setItem(`badgeCount`, badgeCount.toString());
    }

    let goToBag = document.querySelector(`.go-to-bag`);

    let cartBtn = document.querySelector(`.add-to-cart`);
    cartBtn.addEventListener(`click`, () => {
        let popup = document.querySelector(`.popup`);
        popup.style.visibility = `visible`;
        setTimeout(function () {
            popup.style.opacity = '1';
        }, 10);
        setTimeout(function () {
            popup.style.opacity = '0';
            setTimeout(function () {
                popup.style.display = 'none';
            }, 1000);
        }, 3000);
        cartBtn.style.display = `none`;
        goToBag.style.display = `inline-block`;
        updateBadge();        

        goToBag.addEventListener(`click`, () => {
            localStorage.setItem('selectedProduct', JSON.stringify(productDetails));
        })
        
    })

}


window.onload = displayProductDetails;
