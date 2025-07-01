// Registra el tiempo de inicio
// --- Botón A: Incrementa felicidad ---
input.onButtonPressed(Button.A, function () {
    // Muestra cara feliz
    basic.showIcon(IconNames.Happy)
    nivelFelicidad += 1
    // Reinicia el temporizador
    ultimaInteraccion = control.millis()
})
// --- Gesto Agitar: Saludo de "Buenos Días" ---
input.onGesture(Gesture.Shake, function () {
    if (nivelFelicidad == 1 && nivelEnergia == 1) {
        // Asegúrate de que estas condiciones se puedan cumplir
        basic.showString("Buenos Dias")
    }
    // Reinicia el temporizador
    ultimaInteraccion = control.millis()
})
// --- Botón AB: Muestra números y verifica condición especial ---
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(nivelFelicidad)
    basic.showNumber(nivelEnergia)
    if (nivelFelicidad == 5 && nivelEnergia == 5) {
        nivelEnergia += 1
        nivelFelicidad += 1
    }
    // Reinicia el temporizador
    ultimaInteraccion = control.millis()
})
// --- Botón B: Incrementa energía ---
input.onButtonPressed(Button.B, function () {
    // Muestra un corazón
    basic.showIcon(IconNames.Heart)
    nivelEnergia += 1
    // Reinicia el temporizador
    ultimaInteraccion = control.millis()
})
let ultimaInteraccion = 0
let nivelEnergia = 0
let nivelFelicidad = 0
// Inicialización al iniciar el Micro:bit
// Puedes empezar en 0 o en 1 si quieres una cara feliz al inicio
nivelFelicidad = 0
nivelEnergia = 0
// Registra el tiempo de inicio
ultimaInteraccion = control.millis()
// Nueva variable para el temporizador
// --- Bloque al iniciar ---
basic.forever(function () {
	
})
// --- Bucle "para siempre": Lógica de inactividad y visualización ---
basic.forever(function () {
    // Si han pasado más de 10 segundos (10000 milisegundos) desde la última interacción
    // Si no está inactivo, muestra el icono basado en la felicidad o energía
    // Aquí podrías decidir qué mostrar por defecto si no hay inactividad
    // Por ejemplo, si quieres que muestre una cara feliz por defecto
    // o la cara basada en el nivelFelicidad.
    // Por ahora, no haremos nada aquí, ya que tus botones ya muestran íconos.
    // Si quieres un "estado por defecto" cuando no está triste, aquí iría.
    if (control.millis() - ultimaInteraccion > 10000) {
        // Muestra la cara triste
        basic.showIcon(IconNames.Sad)
        // Pausa para que la cara triste sea visible por 1 segundo
        basic.pause(1000)
    } else {
    	
    }
})
