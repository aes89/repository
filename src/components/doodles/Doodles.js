import React from "react";
import "../../index.css";
import Cartman from "./cartman";
import Koala from "./koala";
import KoalaScared from "./koalaScared";

const Doodles = () => {
  const [showDoodle, setShowDoodle] = React.useState(null);
  const doodles = {
    cartman: <Cartman />,
    koala: <Koala />,
    koalaScared: <KoalaScared />,
  };

  console.log("show doodle", showDoodle);

  return (
    <div>
      <h2>Doodles:</h2>
      <div class="doodlesRow">
        <div class="doodlesCol1">
          <ul>
            <li>
              <button
                class="doodleButton"
                onClick={() => setShowDoodle("cartman")}
              >
                Cartman
              </button>
            </li>
            <li>
              <button
                class="doodleButton"
                onClick={() => setShowDoodle("koala")}
              >
                Koala
              </button>
            </li>
            <li>
              <button
                class="doodleButton"
                onClick={() => setShowDoodle("koalaScared")}
              >
                Scared
              </button>
            </li>
          </ul>
        </div>
        <div class="doodlesCol2">{doodles[showDoodle]}</div>
      </div>
    </div>
  );
};

export default Doodles;
