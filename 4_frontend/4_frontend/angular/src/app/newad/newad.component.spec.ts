import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewadComponent } from './newad.component';

describe('NewadComponent', () => {
  let component: NewadComponent;
  let fixture: ComponentFixture<NewadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
