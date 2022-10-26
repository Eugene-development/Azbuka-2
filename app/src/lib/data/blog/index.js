import { posts, titleBlog, descriptionBlog } from './index.json';

// SEO
const title = 'Мебельный блог || Тематические статьи';
const description = '';

const SEO = {
	title,
	description
};

// BC
const titleBC = 'Мебельный блог';
const descriptionBC = 'Ознакомьтесь с интересными статьями по мебельной тематике.';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const currentPage = 'Блог';
const parentPage = '';
const parentPageLink = '';

const BC = {
	currentPage,
	parentPage,
	parentPageLink,
	titleBC,
	descriptionBC,
	pathImgBC
};

// Main
const content = {
	titleBlog,
	descriptionBlog,
	posts
};
export const contentBlog = {
	SEO,
	BC,
	content
};
