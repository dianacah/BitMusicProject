/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UpdateInfoService } from './update-info.service';

describe('Service: UpdateInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateInfoService]
    });
  });

  it('should ...', inject([UpdateInfoService], (service: UpdateInfoService) => {
    expect(service).toBeTruthy();
  }));
});
