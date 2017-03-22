exports = module.exports = function() {
  
  return function(type) {
    type = type || 'application/x-www-form-urlencoded';
    
    switch (type) {
    case 'application/x-www-form-urlencoded':
      return require('body-parser').urlencoded({ extended: false });
    default:
      throw new Error('Unsupported content type: ' + type);
    }
  };
};

exports['@implements'] = 'http://i.bixbyjs.org/http/middleware/parse';
