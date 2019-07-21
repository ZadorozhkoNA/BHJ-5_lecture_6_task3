let arrayProducts = document.body.querySelectorAll( '.product' );
let cart = document.body.querySelector( '.cart__products' );

function addProduct( id, src, count, element ) {
  count = parseInt( count );
  let cartProducts = document.body.querySelectorAll( '.cart__product' );
  let searchProduct = true;

  cartProducts.forEach( (item) => {
    if ( item.dataset.id === id ) searchProduct = false;
  });

  if ( searchProduct ) {
    let divCart = document.createElement( 'div' );
    divCart.classList.add( 'cart__product' );
    divCart.setAttribute( 'data-id',  id );

    let img = document.createElement( 'img' );
    img.classList.add( 'cart__product-image' );
    img.src = src;

    let divCount = document.createElement( 'div' );
    divCount.classList.add( 'cart__product-count' );
    divCount.textContent = count;

    divCart.appendChild( img );
    divCart.appendChild( divCount );
    element.appendChild( divCart );
  } else {
    let divCart = element.querySelector( `[data-id="${id}"]` );
    let countCart = parseInt( divCart.querySelector( '.cart__product-count' ).textContent );
    divCart.querySelector( '.cart__product-count' ).textContent = count + countCart;
  }
}

function selectProduct( event ) {
  event.preventDefault();
  let id = event.currentTarget.dataset.id;
  let count = event.currentTarget.querySelector( '.product__quantity-value' ).textContent;

  if ( event.target === event.currentTarget.querySelector( '.product__add' ) ) {
    let src = event.currentTarget.querySelector( 'img' ).src;
    addProduct( id, src, count, cart );
  }

  if ( event.target === event.currentTarget.querySelector( '.product__quantity-control_inc' ) ) {
    count++;
    event.currentTarget.querySelector( '.product__quantity-value' ).textContent = count;
  }

  if ( event.target === event.currentTarget.querySelector( '.product__quantity-control_dec' ) ) {
    count--;
    if ( count === 0 ) count = 1;
    event.currentTarget.querySelector( '.product__quantity-value' ).textContent = count;
  }
}

arrayProducts.forEach( (item) => {
  item.addEventListener( 'click', selectProduct );
});
