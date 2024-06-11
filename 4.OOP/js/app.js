// import { Product } from "./components/products.js";
import Product from "./components/products.js";


// 상품 데이터
const p1 = new Product('에어팟', 200000, '에어팟으로 노래를 들어요.', 'https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg' );
const p2 = new Product('족발', 30000, '족발은 맛있쩡.', 'https://i.namu.wiki/i/I63sEiy-8vUXVhV-I0IZiS9ntT0INuKXgBYAE3QqUvOlToSoEqSgpvEbUmxsFTXtoBRN4WJolyAFEAlDdeZFhQ.webp' );

// 서버에서 전송된 JSON
const productList = {
  products: [
    p1,
    p2, 
    {
      title: '요구르트',
      price: 500,
      desc: '요구르르르트',
      image: 'https://blisgo.com/wp-content/uploads/elementor/thumbs/%EC%9A%94%EA%B5%AC%EB%A5%B4%ED%8A%B8-%EB%B3%91-p5n5r18iqjwaho4l8dypfovtexj3hmml83x90jofls.jpg',
    }
  ],
  // render: function() {
  render() {
    const $prodList = document.createElement('ul');
    $prodList.classList.add('product-list');
    // 반복해서 li 태그를 생성
    // console.log(this.products);  // 객체 내부이므로 products를 사용하려면 this 필요
    this.products.forEach(prod => {
      const $prodLi = document.createElement('li');
      $prodLi.classList.add('product-item');
      $prodLi.innerHTML = `
      <div>
        <img src="${prod.image}" alt="${prod.title}">
        <div class="product-item__content">
          <h2>${prod.title}</h2>
          <h3>${prod.price}원</h3>
          <p>${prod.desc}</p>
          <button>담기</button>
        </div>
      </div>
      `;
      $prodList.appendChild($prodLi);

    });
    // div#app에 ul 추가
    document.getElementById('app').appendChild($prodList);

  }

};

productList.render();
