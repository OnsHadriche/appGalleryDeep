import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageFocusBoxComponent } from './image-focus-box.component';

describe('ImageFocusBoxComponent', () => {
  let component: ImageFocusBoxComponent;
  let fixture: ComponentFixture<ImageFocusBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageFocusBoxComponent]
    });
    fixture = TestBed.createComponent(ImageFocusBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
