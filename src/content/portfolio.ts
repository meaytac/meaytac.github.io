export const profile = {
  name: 'Mustafa Eren Aytaç',
  title: 'Software Engineering Student',
  introduction: 'I’m a final-year software engineering student focused on applied AI. I’m exploring model training, evaluation, and retrieval-augmented generation (RAG) systems. My backend experience includes ASP.NET Core Web API and Entity Framework Core.',
  about: [
    'I’m a final-year software engineering student at Malatya Turgut Özal University. I’m focusing on artificial intelligence and machine learning, with a particular interest in how data quality shapes what a model can learn and how to evaluate its results.',
    'From July to August 2026, I worked remotely as a software engineering intern at the university’s Digital Transformation Office. I helped build a web application for student dormitories and staff housing. I developed workflows for facility officers to review applications, assign rooms, and manage occupancy. I also implemented JWT authentication and role-based access to restrict who could open submitted documents.',
    'The project gave me practical experience turning university housing rules into software that people with different responsibilities could use. I want to carry that same attention to data, access, and everyday workflows into my work in applied AI.',
  ],
  education: {
    institution: 'Malatya Turgut Özal University',
    program: 'Software Engineering',
    started: 'September 2023',
    expectedGraduation: 'June 2027',
    gpa: '3.43 / 4.00',
  },
  skills: [
    {
      area: 'AI & Data',
      badges: [
        { label: 'NumPy', symbol: '▦' },
        { label: 'pandas', symbol: '▥' },
        { label: 'Jupyter', symbol: '◎' },
        { label: 'Data preparation and analysis', symbol: '▤' },
        { label: 'Machine learning fundamentals', symbol: '⎇' },
      ],
    },
    {
      area: 'Backend & Data Storage',
      badges: [
        { label: 'ASP.NET Core', symbol: '.NET' },
        { label: 'REST APIs', symbol: '⇄' },
        { label: 'Entity Framework Core', symbol: 'EF' },
        { label: 'SQLite', symbol: 'DB' },
      ],
    },
    {
      area: 'Web & Tools',
      badges: [
        { label: 'HTML', symbol: '</>' },
        { label: 'CSS', symbol: '{ }' },
        { label: 'Git', symbol: '⎇' },
        { label: 'GitHub', symbol: 'GH' },
      ],
    },
    {
      area: 'Programming languages',
      badges: [
        { label: 'Python', symbol: '🐍' },
        { label: 'C#', symbol: 'C♯' },
        { label: 'JavaScript', symbol: 'JS' },
        { label: 'SQL', symbol: '▤' },
      ],
    },
    {
      area: 'Spoken languages',
      badges: [
        { label: 'English (C1)', symbol: 'EN' },
        { label: 'Turkish (native)', symbol: 'TR' },
        { label: 'Spanish (basic)', symbol: 'ES' },
      ],
    },
  ],
};

export interface Project {
  slug: string;
  title: string;
  context: string;
  summary: string;
  tags: string[];
  linkLabel?: string;
  links: { label: string; href: string }[];
  study?: { heading: string; paragraphs: string[] }[];
}

export const projects: Project[] = [
  {
    slug: 'residence-management-system',
    title: 'University Housing Management System',
    context: 'Software engineering internship',
    summary: 'A full-stack housing system with a public application and tracking portal, facility-scoped reviews and room assignments, and separate dashboards for administrators, facility officers, students, and staff.',
    tags: ['C#', '.NET 10', 'ASP.NET Core Web API', 'ASP.NET Core Identity', 'JWT', 'Entity Framework Core', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    linkLabel: 'Read the university housing case study',
    links: [
      { label: 'Source Code', href: 'https://github.com/meaytac/university-housing-management-system' },
      { label: 'Live Demo', href: '' },
    ],
    study: [
      {
        heading: 'Problem',
        paragraphs: ['The university needed a way to manage dormitory and staff housing from application through move-in. Applicants can choose a published facility, upload supporting documents, and check their status with a reference code. Facility officers review applications and assign eligible rooms, while administrators configure facilities, rooms, user roles, and staff assignments.'],
      },
      {
        heading: 'My Contribution',
        paragraphs: [
          'During my internship at the university’s Digital Transformation Office, I helped develop the full-stack application. I built workflows for facility officers to review applications, assign rooms, and manage occupancy.',
          'I implemented JWT authentication and role-based access for administrators, facility officers, students, and staff. I restricted access to submitted documents to authorized users.',
        ],
      },
      {
        heading: 'Technical Decisions',
        paragraphs: [
          'The Turkish-language frontend uses HTML, CSS, and vanilla JavaScript. It calls an ASP.NET Core Web API on .NET 10 backed by Entity Framework Core and SQLite. ASP.NET Core Identity manages accounts, and JWTs authenticate dashboard requests.',
          'Public status tracking and document access use separate endpoints. Tracking is rate-limited, and documents are stored outside the public web root. Document views and downloads go through an authorized API that checks the officer’s active facility assignments and records access in the audit log.',
          'Approval can affect the application, room placement, and account at the same time. The workflow uses a database transaction so a failed placement can roll back related changes. Room selection checks capacity and availability, and accounts issued through the temporary credential flow require a password change on first sign-in.',
        ],
      },
      {
        heading: 'Result',
        paragraphs: [
          'After placement, the dashboards support resident requests, leave, feedback, announcements, and staff task management. Administrators can review audit history and export CSV or XLSX reports.',
          'An optional Node.js and TypeScript service handles WhatsApp messaging through a separate integration. The codebase includes tests for application tracking, document permissions, credential issuance, placement rollback, and messaging retries.',
        ],
      },
    ],
  },
];
