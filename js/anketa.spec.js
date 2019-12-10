describe('anketa.js -> checkUserNames -> should return name', function () {
  it('should return str', function () {
    expect(checkUserNames('Иванов', 'Ваша фамилия?')).toBe('Иванов');
    expect(checkUserNames('Иван', 'Ваше имя?')).toBe('Иван');
    expect(checkUserNames('Иванович', 'Ваше отчество?')).toBe('Иванович');
  });
});

describe('anketa.js -> getFullUserAge -> should return age', function () {
  it('should return age', function () {
    expect(checkUserNames(10, 'Сколько Вам полных лет?')).toBe(10);
  });
});

describe('anketa.js -> getUserssex -> should return sex', function () {
  it('should return sex', function () {
    expect(getUserssex(true)).toBe('мужской');
  });
});

describe('anketa.js -> getAnswerAboutPension -> return \'Да!\' or \'Нет!\'', function () {
  it('should return str', function () {
    expect(getAnswerAboutPension(60, 'мужской')).toBe('Нет!');
    expect(getAnswerAboutPension(59, 'женский')).toBe('Да!');
  });
});





