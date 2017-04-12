/**
 * Created by Bassel Ahmed on 4/11/2017.
 */

(function(jQuery) {

    jQuery.fn.diffDomainNewTab = function(options) {

        console.log(options);
        var exceptionList = {};
        if ( options && options.exceptionList ) {
            exceptionList.list = options.exceptionList;
        }

        function extractHostname(url) {
            var hostname;
            if (url.indexOf("://") > -1) {
                hostname = url.split('/')[2];
            }
            else {
                hostname = url.split('/')[0];
            }
            hostname = hostname.split(':')[0];
            return hostname;
        }
        function extractRootDomain(url) {
            var domain = extractHostname(url),
                splitArr = domain.split('.'),
                arrLen = splitArr.length;
            if (arrLen > 2) {
                domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
            }
            return domain;
        }

        var flag;
        var anchorDomain;
        var currentDomain = extractRootDomain(window.location.href);

        return this.each( function() {

            var $thisLink = jQuery(this).attr("href");
            if ( $thisLink && $thisLink[0] !== "#" && $thisLink.indexOf("tel:") == -1 && $thisLink.indexOf("mailto:") == -1 && $thisLink.indexOf("ftp:") == -1 && $thisLink.indexOf("javascript:") == -1 ) {
                anchorDomain = extractRootDomain($thisLink);
                if ( exceptionList.list ) {
                    jQuery.each(exceptionList.list, function(key, val) {
                        if ( anchorDomain !== extractRootDomain(val)) {
                            flag++;
                        }
                    });
                    if ( anchorDomain !== currentDomain && flag == exceptionList.list.length ) {
                        jQuery(this).attr("target", "_blank");
                    } else {
                        jQuery(this).attr("target", "_self");
                    }
                } else if ( anchorDomain !== currentDomain ) {
                    jQuery(this).attr("target", "_blank");
                } else {
                    jQuery(this).attr("target", "_self");
                }
            }
            flag = 0;

        });
    }
}(jQuery));
