// SEO
const title = 'Кухонные гарнитуры из пластика в Нижнем Новгороде';
const description = 'Варианты кухонных гарнитуров с фасадами из пластика в Нижнем Новгороде';

const SEO = {
	title,
	description
};

//BC
const titleBC = 'Кухонные гарнитуры из пластика';
const descriptionBC = 'Ознакомьтесь с нашими вариантами кухонных гарнитуров с фасадами из пластика';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const parentPage = 'Кухни';
const parentPageLink = 'kuhni';
const currentPage = 'Пластик';

const BC = {
	parentPage,
	parentPageLink,
	currentPage,
	titleBC,
	descriptionBC,
	pathImgBC
};

//Main
const mainText = {
	titleCategory: 'Пластик',
	descriptionCategory: 'Кухонные гарнитуры с пластиковыми фасадами'
};

const products = [
	{
		name: 'Аделина',
		text: '2500/3000х2300х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/adelina.jpeg',
		alt: ''
	},
	{
		name: 'Домино',
		text: '2300х2160х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/domino.jpeg',
		alt: ''
	},
	{
		name: 'Ясмина',
		text: '1100/3200х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/iasmina.jpeg',
		alt: ''
	},
	{
		name: 'Марсель',
		text: '2200/1900х2200х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/marsel.jpeg',
		alt: ''
	},
	{
		name: 'Примула',
		text: '3200х2150х600/320',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/kuhni/primula.jpeg',
		alt: ''
	}
];

const content = {
	mainText,
	products
};

export const contentKuhniPlastic = {
	SEO,
	BC,
	content
};
