export default function buildContact() {
	const contact = document.createElement('div');
	contact.id = 'contact';

	const bestTel = document.createElement('span');
	const or = document.createElement('span');
	const bestEmail = document.createElement('span');

	bestTel.textContent = '111 222 333';
	or.textContent = 'or';
	bestEmail.textContent = 'bestrestaurant@best.best';

	contact.append(bestTel, or, bestEmail);

    return contact;
}
