import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmovieslistComponent } from './showmovieslist.component';

describe('ShowmovieslistComponent', () => {
  let component: ShowmovieslistComponent;
  let fixture: ComponentFixture<ShowmovieslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowmovieslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmovieslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
