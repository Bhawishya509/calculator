import btncs from "./Buttons.module.css";
const Buttons = ({ names, check,Click,name }) => {
  if (names ==="0") {
    return (
      <main
        className={btncs.key_pad_main_blocks}
        onClick={Click}
      >
        {names}
      </main>
    );
  } else if ((names > "0" && names <= "9") || names === ".") {
    return (
      <main
        className={btncs.key_pad_main_block}
        // style={{ backgroundColor: `${opeators}` }}
        onClick={Click}
      >
        {names}
      </main>
    );
  } else if (names === "Ac" || names === "(" || names === ")") {
    return (
      <main
        className={btncs.key_pad_main_block}
        style={{ backgroundColor: `${check}` }}
        onClick={Click}
      >
        {names}
      </main>
    );
  } else
    return (
      <>
        <main
          className={btncs.key_pad_main_block}
          style={{ backgroundColor: `${check}` }}
          onClick={Click}
        >
          {names}
        </main>
      </>
    );
};

export default Buttons;
