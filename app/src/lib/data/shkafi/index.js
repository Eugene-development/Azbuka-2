// SEO
const title = 'Шкафы в Нижнем Новгороде в Нижнем Новгороде';
const description = 'Шкафы на заказ в Нижнем Новгороде';

const SEO = {
	title,
	description
};

//BC
const titleBC = 'Шкафы в Нижнем Новгороде';
const descriptionBC = 'Шкафы на заказ для вашей комнаты или гардероба. Дизайн проект в подарок.';
const pathImgBC =
	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

const currentPage = 'Шкафы';
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

//Main
const mainText = {
	h1: 'Гардеробы и шкафы на заказ',
	title: 'Распашные шкафы и шкафы купе',
	description:
		'Рассмотрите недорогие шкафы по низким ценам, а также распашные и встроенные шкафы. Выполним заказ под ваш размер в комнату или прихожую. Предложим варианты сочетания материалов и цветов в зависимости от ваших пожеланий и ценовой политики.'
};

const img = [
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/9.JPG',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/3.jpg',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/5.jpg',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/6.jpg',
		alt: ''
	},
	{
		path: 'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/7.jpg',
		alt: ''
	}
];

const types = [
	{
		title: 'Шкафы купе',
		description: 'Подвесная и нижнеопорная система высокого качества',
		link: 'shkafy/kupe'
	},
	{
		title: 'Распашные шкафы',
		description: 'Двух, трёх и четырёх створчатые с выдвижными ящиками',
		link: 'shkafy/raspashnie'
	},
	{
		title: 'Встроенные шкафы',
		description: 'Безкаркасные со встраиваемыми полками влитые в нишу',
		link: 'shkafy/vstroenie'
	},
	{
		title: 'Гардеробные',
		description: 'Полнофункциональные гардеробные с любым наполнением',
		link: 'shkafy/garderobnie'
	},
	{
		title: 'Двери купе',
		description: 'В качестве перегородок или для замены старых дверей',
		link: 'shkafy/dveri'
	},
	{
		title: 'Офисные шкафы',
		description: 'Стильные и строгие варианты шкафов для офисных помещений',
		link: 'shkafy/ofisnie'
	}
];

const content = {
	mainText,
	img,
	types
};

export const contentShkafi = {
	SEO,
	BC,
	content
};
