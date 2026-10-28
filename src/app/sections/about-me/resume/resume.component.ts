import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { TranslatePipe } from "@ngx-translate/core";
import { Button } from "primeng/button";
import { Divider } from "primeng/divider";
import { Panel } from 'primeng/panel';
import { Tooltip } from 'primeng/tooltip';

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
    Tooltip,
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
      title: 'SOFTWARE ENGINEER — PLATFORM & INFRASTRUCTURE LEAD',
      company: 'NexPay Pty Ltd',
      url: 'https://nexpay.com.au',
      startDate: 'Dec 2023',
      endDate: 'Present',
      country: 'Australia',
      items: [
        'As NexPay\'s sole engineer, co-built a new cross-border payments platform with a partner company\'s CTO: <span class=\"!font-bold\">TypeScript / Node</span> API on <span class=\"!font-bold\">GCP Cloud Run</span> and a <span class=\"!font-bold\">React</span> app on <span class=\"!font-bold\">Cloudflare Workers</span>, serving ~3.5M API requests a month at 99.95% success.',
        'Led the migration off a legacy <span class=\"!font-bold\">.NET / MSSQL</span> estate: moved transactional emails, card checkout, payment status links and QR codes onto the new platform and decommissioned the legacy client portal, while staying the sole maintainer of the legacy services.',
        'Owned the cloud infrastructure end to end across <span class=\"!font-bold\">Azure</span>, <span class=\"!font-bold\">GCP</span> and <span class=\"!font-bold\">Cloudflare</span>: right-sized hosting plans, consolidated subscriptions and moved workloads to the edge, cutting running costs by ~60% (~AU$35k a year) and CI build times from ~15 min to ~5 min.',
        'Improved pricing accuracy on FX payments, recovering margin on a previously unpriced payment type.',
        'Ran security and access hardening for a regulated payments business: production incident response, identity and access clean-up, closing exposed admin endpoints, TOTP 2FA and a rebuilt password-reset flow.',
        'Shipped ~20 customer-facing features (redesigned payment flow, refunds, recipient management, payer tax-ID validation) and brought post-migration support from 41 to ~8 reports a week, with a median resolution time under 1 day.',
        'Wrote ~100 architecture decision records and built internal ops tooling, including <span class=\"!font-bold\">AI-assisted</span> feedback triage (MCP) and automated product reporting.'
      ],
      techs: [
        'typescript',
        'nodedotjs',
        'react',
        'googlecloud',
        'cloudflareworkers',
        'dotnet'
      ]
    },
    {
      title: 'FULL-STACK WEB DEVELOPER',
      company: 'JBKnowledge',
      url: 'https://jbknowledge.com/',
      startDate: 'Nov 2022',
      endDate: 'Dec 2023',
      country: 'Argentina',
      items: [
        'Built reusable <span class=\"!font-bold\">Angular</span> component libraries and a <span class=\"!font-bold\">Storybook</span> design system, including <span class=\"!font-bold\">React</span> micro-frontends embedded in Angular apps.',
        'Set up project foundations: <span class=\"!font-bold\">MSAL</span> authentication, <span class=\"!font-bold\">MSW</span> request mocking, <span class=\"!font-bold\">Tailwind</span> and a PowerFX formula editor integration.',
        'Built and maintained <span class=\"!font-bold\">.NET Core / C#</span> APIs with <span class=\"!font-bold\">Entity Framework</span> (code-first) and event-based persistence on <span class=\"!font-bold\">Azure Cosmos DB</span>.',
        'Worked across frontend, backend and database in Scrum teams, and wrote the team\'s development best-practice guides.'
      ],
      techs: [
        'angular',
        'react',
        'storybook',
        'tailwindcss',
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
        'Migrated legacy <span class=\"!font-bold\">SharePoint / Knockout.js</span> applications to <span class=\"!font-bold\">Angular</span>, making them easier to read and maintain.',
        'Built shared Angular component libraries that sped up delivery and improved page load times.',
        'Built and maintained <span class=\"!font-bold\">.NET Core</span> APIs across multiple client projects.',
        'Automated web scraping, data processing and CSV/XLSX reporting with <span class=\"!font-bold\">Python</span>.'
      ],
      techs: [
        'angular',
        'dotnet',
        'python'
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
        'Built a <span class=\"!font-bold\">Python / scikit-learn</span> tool to decode imagined speech from EEG recordings.'
      ],
      techs: [
        'python',
        'scikitlearn'
      ]
    }
  ];

  protected onTLDR() {
    window.open('/assets/files/CzerwenyJulian_CV_2025.pdf')
  }
}