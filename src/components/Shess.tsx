import { FC } from "react";

import Chessground from "@react-chess/chessground";

// these styles must be imported somewhere
import "chessground/assets/chessground.base.css";
import "chessground/assets/chessground.brown.css";
import "chessground/assets/chessground.cburnett.css";

const Shess: FC = () => {
  return <Chessground width={420} height={420} />;
};

export default Shess;
