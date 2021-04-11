import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isShowLoader = new BehaviorSubject<boolean>(false);
  isShowLoaderObser = this.isShowLoader.asObservable();
  constructor() {}
  showLoader() {
    this.isShowLoader.next(true);
  }

  hideLoader() {
    this.isShowLoader.next(false);
  }
}
