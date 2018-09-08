/**
 * Module to handle all server routing
 * Author: Eyal Mendel
 * E-mail: eyalmendel@gmail.com
 */

var handlers = {};
const welcomeMessage = {
    'message' : 'Hello and welcome to my 1st HW assignment on Node.JS Master Class course!',
    'author' : 'Eyal Mendel',
    'e-mail' : 'eyalmendel@gmail.com'
};

const notFoundMessage = {
    'message' : 'Sorry. This route does not exist',
    'author' : 'Eyal Mendel',
    'e-mail' : 'eyalmendel@gmail.com'
}

handlers.test = function(callback) {
    callback(200);
};

handlers.hello = function(callback) {
    callback(200, welcomeMessage);
}

handlers.notFound = function(callback) {
    callback(404, notFoundMessage);
}

exports.routs = {
    'test' : handlers.test,
    'hello' : handlers.hello,
    'notFound' : handlers.notFound
};
