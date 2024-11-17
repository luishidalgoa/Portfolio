import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipboardButtonComponentComponent } from './clipboard-button-component.component';

describe('ClipboardButtonComponentComponent', () => {
  let component: ClipboardButtonComponentComponent;
  let fixture: ComponentFixture<ClipboardButtonComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClipboardButtonComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClipboardButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
