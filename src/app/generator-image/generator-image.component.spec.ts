import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorImageComponent } from './generator-image.component';

describe('GeneratorImageComponent', () => {
  let component: GeneratorImageComponent;
  let fixture: ComponentFixture<GeneratorImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratorImageComponent]
    });
    fixture = TestBed.createComponent(GeneratorImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
