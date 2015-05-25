describe('Disposable property', function() {

  var obj;

  beforeEach(function() {
    obj = {};
    disproperty(obj, 'sticker', 'JS');
  });

  it('is defined', function() {
    expect(obj.hasOwnProperty('sticker')).toBe(true);
  });

  it('has assigned value', function() {
    expect(obj.sticker).toBe('JS');
  });

  it('is disposed after first read', function() {
    obj.sticker;
    expect(obj.hasOwnProperty('sticker')).toBe(false);
  });

  describe('when changed', function() {

    beforeEach(function() {
      obj.sticker = 'ES6';
    });

    it('has new assigned value', function() {
      expect(obj.sticker).toBe('ES6');
    });

    it('is disposed after first read', function() {
      obj.sticker;
      expect(obj.hasOwnProperty('sticker')).toBe(false);
    });

  });

});
