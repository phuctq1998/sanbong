import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  modalRef!: BsModalRef;
  modalRef2!: BsModalRef;

  constructor(private modalService: BsModalService, private router: Router) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  confirm(template: TemplateRef<any>): void {
    this.modalRef2 = this.modalService.show(template);
    this.modalRef2.hide();
  }
 
  decline(): void {
    this.modalRef.hide();
  }

  yesPay(): void{
    this.modalRef.hide();
    window.alert("Đặt sân thành công!");
    this.router.navigateByUrl('/timeline');
  }
  ngOnInit(): void {
  }

}
