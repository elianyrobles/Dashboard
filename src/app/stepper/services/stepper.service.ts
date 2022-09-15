import { Injectable } from '@angular/core';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';
import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  setDoc,
  DocumentReference,
} from 'firebase/firestore';
import { Observable } from 'rxjs';
import { SizeOption} from '../models';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  private sizesCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.sizesCollection = collection(this.firestore, 'sizes')
  }

  getAllSizes(): Observable<SizeOption[]> {
    return collectionData(this.sizesCollection) as Observable<SizeOption[]>;
  }

  getById(id: string): Observable<SizeOption> {
    const sizeDocumentReference = doc(this.firestore, `sizes/${id}`);
    return docData(sizeDocumentReference, { idField: 'id' }) as Observable<SizeOption>;
  }

  createSize(size: SizeOption, id: string) {
    // Custom ID
    return setDoc(doc(this.sizesCollection, id), size);
    // Random ID
    //return addDoc(this.sizesCollection, size);
  }

  updateSize(size: SizeOption, id: string) {
    const sizeDocumentReference = doc(this.firestore, `sizes/${id}`);
    return updateDoc(sizeDocumentReference, { ...size });
  }

  deleteSize(id: string) {
    const sizeDocumentReference = doc(this.firestore, `sizes/${id}`);
    return deleteDoc(sizeDocumentReference);
  }

}
