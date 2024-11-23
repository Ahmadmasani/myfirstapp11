import { Observable, ImageSource, Camera, Image } from '@nativescript/core';
import * as imagepicker from '@nativescript/imagepicker';
import { theme } from './app';

export class MainViewModel extends Observable {
  private _selectedImage: string = '';
  private _identifiedPlant: string = '';
  private _isDark: boolean = false;

  constructor() {
    super();
    this._isDark = theme.isDark;
  }

  get selectedImage(): string {
    return this._selectedImage;
  }

  get identifiedPlant(): string {
    return this._identifiedPlant;
  }

  get isDark(): boolean {
    return this._isDark;
  }

  async onTakePhoto() {
    try {
      // Implement camera capture logic
      this._identifiedPlant = 'Processing image...';
      this.notifyPropertyChange('identifiedPlant', this._identifiedPlant);
      
      // Simulated identification result
      setTimeout(() => {
        this._identifiedPlant = 'Identified: Common Daisy (Bellis perennis)';
        this.notifyPropertyChange('identifiedPlant', this._identifiedPlant);
      }, 2000);
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }

  async onSelectImage() {
    try {
      const context = imagepicker.create({
        mode: 'single'
      });
      
      const selection = await context.present();
      if (selection.length > 0) {
        this._selectedImage = selection[0].path;
        this.notifyPropertyChange('selectedImage', this._selectedImage);
        
        // Simulated identification
        this._identifiedPlant = 'Processing image...';
        this.notifyPropertyChange('identifiedPlant', this._identifiedPlant);
        
        setTimeout(() => {
          this._identifiedPlant = 'Identified: Garden Rose (Rosa × centifolia)';
          this.notifyPropertyChange('identifiedPlant', this._identifiedPlant);
        }, 2000);
      }
    } catch (error) {
      console.error('Error selecting image:', error);
    }
  }

  toggleTheme() {
    theme.toggleTheme();
    this._isDark = theme.isDark;
    this.notifyPropertyChange('isDark', this._isDark);
  }

  onHistoryTap() {
    console.log('History tapped');
  }

  onFavoritesTap() {
    console.log('Favorites tapped');
  }

  onSettingsTap() {
    console.log('Settings tapped');
  }
}