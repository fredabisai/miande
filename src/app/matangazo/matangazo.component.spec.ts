import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatangazoComponent } from './matangazo.component';

describe('MatangazoComponent', () => {
  let component: MatangazoComponent;
  let fixture: ComponentFixture<MatangazoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatangazoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatangazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
