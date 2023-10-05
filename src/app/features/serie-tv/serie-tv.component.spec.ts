import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieTvComponent } from './serie-tv.component';

describe('SerieTvComponent', () => {
  let component: SerieTvComponent;
  let fixture: ComponentFixture<SerieTvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerieTvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerieTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
