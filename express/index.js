const fs = require('fs')
const game = require('./game')
const express = require('express')

var playWinCount = 0
var lastPlayerAction = null
var sameCount = 0
const app = express()

app.get('/favicon.ico', function(req,res) {
    res.status(200)
    return
})

app.get('game',
    function(req,res,next) {
        if(playWinCount >= 3 || sameCount == 9) {
            res.status(500)
            res.send('我不会再玩了')
            return
        }
        next()

        if(res.playerWon) {
            playWinCount++
        }
    },
    function (req,res,next) {
        const query = req.query
        const playerAction = query.action;
        if(!playerAction) {
          res.status(400)
          res.send()
          return
        }
    }
)