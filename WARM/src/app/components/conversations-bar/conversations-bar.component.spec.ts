import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationsBarComponent } from './conversations-bar.component';

describe('ConversationsBarComponent', () => {
  let component: ConversationsBarComponent;
  let fixture: ComponentFixture<ConversationsBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationsBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
