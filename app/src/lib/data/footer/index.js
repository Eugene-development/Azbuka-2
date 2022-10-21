const yearStart = '2001';
const now = new Date();
const yearNow = now.getFullYear();

const text = 'Компания МосМебель. Кухонные гарнитуры и шкафы купе на заказ.';
const phoneService = '+7 (495) 147-55-50';

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

const content = {
	yearStart,
	yearNow,
	text,
	phoneService,
	menu
};

export const contentFooter = {
	content
};
