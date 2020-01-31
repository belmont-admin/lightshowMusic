input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        for (let index = 0; index <= tune_beats.length - 1; index++) {
            radio.sendString("" + (colours[index]))
            music.playTone(notes_freq[notes_name.indexOf(tune_notes[index])], tune_beats[index])
        }
        basic.pause(500)
    }
})
let notes_freq: number[] = []
let notes_name: string[] = []
let tune_beats: number[] = []
let tune_notes: string[] = []
let colours: string[] = []
basic.showLeds(`
    . . # # .
    . . # . .
    . . # . .
    . # # . .
    . # # . .
    `)
radio.setGroup(1)
colours = ["red", "green", "yellow", "red", "yellow", "green", "red", "green", "yellow", "green", "red", "green", "yellow", "green", "red", "yellow"]
tune_notes = ["C", "G", "F", "E", "D", "c", "G", "F", "E", "D", "c", "G", "F", "E", "F", "D"]
tune_beats = [1000, 1000, 250, 250, 250, 1000, 1000, 250, 250, 250, 1000, 1000, 250, 250, 250, 1000]
notes_name = ["1", "2", "3", "4", "5", "6", "7", "C", "D", "E", "F", "G", "A", "B", "c", "d", "e", "f", "g", "a"]
notes_freq = [131, 147, 165, 175, 196, 220, 247, 262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880]
