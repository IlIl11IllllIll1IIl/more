
document.addEventListener('DOMContentLoaded', function(){
  var style = `#button {
  display:none;
}
.imgb_vis {
  animation: imgb-animation 15s linear;
}
@keyframes imgb-animation {
  10% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(100px);
  }
  90% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}`;
  addStyle(style);

  var div = document.createElement('div');
  div.id = 'button';
  div.className = 'imgb';
  div.style = 'position:fixed;top:10%;left:-100px;z-index:10';
  div.innerHTML = '<a target="_blank" href="https://sites.google.com/view/thepizzaeditionn/" title="More of best Unblocked Games"><img src="https://lh3.googleusercontent.com/yUuzQP8XfoMhY79YuvZpzWAJj-Jx8IiZcAWQGfr66KtnAtcY3qv_l2wSsvxGUSdvZ3pBqc3jKXNiuIh7xqNhw6_3aWbuQbC8MV60-WX5NXOo-UVrDwyp2SAWhbMNFqgpZ4ueSS5aqLrR9XWZi-66LKQ9U4cRKztFVpW6CeZyAHJzfjblkH7AuUAckcCniyOPq46j1X8Epbs0SEzb6kr9x8WYs_Ma8k-gQIu8CkXjFiS6QOMUOrwR9-_uWRS5M1XlYKLOi1IXoBlSNKdBPuQu-i-UdBhRQDmRGo8adOcbn9D1-Z0H2uS8q18G91KK_KCXp5UWZvHOqEKXMvnajZIa6iJCfnLd5fRJT8b42dVxbNDgJIvtJGDD-suTtuixLe_m4TcF92V2seNe6Cy7oGIy_5Ll3iIpzvkA30WhREMV6odbdz40h-f5Gmqnj3vGtSI71TbjROre72PyZXfgMfYJqELr-DIvdFAtjDjrMt648nTW1Y3hfRz45dUjSXbEttgfRymWmwW5YRr0pTSZ_jqjve9x3C61PxL6jCoKPoSZhJkYzZV9jBcUz6el3gcZf0uY3EvEYp4YGQDwk2EsktJPM5DYCph3NHbucwYeKDJyhWpB8ZOU7fFwbCnN8ouqBZS0VmS3jsAOZqGUDEbnbNLAOgXPH1auaarbr02nOgUx4ZGrPxN3PsY-Xjm73wvKR_2O5LHY_Fgf1MK-2310WuNzIwrAI8jfIzV8QhxMheX3CTRGgJxaRiW20xETp5xPvAWav1tKSYHQASTQm_4Nz1bKx5YZ-7umvGhpHsOH7_APz9GjAdLWYUqWDAwqBCItbap-b3ZXJrh2hLhy_7WY5Bz-hGIfHsNCyA833bmH04LUzvUiAOVG4_Sij60BqvWnOEY1wzZGxA1fNr6XGHEHBivb6zPNv4hmzxFlEl659SMT87bDA917mcvMW7JBSBRm-hqOK5OO2ePgOkW5S6MQfNNuQ-goowMAB9RHNHSFv1r73EnDQFfvMOnF4llvSgCEzFm4zmiVrQ7w_PoTznAGuD781aqOSoYNXadrPCR6vGumt3rPR3duEmH_WwJU37El23Yt5as1_DgEqMI-Ovnb_8LnTH_z4-dncScSsgZavxSpJfCkZhlXGgYDHNpmhKQjK6p9lUY=w648-h81-s-no?authuser=0" width="100" height="15" style="cursor:pointer;" alt="More Unblocked Gamdes"></a>';
  document.body.appendChild(div);

  var image = document.getElementById('button');
  var i = 0;
  var s = ['block', 'none'];
  var t = [15000, 10000];
  show();

  document.querySelector('.imgb').classList.add('imgb_vis');

  function addStyle(styles) {
    var css = document.createElement('style');
    css.type = 'text/css';

    if (css.styleSheet) {
      css.styleSheet.cssText = styles;
    } else {
      css.appendChild(document.createTextNode(styles));
    }

    document.getElementsByTagName('head')[0].appendChild(css);
  }

  function show() {
    i ^= 1;
    image.style.display = s[i];
    setTimeout(show, t[i]);
  }
});
