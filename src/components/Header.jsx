import { useContext } from "react";
import { SlBasket } from "react-icons/sl";
import BasketContext from '../context/BasketContext'

const Header = () => {

  const { setToggleModal, totalAmount } = useContext(BasketContext)

  return (
    <>
      <header className="header-part">
        <div className="container">
          <span className="logo">
            <img src="./img/logo.png" alt="" />
            <span>Apple Store</span>
          </span>
          <button
            onClick={() => {
              setToggleModal((prev) => !prev);
            }}
            className="shopping-card-btn"
          >
            <SlBasket />
            <div className="notification-count">{totalAmount}</div>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
