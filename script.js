console.log('It is working');
let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('dark')
}else
{
    setTheme(theme)
}
let themeDots = document.getElementsByClassName('theme-dot')

for (var i=0; themeDots.length > i; i++ )
{
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option Clicked')
        setTheme(mode)
    })

    
}

function setTheme(mode){
       
      if(mode =='dark'){
        document.getElementById('theme-style').href = 'default.css'
      } 
      if(mode =='light'){
        document.getElementById('theme-style').href = 'light.css'
      } 
      if(mode =='green'){
        document.getElementById('theme-style').href = 'green.css'
      } 
      if(mode =='pink'){
        document.getElementById('theme-style').href = 'pink.css'
      } 

      localStorage.setItem('theme',mode)
}