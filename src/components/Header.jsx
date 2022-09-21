import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/Shop.png" />
        </div>
      </Link>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="/img/cart.svg" alt="Кошик" />
          <span>1205 грн.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img
              className="mr-30 cu-p"
              width={20}
              height={20}
              src="/img/heart.svg"
              alt="Закладки"
            />
          </Link>
        </li>
        <li>
          <img width={20} height={20} src="/img/user.svg" alt="Користувач" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
