import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentariComponent } from './documentari.component';

describe('DocumentariComponent', () => {
  let component: DocumentariComponent;
  let fixture: ComponentFixture<DocumentariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
