import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipanteSorteioComponent } from './participante-sorteio.component';

describe('ParticipanteSorteioComponent', () => {
  let component: ParticipanteSorteioComponent;
  let fixture: ComponentFixture<ParticipanteSorteioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipanteSorteioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipanteSorteioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
