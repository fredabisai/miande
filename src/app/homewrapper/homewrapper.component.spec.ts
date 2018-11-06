import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomewrapperComponent } from './homewrapper.component';

describe('HomewrapperComponent', () => {
  let component: HomewrapperComponent;
  let fixture: ComponentFixture<HomewrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomewrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomewrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
