import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkerComponent } from './talker.component';

describe('TalkerComponent', () => {
  let component: TalkerComponent;
  let fixture: ComponentFixture<TalkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalkerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
