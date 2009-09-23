// ==UserScript==
// @name          BetterWoot
// @namespace     http://freerobby.com/betterwoot
// @description   Additional features and UI improvements for woot.com
// @include       http://woot.com/*
// @include       http://www.woot.com/*
// ==/UserScript==

//////////////////////////////////////////////
// If wootoff, refresh every eight seconds. //
//////////////////////////////////////////////
woProgressBarDiv = document.getElementById("ctl00_ctl00_ContentPlaceHolderLeadIn_ContentPlaceHolderLeadIn_SaleControl_PanelWootOffProgressBar")
if (woProgressBarDiv) {
  setTimeout("window.location.reload()",5000);
}