/* global describe, it, expect */

describe('bixby-express', function() {
  
  describe('package.json', function() {
    var json = require('../package.json');
    
    it('should have assembly metadata', function() {
      expect(json.assembly.namespace).to.equal('http');
      
      expect(json.assembly.components).to.have.length(11);
      expect(json.assembly.components).to.include('middleware/authenticate');
      expect(json.assembly.components).to.include('middleware/ceremony');
      expect(json.assembly.components).to.include('middleware/cors');
      expect(json.assembly.components).to.include('middleware/csrfprotection');
      expect(json.assembly.components).to.include('middleware/errorlogging');
      expect(json.assembly.components).to.include('middleware/initialize');
      expect(json.assembly.components).to.include('middleware/logging');
      expect(json.assembly.components).to.include('middleware/parse');
      expect(json.assembly.components).to.include('middleware/parsecookies');
      expect(json.assembly.components).to.include('state/store');
      expect(json.assembly.components).to.include('app');
    });
  });
  
  it('should throw if required', function() {
    expect(function() {
      var pkg = require('..');
    }).to.throw(Error).with.property('code', 'MODULE_NOT_FOUND');
  });
  
});
