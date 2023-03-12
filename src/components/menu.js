const menuArr = [
	{
		name: 'Best Pizza',
		image: '../src/images/Pizza.jpeg',
	},
	{
		name: 'Best Burger',
		image: '../src/images/Burger.jpeg',
	},
	{
		name: 'Best Shawarma',
		image: '../src/images/Shawarma.jpeg',
	},
	{
		name: 'Best Pasta',
		image: '../src/images/Pasta.jpg',
	},
	{
		name: 'Best Soup',
		image: '../src/images/Soup.jpg',
	},
	{
		name: 'Best Sarmale',
		image: '../src/images/Sarmale.jpg',
	},
];

export default function buildMenu() {
	const menu = document.createElement('div');
	menu.id = 'menu';

	for (let i of menuArr) {
		const foodDiv = document.createElement('div');
		foodDiv.classList.add('food');

		const foodName = document.createElement('span');
		const foodImg = document.createElement('img');
		foodName.textContent = i.name;
		foodImg.src = i.image;
        foodDiv.append(foodName, foodImg);
        
        menu.append(foodDiv);
	}

    return menu;
}
