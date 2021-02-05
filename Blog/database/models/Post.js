const mongoose = require('mongoose')


// users , Posts , Products

const PostSchema = new mongoose.Schema({
    
title: String,
description: String,
content: String
    
})

const Post = mongoose.model('Post',PostSchema)

module.exports = Post