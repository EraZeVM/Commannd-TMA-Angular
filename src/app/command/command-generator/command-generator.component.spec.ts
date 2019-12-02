import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandGeneratorComponent } from './command-generator.component';

describe('CommandGeneratorComponent', () => {
  let component: CommandGeneratorComponent;
  let fixture: ComponentFixture<CommandGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
