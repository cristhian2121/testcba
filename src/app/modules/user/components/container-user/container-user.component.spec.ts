import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerUserComponent } from './container-user.component';

xdescribe('ContainerUserComponent', () => {
  let component: ContainerUserComponent;
  let fixture: ComponentFixture<ContainerUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
