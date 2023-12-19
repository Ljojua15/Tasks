import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JeiraniComponent } from './jeirani.component';

describe('JeiraniComponent', () => {
  let component: JeiraniComponent;
  let fixture: ComponentFixture<JeiraniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JeiraniComponent]
    });
    fixture = TestBed.createComponent(JeiraniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
