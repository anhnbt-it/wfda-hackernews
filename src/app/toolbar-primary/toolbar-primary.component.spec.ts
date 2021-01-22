import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarPrimaryComponent } from './toolbar-primary.component';

describe('ToolbarPrimaryComponent', () => {
  let component: ToolbarPrimaryComponent;
  let fixture: ComponentFixture<ToolbarPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolbarPrimaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
