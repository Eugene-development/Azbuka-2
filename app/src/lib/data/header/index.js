const logo = 'https://storage.yandexcloud.net/brand-logo/azbuka-komforta/logo/logo2.png';
const phone = '+7 (930) 671-14-55';
const email = 'indexpro24@gmail.com';

const menu = [
	{
		value: 'Главная',
		path: ''
	},
	{
		value: 'Шкафы',
		path: 'shkafy'
	},
	{
		value: 'Кухни',
		path: 'kuhni'
	},
	{
		value: 'Блог',
		path: 'blog'
	},
	{
		value: 'Контакты',
		path: 'contacts'
	}
];

const subMenu = [
	{
		value: 'Замер',
		path: 'information/zamer'
	},
	{
		value: 'Проект',
		path: 'information/proekt'
	},
	{
		value: 'Оплата',
		path: 'information/oplata'
	},
	{
		value: 'Доставка',
		path: 'information/dostavka'
	},
	{
		value: 'Подъём',
		path: 'information/podem'
	},
	{
		value: 'Установка',
		path: 'information/ustanovka'
	},
	{
		value: 'Гарантии',
		path: 'information/garantii'
	}
];

const content = {
	logo,
	phone,
	email,
	menu,
	subMenu
};

export const contentHeader = {
	content
};
