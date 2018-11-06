import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanisaComponent } from './kanisa.component';

describe('KanisaComponent', () => {
  let component: KanisaComponent;
  let fixture: ComponentFixture<KanisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
