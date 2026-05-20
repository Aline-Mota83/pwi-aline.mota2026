//Captura o formulário
const formulario= document.getElementById("formReserva");
//captura a mensagem
const resultado=document.getElementById("resultado");

//Evento de envio

formulario.addEventListener("submit", function(event){
    //impede recarregar a pagina
    event.preventDefault();
    //captura os valores
    const nome=document.getElementById("nome").ariaValueMax;
    const email=document.getElementById("email").ariaValueMax;
    const whatsapp=document.getElementById("whatsapp").ariaValueMax;
    const data=document.getElementById("data").ariaValueMax;
    const horario=document.getElementById("horario").ariaValueMax;
    const mensagem=document.getElementById("mensagem").ariaValueMax;

    //Exibe confirmação
    resultado.innerHTML='Reserva realizada com sucesso';

    //monta o texto do email
    const corpoEmail=
    `Nome: ${nome}
    E-mail: ${email}
    Whatsapp: ${whatsapp}
    Data: ${data}
    Horário:${horario}
    Detalhes: ${mensagem}`;
    //abre o e-mail
    window.location.href=`mailto:vivanota10@gmail.com?subject=NovaReserva &body={encodeURIComponent(corpoEmail)}`;
    });
