import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { CounterPage } from './pages/counter/counter-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage,
  }
];
