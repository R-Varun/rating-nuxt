var router = require("express").Router();
var _ = require("lodash");

router.get("/:roomName", function(req, res, next) {
  const roomName = req.params.roomName;
  const baseUrl = req.headers.host;
  const updateUrl = "http://" + baseUrl + "/api/game/" + roomName + "/update";

  res.json({ outputScript: renderTemplate(updateUrl) });
});

function renderTemplate(apiUrl) {
  return `
// ==UserScript==
// @name         Stat Tracker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auxiliary script for Stat Tracker
// @author       Big Leap LLC.
// @match        https://tinder.com/app/recs
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tinder.com
// @grant        GM_xmlhttpRequest
// @require      https://cdnjs.cloudflare.com/ajax/libs/axios/0.25.0/axios.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    const tinder_url = '${apiUrl}';

    function getCurrentImg() {
        const raw_url = $($("div[style^='background-image: url(\\"https://images-ssl.gotinder.com/u/']")[1]).css("background-image");
        const formatted_url = raw_url.substring(5,raw_url.length - 2);

        return formatted_url;
    }

    function updateSwipe(url, dir) {
        const url_params = $.param({dir:dir});

        GM_xmlhttpRequest ( {
            method:     'GET',
            url:        url + "?" + url_params,
            onload:     function (responseDetails) {
                    console.log (
                        responseDetails
                    );
                }
        }
        );
    }

    function updateImage(url) {
        const img_url = getCurrentImg();
        console.log(img_url);
        const url_params = $.param({img_url:img_url});

        GM_xmlhttpRequest ( {
            method:     'GET',
            url:        url + "?" + url_params,
            onload:     function (responseDetails) {
                    console.log (
                        responseDetails
                    );
                }
        }
        );
    }

    function handleArrow(key) {
        if (key.code === 'ArrowLeft') {
            updateSwipe(tinder_url, 'L');
        } else if (key.code === 'ArrowRight') {
            updateSwipe(tinder_url, 'R');
        } else if (key.code === 'Space') {
            updateImage(tinder_url);
        }
    }

    document.addEventListener(
        'keydown', item => handleArrow(item)
    );
})();
`.toString();
}

module.exports = router;
