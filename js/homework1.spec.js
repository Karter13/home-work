describe('homework1.js -> isPolindrom1 -> should return true or false', function () {
  it('Base test', function () {
    expect(isPolindrom1('445544')).toBe(true);
    expect(isPolindrom1('45544')).toBe(false);
  });
});

describe('homework1.js -> isPolindrom2 -> should return true or false', function () {
  it('Base test', function () {
    expect(isPolindrom2('dffd')).toBeTruthy();
    expect(isPolindrom2('fhjjjjj')).toBeFalsy();
  });
});

describe('homework1.js -> isPolindrom3 -> should return \'yes\' or \'no\'  ', function () {
  it('Base test', function () {
    expect(isPolindrom3('5453545')).toBe('yes');
    expect(isPolindrom3('4w5fg44')).toBe('no');
  });
});

describe('homework1.js -> getNumWord -> should return right word', function () {
  it('Basic tasts', function () {
    expect(getNumWord('1', 'яблоко', 'яблока', 'яблок')).toBe('яблоко');
    expect(getNumWord('123', 'яблоко', 'яблока', 'яблок')).toBe('яблока');
    expect(getNumWord('113', 'яблоко', 'яблока', 'яблок')).toBe('яблок');
  });
});

describe('test.js -> makeTest; -> test prompt', function () {

  it('should return string', function () {
    spyOn(window, 'prompt').and.callFake(function () {
      let result;
      let num = 1;
      if (num) {
        result = 'bb';
      }
      return result;
    });
    let result = makeTest();
    expect(result).toBe(false);
  });
});