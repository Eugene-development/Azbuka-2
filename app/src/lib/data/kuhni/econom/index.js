// SEO
const title = 'Кухонные гарнитуры эконом в Нижнем Новгороде';
const description = 'Варианты кухонных гарнитуров серии эконом в Нижнем Новгороде';

const SEO = {
	title,
	description
};

// BC
const titleBC = 'Кухонные гарнитуры эконом';
const descriptionBC = 'Ознакомьтесь с нашими вариантами кухонных гарнитуров серии эконом';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const parentPage = 'Кухни';
const parentPageLink = 'kuhni';
const currentPage = 'Эконом';

const BC = {
	parentPage,
	parentPageLink,
	currentPage,
	titleBC,
	descriptionBC,
	pathImgBC
};

// Main
const mainText = {
	titleCategory: 'Эконом',
	descriptionCategory: 'Кухонные гарнитуры серии Эконом'
};

const products = [
	{
		name: 'Дива',
		text: '2800х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/diva.jpeg',
		alt: ''
	},
	{
		name: 'Эвелина',
		text: '2800х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/evelina.jpeg',
		alt: ''
	},
	{
		name: 'Лиана',
		text: '2400х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/liana.jpeg',
		alt: ''
	},
	{
		name: 'Милена',
		text: '3200х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/milena.jpeg',
		alt: ''
	},
	{
		name: 'Прага',
		text: '2000/3000х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/praga.jpeg',
		alt: ''
	}
];

const content = {
	mainText,
	products
};

export const contentKuhniEconom = {
	SEO,
	BC,
	content
};
