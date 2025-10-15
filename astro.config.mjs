// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapidePlugin from 'starlight-theme-rapide';
import starlightUtils from "@lorenzo_lewis/starlight-utils";

// https://astro.build/config
export default defineConfig({
	site: 'http://shenghan-w.github.io',
	base: '/portfolio',
	integrations: [
		starlight({

			// Plugin Config
			plugins: [
				starlightThemeRapidePlugin(),
				starlightUtils({
					navLinks: {
						leading: { useSidebarLabelled: "leadingNavLinks" },
					},
				}),
			],
			
			// Title
			title: "Shen's Stuff",

			// Settings
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 4,
			},

			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/shenghan-w' },
				{icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/shenghan-wang-30631573/' },
			],

			pagination: false,

			favicon: '/favicon.svg',

			expressiveCode: {
				themes: ['solarized-dark', 'solarized-light']
			},
			
			// Customs
			routeMiddleware: './src/routeData.ts',
			disable404Route: true,
			
			components: {
				Hero: './src/components/CustomHero.astro',
			},

			// Sidebar Config
			sidebar: [
				{
					label: 'leadingNavLinks',
					items: [
						{ label: 'Security Stuff', slug: 'security' },
						{ label: 'Tech Writing Stuff', slug: 'tech-writing' },
						{ label: 'Climbing Stuff', slug: 'climbing' },
					],
				},
				
				{ label: 'About My Security Stuff', autogenerate: { directory: 'security/about' }},
				{ label: 'HackTheBox Write-Ups', autogenerate: { directory: 'security/htb' }},
				{ label: 'Red Team Notes', autogenerate: { directory: 'security/cheatsheets' }},

				{ label: 'About My Tech Writing', autogenerate: { directory: 'tech-writing/about' }},
				{ label: 'Progression Docs', autogenerate: { directory: 'tech-writing/progression' }},
				
				{ label: 'About My Climbing', autogenerate: { directory: 'climbing/about' }},
				{ label: 'Outdoor Bouldering', autogenerate: { directory: 'climbing/projects' }},
			],
		}),
	],
});
