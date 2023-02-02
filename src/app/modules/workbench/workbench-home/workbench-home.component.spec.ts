import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkbenchHomeComponent } from './workbench-home.component';

describe('WorkbenchHomeComponent', () => {
  let component: WorkbenchHomeComponent;
  let fixture: ComponentFixture<WorkbenchHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkbenchHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkbenchHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
