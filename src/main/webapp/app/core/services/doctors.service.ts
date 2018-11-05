import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Doctor} from '../models/doctor';

@Injectable({
  providedIn: 'root',
})
export class DoctorsService {

  constructor() {
  }

  public getDocotrs(): Observable<Doctor[]> {
    const doctors = [
      new Doctor({
        id: 100,
        name: 'Анна Сергеевна Ляпика',
        position: 'Терапевт',
        description: 'he Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        image: 'https://myblue.bluecrossma.com/sites/g/files/csphws1086/files/inline-images/Doctor%20Image%20Desktop.png',
      }),
      new Doctor({
        id: 100,
        name: 'Анна Сергеевна Ляпика',
        position: 'Терапевт',
        image: 'https://myblue.bluecrossma.com/sites/g/files/csphws1086/files/inline-images/Doctor%20Image%20Desktop.png',
      }),
      new Doctor({
        id: 100,
        name: 'Анна Сергеевна Ляпика',
        position: 'Терапевт',
        description: 'he he Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        image: 'https://www.expatincroatia.com/wp-content/uploads/2013/09/how-to-find-a-doctor-in-croatia.jpg',
      }),
      new Doctor({
        id: 100,
        name: 'Анна Сергеевна Ляпика',
        position: 'Терапевт',
      }),
      new Doctor({
        id: 100,
        name: 'Анна Сергеевна Ляпика',
        position: 'Терапевт',
      }),
      new Doctor({
        id: 100,
        name: 'Анна Сергеевна Ляпика',
        position: 'Терапевт',
      }),
      new Doctor({
        id: 100,
        name: 'Анна Сергеевна Ляпика',
        position: 'Терапевт',
      }),
      new Doctor({
        id: 100,
        name: 'Анна Сергеевна Ляпика',
        position: 'Терапевт',
      }),
      new Doctor({
        id: 100,
        name: 'Анна Сергеевна Ляпика',
        position: 'Терапевт',
      }),
    ];
    return Observable.of(doctors);
  }
}
