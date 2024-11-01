/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

// variables
let sprite: game.LedSprite = null
let loopCounter = 0

// setup
basic.showIcon(IconNames.Happy)
basic.pause(500)
basic.clearScreen()


// when "A" is pressed, the pixels move in a squaire  
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

    loopCounter = 0
    // move up
    while (loopCounter >= 5) {
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter--
        basic.pause(500)
    }

    sprite.delete()
    basic.showIcon(IconNames.Happy)
})
