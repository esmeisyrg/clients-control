import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsDetailComponent } from './clients-detail.component';

describe('ClientsDetailComponent', () => {
  let component: ClientsDetailComponent;
  let fixture: ComponentFixture<ClientsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClientsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
