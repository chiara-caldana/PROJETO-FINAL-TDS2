const botao=document.querySelector(".menu-botao"),menu=document.getElementById("menu-lateral"),fundo=document.querySelector(".fundo-escuro");
function alternar(abrir){menu.classList.toggle("ativo",abrir);fundo.classList.toggle("ativo",abrir);botao.setAttribute("aria-expanded",abrir);document.body.style.overflow=abrir?"hidden":"";}
botao.addEventListener("click",()=>alternar(true));
fundo.addEventListener("click",()=>alternar(false));
menu.querySelector(".fechar").addEventListener("click",()=>alternar(false));
document.addEventListener("keydown",e=>{if(e.key==="Escape")alternar(false)});