const avanca = document.querySelectorAll(' .btn-proximo')

avanca.forEach(button =>{
    button.addEventListener('click' function (){
      const atual = document.query selector('.ativo')
      const proximoPasso = 'passo-' + this.getAttribute(data-proximo)

      atual.classlist.remove('ativo')
      document.getElementById(proximoPasso).classList.add('ativo')
    })
})