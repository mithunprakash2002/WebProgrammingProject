document.addEventListener('DOMContentLoaded', () =>
{
	const buttons = document.querySelectorAll('.sitcom button');
	buttons.forEach(button => 
	{
		button.addEventListener('click', () => 
		{
			const moreInfo = button.nextElementSibling;
			if (moreInfo.style.display === 'block') 
			{
				moreInfo.style.display = 'none';
				button.textContent = 'Read More';
			} 
			else 
			{
				moreInfo.style.display = 'block';
				button.textContent = 'Read Less';
			}
		});
	});
});




