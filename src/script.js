const keys = {
  englishKeys: {
    "` ~": 192,
    "1 !": 49,
    "2 @": 50,
    "3 #": 51,
    "4 $": 52,
    "5 %": 53,
    "6 ^": 54,
    "7 &": 55,
    "8 *": 56,
    "9 (": 57,
    "0 )": 48,
    "- _": 189,
    "= +": 187,
    Backspace: 8,
    Tab: 9,
    q: 81,
    w: 87,
    e: 69,
    r: 82,
    t: 84,
    y: 89,
    u: 85,
    i: 73,
    o: 79,
    p: 80,
    "[ {": 219,
    "] }": 221,
    "\\ |": 220,
    Del: 46,
    "Caps Lock": 20,
    a: 65,
    s: 83,
    d: 68,
    f: 70,
    g: 71,
    h: 72,
    j: 74,
    k: 75,
    l: 76,
    "; :": 186,
    "' \"": 222,
    Enter: 13,
    Shift: 16,
    z: 90,
    x: 88,
    c: 67,
    v: 86,
    b: 66,
    n: 78,
    m: 77,
    ", <": 188,
    ". >": 190,
    "/ ?": 191,
    "↑": 38,
    "Shift ": 16,
    Ctrl: 17,
    Win: 91,
    Alt: 18,
    Space: 32,
    "Alt ": 18,
    "←": 37,
    "↓": 40,
    "→": 39,
    "Ctrl ": 17,
  },
};

const textArea = document.createElement("textarea");
document.body.append(textArea);

const keyboard = document.createElement("div");
keyboard.className = "keyboard";
document.body.append(keyboard);

const keyboardWrapper = document.createElement("div");
keyboardWrapper.className = "keyboard-wrapper";
keyboard.append(keyboardWrapper);

const keyboardKeys = document.createElement("div");
keyboardKeys.className = "keyboard-keys";
keyboardWrapper.append(keyboardKeys);

function createRow() {
  const row = document.createElement("div");
  row.className = "row";
  keyboardKeys.append(row);
  return row;
}

const englishKeys = Object.entries(keys.englishKeys);
const row1 = createRow();
for (let i = 0; i < 14; i += 1) {
  const keyboardBtn = document.createElement("div");
  keyboardBtn.className = "keyboard-btn";
  keyboardBtn.dataset.keyCode = englishKeys[i][1];
  if (englishKeys[i][0] === "Backspace") {
    keyboardBtn.classList.add("not-common-btn");
    keyboardBtn.classList.add("backspace");
  }
  row1.append(keyboardBtn);
  keyboardBtn.textContent = `${englishKeys[i][0]}`;
}
const row2 = createRow();
for (let i = 14; i < 29; i += 1) {
  const keyboardBtn = document.createElement("div");
  keyboardBtn.className = "keyboard-btn";
  keyboardBtn.dataset.keyCode = englishKeys[i][1];
  if (englishKeys[i][0] === "Tab") {
    keyboardBtn.classList.add("not-common-btn");
    keyboardBtn.classList.add("tab");
  }
  if (englishKeys[i][0] === "Del") {
    keyboardBtn.classList.add("not-common-btn");
    keyboardBtn.classList.add("del");
  }
  row2.append(keyboardBtn);
  keyboardBtn.textContent = `${englishKeys[i][0]}`;
}
const row3 = createRow();
for (let i = 29; i < 42; i += 1) {
  const keyboardBtn = document.createElement("div");
  keyboardBtn.className = "keyboard-btn";
  keyboardBtn.dataset.keyCode = englishKeys[i][1];
  if (englishKeys[i][0] === "Caps Lock") {
    keyboardBtn.classList.add("not-common-btn");
    keyboardBtn.classList.add("capslock");
  }
  if (englishKeys[i][0] === "Enter") {
    keyboardBtn.classList.add("not-common-btn");
    keyboardBtn.classList.add("enter");
  }
  row3.append(keyboardBtn);
  keyboardBtn.textContent = `${englishKeys[i][0]}`;
}
const row4 = createRow();
for (let i = 42; i < 55; i += 1) {
  const keyboardBtn = document.createElement("div");
  keyboardBtn.className = "keyboard-btn";
  keyboardBtn.dataset.keyCode = englishKeys[i][1];
  if (englishKeys[i][0].trim() === "Shift") {
    keyboardBtn.classList.add("not-common-btn");
    keyboardBtn.classList.add("shift");
  }
  if (englishKeys[i][0] === "↑") {
    keyboardBtn.classList.add("not-common-btn");
    keyboardBtn.classList.add("up-arrow");
  }
  row4.append(keyboardBtn);
  keyboardBtn.textContent = `${englishKeys[i][0]}`;
}

const row5 = createRow();
for (let i = 55; i < 64; i += 1) {
  const keyboardBtn = document.createElement("div");
  keyboardBtn.className = "keyboard-btn";
  keyboardBtn.dataset.keyCode = englishKeys[i][1];
  switch (englishKeys[i][0].trim()) {
    case "Ctrl": keyboardBtn.classList.add("ctrl");
      keyboardBtn.classList.add("not-common-btn");
      break;
    case "Win": keyboardBtn.classList.add("win");
      keyboardBtn.classList.add("not-common-btn");
      break;
    case "Alt": keyboardBtn.classList.add("alt");
      keyboardBtn.classList.add("not-common-btn");
      break;
    case "Space": keyboardBtn.classList.add("space");
      keyboardBtn.classList.add("not-common-btn");
      break;
    case "←": keyboardBtn.classList.add("left-arrow");
      keyboardBtn.classList.add("not-common-btn");
      break;
    case "↓": keyboardBtn.classList.add("down-arrow");
      keyboardBtn.classList.add("not-common-btn");
      break;
    case "→": keyboardBtn.classList.add("right-arrow");
      keyboardBtn.classList.add("not-common-btn");
      break;
    default: keyboardBtn.classList.add("keyboard-btn");
  }
  row5.append(keyboardBtn);
  keyboardBtn.textContent = `${englishKeys[i][0]}`;
}
let cursorPos = 0;
let isCapsLock = false;
let isShift = false

