import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { CounterPage } from './pages/counter/counter-page';
import { HeroPage } from './pages/hero/hero-page';
import { Dragonball } from './pages/dragonball/dragonball';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage,
  },
  {
    path: 'hero',
    component: HeroPage,
  },
  {
    path: 'dragonball',
    component: Dragonball,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
