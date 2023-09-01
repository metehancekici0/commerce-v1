import Item from "./components/Item";
import ItemData from "./ItemData";
import Modal from "./components/Modal";
import { useState } from "react";

const Main = () => {
  const [toggleAlert, setToggleAlert] = useState(true);
  return (
    <>
      <main className="main-part">
        <div className="container">
          <div className="popular-items">
            <div className="box">
              {ItemData.map((item) => (
                <Item key={item.id} item={item} img={item.img} name={item.name} price={item.price} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Modal />
      <aside className={`alert alert-info ${toggleAlert ? "show" : ""}`}>
        <div className="alert-header">
          <h6>App Information</h6>
          <button onClick={() => {
            setToggleAlert((prev) => (!prev))
          }}>×</button>
        </div>
        <div className="alert-body">
          Developed with <b>useContext</b>
        </div>
      </aside>
    </>
  );
};

export default Main;
