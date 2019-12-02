import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommandHandleComponent } from './command-handle.component';

describe('CommandHandleComponent', () => {
  let component: CommandHandleComponent;
  let fixture: ComponentFixture<CommandHandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandHandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandHandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
