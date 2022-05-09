const keys = {
  en: {
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
  ru: {
    ё: 192,
    "1 !": 49,
    "2 \"": 50,
    "3 №": 51,
    "4 ;": 52,
    "5 %": 53,
    "6 :": 54,
    "7 ?": 55,
    "8 *": 56,
    "9 (": 57,
    "0 )": 48,
    "- _": 189,
    "= +": 187,
    Backspace: 8,
    Tab: 9,
    й: 81,
    ц: 87,
    у: 69,
    к: 82,
    е: 84,
    н: 89,
    г: 85,
    ш: 73,
    щ: 79,
    з: 80,
    х: 219,
    ъ: 221,
    Del: 46,
    "Caps Lock": 20,
    ф: 65,
    ы: 83,
    в: 68,
    а: 70,
    п: 71,
    р: 72,
    о: 74,
    л: 75,
    д: 76,
    ж: 186,
    э: 222,
    Enter: 13,
    Shift: 16,
    я: 90,
    ч: 88,
    с: 67,
    м: 86,
    и: 66,
    т: 78,
    ь: 77,
    б: 188,
    ю: 190,
    ". ,": 191,
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
let currentLang = localStorage.getItem("lang") || "en";
let keysLang = Object.entries(keys[currentLang]);

const row1 = createRow();
for (let i = 0; i < 14; i += 1) {
  const keyboardBtn = document.createElement("div");
  keyboardBtn.className = "keyboard-btn";
  keyboardBtn.dataset.keyCode = keysLang[i][1];
  if (keysLang[i][0] === "Backspace") {
    keyboardBtn.classList.add("not-common-btn");
    keyboardBtn.classList.add("backspace");
  }
  row1.append(keyboardBtn);
  keyboardBtn.textContent = `${keysLang[i][0]}`;
}
const row2 = createRow();
for (let i = 14; i < 29; i += 1) {
  const keyboardBtn = document.createElement("div");
  keyboardBtn.className = "keyboard-btn";
  keyboardBtn.dataset.keyCode = keysLang[i][1];
  if (keysLang[i][0] === "Tab") {
    keyboardBtn.classList.add("not-common-btn");
    keyboardBtn.classList.add("tab");
  }
  if (keysLang[i][0] === "Del") {
    keyboardBtn.classList.add("not-common-btn");
    keyboardBtn.classList.add("del");
  }
  row2.append(keyboardBtn);
  keyboardBtn.textContent = `${keysLang[i][0]}`;
}
const row3 = createRow();
for (let i = 29; i < 42; i += 1) {
  const keyboardBtn = document.createElement("div");
  keyboardBtn.className = "keyboard-btn";
  keyboardBtn.dataset.keyCode = keysLang[i][1];
  if (keysLang[i][0] === "Caps Lock") {
    keyboardBtn.classList.add("not-common-btn");
    keyboardBtn.classList.add("capslock");
  }
  if (keysLang[i][0] === "Enter") {
    keyboardBtn.classList.add("not-common-btn");
    keyboardBtn.classList.add("enter");
  }
  row3.append(keyboardBtn);
  keyboardBtn.textContent = `${keysLang[i][0]}`;
}
const row4 = createRow();
for (let i = 42; i < 55; i += 1) {
  const keyboardBtn = document.createElement("div");
  keyboardBtn.className = "keyboard-btn";
  keyboardBtn.dataset.keyCode = keysLang[i][1];
  if (keysLang[i][0].trim() === "Shift") {
    keyboardBtn.classList.add("not-common-btn");
    keyboardBtn.classList.add("shift");
  }
  if (keysLang[i][0] === "↑") {
    keyboardBtn.classList.add("not-common-btn");
    keyboardBtn.classList.add("up-arrow");
  }
  row4.append(keyboardBtn);
  keyboardBtn.textContent = `${keysLang[i][0]}`;
}

const row5 = createRow();
for (let i = 55; i < 64; i += 1) {
  const keyboardBtn = document.createElement("div");
  keyboardBtn.className = "keyboard-btn";
  keyboardBtn.dataset.keyCode = keysLang[i][1];
  switch (keysLang[i][0].trim()) {
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
  keyboardBtn.textContent = `${keysLang[i][0]}`;
}
let keyboardButtons = document.querySelectorAll(".keyboard-btn")
for (let i = 0; i < keyboardButtons.length; i += 1) {
  if (keyboardButtons[i].textContent.trim().split(" ").length === 2 && keyboardButtons[i].textContent !== "Caps Lock") {
    const firstViewBtn = document.createElement("div");
    firstViewBtn.className = "first-view-btn";
    firstViewBtn.classList.add("hidden");
    firstViewBtn.textContent = keyboardButtons[i].textContent.split(' ')[1];

    const secondViewBtn = document.createElement("div");
    secondViewBtn.className = "second-view-btn";
    secondViewBtn.textContent = keyboardButtons[i].textContent.split(' ')[0];
    keyboardButtons[i].textContent = ""

    keyboardButtons[i].append(firstViewBtn)
    keyboardButtons[i].append(secondViewBtn)
    keyboardButtons[i].classList.add("double-view-btn");
  }
}

let cursorPos = 0;
let isCapsLock = false;
let isShift = false;
let isAlt = false;

const textAreaInput = (value) => {
  textArea.value = textArea.value.slice(0, cursorPos) + value
  + textArea.value.slice(cursorPos, textArea.value.length);
  cursorPos += 1;
};

const inputText = (event) => {
  if (event.classList.contains("not-common-btn")) {
    return;
  }
  if (event.classList.contains("double-view-btn")) {
    if (isShift) {
      textAreaInput(event.firstChild.textContent);
    } else {
      textAreaInput(event.lastChild.textContent);
    }
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
      if (item.classList.contains("keyboard-btn") && !item.classList.contains("not-common-btn") && !item.classList.contains("double-view-btn")) {
        item.textContent = item.textContent.toUpperCase();
      }
    });
  }
  if (action === "up") {
    listButtons.forEach((item) => {
      if (item.classList.contains("keyboard-btn") && !item.classList.contains("not-common-btn") && !item.classList.contains("double-view-btn")) {
        item.textContent = item.textContent.toLowerCase();
      }
    });
  }
};

const clickShift = (_, action) => {
  if (action === "down") {
    listButtons.forEach(item => {
      if (item.classList.contains("keyboard-btn")
      && !item.classList.contains("not-common-btn") && !item.classList.contains("double-view-btn")) {
        item.textContent = item.textContent.toUpperCase();
      }
      if (item.classList.contains("double-view-btn")) {
        item.firstChild.classList.remove("hidden");
        item.lastChild.classList.add("hidden");
      }
    });
  }
  if (action === "up") {
    listButtons.forEach(item => {
      if (item.classList.contains("keyboard-btn")
      && !item.classList.contains("not-common-btn") && !item.classList.contains("double-view-btn")) {
        item.textContent = item.textContent.toLowerCase();
      }
      if (item.classList.contains("double-view-btn")) {
        item.firstChild.classList.add("hidden");
        item.lastChild.classList.remove("hidden");
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

  if (event.key === "Delete") {
    if (cursorPos >= textArea.value.length) return;
    textArea.value = textArea.value.slice(0, cursorPos)
    + textArea.value.slice(cursorPos + 1, textArea.value.length);
  }

  if (event.key === "Alt") {
    if (event.code === "AltLeft") {
      isAlt = true;
    }
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
  if (event.key === "Alt") {
    clickShift(event.target, "up");
    isAlt = false;
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
  if (event.target.classList.contains("del")) {
    if (cursorPos >= textArea.value.length) return;
    textArea.value = textArea.value.slice(0, cursorPos)
    + textArea.value.slice(cursorPos + 1, textArea.value.length);
  }

  if (event.target.classList.contains("alt")) {
    isAlt = true;
  }
  if (!event.target.classList.contains("not-common-btn")) {
    event.path.find((item) => {
      if (item instanceof Element) {
        if (item.classList.contains("double-view-btn")) {
          if (isShift) {
            textAreaInput(item.firstChild.textContent);
          } else {
            textAreaInput(item.lastChild.textContent);
          }
          return true;
        } if (item.classList.contains("keyboard-btn")) {
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
  if (event.target.classList.contains("alt")) {
    isAlt = false;
  }
  if (!event.target.classList.contains("keyboard-btn")) return;
  clickAction(event.target, "up");
});

let changeLang = (side) => {
  if (isAlt && isShift) {
    if (currentLang === "en") {
      currentLang = "ru";
      keysLang = Object.entries(keys[currentLang]);
    } else {
      currentLang = "en";
      keysLang = Object.entries(keys[currentLang]);
    }

    listButtons.find(item => {
      if (+item.dataset.keyCode === 18) {
        clickAction(item, "down");
        return true;
      }
    });

    if (side === "right") {
      listButtons.reverse();
      listButtons.find(item => {
        if (+item.dataset.keyCode === 16) {
          clickAction(item, "down");
          return true;
        }
      });
      listButtons.reverse();
      return;
    }

    listButtons.find(item => {
      if (+item.dataset.keyCode === 16) {
        clickAction(item, "down");
        return true;
      }
    });
  }

  localStorage.setItem("lang", currentLang);
};
