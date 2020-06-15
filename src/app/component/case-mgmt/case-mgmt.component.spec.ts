import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseMgmtComponent } from './case-mgmt.component';

describe('CaseMgmtComponent', () => {
  let component: CaseMgmtComponent;
  let fixture: ComponentFixture<CaseMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
