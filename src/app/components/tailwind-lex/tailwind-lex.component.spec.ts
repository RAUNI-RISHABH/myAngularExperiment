import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TailwindLexComponent } from './tailwind-lex.component';

describe('TailwindLexComponent', () => {
  let component: TailwindLexComponent;
  let fixture: ComponentFixture<TailwindLexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailwindLexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TailwindLexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
