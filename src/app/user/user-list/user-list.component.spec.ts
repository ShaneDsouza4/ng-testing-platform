import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { UserService } from 'src/app/users/user.service';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>; // Fixture: gives you access to a component instance, its template, and the ability to trigger change detection.
  let userService: UserService;
  let userServiceSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserListComponent], //Services get injected, for components declaration is used.
      providers: [UserService] //Want to isolate for Service. (Separate from Component)
    }).compileComponents();

    fixture = TestBed.createComponent(UserListComponent); //Wraper, with componentInstance in it. 
    component = fixture.componentInstance;
    //fixture.detectChanges(); //Manually trigger to update data binding

    // Service Testing
    userService = TestBed.inject(UserService);

    //SpyOn allows to spy on the actions performed related to the userService
    userServiceSpy = spyOn(userService, 'getUser').and.returnValue(of([
      { id: 1, name: "Shane" }, //Mock Data returned
      { id: 2, name: "Seth" }
    ]))

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Testing component if it gets data
  it('should retreive users from the UserService on init', () => {
    fixture.detectChanges();
    expect(userServiceSpy).toHaveBeenCalled();
  })

  //If button is clicked
  it('should retieve users from the userService when the refresh button is clicked', () => {
    fixture.detectChanges();

    userServiceSpy.calls.reset(); //Reset, as detectChanges lifecycle was called, and is not empty. Our goal is to check for refresh.

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);

    expect(userServiceSpy).toHaveBeenCalled();
  })
});
