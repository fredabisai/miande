import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwrapperComponent } from './userwrapper.component';

describe('UserwrapperComponent', () => {
  let component: UserwrapperComponent;
  let fixture: ComponentFixture<UserwrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserwrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
