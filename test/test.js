describe('Rack', function() {
  describe('create new rack space', function() {
    before(function() {
      rack = new Rack();
    });

    it('should return new rack object', function() {
      rack.should.be.an('object')
    });

    it('add new osc', function() {
      rack.addOsc('test');
      assert.lengthOf(rack.oscillators, 1);
    });

    it('get particular osc', function() {
      rack.addOsc('test');
      rack.addOsc('test1');
      var osc = rack.getOsc('test');
      osc.should.be.an('object');
      assert.equal(osc.name, 'test', 'osc name checks');
    });

    it('changes osc freq', function() {
      rack.addOsc('test');
      rack.setOscFreq('test', 600);
      var osc = rack.getOsc('test');
      assert.equal(osc.oscillator.frequency.value, 600, 'check freq')
    });

    it('start/stop sound', function() {
      rack.addOsc('test1');
      rack.startSound();
      rack.stopSound();
    });

  });
});