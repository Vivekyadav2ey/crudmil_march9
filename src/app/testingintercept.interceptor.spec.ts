import { TestBed } from '@angular/core/testing';

import { TestinginterceptInterceptor } from './testingintercept.interceptor';

describe('TestinginterceptInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TestinginterceptInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TestinginterceptInterceptor = TestBed.inject(TestinginterceptInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
