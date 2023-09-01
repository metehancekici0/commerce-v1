import { useEffect, useState } from 'react';
import './App.css';

import Header from './components/Header';
import Main from './Main'

import { ToastProvider } from './ToastProvide'; // ToastProvider dosyanızın yolunu doğru ayarlayın

function App() {
  const [toggleModal, setToggleModal] = useState(false);
  const [basket, setBasket] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalAmountVal = basket.reduce((total, product) => total + product.amount, 0);
    setTotalAmount(totalAmountVal);

    const totalPriceVal = basket.reduce((total, product) => total + (product.amount * product.price), 0);
    setTotalPrice(totalPriceVal)
  }, [basket]);

  return (
    <>
      <ToastProvider>
        <Header setToggleModal={setToggleModal} totalAmount={totalAmount} />
        <Main toggleModal={toggleModal} setToggleModal={setToggleModal} basket={basket} setBasket={setBasket} totalAmount={totalAmount} totalPrice={totalPrice} />
      </ToastProvider>
    </>
  );
}

export default App;
