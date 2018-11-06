import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MshirikiComponent } from './mshiriki.component';

describe('MshirikiComponent', () => {
  let component: MshirikiComponent;
  let fixture: ComponentFixture<MshirikiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MshirikiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MshirikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
