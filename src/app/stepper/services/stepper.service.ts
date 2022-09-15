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
import { Size } from '../models';

@Injectable({
  providedIn: 'root'
})
export class StepperService {
  private sizesCollection: CollectionReference<DocumentData>;

  constructor(private firestore: Firestore) {
    this.sizesCollection = collection(this.firestore, 'sizes')
  }

  getAllSizes(): Observable<Size[]> {
    return collectionData(this.sizesCollection) as Observable<Size[]>;
  }

  getById(id: string): Observable<Size> {
    const sizeDocumentReference = doc(this.firestore, `sizes/${id}`);
    return docData(sizeDocumentReference, { idField: 'id' }) as Observable<Size>;
  }

  createSize(size: Size, id: string) {
    // Custom ID
    return setDoc(doc(this.sizesCollection, id), size);
    // Random ID
    //return addDoc(this.sizesCollection, size);
  }

  updateSize(size: Size, id: string) {
    const sizeDocumentReference = doc(this.firestore, `sizes/${id}`);
    return updateDoc(sizeDocumentReference, { ...size });
  }

  deleteSize(id: string) {
    const sizeDocumentReference = doc(this.firestore, `sizes/${id}`);
    return deleteDoc(sizeDocumentReference);
  }

}
