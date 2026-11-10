import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogetherCounter } from './together-counter';

describe('TogetherCounter', () => {
  let component: TogetherCounter;
  let fixture: ComponentFixture<TogetherCounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TogetherCounter],
    }).compileComponents();

    fixture = TestBed.createComponent(TogetherCounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
