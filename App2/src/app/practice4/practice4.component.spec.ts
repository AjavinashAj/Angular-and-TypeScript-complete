import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice4Component } from './practice4.component';

describe('Practice4Component', () => {
  let component: Practice4Component;
  let fixture: ComponentFixture<Practice4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Practice4Component]
    });
    fixture = TestBed.createComponent(Practice4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
