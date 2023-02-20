import { useState, useEffect } from "react";
import calcs from "./calculator.module.css";
import Buttons from "./Buttons";

const Calculator = () => {
  const [backgrounds, setbackgrounds] = useState("white");
  const [keys, setkeys] = useState("sky");
  const [disp, setdisp] = useState("black");
  const [opeators, setopeators] = useState("blue");
  const [inp, setinp] = useState("");

  const checking = (event) => {
    let b = event.target.name;
    setbackgrounds(b);
  };

  const take_input = (event) => {
    let inps = event.target.innerHTML;
    if (inps === "Ac" && inp.length >= 1) {
      let b = inp.length - 1;
      setinp(inp.substring(0, b));
    } else {
      if (inps !== "Ac")
        setinp((old_data) => {
          return old_data + inps;
        });
      else setinp("");
    }
  };

  function finals() {
    let c = eval(inp);
    let e = Math.floor(c);
    setinp(e);
  }

  useEffect(() => {
    if (backgrounds === "white") {
      setkeys("#0acbfc");
      setopeators("#1289ff");
      setdisp("black");
    } else if (backgrounds === "yellow") {
      setkeys("#a9a9a9");
      setopeators("#fe9327");
      setdisp("black");
    } else {
      setkeys("#fcd609");
      setopeators("#fe9327");
      setdisp("white");
    }
  }, [backgrounds]);
  return (
    <main className={calcs.main_block}>
      <blockquote
        className={calcs.calculator_main}
        style={{ backgroundColor: `${backgrounds}` }}
      >
        <blockquote className={calcs.themes}>
          <button
            className={calcs.sky}
            name={"white"}
            onClick={checking}
          ></button>
          <button
            className={calcs.yellow}
            name={"yellow"}
            onClick={checking}
          ></button>
          <button
            className={calcs.black}
            name={"black"}
            onClick={checking}
          ></button>
        </blockquote>
        <output className={calcs.output}>
          <input
            className={calcs.display_input}
            style={{ backgroundColor: `${backgrounds}`, color: `${disp}` }}
            value={inp}
            onChange={() => {
              setinp((old) => {
                return inp + old;
              });
            }}
          />
        </output>
        <div className={calcs.buttons}>
          <Buttons names={"Ac"} check={keys} name={"ac"} Click={take_input} />
          <Buttons names={"("} check={keys} name={"("} Click={take_input} />
          <Buttons names={")"} check={keys} name={")"} Click={take_input} />
          <Buttons names={"/"} check={opeators} name={"/"} Click={take_input} />
          <Buttons names={"7"} Click={take_input} name={"7"} />
          <Buttons names={"8"} Click={take_input} name={"8"} />
          <Buttons names={"9"} Click={take_input} name={"9"} />
          <Buttons names={"*"} Click={take_input} check={opeators} name={"*"} />
          <Buttons names={"4"} Click={take_input} name={"4"} />
          <Buttons names={"5"} Click={take_input} name={"5"} />
          <Buttons names={"6"} Click={take_input} name={"6"} />
          <Buttons names={"-"} check={opeators} Click={take_input} name={"-"} />
          <Buttons names={"1"} Click={take_input} name={"1"} />
          <Buttons names={"2"} Click={take_input} name={"2"} />
          <Buttons names={"3"} Click={take_input} name={"3"} />
          <Buttons names={"+"} check={opeators} Click={take_input} name={"+"} />
          <Buttons names={"0"} Click={take_input} name={"0"} />
          <Buttons names={"."} Click={take_input} name={"."} />
          <Buttons names={"="} check={opeators} Click={finals} name={"="} />
        </div>
      </blockquote>
    </main>
  );
};

export default Calculator;
