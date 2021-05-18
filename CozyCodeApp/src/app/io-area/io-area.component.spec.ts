import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IoAreaComponent } from './io-area.component';

describe('IoAreaComponent', () => {
  let component: IoAreaComponent;
  let fixture: ComponentFixture<IoAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IoAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IoAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
