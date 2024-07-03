import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentHComponent } from './parent-h.component';

describe('ParentHComponent', () => {
  let component: ParentHComponent;
  let fixture: ComponentFixture<ParentHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentHComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
