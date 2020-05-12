import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlangeComponent } from './slange.component';

describe('SlangeComponent', () => {
  let component: SlangeComponent;
  let fixture: ComponentFixture<SlangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
