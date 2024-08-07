import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentDComponent } from './parent-d.component';

describe('ParentDComponent', () => {
  let component: ParentDComponent;
  let fixture: ComponentFixture<ParentDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentDComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
