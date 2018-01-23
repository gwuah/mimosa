(function(root, factory) {

	console.log("mimosa is in production :P");

	// library constants
	const mtrigger = "mimosa-trigger";

	// helper functions
	function injectCss(css) {
    const head = document.querySelector('head');
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);

    console.log("css sucessfully injected!");
    return true
	}

	// insert a custom stylesheet
	// trying to keep the library fully javascript
	injectCss(".mimosa { display: none }")

	// event listener
	factory.addEventListener("click", (e) => {
		const main = e.target;

		if (!main.classList.contains(mtrigger)) {
			// if clicked on object doesnt match our search, return fast!
			return
		}

		// prevent defaul such that, if trigger is an anchor element
		// the page will not reload!
		e.preventDefault();
		const id = main.getAttribute("data-mimosa");

		if (!id) {
			// if trigger has trigger class but no mimosa-id
			throw new Error(`data-mimosa is not defined on element ${main}`);

		} else {
			const children = factory.querySelectorAll(`*[data-mimosa=${id}]`);

			// if there's no element to show/hide, leave!
			if (!children) { return };

			for (const child of children) {
				if (!child.classList.contains(mtrigger)) {
					child.classList.toggle("mimosa")
				}
			};
		}

	})


}(window, document))