
import ProductItem from "./components/ProductItem.js";

// UL 태그 렌더링 담당
class ProductList {
  // JSON  형태의 배열을 받아옴
  constructor() {
    this.products = this.products;
  }
  // render: function() {
  render() {
    const $prodList = document.createElement('ul');
    $prodList.classList.add('product-list');
    // 반복해서 li 태그를 생성
    // console.log(this.products);  // 객체 내부이므로 products를 사용하려면 this 필요
    this.products.forEach(prod => {

      const product = new ProductItem(prod);
      $prodList.appendChild(product.render());

    });
    // div#app에 ul 추가
    document.getElementById('app').appendChild($prodList);

  }
}
export default ProductList;