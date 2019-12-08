describe('homework1.js -> isPolindrom1 -> should return true or false', function () {
  it('Base test', function () {
    expect(isPolindrom1('445544')).toBe(true);
    expect(isPolindrom1('45544')).toBe(false);
  });
});

describe('homework1.js -> isPolindrom2 -> should return true or false', function () {
  it('Base test', function () {
    expect(isPolindrom2('dffd')).toBe(true);
    expect(isPolindrom2('fhjjjjj')).toBe(false);
  });
});

describe('homework1.js -> isPolindrom3 -> should return \'yes\' or \'no\'  ', function () {
  it('Base test', function () {
    expect(isPolindrom3('5453545')).toBe('yes');
    expect(isPolindrom3('4w5fg44')).toBe('no');
  });
});


