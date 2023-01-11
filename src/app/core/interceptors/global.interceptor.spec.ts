import { HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { GlobalInterceptor } from './global.interceptor';


describe('GlobalInterceptor', () => {

  let interceptor: GlobalInterceptor;

  beforeEach(() => {

    interceptor = new GlobalInterceptor();

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: GlobalInterceptor,
          multi: true
        },
      ]
    });
  });

  it('Deve existir os headers Accept e Content-Type.', (() => {
    let modifiedRequest: any;
    const fakeRequest = new HttpRequest('GET', 'fakeUrl');
    const fakeNext = {
      handle: jasmine.createSpy('handleSpy').and.callFake(request => {
        modifiedRequest = request;
      })
    }
    interceptor.intercept(fakeRequest, fakeNext);

    expect(fakeNext.handle).toHaveBeenCalled();
    expect(modifiedRequest.headers.has('Accept')).toEqual(true);
    expect(modifiedRequest.headers.get('Accept')).toEqual('application/json');
    expect(modifiedRequest.headers.has('Content-Type')).toEqual(true);
    expect(modifiedRequest.headers.get('Content-Type')).toEqual('application/json');
  }));
});

