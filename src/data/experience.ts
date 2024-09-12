import type { Props as ExperienceProp } from '../components/experience/props';

export const EXPERIENCE: ExperienceProp[] = [
	{
		dates: 'December 2022 — Present',
		title: 'Sr Software Engineer',
		company: 'IQVIA - DMD',
		companyUrl: 'https://www.iqvia.com/',
		description:
			'Design & architected internal tooling applications, utilizing technologies such as Node JS, Remix JS, React, and Material UI. Worked on refactoring legacy systems to the latest technologies in web utilizing best practices.',
		technologies: ['Node.JS', 'Material UI', 'Remix', 'React', 'AWS'],
		logo: '/logos/dmd_digital_health_connections_logo.jpeg',
	},
	{
		dates: 'June 2021 — December 2022',
		title: 'Front-End Developer',
		company: 'AVB Marketing',
		companyUrl: 'https://www.avbmarketing.com/',
		description:
			'Developed and maintained e-commerce solutions built on Next JS and magento. Worked on integrating with the third party payment systems & APIs and collaborated closely with product owners to implement pixel-perfect layouts and user flows.',
		technologies: ['React JS', 'Next JS', 'Node JS', 'Material UI', 'Magento'],
		logo: '/logos/avbmarketing_logo.jpeg',
	},
	{
		dates: 'October 2018 — May 2021',
		title: 'Programming Analyst',
		company: 'E & J Gallo Winery',
		companyUrl: 'https://www.gallo.com/',
		description:
			'Worked in various roles as part of an eCommerce team. Developed marketing websites built on Angular and headless Drupal. Built out email templates in Salesforce Marketing Cloud. Developed Ionic (Angular) Clover Point of Sale application.',
		technologies: ['Angular', 'SCSS', 'Drupal', 'Node JS', 'Ionic'],
		logo: '/logos/e__j_gallo_winery_logo.jpeg',
	},
	{
		dates: 'October 2016 — October 2018',
		title: 'Software Developer',
		company: 'Stanislaus County',
		companyUrl: 'https://www.stancounty.com/',
		description:
			'Created and maintained databases in the MSSQL server, created any necessary queries and reports at staff request. Along with basic troubleshooting support. Implemented full-stack Express JS web app by rewriting legacy ColdFusion app. This app was used by county employees to submit monitor water testing samples.',
		technologies: [
			'JavaScript',
			'JQuery',
			'Express JS',
			'Node JS',
			'MSSQL',
			'CSS',
		],
		logo: '/logos/stanislaus_county_logo.jpeg',
	},
];
