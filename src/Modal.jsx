import React from "react";

function Modal() {
  return (
    <div>
      <form>
        <input type="text" />
        <select name="languages" id="lang">
          <option value="javascript">JavaScript</option>
          <option value="php">PHP</option>
          <option value="java">Java</option>
          <option value="golang">Golang</option>
          <option value="python">Python</option>
          <option value="c#">C#</option>
          <option value="C++">C++</option>
          <option value="erlang">Erlang</option>
        </select>
        <input type="date" />
      </form>
    </div>
  );
}

export default Modal;
