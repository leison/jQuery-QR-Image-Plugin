String.prototype.startsWith = function(str) 
{return (this.match("^"+str)==str)}


jQuery.fn.loadQRText = function (text, callback_function)
                        {
						   this.attr('src', 'http://qrcode.kaywa.com/img.php?s=12&d=' + text);
						   if (callback_function != undefined)
					         callback_function(text);
						}

jQuery.fn.loadQRPhone = function (phone, callback_function)
                        {
						   this.loadQRText('tel:' + phone, callback_function );
				        }
jQuery.fn.loadQRUrl = function (url, callback_function)
                        {
						   if (url.beginsWith('http://') || url.beginsWith('https://'))
						   {
						     this.loadQRText(url, callback_function);
						   }
						   else {
						     this.loadQRText('http://' + url, callback_function);
						   }
						}