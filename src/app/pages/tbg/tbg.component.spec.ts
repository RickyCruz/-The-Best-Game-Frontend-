import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TbgComponent } from './tbg.component';

describe('TbgComponent', () => {
  let component: TbgComponent;
  let fixture: ComponentFixture<TbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
