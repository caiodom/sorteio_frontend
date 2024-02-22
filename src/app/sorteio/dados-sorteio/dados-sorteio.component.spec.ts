import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosSorteioComponent } from './dados-sorteio.component';

describe('DadosSorteioComponent', () => {
  let component: DadosSorteioComponent;
  let fixture: ComponentFixture<DadosSorteioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosSorteioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DadosSorteioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
