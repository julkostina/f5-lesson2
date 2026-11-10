// TODO 1: Import PropTypes from "prop-types"

// TODO 2: Оголоси компонент Product як функцію-стрілку, що приймає props
// Компонент повинен відображати: зображення, назву, ціну та кнопку "Add to cart"
// Підказка: const Product = (props) => ( ... )

const Product = (props) => (
  <div>
    {/* TODO 3: Відобрази props.imgUrl у тегу <img> (src, alt, width="640") */}
    {/* TODO 4: Відобрази props.name у тегу <h2> */}
    {/* TODO 5: Відобрази props.price у тегу <p> у форматі "Price: XX$" */}
    <button type="button">Add to cart</button>
  </div>
);

// TODO 6: Перепиши компонент Product із деструктуризацією пропсів у підписі функції
// const Product = ({ imgUrl, name, price }) => ( ... )

// TODO 7: Додай значення за замовчуванням для imgUrl у деструктуризації:
// imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder"

// TODO 8: Опиши propTypes для компонента Product:
// - imgUrl: рядок (необов'язковий)
// - name: рядок (обов'язковий)
// - price: число (обов'язкове)
// Product.propTypes = { ... }

export default Product;
