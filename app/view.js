'use strict';

alert('found view');


import template from "./template.html";

export default
	class View{

		constructor() {
		super();
		this.template = template;

		}
	}