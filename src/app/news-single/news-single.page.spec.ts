import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsSinglePage } from './news-single.page';

describe('NewsSinglePage', () => {
  let component: NewsSinglePage;
  let fixture: ComponentFixture<NewsSinglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSinglePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsSinglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
