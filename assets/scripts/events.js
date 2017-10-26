'use strict'
const handlebars = require('./templates/books-listing.handlebars')

const getBook = function () {
  apiCall.apiGet()
    .then(showHandlebars)
    .catch(bookErrors)
}

const showHandlebars = function (data) {
  const showBookHtml = handlebars({books: data.books})
  $('#info').empty()
  $('#info').append(showBookHtml)
}

const bookErrors = function () {
  $('#info').empty()
  $('#info').append("<p>Dunno what'cha did, but ya did it wrong...</p>")
}

const addHandlers = function () {
  $('#best-button').on('click', getBook)
}

module.exports = {
  addHandlers
}
