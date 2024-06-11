function comprar() {
    var mensajes = [
        "¡Epa, [Nombre]! ¡Felicitaciones por hacerte con esta! No te olvides de llevar siempre una espada afilada y una poción de resistencia. ¡Los desafíos te esperan en tu nuevo terreno!",
        "¡Qué copado, [Nombre]! ¡Ahora es tuya! Llevá siempre una pala y una antorcha. ¡Podés encontrarte con cosas re interesantes mientras explorás tu nuevo lugar!",
        "¡Felicitaciones [Nombre] por hacerte con esta propiedad! No te olvides de llevar siempre una espada afilada y una poción de resistencia. ¡Los desafíos te esperan en tu nuevo terreno!",
        "¡[Nombre],! ¡Preparate para aventuras emocionantes y momentos inolvidables en tu nuevo hogar!"
    ];

    // Seleccionar un mensaje aleatorio
    var mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];

    // Reemplazar [Nombre] con el nombre del usuario 
    mensajeAleatorio = mensajeAleatorio.replace("[Nombre]", prompt("Ingresa tu nombre"));

    // Mostrar el mensaje en un alert
    alert(mensajeAleatorio);
}