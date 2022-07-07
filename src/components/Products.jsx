import Product from "./Product"

const Products = () => {
   return (
     <div className="products">
      <div className="class1"><Product icon="http://intocode.ru/d/react-project-1/images/1.jpg" price="97000 ₽" title="MacBook" button="Купить"/></div>
      <div className="class2"><Product icon="http://intocode.ru/d/react-project-1/images/2.jpg" price="35999 ₽" title="Galaxy" button="Купить"/></div>
      <div className="class3"><Product icon="http://intocode.ru/d/react-project-1/images/3.jpg" price="58950 ₽" title="Скутер" button="Купить"/></div>
      <div className="class4"><Product icon="http://intocode.ru/d/react-project-1/images/4.jpg" price="12000 ₽" title="Монитор Samsung" button="Купить"/></div>
      <div className="class5"><Product icon="http://intocode.ru/d/react-project-1/images/5.jpg" price="50000 ₽" title="Респераторная маска" button="Купить"/></div>
      <div className="class6"><Product icon="http://intocode.ru/d/react-project-1/images/6.jpg" price="75000 ₽" title="Стиральная машина" button="Купить"/></div>
     </div>
   )
}

export default Products