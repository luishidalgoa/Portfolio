import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupElementsCardComponent } from './group-elements-card.component';

describe('GroupElementsCardComponent', () => {
  let component: GroupElementsCardComponent;
  let fixture: ComponentFixture<GroupElementsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupElementsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupElementsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
