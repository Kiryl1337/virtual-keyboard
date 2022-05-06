const keys = {
    'englishKeys': {
        '` ~': 192,
        '1 !': 49,
        '2 @': 50,
        '3 #': 51,
        '4 $': 52,
        '5 %': 53,
        '6 ^': 54,
        '7 &': 55,
        '8 *': 56,
        '9 (': 57,
        '0 )': 48,
        '- _': 189,
        '= +': 187,
        'Backspace': 8,
        'Tab': 9,
        'q': 81,
        'w': 87,
        'e': 69,
        'r': 82,
        't': 84,
        'y': 89,
        'u': 85,
        'i': 73,
        'o': 79,
        'p': 80,
        '[ {': 219,
        '] }': 221,
        '\\ |': 220,
        'Del': 46,
        'Caps Lock': 20,
        'a': 65,
        's': 83,
        'd': 68,
        'f': 70,
        'g': 71,
        'h': 72,
        'j': 74,
        'k': 75,
        'l': 76,
        '; :': 186,
        '\' "': 222,
        'Enter': 13,
        'Shift': 16,
        'z': 90,
        'x': 88,
        'c': 67,
        'v': 86,
        'b': 66,
        'n': 78,
        'm': 77,
        ', <': 188,
        '. >': 190,
        '/ ?': 191,
        'Up arrow': 38,
        'Shift ': 16,
        'Ctrl': 17,
        'Win': 91,
        'Alt': 18,
        'Space': 32,
        'Alt ': 18,
        'Left arrow': 37,
        'Down arrow': 40,
        'Right arrow': 39,
        'Ctrl ': 17,
    }
}

let textarea = document.createElement('textarea')
document.body.append(textarea)

let keyboard = document.createElement('div')
keyboard.className = 'keyboard'
document.body.append(keyboard)

let keyboardWrapper = document.createElement('div')
keyboardWrapper.className = 'keyboard-wrapper'
keyboard.append(keyboardWrapper)

let keyboardKeys = document.createElement('div')
keyboardKeys.className = 'keyboard-keys'
keyboardWrapper.append(keyboardKeys)

function createRow(){
    let row = document.createElement('div')
    row.className = 'row'
    keyboardKeys.append(row)
    return row
}

englishKeys = Object.entries(keys['englishKeys'])
let row1 = createRow()
for (let i = 0; i < 14; i++) {
    let keyboardBtn = document.createElement('div')
    keyboardBtn.className = 'keyboard-btn'
    if(englishKeys[i][0] === 'Backspace'){
        keyboardBtn.classList.add('backspace')
    }
    row1.append(keyboardBtn)
    keyboardBtn.textContent = `${englishKeys[i][0]}`
}
let row2 = createRow()
for (let i = 14; i < 29; i++) {
    let keyboardBtn = document.createElement('div')
    keyboardBtn.className = 'keyboard-btn'
    if(englishKeys[i][0] === 'Tab'){
        keyboardBtn.classList.add('tab')
    }
    if(englishKeys[i][0] === 'Del'){
        keyboardBtn.classList.add('del')
    }
    row2.append(keyboardBtn)
    keyboardBtn.textContent = `${englishKeys[i][0]}`
}
let row3 = createRow()
for (let i = 29; i < 42; i++) {
    let keyboardBtn = document.createElement('div')
    keyboardBtn.className = 'keyboard-btn'
    if(englishKeys[i][0] === 'Caps Lock'){
        keyboardBtn.classList.add('capslock')
    }
    if(englishKeys[i][0] === 'Enter'){
        keyboardBtn.classList.add('enter')
    }
    row3.append(keyboardBtn)
    keyboardBtn.textContent = `${englishKeys[i][0]}`
}
let row4 = createRow()
for (let i = 42; i < 55; i++) {
    let keyboardBtn = document.createElement('div')
    keyboardBtn.className = 'keyboard-btn'
    if(englishKeys[i][0].trim() === 'Shift'){
        keyboardBtn.classList.add('shift')
    }
    if(englishKeys[i][0] === 'Up arrow'){
        keyboardBtn.classList.add('up-arrow')
    }
    row4.append(keyboardBtn)
    keyboardBtn.textContent = `${englishKeys[i][0]}`
}

let row5 = createRow()
for (let i = 55; i < 64; i++) {
    let keyboardBtn = document.createElement('div')
    keyboardBtn.className = 'keyboard-btn'
    switch(englishKeys[i][0].trim()) {
        case 'Ctrl': keyboardBtn.classList.add('ctrl')
        break
        case 'Win': keyboardBtn.classList.add('win')
        break
        case 'Alt': keyboardBtn.classList.add('alt')
        break
        case 'Space': keyboardBtn.classList.add('space')
        break
        case 'Left arrow': keyboardBtn.classList.add('left-arrow')
        break
        case 'Down arrow': keyboardBtn.classList.add('down-arrow')
        break
        case 'Right arrow': keyboardBtn.classList.add('right-arrow')
        break
    }
    row5.append(keyboardBtn)
    keyboardBtn.textContent = `${englishKeys[i][0]}`
}

