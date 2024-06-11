// import { Product } from "./components/products.js";
import Product from "/components/Product.js";
import ProductList from "./components/ProductList.js";


// 상품 데이터
const p1 = new Product('에어팟', 200000, '에어팟으로 노래를 들어요.', 'https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg' );
const p2 = new Product('족발', 30000, '족발은 맛있쩡.', 'https://i.namu.wiki/i/I63sEiy-8vUXVhV-I0IZiS9ntT0INuKXgBYAE3QqUvOlToSoEqSgpvEbUmxsFTXtoBRN4WJolyAFEAlDdeZFhQ.webp' );

// 서버에서 전송된 JSON
const productList = new ProductList([
    p1,
    p2, 
    new Product('요구르트', 500, '요구르르르트', 'https://blisgo.com/wp-content/uploads/elementor/thumbs/%EC%9A%94%EA%B5%AC%EB%A5%B4%ED%8A%B8-%EB%B3%91-p5n5r18iqjwaho4l8dypfovtexj3hmml83x90jofls.jpg'),
    new Product('치킨', 21000, '치킨 맛있엉', 'http://www.amnews.co.kr/news/photo/201706/22467_11650_433.jpg'),
    new Product('쿼터파운드 치즈버거', 10000, '치즈가 맛있어요', 'https://www.mcdonalds.co.kr/upload/product/pcfile/1583728200175.png'),
]);

productList.render();
