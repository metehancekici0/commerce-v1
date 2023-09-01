import { SlClose, SlTrash } from "react-icons/sl";
import { moneyFormat } from "../helpers";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ toggleModal, setToggleModal, basket, setBasket, totalAmount, totalPrice }) => {
  const handleDeleteBasket = (item) => {
    setBasket([...basket.filter((product) => product.id !== item.id)]);
    toast.success(`"${item.name}" sepetinizden kaldırıldı!`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
      hideProgressBar: false,
      closeButton: false,
    });
  };

  const handleAmountPlus = (item) => {
    const itemIndex = basket.findIndex((product) => product.id === item.id);

    item.amount += 1;
    const updatedBasket = [...basket];
    updatedBasket[itemIndex] = item;
    setBasket(updatedBasket);
  };
  const handleAmountMinus = (item) => {
    if (item.amount === 1) {
      setBasket([...basket.filter((product) => product.id !== item.id)]);
      toast.success(`"${item.name}" sepetinizden kaldırıldı!`, {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 1000,
        hideProgressBar: false,
        closeButton: false,
      });
    } else {
      const itemIndex = basket.findIndex((product) => product.id === item.id);
      item.amount -= 1;
      const updatedBasket = [...basket];
      updatedBasket[itemIndex] = item;
      setBasket(updatedBasket);
    }
  };

  return (
    <>
      <aside className={`modal-overlay ${toggleModal === true ? "show" : ""}`}>
        <div className="modal">
          <div className="modal-header">
            <p className="header">Basket ({totalAmount})</p>
            <button
              onClick={() => {
                setToggleModal((prev) => !prev);
              }}
            >
              <SlClose />
            </button>
          </div>
          <div className="modal-body">
            {basket && basket.length > 0 ? (
              <>
                {basket.map((item) => (
                  <div key={item.id} className="item">
                    <div className="left">
                      <figure>
                        <img src={`./img/${item.img}`} alt="" />
                      </figure>
                      <div className="content">
                        <h4 className="header">{item.name}</h4>
                        <div className="price">
                          $
                          {item.amount > 1 ? (
                            <>{`${moneyFormat(item.price)} x ${item.amount} = $${moneyFormat(item.price * item.amount)}`}</>
                          ) : (
                            moneyFormat(item.price)
                          )}
                        </div>
                        <div className="actions">
                          <button
                            onClick={() => {
                              handleAmountMinus(item);
                            }}
                          >
                            -
                          </button>
                          <div className="amount">{item.amount}</div>
                          <button
                            onClick={() => {
                              handleAmountPlus(item);
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="right">
                      <button
                        type="button"
                        onClick={() => {
                          handleDeleteBasket(item);
                        }}
                      >
                        <SlTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <>
                <h5 className="alert-empty">Your cart is empty!</h5>
              </>
            )}
          </div>
          {basket.length > 0 && (
            <div className="modal-footer">
              <div className="content">
                <span className="header">SUBTOTAL</span>
                <span className="price">${moneyFormat(totalPrice)} </span>
              </div>
              <button type="button">Go to pay</button>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default Modal;
