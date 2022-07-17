input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # .
        # . . # .
        . . # # .
        . . # . .
        . . # . .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 1, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
