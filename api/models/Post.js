/**
 * Post
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
	name: {
		type: 'STRING',
		required: true,
		minLength: 1,
		maxLength: 80
	},
	message: {
		type: 'STRING',
		required: true,
		minLength: 1
	},
	link: {
		type: 'STRING',
		url: true
	},
	userId: {
		type: ''
	}
  }

};
