describe('Rack', function() {
  describe('create new rack space', function() {
    it('should return new rack object', function() {
      var rack = new Rack();
    });

    it('add new osc', function() {
        var rack = new Rack();
        rack.addOsc('test');
    }) 
  });
});