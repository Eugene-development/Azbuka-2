const address = 'Нижний Новгород, Гордеевская 7';
const phones = [
	{
		phone: '8 (930) 671-14-55',
		name: 'Менеджер'
	}
];
const emails = [
	{
		email: 'indexpro24@gmail.com'
	}
];

const apiMail = import.meta.env.VITE_API_MAIL;
const apiToken = import.meta.env.VITE_TOKEN;

const header = 'Отправить запрос или коммерческое предложение:';

const contentForm_v2 = {
	apiMail,
	apiToken,
	header
};

const content = {
	// contentForm_v2,
	address,
	phones,
	emails
};

export const contentContacts = {
	content
};
// const currentPage = 'Контакты';

// const title = 'Контакты';
// const description = 'Связаться с нами вы можете по почте, телефону или через чат.';
// const pathImg =
// 	'https://storage.yandexcloud.net/brand-logo/mos-mebel/MarketingSectionV5/cabinets/1.jpg';

// const content_Header_v3 = {
// 	currentPage,
// 	title,
// 	description,
// 	pathImg
// };

// export const GET = () => {
// 	return {
// 		body: {
// 			content_Header_v3,
// 			content_Contact_v1
// 		}
// 	};
// };
