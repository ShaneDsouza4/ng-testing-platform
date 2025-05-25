import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {

  let service: UserService;

  beforeEach(() => { //Before each unit test 
    TestBed.configureTestingModule({}); //Create testing enviroment
    service = TestBed.inject(UserService); //Injected UserService to be used like a constructor
  })

  it('should be created', () => {
    expect(service).toBeTruthy(); //Any Value, other then undefined, null, empty value
  })

  it('should get users', () => {
    service.getUser().subscribe(user => {
      expect(user.length).toBeGreaterThan(0); //At least One User
    })
  })

});
