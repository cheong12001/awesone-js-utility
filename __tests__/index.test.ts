import { getHelloWorld } from '../lib';

test('My Greeter', () => {
    expect(getHelloWorld()).toBe('hello world');
});
