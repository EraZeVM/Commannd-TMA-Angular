import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerScreenComponent } from './logger-screen.component';

describe('LoggerScreenComponent', () => {
  let component: LoggerScreenComponent;
  let fixture: ComponentFixture<LoggerScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggerScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
