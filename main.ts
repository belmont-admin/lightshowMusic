input.onButtonPressed(Button.B, function () {
    radio.sendNumber(250)
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= tune_beats.length - 1; index++) {
        radio.sendString("" + (colours[index]))
        music.playTone(notes_freq[notes_name.indexOf(tune_notes[index])], tune_beats[index])
    }
})
let notes_name: string[] = []
let notes_freq: number[] = []
let tune_beats: number[] = []
let colours: string[] = []
let tune_notes: string[] = []
radio.setGroup(1)
tune_notes = ["C", "G", "F", "E", "D", "c", "G", "F", "E", "D", "c", "G", "F", "E", "F", "D"]
colours = ["red", "green", "yellow", "red", "yellow", "green", "red", "green", "yellow", "green", "red", "green", "yellow", "green", "red", "yellow"]
tune_beats = [1000, 1000, 250, 250, 250, 1000, 1000, 250, 250, 250, 1000, 1000, 250, 250, 250, 1000]
notes_freq = [262, 294, 330, 349, 392, 440, 494, 523]
notes_name = ["C", "D", "E", "F", "G", "A", "B", "c"]
