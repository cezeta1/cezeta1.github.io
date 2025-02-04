import { Component } from "@angular/core";
import { ExperienceCardComponent } from "./experience-card.component";
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDividerModule } from "ng-zorro-antd/divider";
import { NzIconModule } from "ng-zorro-antd/icon";
import { ContactFormComponent } from "./contact-form.component";
import { CommonModule } from "@angular/common";
import { NzButtonModule } from "ng-zorro-antd/button";

interface WorkExperience {
  title: string;
  company: string;
  url: string;
  startDate: string;
  endDate: string;
  country: string;
  items: string[];
}

@Component({
  selector: 'home',
  imports: [
    CommonModule,
    ExperienceCardComponent,
    NzTypographyModule,
    NzDividerModule,
    NzIconModule,
    NzButtonModule,
    ContactFormComponent
],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  protected experiences: WorkExperience[] = [
    {
      title: 'FULL STACK DEVELOPER',
      company: 'NexPay Pty Ltd',
      url: 'https://nexpay.com.au',
      startDate: 'Dec 2023',
      endDate: 'Present',
      country: 'Australia',
      items: [
        'Planning and implementing a modern version of an existing web app, keeping the business logic but improving the ability to test, maintain, enhance and deploy it. Managing the transition between old and new systems.',
        'Developing, fixing and improving legacy APIs for multiple projects, using .NET Core / C#.'
      ]
    },
    {
      title: 'FULL STACK DEVELOPER',
      company: 'JBKnowledge',
      url: 'https://jbknowledge.com/',
      startDate: 'Nov 2022',
      endDate: ' Dec 2023',
      country: 'Argentina',
      items: [
        'Multi-purpose project configuration and integration between libraries and setups. Angular15, Storybook, Tailwind, React Microfrontends within Angular, MSW mock requests, MSAL auth interceptors, PowerFX editor, among others.',
        'Building modular, generic and scalable Angular15 libraries and components to optimize development speed.',
        'Developing, fixing and improving APIs for multiple projects, using .NET Core / C#. Code-First database approaches using Entity Framework. Event-based database management using Azure Cosmos DB.',
        'Working using agile workflows (User Stories / Scrum). Hands-on involvement in all parts of a project, implementing Frontend, Backend and DB from the ground up, documenting development good practices.'
      ]
    },
    {
      title: 'FULL STACK DEVELOPER',
      company: 'Diveria S.R.L.',
      url: 'https://diveria.com/',
      startDate: 'Nov 2020',
      endDate: 'Nov 2022',
      country: 'Argentina',
      items: [
        'Building modular frontend libraries and components to optimize development speed and improve page loading times (Angular13). Developing, fixing and improving APIs for multiple projects (.NET Core).',
        'Migrating and refactoring legacy Sharepoint / Knockout.js code to Angular13, improving code implementation and readability.',
        'Developing automated web-scraping, data processing, csv/xlsx report exporting scripts using Python.',
        'Working using agile workflows (User Stories / Scrum), with both in-house developer teams and clients.'
      ]
    },
    {
      title: 'RESEARCH AND DEVELOPMENT INTERN',
      company: 'sinc(i)',
      url: 'https://sinc.unl.edu.ar/',
      startDate: 'Sep 2019',
      endDate: 'Oct 2021',
      country: 'Argentina',
      items: [
        'Developing a Python tool for estimating voice from EEG records in the context of imagined speech.'
      ]
    }
  ]
}
