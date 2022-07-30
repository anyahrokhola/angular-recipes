import { AssetsUrlOrEmptyPipe } from './assets-url-or-empty.pipe';

describe('AssetsUrlOrEmptyPipe', () => {
  it('create an instance', () => {
    const pipe = new AssetsUrlOrEmptyPipe();
    expect(pipe).toBeTruthy();
  });
});
