import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionalbankerHomeComponent } from './transactionalbanker-home.component';

describe('TransactionalbankerHomeComponent', () => {
  let component: TransactionalbankerHomeComponent;
  let fixture: ComponentFixture<TransactionalbankerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionalbankerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionalbankerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
