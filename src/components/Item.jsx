import { toast } from 'react-toastify';

const Item = ({ item, img, name, price, basket, setBasket }) => {
  const handleAddBasket = (item) => {
    const checkBasket = basket.find((product) => product.id === item.id);
    if (checkBasket) {
      checkBasket.amount += 1;

      const itemIndex = basket.findIndex((product) => product.id === item.id);
      const updatedBasket = [...basket];
      updatedBasket[itemIndex] = checkBasket;

      setBasket(updatedBasket);
    } else {
      setBasket([
        ...basket,
        {
          id: item.id,
          img: item.img,
          name: item.name,
          price: item.price,
          amount: 1,
        },
      ]);
    }
    toast.success(`"${item.name}" sepetinize eklendi!`, {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 1000,
      hideProgressBar: false,
      closeButton: false
    });
  };

  return (
    <>
      <div className="item">
        <figure>
          <img src={`./img/${img}`} alt="" />
        </figure>
        <div className="content">
          <h3 className="header">{name}</h3>
          <div>
            <p className="price">${price}</p>
            <button
              onClick={() => {
                handleAddBasket(item);
              }}
              type="button"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Item;
