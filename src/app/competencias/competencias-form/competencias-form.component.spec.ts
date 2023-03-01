import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciasFormComponent } from './competencias-form.component';

describe('CompetenciasFormComponent', () => {
  let component: CompetenciasFormComponent;
  let fixture: ComponentFixture<CompetenciasFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetenciasFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
