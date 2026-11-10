import Product from "./components/Product";
import Panel from "./components/Panel";
import Profile from "./components/Profile";

const App = () => (
  <div>
    <h1>Best selling products</h1>

    {/* TODO 11: Передай пропси imgUrl та price компоненту Product нижче */}
    <Product
      name="Tacos With Lime"
    />

    {/* TODO 12: Додай ще один <Product> з такими даними:
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
    */}

    {/* TODO 13: Додай <Product name="Mystery dish" price={5.99} /> без imgUrl,
        щоб перевірити значення за замовчуванням */}

    <hr />

    {/* TODO 14: Розкоментуй код нижче після реалізації Panel та Profile */}
    {/*
    <Panel title="User profile">
      <Profile name="Mango" email="mango@mail.com" />
    </Panel>
    */}
  </div>
);

export default App;
