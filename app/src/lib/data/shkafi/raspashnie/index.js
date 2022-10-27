// SEO
const title = 'Распашные шкафы в Нижнем Новгороде';
const description = 'Варианты распашных шкафов в Нижнем Новгороде';

const SEO = {
	title,
	description
};

//BC
const titleBC = 'Распашные шкафы';
const descriptionBC = 'Ознакомьтесь с нашими вариантами распашных шкафов';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const parentPage = 'Шкафы';
const parentPageLink = 'shkafy';
const currentPage = 'Распашные';

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
	titleCategory: 'Распашные',
	descriptionCategory: 'Шкафы с распашными дверками'
};

const products = [
	{
		name: 'Чароит',
		text: '1600х2400х520',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/charoit.jpeg',
		alt: ''
	},
	{
		name: 'Цитрон',
		text: '1200х2150х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/citron.jpeg',
		alt: ''
	},
	{
		name: 'Фиеста',
		text: '1200х2150х520',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/fiesta.jpeg',
		alt: ''
	},
	{
		name: 'Халцедон',
		text: '1600х2200х550',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/halcedon.jpeg',
		alt: ''
	},
	{
		name: 'Маркель',
		text: '2000/1600х2300х600',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/markel.jpeg',
		alt: ''
	},
	{
		name: 'Паскаль',
		text: '800х2200х500',
		img: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV4/shkafi/pascal.jpeg',
		alt: ''
	}
];

const content = {
	mainText,
	products
};

export const contentShkafiRaspashnie = {
	SEO,
	BC,
	content
};
