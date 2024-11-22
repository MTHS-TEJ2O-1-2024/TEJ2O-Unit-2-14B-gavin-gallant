/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Gavin Gallant
 * Created on: nov 2024
 * This program moves led in a circle
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.pause(500)
basic.clearScreen()
basic.showIcon(IconNames.Happy)


// when "A" is pressed, the pixels move in a square  
input.onButtonPressed(Button.A, function () {
    // setup
    basic.clearScreen()
    loopCounter = 0
    sprite = game.createSprite(0, 0)
    sprite.set(LedSpriteProperty.X, loopCounter)
    // move right 
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter++
        basic.pause(500)
    }
    loopCounter = 0
    // move down 
    while (loopCounter <= 5) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter++
        basic.pause(500)
    }

    sprite.delete()
    sprite = game.createSprite(4, 4)
    loopCounter = 5
    // move left 
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        loopCounter--
        basic.pause(500)
    }

    sprite.delete()
    sprite = game.createSprite(0, 4)
    loopCounter = 5
    // move up
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter--
        basic.pause(500)
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
