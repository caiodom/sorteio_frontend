import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNoUserComponent } from './menu-no-user.component';

describe('MenuNoUserComponent', () => {
  let component: MenuNoUserComponent;
  let fixture: ComponentFixture<MenuNoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuNoUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuNoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
