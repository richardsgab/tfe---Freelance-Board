import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FileModel } from '../models/file';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private _fileList : FileModel[] = [];

  constructor(private _http: HttpClient) { }

  addFile(file : FileModel) : any {
    return this._http.post<File[]>('http://localhost:3000/file', file);
  }

  getAll() : FileModel[]{
    return this._fileList;
  }

  getFiles(p_id: number) {
    return this._http.get<FileModel[]>('http://localhost:3000/file?projectId=' + p_id);
  }

  delFile(id: number){
    return this._http.delete<FileModel[]>('http://localhost:3000/file/' + id);
  }
}
