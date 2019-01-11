import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShildComponent } from './shild.component';

describe('ShildComponent', () => {
  let component: ShildComponent;
  let fixture: ComponentFixture<ShildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
