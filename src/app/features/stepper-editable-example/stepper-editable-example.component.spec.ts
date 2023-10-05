import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperEditableExample} from './stepper-editable-example.component';

describe('StepperEditableExampleComponent', () => {
  let component: StepperEditableExample;
  let fixture: ComponentFixture<StepperEditableExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperEditableExample ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperEditableExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
