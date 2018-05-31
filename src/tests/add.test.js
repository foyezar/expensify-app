const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

// boolean & number - toBe
// array & object - toEqual

test('should add two numbers', () => {
  const result = add(4, 3);

  /* if (result !== 7) {
    throw new Error(`You added 4 and 3. The result was ${result}. Expected 7`);
  } */
  expect(result).toBe(7);
});

test('should generate greeting from name', () => {
  const result = generateGreeting('Foyez');
  expect(result).toBe('Hello Foyez!');
});

test('should generate greeting from no name', () => {
  const result = generateGreeting();
  expect(result).toBe('Hello Anonymous!');
});