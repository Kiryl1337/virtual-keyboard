const keys = {
    'englishKeys': {
        '`': 192,
        '1': 49,
        '2': 50,
        '3': 51,
        '4': 52,
        '5': 53,
        '6': 54,
        '7': 55,
        '8': 56,
        '9': 57,
        '0': 48,
        '-': 189,
        '=': 187,
        'backspace': 8,
        'tab': 9,
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
        'DEL': 46,
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
        'ENTER': 13,
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
        'Ctrl ': 17,
        'Left arrow': 37,
        'Down arrow': 40,
        'Right arrow': 39,
    }
}

let keyboard = document.createElement('div')
keyboard.className = 'keyboard'
document.body.append(keyboard)

let keyboardWrapper = document.createElement('div')
keyboardWrapper.className = 'keyboard-wrapper'
keyboard.append(keyboardWrapper)

let keyboardKeys = document.createElement('div')
keyboardKeys.className = 'keyboard-keys'
keyboardWrapper.append(keyboardKeys)

let row = document.createElement('div')
row.className = 'row'
keyboardKeys.append(row)

englishKeys = Object.entries(keys['englishKeys'])
for (let i = 0; i < 63; i++) {
    let keyboardBtn = document.createElement('div')
    keyboardBtn.className = 'keyboard-btn'
    row.append(keyboardBtn)
    keyboardBtn.textContent = `${englishKeys[i][0]}`
}