const textAreaInput = (value) => {
  textArea.value = textArea.value.slice(0, cursorPos) + value
  + textArea.value.slice(cursorPos, textArea.value.length);
  cursorPos += 1;
};

const inputText = (event) => {
  if (event.classList.contains("not-common-btn")) {
    return;
  }
  if (event.classList.contains("keyboard-btn")) {
    textAreaInput(event.textContent);
  }
};

const clickAction = (event, action) => {
  if (action === "down") {
    event.classList.add("active");
  } else if (action === "up") {
    event.classList.remove("active");
  }
  textArea.selectionEnd = textArea.selectionStart = cursorPos;
  textArea.focus();
};
const listButtons = Array.from(document.querySelectorAll("[data-key-code]"));

const clickCapsLock = (_, action) => {
  if (action === "down") {
    listButtons.forEach((item) => {
      if (item.classList.contains("keyboard-btn") && !item.classList.contains("not-common-btn")) {
        item.textContent = item.textContent.toUpperCase();
      }
    });
  }
  if (action === "up") {
    listButtons.forEach((item) => {
      if (item.classList.contains("keyboard-btn") && !item.classList.contains("not-common-btn")) {
        item.textContent = item.textContent.toLowerCase();
      }
    });
  }
};

const clickShift = (_, action) => {
  if (action === "down") {
    listButtons.forEach(item => {
      if (item.classList.contains("keyboard-btn")
      && !item.classList.contains("not-common-btn")) {
        item.textContent = item.textContent.toUpperCase();
      }
    });
  }
  if (action === "up") {
    listButtons.forEach(item => {
      if (item.classList.contains("keyboard-btn")
      && !item.classList.contains("not-common-btn")) {
        item.textContent = item.textContent.toLowerCase();
      }
    });
  }
};

window.addEventListener("keydown", (event) => {
  event.preventDefault();
  if (event.key === "CapsLock") {
    isCapsLock = !isCapsLock;
    if (isCapsLock) {
      clickCapsLock(event.target, "down");
    } else {
      clickCapsLock(event.target, "up");
    }
  }
  if (event.key === "Shift") {
    if (!isCapsLock) {
      clickShift(event.target, "down");
    } else {
      clickShift(event.target, "up");
    }
    isShift = true;
  }
  if (event.key === "Enter") {
    textAreaInput("\r\n");
  }

  if (event.key === "Tab") {
    textAreaInput("  ");
    cursorPos += 1;
  }

  if (event.key === "Backspace") {
    if (cursorPos === 0) {
      return;
    }
    textArea.value = textArea.value.slice(0, cursorPos - 1)
    + textArea.value.slice(cursorPos, textArea.value.length);
    cursorPos -= 1;
  }

  if (event.keyCode === 32) {
    textAreaInput(" ");
  }

  listButtons.find((el) => {
    if (+el.dataset.keyCode === event.keyCode) {
      clickAction(el, "down");
      inputText(el);
      return true;
    }
  })
});

window.addEventListener("keyup", (event) => {
  event.preventDefault();
  if (event.key === "Shift") {
    if (!isCapsLock) {
      clickShift(event.target, "up");
    } else {
      clickShift(event.target, "down");
    }
    isShift = false;
  }
  listButtons.find((el) => {
    if (+el.dataset.keyCode === event.keyCode) {
      clickAction(el, "up");
      return true;
    }
  })
});

keyboard.addEventListener("mousedown", (event) => {
  if (event.target.classList.contains("capslock")) {
    isCapsLock = !isCapsLock;
    if (isCapsLock) {
      clickCapsLock(event.target, "down");
    } else {
      clickCapsLock(event.target, "up");
    }
  }
  if (event.target.classList.contains("shift")) {
    if (!isCapsLock) {
      clickShift(event.target, "down");
    } else {
      clickShift(event.target, "up");
    }
    isShift = true;
  }
  if (event.target.classList.contains("enter")) {
    textAreaInput("\r\n");
  }
  if (event.target.classList.contains("tab")) {
    textAreaInput("  ");
    cursorPos += 1;
  }
  if (event.target.classList.contains("backspace")) {
    if (cursorPos === 0) return;
    textArea.value = textArea.value.slice(0, cursorPos - 1)
    + textArea.value.slice(cursorPos, textArea.value.length);
    cursorPos -= 1;
  }
  if (event.target.classList.contains("space")) {
    textAreaInput(" ");
  }
  if (!event.target.classList.contains("not-common-btn")) {
    event.path.find((item) => {
      if (item instanceof Element) {
        if (item.classList.contains("keyboard-btn")) {
          textAreaInput(event.target.textContent);
          return true;
        }
      }
    });
  }
  if (!event.target.classList.contains("keyboard-btn")) return;
  clickAction(event.target, "down");
});

keyboard.addEventListener("mouseup", (event) => {
  textArea.selectionEnd = textArea.selectionStart = cursorPos;
  if (event.target.classList.contains("shift")) {
    if (!isCapsLock) {
      clickShift(event.target, "up");
    } else {
      clickShift(event.target, "down");
    }
    isShift = false;
}
  if (!event.target.classList.contains("keyboard-btn")) return;
  clickAction(event.target, "up");
});
