/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

module.exports = {

  attributes: {
	userName: {
		type: 'STRING',
		required: true,
		unique: true
	},
	password: {
		type: 'STRING',
		required: true,
		minLength: 6
	},
	name: {
		type: 'STRING',
		required: true,
		minLength: 1
	}
  },

  beforeCreate: function(attrs, next) {
  	var bcrypt = require('bcrypt');

  	bcrypt.genSalt(10, function(err, salt) {
  		if (err) return next(err);

  		bcrypt.hash(attrs.password, salt, function(err, hash) {
  			if (err) return next(err);

  			attrs.password = hash;
  			next();
  		});
  	});
  }

};
