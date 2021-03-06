/* global describe, it, expect */

var factory = require('../../app/platform/gateways');


describe('platform/gateways', function() {
  
  it('should export factory function', function() {
    expect(factory).to.be.a('function');
  });
  
  it('should be annotated', function() {
    expect(factory['@implements']).to.equal(undefined);
    expect(factory['@singleton']).to.equal(undefined);
  });
  
});
