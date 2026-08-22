(function () {
  fetch('/shared/footer.html')
    .then(function (r) { return r.text(); })
    .then(function (html) {
      var existing = document.querySelector('footer.rstb-footer');
      if (!existing) return;
      var tmp = document.createElement('div');
      tmp.innerHTML = html;
      var newFooter = tmp.firstChild;
      existing.parentNode.replaceChild(newFooter, existing);
    });
})();
