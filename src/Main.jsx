import Item from "./components/Item";
import ItemData from "./ItemData";
import Modal from "./components/Modal";


const Main = ({toggleModal, setToggleModal, basket, setBasket, totalAmount, totalPrice}) => {

  return (
    <>
      <main className="main-part">
        <div className="container">
          <div className="popular-items">
            <div className="box">
              {ItemData.map((item) => (
                <Item key={item.id} item={item} img={item.img} name={item.name} price={item.price} basket={basket} setBasket={setBasket} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Modal toggleModal={toggleModal} setToggleModal={setToggleModal} basket={basket} setBasket={setBasket} totalAmount={totalAmount} totalPrice={totalPrice} />
    </>
  );
};

export default Main;
