const { request } = require('express')
const express = require('express')
const router = express.Router()
const Articles = require('./../models/articles')

//GET ALL ARTICLES
router.get('/', (req, res) => {
    Articles.find().sort({createdOnDate: 'desc'})
        .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error : ${err}`))
})

//ADD NEW ARTICLE
router.post('/add', (req, res) => {
    const newArticle = Articles({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    })
    newArticle.save()
        .then( () => res.json("New article posted successfully !"))
        .catch(err => res.status(400).json(`Error : ${err}`))
})

//FIND ARTICLE BY ID
router.get('/:id', (req, res) => {
    Articles.findById(req.params.id)
        .then(article => res.json(article))
        .catch(err => res.status(400).json(`Error : ${err}`))
})

//UPDATE BY ID
router.put('/update/:id', (req, res) => {
    Articles.findById(req.params.id)
        .then(article => {
            article.title = req.body.title,
            article.description = req.body.description,
            article.author = req.body.author

            article.save()
            .then( () => res.json("Article updated successfully !"))
            .catch(err => res.status(400).json(`Error : ${err}`))
        })
        .catch(err => res.status(400).json(`Error : ${err}`))
})

//DELETE BY ID
router.delete('/:id', (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
        .then( () => res.json("Article deleted successfully !"))
        .catch(err => res.status(400).json(`Error : ${err}`))
})

module.exports = router