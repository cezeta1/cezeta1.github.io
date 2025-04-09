import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { Button } from "primeng/button";
import { Divider } from "primeng/divider";
import { Panel } from 'primeng/panel';
import { TooltipModule } from 'primeng/tooltip';

interface Experience {
  title: string;
  company: string;
  url: string;
  startDate: string;
  endDate: string;
  country: string;

  items: string[];
  techs?: string[];
}

@Component({
  selector: 'resume',
  imports: [
    CommonModule, 
    TranslatePipe,
    TooltipModule,
    Panel, 
    Button,
    Divider
  ],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css',
})
export class ResumeComponent {

  protected experiences: Experience[] = [
    {
      title: 'FULL-STACK WEB DEVELOPER',
      company: 'NexPay Pty Ltd',
      url: 'https://nexpay.com.au',
      startDate: 'Dec 2023',
      endDate: 'Present',
      country: 'Australia',
      items: [
        'Planning and implementing a modern version of an existing web app, keeping the business logic but improving the ability to <span class=\"!font-bold\">test</span>, <span class=\"!font-bold\">maintain</span>, <span class=\"!font-bold\">enhance</span> and <span class=\"!font-bold\">deploy</span> it. Managing the transition between old and new systems.',
        'Developing, fixing and improving legacy APIs for multiple projects, using <span class=\"!font-bold\">.NET Core / C#</span>.',
        'Developing a responsive <span class=\"!font-bold\">Angular19</span> frontend app using <span class=\"!font-bold\">Tailwind</span> and <span class=\"!font-bold\">PrimeNG</span>. Used latest Angular improvements like <span class=\"!font-bold\">Signals</span> to manage stores and improve performance and reduce codebase complexity.'
      ],
      techs: [
        'angular',
        'tailwindcss',
        'primeng',
        'dotnet'
      ]
    },
    {
      title: 'FULL-STACK WEB DEVELOPER',
      company: 'JBKnowledge',
      url: 'https://jbknowledge.com/',
      startDate: 'Nov 2022',
      endDate: ' Dec 2023',
      country: 'Argentina',
      items: [
        'Multi-purpose project configuration and integration between libraries and setups. <span class=\"!font-bold\">Angular15</span>, <span class=\"!font-bold\">Storybook</span>, <span class=\"!font-bold\">Tailwind</span>, <span class=\"!font-bold\">React Microfrontends</span> within Angular, <span class=\"!font-bold\">MSW</span> mock requests, <span class=\"!font-bold\">MSAL</span> auth interceptors, <span class=\"!font-bold\">PowerFX</span> editor, among others.',
        'Building modular, generic and scalable <span class=\"!font-bold\">Angular15</span> libraries and components to optimize development speed.',
        'Developing, fixing and improving APIs for multiple projects, using <span class=\"!font-bold\">.NET Core / C#</span>. Code-First database approaches using <span class=\"!font-bold\">Entity Framework</span>. Event-based database management using <span class=\"!font-bold\">Azure Cosmos DB</span>.',
        'Working using agile workflows (<span class=\"!font-bold\">User Stories / Scrum</span>). Hands-on involvement in all parts of a project, implementing Frontend, Backend and DB from the ground up, documenting development good practices.'
      ],
      techs: [
        'react',
        'angular',
        'tailwindcss',
        'primeng',
        'storybook',
        'dotnet'
      ]
    },
    {
      title: 'FULL-STACK WEB DEVELOPER',
      company: 'Diveria S.R.L.',
      url: 'https://diveria.com/',
      startDate: 'Nov 2020',
      endDate: 'Nov 2022',
      country: 'Argentina',
      items: [
        'Building modular frontend libraries and components to optimize development speed and improve page loading times (<span class=\"!font-bold\">Angular13</span>). Developing, fixing and improving APIs for multiple projects (<span class=\"!font-bold\">.NET Core</span>).',
        'Migrating and refactoring legacy <span class=\"!font-bold\">Sharepoint / Knockout.js</span> code to <span class=\"!font-bold\">Angular13</span>, improving code implementation and readability.',
        'Developing automated web-scraping, data processing, csv/xlsx report exporting scripts using <span class=\"!font-bold\">Python</span>.',
        'Working using agile workflows (<span class=\"!font-bold\">User Stories / Scrum</span>), with both in-house developer teams and clients.'
      ],
      techs: [
        'angular',
        'primeng',
        'python',
        'dotnet',
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
        'Developing a <span class=\"!font-bold\">Python</span> tool for estimating voice from EEG records in the context of imagined speech.'
      ],
      techs: [ 
        'python', 
        'scikitlearn'
      ]
    }
  ];


}