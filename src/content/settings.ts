export const settings = {
  siteUrl: 'https://meaytac.github.io',
  shareImagePath: '',
  resumePath: '/resume/mustafa-eren-aytac-cv.pdf',
  resumeImage: { path: '/resume/mustafa-eren-aytac-cv.jpg', width: 1414, height: 2000 },
  email: 'mu.erenaytac@gmail.com',
  web3FormsAccessKey: '3bb7c1ad-672f-46fa-bdda-8b45b07d732e',
  github: 'https://github.com/meaytac',
  linkedin: 'https://www.linkedin.com/in/mustafaerenaytac',
  kaggle: 'https://www.kaggle.com/erenaytac',
};

export const contacts = [
  { label: 'Email', href: settings.email && `mailto:${settings.email}` },
  { label: 'GitHub', href: settings.github },
  { label: 'LinkedIn', href: settings.linkedin },
  { label: 'Kaggle', href: settings.kaggle },
].filter(({ href }) => href);
