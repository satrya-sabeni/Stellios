// external js:
// http://isotope.metafizzy.co/beta/isotope.pkgd.js

$( function() {
  $('.isotope').isotope({
    itemSelector: '.item',
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
});
