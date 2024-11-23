import { Observable } from '@nativescript/core';

export class Theme extends Observable {
  private _isDark: boolean = false;

  get isDark(): boolean {
    return this._isDark;
  }

  toggleTheme() {
    this._isDark = !this._isDark;
    this.notifyPropertyChange('isDark', this._isDark);
  }
}