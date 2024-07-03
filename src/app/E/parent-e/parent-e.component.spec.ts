import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentEComponent } from './parent-e.component';

describe('ParentEComponent', () => {
  let component: ParentEComponent;
  let fixture: ComponentFixture<ParentEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParentEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
