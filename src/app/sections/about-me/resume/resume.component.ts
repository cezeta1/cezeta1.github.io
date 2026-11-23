import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { Button } from "primeng/button";
import { Tooltip } from "primeng/tooltip";

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
    Button,
    Tooltip
  ],
  templateUrl: './resume.component.html',
})
export class ResumeComponent {

  protected experiences: Experience[] = [
    {
      title: 'Full-Stack Software Engineer',
      company: 'NexPay Pty Ltd',
      url: 'https://nexpay.com.au',
      startDate: 'Dec 2023',
      endDate: 'Present',
      country: 'Australia',
      items: [
        'Maintained and improved an international payments solution, managing the full stack (<span class=\"!font-semibold\">.NET</span> backend, public REST APIs, <span class=\"!font-semibold\">MSSQL databases</span>, <span class=\"!font-semibold\">Angular/Razor</span> frontends) and its <span class=\"!font-semibold\">Azure CI/CD pipelines</span>.',
        'Planned and implemented a modern version of a legacy web application, improving its testability, maintainability, and deployment structure while managing the CI/CD pipeline with <span class=\"!font-semibold\">Azure DevOps</span>.',
        'Developed a templated email notification service using a <span class=\"!font-semibold\">.NET consumer</span> for an <span class=\"!font-semibold\">Azure Service Bus queue</span>.',
        'Built a responsive frontend application with <span class=\"!font-semibold\">Angular19</span>, <span class=\"!font-semibold\">Tailwind</span>, and <span class=\"!font-semibold\">PrimeNG</span>, using <span class=\"!font-semibold\">Signals</span> for state management to improve performance and simplify the codebase.',
      ],
      techs: [
        'Angular',
        'Tailwind',
        'PrimeNG',
        '.NET'
      ]
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'JBKnowledge',
      url: 'https://jbknowledge.com/',
      startDate: 'Nov 2022',
      endDate: 'Dec 2023',
      country: 'Argentina',
      items: [
        'Multi-purpose project configuration and integration between libraries and setups. <span class=\"!font-semibold\">Angular15</span>, <span class=\"!font-semibold\">Storybook</span>, <span class=\"!font-semibold\">Tailwind</span>, <span class=\"!font-semibold\">React Microfrontends</span> within Angular, <span class=\"!font-semibold\">MSW</span> mock requests, <span class=\"!font-semibold\">MSAL</span> auth interceptors, <span class=\"!font-semibold\">PowerFX</span> editor, among others.',
        'Building modular, generic and scalable <span class=\"!font-semibold\">Angular15</span> libraries and components to optimize development speed.',
        'Developing, fixing and improving APIs for multiple projects, using <span class=\"!font-semibold\">.NET Core / C#</span>. Code-First database approaches using <span class=\"!font-semibold\">Entity Framework</span>. Event-based database management using <span class=\"!font-semibold\">Azure Cosmos DB</span>.',
        'Working using agile workflows (<span class=\"!font-semibold\">User Stories / Scrum</span>). Hands-on involvement in all parts of a project, implementing Frontend, Backend and DB from the ground up, documenting development good practices.'
      ],
      techs: [
        'React',
        'Angular',
        'Storybook',
        'Tailwind',
        'PrimeNG',
        '.NET'
      ]
    },
    {
      title: 'Full-Stack Web Developer',
      company: 'Diveria S.R.L.',
      url: 'https://diveria.com/',
      startDate: 'Nov 2020',
      endDate: 'Nov 2022',
      country: 'Argentina',
      items: [
        'Building modular frontend libraries and components to optimize development speed and improve page loading times (<span class=\"!font-semibold\">Angular13</span>). Developing, fixing and improving APIs for multiple projects (<span class=\"!font-semibold\">.NET Core</span>).',
        'Migrating and refactoring legacy <span class=\"!font-semibold\">Sharepoint / Knockout.js</span> code to <span class=\"!font-semibold\">Angular13</span>, improving code implementation and readability.',
        'Developing automated web-scraping, data processing, csv/xlsx report exporting scripts using <span class=\"!font-semibold\">Python</span>.',
        'Working using agile workflows (<span class=\"!font-semibold\">User Stories / Scrum</span>), with both in-house developer teams and clients.'
      ],
      techs: [
        'Angular',
        'PrimeNG',
        'Python',
        '.NET',
      ]
    },
    {
      title: 'Research and Development Intern',
      company: 'sinc(i)',
      url: 'https://sinc.unl.edu.ar/',
      startDate: 'Sep 2019',
      endDate: 'Oct 2021',
      country: 'Argentina',
      items: [
        'Developing a <span class=\"!font-semibold\">Python</span> tool for estimating voice from EEG records in the context of imagined speech.'
      ],
      techs: [ 
        'Python', 
        'scikit-learn'
      ]
    }
  ];

  protected onTLDR() {
    window.open('/assets/files/CzerwenyJulian_CV_2025.pdf')
  }
}