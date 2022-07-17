# Microbit.Tutorial

## Toggle on Input

Place the ||Basic:show icon|| block in the ||Input: on button A pressed|| block and choose a symbol to agree (smile emoji, check mark, etc.)
Place the ||Music:play sound + until done|| block under ||basic:show icon|| block for button A. Click on the music down and select a sound to show agree. I set it starting at 1 Hz and ended at 5000 Hz. You can also play with the effects and add a vibrato. Adjust duration  to 1000 ms.

```blocks
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Yes)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
´´´

## Toggle on Input

Place the ||Basic:show icon|| block in the ||Input: on button B pressed|| block and choose a symbol to disagree (frown emoji, X, etc.)
Place the ||Music:play sound + until done|| block under ||basic:show icon|| block for button B. Click on the music down and select a sound to show disagree. I set it starting at 5000 Hz and ended at 1 Hz. Adjust duration  to 1000 ms.

```blocks
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.No)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 5000, 1, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
})
´´´

## Toggle on Input


Place the ||Basic:show leds|| block in the ||Input: on button A+B pressed|| block and draw a symbol to ask a question (question mark)
Place the ||Music:play sound + until done|| block under ||basic:show leds|| block for button A+B. Click on the music down and select a sound to show question. I set it to start and end at 2500 Hz. Adjust duration  to 1000 ms.

```blocks
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # # .
        # . . # .
        . . # . .
        . . # . .
        . . # . .
        `)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Square,
    2500,
    2500,
    255,
    255,
    1000,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), SoundExpressionPlayMode.UntilDone)
})
´´´




