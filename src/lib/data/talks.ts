import Assets from './assets';
import { getSkills } from './skills';
import type { Talk } from './types';

const items: Array<Talk> = [
	{
		slug: 'a',
		color: '#ff3e00',
		description:
			'A personal portfolio website built on the Slick Portfolio Svelte template, customized with my projects, skills, and professional information.',
		shortDescription: 'Personal portfolio based on the Slick Portfolio Svelte template.',
		links: [{ to: 'https://github.com/BryanEstrada003/Portfolio-Mai', label: 'GitHub Repository' }],
		logo: Assets.PreUbucon,
		name: 'Portfolio Mai',
		period: {
			from: new Date(2026, 1, 7)
		},
		skills: getSkills('svelte', 'git'),
		carrousel: [
			{
				src: 'https://github.com/BryanEstrada003/cotton-leaf-defect-classification/blob/ui/ui/8.jpeg?raw=true'
			},
			{
				src: 'https://github.com/BryanEstrada003/cotton-leaf-defect-classification/blob/ui/ui/4.jpeg?raw=true'
			},
			{
				src: 'https://github.com/BryanEstrada003/cotton-leaf-defect-classification/blob/ui/ui/2.jpeg?raw=true'
			}
		],
		type: 'Personal Portfolio Website'
	},
	{
		slug: 'intro-to-svelte',
		color: '#ff3e00',
		description:
			'An introductory talk and workshop on building modern web applications with Svelte and SvelteKit. Covers reactive state management, component architecture, and deployment strategies.',
		shortDescription: 'Workshop introducing Svelte and SvelteKit for modern web development.',
		links: [{ to: 'https://github.com/BryanEstrada003', label: 'GitHub' }],
		logo: Assets.Unknown,
		name: 'Introduction to Svelte',
		period: {
			from: new Date(2025, 5, 15)
		},
		skills: getSkills('svelte'),
		youtube: 'https://www.youtube.com/watch?v=rv3Yq-B8qp4',
		type: 'Workshop'
	}
];

const title = 'Talks';

const TalksData = { title, items };

export default TalksData;
