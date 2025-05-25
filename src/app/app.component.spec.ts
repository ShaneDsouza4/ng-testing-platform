import { AppComponent } from "./app.component";

describe('AppComponent', () => { //test Suite
  it('should have a defined title', () => {
    const component = new AppComponent(); //Assertion
    expect(component.title).toBeDefined(); //title defined in TS file
  })
})