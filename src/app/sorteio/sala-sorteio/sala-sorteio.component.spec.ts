import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaSorteioComponent } from './sala-sorteio.component';

describe('SalaSorteioComponent', () => {
  let component: SalaSorteioComponent;
  let fixture: ComponentFixture<SalaSorteioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaSorteioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaSorteioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
