import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricoSorteioComponent } from './historico-sorteio.component';

describe('HistoricoSorteioComponent', () => {
  let component: HistoricoSorteioComponent;
  let fixture: ComponentFixture<HistoricoSorteioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricoSorteioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricoSorteioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
