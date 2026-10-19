(function(){
  document.querySelectorAll('.copybtn').forEach(function(btn){
    btn.addEventListener('click', function(){
      var text = btn.getAttribute('data-copy');
      function done(){
        var original = btn.textContent;
        btn.textContent = 'copied';
        btn.classList.add('copied');
        setTimeout(function(){ btn.textContent = original; btn.classList.remove('copied'); }, 1400);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function(){
          var r = document.createRange(); r.selectNode(btn.previousElementSibling || btn);
          var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(r);
        });
      }
    });
  });
})();
