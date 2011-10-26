jQuery.fn.loadQRText = function (text, callback_function)
                        {
						   this.attr('src', 'http://qrcode.kaywa.com/img.php?s=12&d=' + text);
						   if (callback_function != undefined)
					         callback_function(text);
						}

jQuey.fn.loadQRPhone = function (phone, callback_function)
                        {
						   this.loadQRText('tel:' + phone, callback_function );
				        }
jQuery.fn.loadQRUrl = function (url, callback_function)
                        {
						   this.loadQRText('http://' + url, callback_function);
						}