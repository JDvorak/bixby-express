/* global describe, it, expect */

var pkg = require('../..');

describe('bixby-express/boot/httpserver', function() {

  it('should export factory', function() {
    expect(pkg('boot/httpserver')).to.be.a('function');
  });
  
  it('should start a http server', function(done) {
    var settings = {get:function(){ return {port:0}}};
    var self = function(){};
    self.boot = pkg('boot/httpserver')(null, settings, console);
    self.boot(function(err){
      expect(err).to.not.exist;
      expect(self.httpServer).to.exist;
      done();
    })
  });

  it('should start a dynamic https server', function(done) {
    var settings = {get:function(){ return {port:0,secure:'dynamic'}}};
    var keypair = function(opt,cb){
      cb(undefined,require(__dirname+'/../fixtures/keys.json'));
    };
    var self = function(){};
    self.boot = pkg('boot/httpserver')(keypair, settings, {info:console.log,debug:function(){}});
    self.boot(function(err){
      expect(err).to.not.exist;
      expect(self.httpsServer).to.exist;
      done();
    })
  });
  
  
  
});
