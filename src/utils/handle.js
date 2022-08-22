export const handleTabEnter = (el, callBack) => {
	const buttons = document.querySelectorAll(el)

	for (let i = 0; i < buttons.length; i++) {
		// addHandler(buttons[i])
	}

	// function addHandler(button) {
	// 	button.onclick = function (e) {
	// 		// let message = e.target.getAttribute('data-message')
	// 		// console.log(message)
	// 		// alert(message)
    //         // callBack(e)
	// 	}
	// }

	document.onkeydown = function (e) {
		if (e.key === 'Enter') {
            console.log(document.activeElement);
			// document.activeElement.onclick(e)
            callBack(document.activeElement)
// 
		}
	}
}
