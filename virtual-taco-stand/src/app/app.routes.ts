import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.componet';
import { Component } from '@angular/core';

export const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'home',
  component: HomeComponent
}
];
