'use strict';
const Confidence = require('confidence');
const store = new Confidence.Store(require('./config'));

exports.get = function(key, criteria){
  if (!key) key = '/';
  return store.get(key, criteria);
}

exports.meta = function(key, criteria){
  if (!key) key = '/';
  return store.meta(key, criteria);
}