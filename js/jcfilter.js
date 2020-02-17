jQuery.fn.jcOnPageFilter = function(settings) {
	settings = jQuery.extend({
		animateHideNShow:false,
		focusOnLoad:false,
		highlightColor:'#00E7C0',
		textColorForHighlights:'#000000',
		caseSensitive:false, //искать только в первом слове строки
		hideNegatives:true,
		parentSectionClass:'',
		parentLookupClass:'jcorgFilterTextParent',
		childBlockClass:'jcorgFilterTextChild',
	}, settings);
	jQuery.expr[':'].icontains = function(obj, index, meta) {                    
		return jQuery(obj).text().toUpperCase().indexOf(meta[3].toUpperCase()) >= 0;                
	}; 
	if(settings.focusOnLoad) {
	  jQuery(this).focus();
	}
	var rex = /(<span.+?>)(.+?)(<\/span>)/g;
	var rexAtt = "g";
	if(!settings.caseSensitive) {
	   rex = /(<span.+?>)(.+?)(<\/span>)/gi;
	   rexAtt = "gi";
	}				
	return this.each(function() {
		jQuery(this).keyup(function(e) {
			if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
				return false;
			}
			else {
				
				function hideSection() {
					jQuery('.'+settings.parentLookupClass).closest('.'+settings.parentSectionClass).each(function() {
						var count = 0;
						var countElem = jQuery(this).closest('.'+settings.parentSectionClass).find('.'+settings.parentLookupClass).length;
						jQuery(this).find('.'+settings.parentLookupClass).each(function() {
							if (jQuery(this).css('display') == 'none') {
								++count;
							}
						});
						if (count == countElem) {
							if(settings.animateHideNShow) {
								jQuery(this).closest('.'+settings.parentSectionClass).fadeOut(100);
							}
							else {
								jQuery(this).closest('.'+settings.parentSectionClass).hide();
							}
						} else {
							if(settings.animateHideNShow) {
								jQuery(this).closest('.'+settings.parentSectionClass).fadeIn(100);
							}
							else {
								jQuery(this).closest('.'+settings.parentSectionClass).show();
							}
						}
					});
				}
				
				var textToFilter = jQuery(this).val();
				if (textToFilter.length > 0) {
					if(settings.hideNegatives) {
					  if(settings.animateHideNShow) {
						jQuery('.'+settings.parentLookupClass).stop(true, true).fadeOut('slow');
					  }
					  else {
						jQuery('.'+settings.parentLookupClass).stop(true, true).hide();
					  }
					}
					var _cs = "icontains";
					if(settings.caseSensitive) {
					  _cs = "contains";
					}
					jQuery.each(jQuery('.'+settings.childBlockClass),function(i,obj) {
					  jQuery(obj).html(jQuery(obj).html().replace(new RegExp(rex), "$2"));  
					});
					jQuery.each(jQuery('.'+settings.childBlockClass+":"+_cs+"(" + textToFilter + ")"),function(i,obj) {
						if(settings.hideNegatives) {
						  if(settings.animateHideNShow) {
							//jQuery(obj).parent().stop(true, true).fadeIn('slow');
							jQuery(obj).closest('.'+settings.parentLookupClass).stop(true, true).fadeIn('slow');
						  }
						  else {
							//jQuery(obj).parent().stop(true, true).show();
							jQuery(obj).closest('.'+settings.parentLookupClass).stop(true, true).show();
						  }
						  
						}
						
						var newhtml = jQuery(obj).text();
						jQuery(obj).html(newhtml.replace(
						new RegExp(textToFilter, rexAtt), 
						function(match) {
							return ["<span style='background:"+settings.highlightColor+";color:"+settings.textColorForHighlights+"'>", match, "</span>"].join("");
						}));
						/*
						jQuery(obj).find('.searchable').each(function () {
							var $elem = $(this);
							$elem.html( $elem.text().replace(
							new RegExp(textToFilter, rexAtt), 
							function(match) {
								return ["<span style='background:"+settings.highlightColor+";color:"+settings.textColorForHighlights+"'>", match, "</span>"].join("");
							}));
						});*/
					});
					
					//вызов функции для оценки пустоты родителя
					if (settings.parentSectionClass != '') {
						if(settings.animateHideNShow) {
							setTimeout(hideSection, 1000);
						}
						else {
							hideSection();
						}
					}
					
				} else { //все стерли из строки
					  jQuery.each(jQuery('.'+settings.childBlockClass),function(i,obj) {
							var html = jQuery(obj).html().replace(new RegExp(rex), "$2");
							jQuery(obj).html(html);  
					  });
					if(settings.hideNegatives) {
						if(settings.animateHideNShow) {
							if (settings.parentSectionClass != '') {
								jQuery('.'+settings.parentSectionClass).stop(true, true).fadeIn('slow');
							}
							jQuery('.'+settings.parentLookupClass).stop(true, true).fadeIn('slow');
						}
						else {
							if (settings.parentSectionClass != '') {
								jQuery('.'+settings.parentSectionClass).stop(true, true).show();
							}
							jQuery('.'+settings.parentLookupClass).stop(true, true).show();
						}
					}
				}
			}
		});
	});
};  