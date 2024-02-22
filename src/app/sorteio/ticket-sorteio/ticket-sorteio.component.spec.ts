import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketSorteioComponent } from './ticket-sorteio.component';

describe('TicketSorteioComponent', () => {
  let component: TicketSorteioComponent;
  let fixture: ComponentFixture<TicketSorteioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketSorteioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketSorteioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
