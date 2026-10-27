import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CocheApiComponents } from './coche-api-components';

describe('CocheApiComponents', () => {
  let component: CocheApiComponents;
  let fixture: ComponentFixture<CocheApiComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CocheApiComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(CocheApiComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
