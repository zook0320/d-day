import React from "react";

function Modal() {
  return (
    <div>
      <form>
        <p>
          <input type="text" placeholder="기념일 입력" />
        </p>
        <p>
          <select name="" id="lang">
            <option value="javascript">JavaScript</option>
            <option value="php">PHP</option>
          </select>
        </p>
        <p>
          <input type="date" />
        </p>
      </form>
    </div>
  );
}

export default Modal;
