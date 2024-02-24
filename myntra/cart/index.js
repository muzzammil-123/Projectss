window.onload = () => {
    const product = JSON.parse(localStorage.getItem('selectedProduct'));
    if (product) {
        let hide = document.querySelector('.hide');
        let showLess = document.querySelector('.show-less');
        let svg = document.querySelector('.svg');
        let products = document.querySelector('.product');
        let cross = document.querySelector('.cross');
        let parDiv = document.querySelector('.par-div');
        let section1 = document.querySelector('.section1');
        cross.addEventListener('click', () => {
            localStorage.removeItem('selectedProduct');
            products.innerHTML = '';
            section1.style.display = 'flex';
            parDiv.style.display = 'none';
            cross.style.visibility = 'hidden';
        })
        let checkMark = document.querySelector('.bulkActionStrip-activeIcon');
        checkMark.addEventListener('click', () => {
            checkMark.classList.toggle('bulkActionStrip-InactiveIcon')
        })
        showLess.addEventListener('click', () => {
            hide.classList.toggle('hide');
            showLess.innerHTML = hide.classList.contains('hide') ? 'Show more' : 'Show Less';
            svg.classList.toggle('rotate');
        })

        products.innerHTML = `
        <div class="flex">
         <div class="leftSide">
           <img class="product-img" src='${product.image}'>
           <div class="bulkActionStrip-selectionIcon abs flex item-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="bulkActionStrip-activeIcon">
             <path fill-rule="evenodd" d="M11.83 6.11l-4.751 4.583a.604.604 0 0 1-.425.164h-.003a.608.608 0 0 1-.424-.16L4.176 8.74a.55.55 0 0 1 0-.805.62.62 0 0 1 .846 0l1.57 1.506c.03.028.078.027.107-.001l4.274-4.124a.62.62 0 0 1 .847-.01c.236.22.24.58.01.805M14.285 0H1.714C.77 0 0 .77 0 1.714v12.572C0 15.23.77 16 1.714 16h12.572C15.23 16 16 15.23 16 14.286V1.714C16 .77 15.23 0 14.286 0"> </path>
            </svg>
           </div>
         </div>
         <div class="rightSide">
            <div class="children flex flex-direction">
            <div class="product-name">${product.title}</div>
            <div class="product-type">Bag</div>
            <div class="product-sold">Sold By: Supercom Net</div>
            <div class="product-price">₹${product.price} <span class="cut line-through">₹200.0</span></div>
            <div class="product-exchange">Exchange Only</div>
         </div>
        </div>
        `
    }else{
        let section1 = document.querySelector('.section1');
        section1.style.display = 'flex';
        let parDiv = document.querySelector('.par-div');
        parDiv.style.display = 'none';
    }
}
