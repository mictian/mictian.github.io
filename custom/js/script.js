//Fix main link to contact me
setTimeout(function () {
	document.querySelector("a[href='/about']").setAttribute('target', '_self');
}, 1)