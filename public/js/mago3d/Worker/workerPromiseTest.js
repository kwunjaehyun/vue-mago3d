'use strict';

var worker = self;

worker.onmessage = function (e) 
{
	console.info('in worker');
	console.info(e);

	e.ports[0].postMessage({success: "abc"});
};