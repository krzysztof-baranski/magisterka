import { TestBed, inject } from '@angular/core/testing';

import { WebsocketWrapperService } from './web-socket-wrapper.service';

describe('WebsocketWrapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebsocketWrapperService]
    });
  });

  it('should be created', inject([WebsocketWrapperService], (service: WebsocketWrapperService) => {
    expect(service).toBeTruthy();
  }));
});
