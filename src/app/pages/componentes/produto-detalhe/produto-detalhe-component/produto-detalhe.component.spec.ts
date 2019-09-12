import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoDetalheComponent } from './produto-detalhe.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ProdutoStoreService } from 'src/app/services/produto-store.service';

describe('ProdutoDetalheComponent', () => {
  let component: ProdutoDetalheComponent;
  let fixture: ComponentFixture<ProdutoDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        RouterModule.forRoot([])
      ],
      declarations: [ProdutoDetalheComponent],
      providers: [
        ProdutoStoreService,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
