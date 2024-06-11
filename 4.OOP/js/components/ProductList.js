import Component from "./Component.js";
import ProductItem from "./ProductItem.js";

// UL 태그 렌더링 담당
class ProductList extends Component{
  // JSON  형태의 배열을 받아옴
  constructor(tagId, products, shoppingCart) {
    super(tagId)
    this.products = products;
    this.shoppingCart = shoppingCart;
  }
  // render: function() {
  render() {

    const attr = {
      id: 'prod-list',
    }
    this.createElement('ul', 'product-list', '', attr);

    // const $prodList = document.createElement('ul');
    // $prodList.classList.add('product-list');
    // 반복해서 li 태그를 생성
    // console.log(this.products);  // 객체 내부이므로 products를 사용하려면 this 필요
    this.products.forEach(prod => {

      // const product = new ProductItem(prod);
      // $prodList.appendChild(product.render());
      new ProductItem(attr.id, prod, this.shoppingCart).render();

    });
    // div#app에 ul 추가
    // document.getElementById('app').appendChild($prodList);

    // return $prodList;

  }
}
export default ProductList;