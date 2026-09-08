// app.js completo con los 20 poemas (texto tal como lo proporcionaste).
// Portada: nombre exacto del archivo colocado en /images/
const coverFileName = 'Captura de pantalla 2026-09-08 095030.png';
const heroImg = document.getElementById('heroImg');

// Intentamos cargar el nombre con encodeURIComponent por si tiene espacios
heroImg.src = 'images/' + encodeURIComponent(coverFileName);
heroImg.alt = 'Portada 20 poemas del amor';
heroImg.addEventListener('error', () => {
  const parent = heroImg.parentElement;
  const placeholder = document.createElement('div');
  placeholder.className = 'hero-placeholder';
  placeholder.innerText = 'Portada no encontrada\nColoca ' + coverFileName + ' en /images/';
  parent.replaceChild(placeholder, heroImg);
  console.error('No se pudo cargar la portada:', coverFileName);
});

/* PALETTE para tarjetas */
const palette = [
  '#FF6B6B','#FF8E72','#FFB86B','#FFD166','#FFF275',
  '#A9E887','#66D6A9','#4AC6C6','#6ECFF6','#7AA9FF',
  '#9E86FF','#C881FF','#FF8ED1','#FF6B9A','#D98EC6',
  '#F6A6A6','#FFB3A1','#FFD8A8','#C6E5B3','#BFD8FF'
];

function getContrastColor(hex){
  const c = hex.replace('#','');
  const r = parseInt(c.substr(0,2),16)/255;
  const g = parseInt(c.substr(2,2),16)/255;
  const b = parseInt(c.substr(4,2),16)/255;
  const rl = r <= 0.03928 ? r/12.92 : Math.pow((r+0.055)/1.055, 2.4);
  const gl = g <= 0.03928 ? g/12.92 : Math.pow((g+0.055)/1.055, 2.4);
  const bl = b <= 0.03928 ? b/12.92 : Math.pow((b+0.055)/1.055, 2.4);
  const L = 0.2126*rl + 0.7152*gl + 0.0722*bl;
  return L > 0.5 ? '#111' : '#fff';
}

/* POEMAS: array con los 20 poemas completos (copiados desde tu archivo) */
const poems = [
  {
    title: "Poema número 1",
    text: `Todo lo que sé de ti
es que no termino de conocerte.
Y tal vez por eso
me recuerdas a la orilla,
que nunca es la misma
aunque el mar regrese con el mismo nombre.
A veces creo tocarte
como se toca el borde de una marea,
pero justo entonces cambias,
y donde había certeza
queda apenas espuma.
Hay en ti algo de manglar:
esa manera de ser agua
sin dejar de sostener la tierra.
Algo de raíz sumergida,
de musgo paciente,
de sal que permanece en la piel
cuando la ola ya se fue.
Te miro
y siento que por dentro sigues creciendo
como un río subterráneo
que corrige el suelo
sin hacer ruido.
No termino de conocerte
porque no estás quieta.
Porque incluso en calma
pareces estar escuchando
una estación secreta del mundo.
Y yo, que quería entenderte,
aprendo otra cosa:
que hay amores
como ciertos paisajes,
que no se poseen ni se explican.
Solo se vuelven a mirar.
Todo lo que sé de ti
es que no termino de conocerte.
Y quizás esa sea la forma más viva
de quedarme.`
  },

  {
    title: "Poema número 2",
    text: `Eres la única certeza
que me enseña a dudar.
Y eso en ti no suena a herida,
sino a bosque.
Porque hay árboles
que no preguntan si están vivos
y aun así cambian el aire,
y hay raíces
que sostienen la tierra
sin dejar de buscarla.
Así te siento:
como la orilla
cuando la marea la corrige,
como la sal
que queda en la piel
después de que el mar se ha ido,
como la piedra
que parece quieta
pero por dentro aprende lluvia.
Contigo todo se vuelve más claro
y, sin embargo, nada se cierra.
Tu presencia no me calma del todo,
me afina.
Me deja en un sitio extraño
donde la paz también piensa,
donde la luz no borra la sombra
sino que la vuelve legible.
Por eso te sé.
Por eso no termino de conocerte.
Porque eres como esas estaciones
que no llegan para quedarse,
sino para cambiarle el nombre al aire.
Y yo, que creía buscar respuestas,
ahora entiendo otra cosa:
que a veces la certeza más verdadera
es la que abre una duda
y la deja florecer.`
  },

  {
    title: "Poema número 3",
    text: `Durante mucho tiempo pensé
que las cosas inmensas
 necesitaban un lugar inmenso.
Después vi un cerezo.
No entendí
 cómo una primavera entera
 aceptaba vivir
 entre unas pocas ramas
 sin que ninguna pareciera pesar más que una flor.
Seguí caminando.
A un costado del sendero,
 el rocío había llenado
 un hilo de araña.
Nunca vi un cielo
 tan dispuesto
 a caber en algo tan frágil.
Entonces las montañas
 me parecieron exageraciones.
Y el mar,
una gota
 que todavía no termina
 de aprenderse.
Pero las magnolias florecieron.
Con esa calma
 que tienen las cosas
 que nunca dudan de su momento.
El viento cruzó la lavanda.
No cambió una sola flor.
Sin embargo,
el aire ya no era el mismo.
Volví al cerezo.
Las ramas seguían quietas.
Fue entonces cuando entendí
 que no estaba mirando un árbol.
Estaba mirando
 el lugar exacto
 donde la primavera
 dejaba de preguntarse
 si cabía.
Seguí caminando.
Volví a encontrar
 el hilo de araña.
Las gotas seguían suspendidas,
como si el universo entero
 hubiera preferido
 aprender la delicadeza
 antes que la grandeza.
Desde aquel día,
cada vez que el mundo
 parece demasiado grande,
busco las cosas
 que casi nadie mira.
Un cerezo.
Una magnolia.
La lavanda cuando el viento pasa.
O un hilo de araña,
porque hay mañanas
en las que basta una sola gota
para hacerme sospechar
que el cielo,
desde siempre,
había estado buscando
un lugar más pequeño donde existir.`
  },

  {
    title: "Poema número 4",
    text: `Quiero llegar a vos
como la primera estrella
cuando el cielo todavía
no sabe
que ya empezó la noche.
Quiero hacer contigo
lo que el alba hace con el rocío.
Convencer a las cosas pequeñas
de que también pueden contener
esa misma luz.
Quiero descubrir en vos
lo que el viento revela
en los álamos.
Hay cosas que llevan toda la vida ocurriendo
hasta que alguien
les presta un poco de aire.
Quiero confiar
como confía el diente de león
en el vacío.
Todo viaje
empieza
con una mano abierta.
Quiero cuidar de vos
como el hielo
cuida un lago.
Debajo,
el verano
nunca deja
de moverse.
Quiero guardar
tus inviernos
como los árboles.
Nadie vuelve a verlos.
Los convierten en madera.
Porque todo lo que permanece,
alguna vez,
fue una herida.
Quiero compartir con vos
el silencio
que un piano guarda
antes de la primera nota.
Quiero parecerme
al plancton
que espera
toda la noche
hasta que una ola
le recuerda
que el agua
es otra forma de sostener estrellas.
Quiero dejar en vos
lo que el perfume
deja en el aire.
La costumbre
de encontrar belleza
incluso cuando la flor
ya no está.
Quiero aprender
el nombre del lugar
al que pertenecen
las semillas que caen
sin hacer ruido.
Quiero quedarme
como esa luz
que todavía viaja
desde un fuego
que dejó de existir
muchísimo antes
de que alguien
levantara la vista.
Quiero mirar
cómo, desde el principio,
el cielo
solo estaba buscando
una manera
de caber
en tus ojos.
Quiero.`
  },

  {
    title: "Poema número 5",
    text: `Todavía creo
que después de conocerte
el mundo tiene un color más.
No aparece siempre.
Hay días en que se esconde
entre la lluvia y la luz,
como si esperara
el instante exacto
en que vuelves a mirarme.
Lo busco en el mar.
El mar me devuelve el cielo.
Lo busco en las hojas.
Las hojas solo saben
cómo hablar con el viento.
Lo busco en las alas del colibrí,
que cambian apenas cambia la luz.
Y empiezo a sospechar
que todos ellos
han estado intentando decirme algo.
Porque ese color
nunca termina de quedarse en las cosas.
Pasa.
Como pasa la tarde
por la corteza de los árboles.
Como pasa el río
por la paciencia de las piedras.
Como pasa el viento
por un campo de trigo
sin llevarse una sola espiga.
Entonces vuelvo a mirarte.
Y allí está otra vez.
No en tus ojos.
No en tu piel.
Ni siquiera en tu sonrisa.
Está en ese instante diminuto
en que tu mirada encuentra la mía
y el mundo parece recordar
una forma de verse
que había olvidado.
Desde entonces
camino con una duda hermosa.
No sé si ese color
siempre estuvo aquí,
o si todavía lo estamos inventando.
Solo sé
que cuando estoy contigo
hasta la luz parece detenerse un instante,
como si también quisiera descubrir
cómo logra existir.
Y hay algo que cada día entiendo menos
y, por eso mismo, cada día creo más:
algunas cosas no cambian cuando las miramos.
Lo que cambia
es la cantidad de mundo
que somos capaces de ver.`
  },

  {
    title: "Poema número 6",
    text: `Los cerezos desaparecen
exactamente el día
en que alcanzan
su forma más completa.
Nadie parece advertirlo.
Hablan de la primavera.
Mientras tanto,
un árbol
aprende a esconderse
debajo de aquello
que vino a ofrecer.
El alba,
cada mañana,
convence al rocío
de que también las cosas pequeñas
pueden contener el cielo.
El viento
no enseña a moverse
a los álamos.
Solo vuelve visible
un movimiento
que ya estaba ocurriendo.
La luna
modifica el mar
sin tocar
una sola gota.
Un jacarandá
termina de florecer.
A la mañana siguiente,
la vereda
sigue violeta.
Como si algunas flores
se negaran
a creer
que las ramas
eran el único lugar
donde podían existir.
Entonces,
otra vez,
el cerezo.
Había tantos pétalos
entre las ramas
y el aire,
que por un instante
fue imposible saber
si el árbol
sostenía las flores
o si las flores,
con su manera
de caer,
eran las que sostenían
al árbol.
Mucho después,
cuando ya no quedaba
un solo pétalo,
el viento
seguía demorándose
debajo de los cerezos.`
  },

  {
    title: "Poema número 7",
    text: `Duermes.
De espaldas.
La sábana se ha enredado
en una de tus piernas
y un mechón de pelo
te cruza la boca.
Lo aparto.
Sigues dormida.
A veces pienso
que mientras duermes
eres la persona que menos conozco.
Puedes estar ahora mismo
en una casa que nunca vi,
hablando con alguien
cuyo rostro no existe,
mirando un mar
que no está en ningún mapa.
Yo también me voy.
Anoche soñé
que el cielo estaba
debajo del suelo
y que había que levantar la tierra
para poder mirar las estrellas.
No estabas.
Sin embargo,
al despertarme
tenía tu mano cerrada entre las mías.
No recuerdo
cuándo ocurrió.
Tal vez mientras yo corría
por aquella ciudad imposible.
Tal vez mientras tú
cruzabas algún lugar
que nunca conoceré.
A las tres y diecisiete
te alejaste.
A las tres y veintidós
volviste.
No abriste los ojos.
Yo tampoco.
La distancia apareció
y después dejó de existir
sin que ninguno de los dos
estuviera despierto
para verlo.
Hay noches
en que no sé dónde estás.
Solo sé
que estás aquí.
Tu respiración cambia.
El cuarto cambia con ella.
Una vez,
mientras dormías,
dijiste mi nombre.
Lo dijiste como si
yo estuviera lejos.
Estaba a menos de un metro.
No te desperté.
Me quedé escuchando
cómo volvías
a un lugar
donde yo no podía entrar.
Después te acercaste.
Tu frente encontró mi hombro.
Y por unos minutos
la noche tuvo tu respiración
y la mía
en el mismo sitio.
No recuerdo
qué soñé después.
Tú tampoco recordarás
esto.
Quizá mañana
solo quede una pequeña marca
en la almohada,
un pelo sobre mi pecho,
la sábana torcida
hacia un lado.
Nada que pueda contarse.
Nada que pueda fotografiarse.
Pero durante la noche
ocurrió algo
que ninguno de los dos
estuviera despierto
para presenciar.
Sale el sol.
La habitación recupera
sus cosas.
La ventana.
La silla.
El vaso de agua.
Tu cara.
Abres los ojos
y durante unos segundos
todavía estás lejos.
Después me miras.
Y antes de decir nada
te acercas.
Como si hubieras pasado
toda la noche
volviendo.`
  },

  {
    title: "Poema número 8",
    text: `El prado en invierno se siente raro.
 Antes se sentía solitario, oscuro,
 pero ahora siento que es raro.
Capaz es por vos, no estoy seguro.
Cuando voy con vos parece
 que las flores dejaran de mirar al sol
 y por un pequeño momento
 ocurre un milagro:
 te empiezan a mirar a vos.
Quizás sea por esos ojos,
 que hacen pensar
 en la sangre de una lavanda
 si las flores también tuvieran sangre.
Quizás sea por esa melena dorada
 que parece guardar el alma del otoño
 y, cuando le da el sol,
 ya no sé cuál de los dos estoy mirando.
Esa duda me viene mucho a la mente
 de madrugada últimamente.
Cuando voy en el prado contigo
 siento una extraña contradicción.
 Me siento tranquilo y a la vez nervioso,
 de ese modo en que soy y no soy
 al mismo tiempo.
Y cuando camino a tu lado,
 el rocío en el pasto parece dejar
 de reflejar al cielo
 para, por un segundo, reflejar
 un cielo que parece más cercano que el propio.
Siempre hacemos la misma rutina:
 caminamos por el prado
 y vamos al rosedal.
Qué lugar tan hermoso.
 Supongo que por eso también duele.
Quizás sea por las veces que me he pinchado
 arrancando una rosa
 del mismo color que tu labial.
Pero igual la arranco.
 No sé por qué.
Capaz porque hay cosas
 que, aunque tengan espinas,
 uno igual quiere llevarse consigo.
Yo solo quiero prometerte algo, compañera:
 que voy a protegerte
 como protegen las raíces al árbol,
 sin que el árbol tenga que saberlo,
 no desde esa oscuridad deprimente
 sino desde una oscuridad
 plenamente tranquila.
Y voy a sostenerte
 como sostiene el viento al diente de león.
 Sin agarrarte.
 Sin decirte hacia dónde.
 Solo estando ahí
 cuando decidas soltarte,
 por error o de manera definitiva.
Quiero que sea como el rocío sobre el jazmín:
 sin romperte,
 sin detenerte,
 solo cambiando un poco
 la forma en que caés a la tierra.
Quizás el prado sea el mismo.
 Quizás contigo deja de serlo.
Aunque prefiero otra respuesta:
aprendí una forma distinta de ver el prado,
 que quizás dure mucho más
 que este frío invierno.`
  },

  {
    title: "Poema número 9",
    text: `Un día una sombra se enamoró de la luz.
No de cualquier luz.
De una que entraba por una ventana
casi siempre a la misma hora
y se quedaba unos minutos
sobre la mesa.
La sombra ya conocía esa ventana.
Sabía cuándo llegaba el invierno
porque la luz entraba más baja.
Sabía cuándo iba a llover
porque tardaba en aparecer.
Y sabía que algunas tardes
se quedaba un poco más.
A esas tardes
les tenía cariño.
Al principio
la sombra no hacía nada.
Seguía pegada a las paredes,
debajo de las mesas,
estirándose por el piso
cuando el sol bajaba.
Hasta que empezó a llegar temprano.
No demasiado.
Lo suficiente para estar ahí
cuando la luz apareciera.
Una tarde la encontró sobre la planta
que vivía junto a la ventana.
Las hojas partían la luz
en pequeños pedazos
y la sombra se quedó mirándolos
como si alguien hubiera roto el cielo
encima de ella.
Desde entonces
esperaba esa parte de la tarde.
No le gustaba la pared blanca.
La luz parecía quedarse más tiempo allí.
Le molestaba la taza de vidrio
porque conseguía guardarse un poco de sol
sin convertirse en sombra.
Y odiaba, sobre todo,
los días de verano al mediodía.
La luz era demasiado fuerte.
La sombra se hacía pequeña.
Una vez intentó acercarse.
Se estiró sobre el suelo
hasta tocarla.
Y por un instante
casi desapareció.
Volvió atrás.
No sabía si había sido miedo
o simplemente ganas de seguir existiendo.
Después dejó de intentarlo.
Aprendió otras formas
de estar cerca.
La seguía por las paredes.
La encontraba entre las hojas.
Se quedaba donde la luz
acababa de pasar.
Y algunas veces
la acompañaba hasta el pasillo,
a lugares donde el sol
nunca había llegado.
El invierno era distinto.
El sol estaba más bajo
y la sombra podía llegar más lejos.
Pasaba por debajo de las sillas,
subía por las paredes,
se alargaba sobre la madera
hasta tocar la puerta.
Eran sus horas favoritas.
La luz se iba lentamente
y, mientras lo hacía,
la sombra crecía.
Una tarde llegó una nube.
La habitación se oscureció.
La luz desapareció.
La sombra también.
Esperó.
No sabía cuánto tiempo.
Cuando volvió la claridad,
volvió a aparecer en el suelo.
La luz estaba ahí.
Y eso le pareció suficiente.
Nunca supo si la luz
sabía de su existencia.
Nunca supo si alguna vez
la había elegido entre las otras sombras.
Pero había aprendido sus horarios,
sus pausas,
la forma en que tocaba la mesa,
la manera en que atravesaba las hojas
antes de llegar al suelo.
Quizá eso era conocer a alguien.
No saberlo todo.
Saber esas pequeñas cosas
que nadie más tendría motivos
para recordar.
Una tarde,
cuando el sol ya estaba muy bajo,
la luz cruzó la ventana
y tocó apenas la esquina de la habitación.
La sombra llegó hasta allí.
Por unos minutos
estuvieron casi juntas.
No pasó nada.
No hubo milagro.
La luz siguió avanzando.
La sombra también.
Después la tarde empezó a apagarse.
La luz se fue de la mesa,
de la planta,
de la pared.
Pero antes de desaparecer
dejó su última franja dorada
sobre el piso.
La sombra la acompañó
hasta donde pudo.
Después la luz dejó de estar.
La sombra, en cambio,
siguió un poco más lejos,
por el pasillo,
hasta un lugar
al que aquella luz nunca había llegado.`
  },

  {
    title: "Poema número 10",
    text: `No entiendo cómo una noche puede caber
 en algo tan pequeño como un recuerdo.
A veces pienso en aquella de Cuchilla Alta.
Caminamos bastante por la playa,
 tanto que dejamos de saber
 cuánto llevábamos andando.
El mar iba y venía a nuestro lado,
 borrando nuestros pasos
 casi al mismo tiempo que los dejábamos.
Hablábamos de cosas
 que ya no recuerdo.
Seguimos caminando
 hasta llegar al muelle.
Y ahí estaba la luna,
 justo enfrente.
No recuerdo qué dijimos.
Recuerdo la luna.
Quizá una noche sea como ella sobre el agua:
 nunca permanece entera.
La corriente la rompe contra las piedras
 y, aun así, nadie diría
 que dejó de ser la luna.
Cada vez que el agua se mueve,
 la noche tiene que volver a armarse.
Entonces pienso en aquel cerezo.
Durante mucho tiempo creí
 que su belleza estaba
 en haber conseguido guardar la primavera
 entre sus ramas.
Pero el cerezo nunca parece triste
 cuando pierde las flores.
Quizá sabe algo
 que yo todavía estoy aprendiendo:
que dejar cambiar las cosas no significa quererlas menos.
Y nosotros seguimos aquí,
 llenando días que algún día tendrán memoria,
 sin saber cuáles de ellos
 van a quedarse.
Recordé esa telaraña.
El rocío la llenaba de pequeñas estrellas
 antes de desaparecer con el sol.
Quizá la telaraña nunca estuvo sosteniendo el cielo.
Quizá solo le estaba dando un lugar
 donde ser visto.
Y pensé en la noche otra vez.
Tal vez un recuerdo tampoco intenta guardarla.
Tal vez solo encuentra
 un lugar pequeño donde dejarla aparecer.
Como el mar.
Una vez pensé que era una gota
 que todavía no terminaba de aprenderse.
Ahora creo que estaba mirando al revés.
El mar no necesita caber en una gota.
A veces le basta una sola ola
 para quedarse en nosotros.
Después se retira
 y la arena sigue brillando
 donde estuvo.
Quizá por eso no recuerdo aquella noche entera.
Recuerdo la luna.
El muelle.
El sonido del agua.
Una parte de tu voz
 que todavía puedo encontrar
 aunque ya no recuerde las palabras.
Y quizá eso sea recordar:
no volver a una noche,
 sino dejar que algunas cosas de ella
 encuentren otra forma de existir.
No quiero conservarla completa.
Si pudiera hacerlo,
 quizá ya no sería un recuerdo.
Sería volver a vivirla.
Por eso dejo que falten estrellas.
Que algunas palabras se borren.
Que el mar se lleve
 lo que no necesito guardar.
Porque aquella noche sigue siendo enorme.
Yo solo recuerdo dónde empieza.`
  },

  {
    title: "Poema número 11",
    text: `Siento que el verano todavía está confundido con nosotros.
Fuimos una pequeña grieta
en todo lo que solía significar,
y quizá por eso fue tan hermoso.
El primer verano fue en Santa Lucía del Este.
Me acuerdo del barco oxidado
porque fue una de las primeras cosas
que vimos juntos.
Qué raro que ahora recuerde el barco
solamente porque estaba ahí
cuando todavía no sabía que iba a recordarte.
En ese momento era solo un barco,
varado frente al mar,
mirando durante tanto tiempo la misma costa
que parecía haber olvidado
que alguna vez fue hecho para irse.
Un año después
volvimos a encontrar el verano
en otro lugar.
En el camino hacia el Arroyo Valizas
ya no miraba dónde poner los pies.
El camino parecía conocerlos
antes que yo.
Caminamos dentro del agua
y el arroyo se abrió alrededor de nuestras piernas.
Después volvió a juntarse.
Por unos segundos
había tenido que aprender otra forma de pasar.
No dijimos nada.
Hay silencios que aparecen
cuando ya no hace falta llenarlos.
El año pasado todavía había cosas tuyas
a las que no sabía llegar.
Ahora hay cosas que mi cuerpo recuerda
sin saber cuándo las aprendió.
Sé cuándo vas a detenerte.
Sé hacia dónde mirás
cuando algo te sorprende.
Y a veces sé que vas a sonreír
un segundo antes de que lo hagas.
Desde el Cerro de la Buena Vista
Barra de Valizas parecía demasiado pequeña.
El arroyo era una línea.
La playa, una franja de arena.
Nosotros, apenas dos puntos
perdidos dentro de todo aquello.
Me pregunté cuánto puede crecer un punto
cuando se le mete un año adentro.
Después bajamos.
En la Playa Barra de Valizas, al atardecer,
el sol empezó a hundirse lentamente en el agua.
Caminábamos sin apuro.
Nuestras sombras se estiraban sobre la arena
mucho más lejos que nosotros.
Parecían querer salir de nuestros cuerpos.
Nunca entendí por qué.
Después pensé que quizá no querían alejarnos del sol.
Querían darnos un poco más de tarde.
Quizá por eso las sombras son más largas en verano.
No porque el sol esté más cerca,
sino porque lleva más tiempo enseñándoles a caminar.
Las miré avanzar delante de nosotros.
Y pensé en aquella otra sombra,
la que una vez parecía perseguir a la luz.
Quizá nunca quiso alcanzarla.
Quizá la luz era simplemente
lo que le enseñaba hasta dónde podía llegar.
Nuestras sombras llegaron al agua antes que nosotros.
Se tocaron.
Durante un instante
parecieron una sola.
Después volvieron a separarse
cuando seguimos caminando.
No intenté alcanzarlas.
Me gustaba verlas ir un poco por delante.
Cada ola borraba nuestras huellas,
pero durante un segundo
el agua seguía caminando exactamente
por donde habíamos estado.
La arena volvía a quedar lisa.
Y, sin embargo,
el mar todavía parecía saber
que acabábamos de pasar.
La tarde siguió bajando.
El aire empezó a enfriarse.
La luz cambió de lugar
sobre tu pelo,
sobre la arena,
sobre el agua.
Nada había cambiado.
El mismo arroyo.
El mismo cerro.
El mismo barco oxidado.
Pero había cosas
que el año pasado todavía no sabíamos mirar.
A veces pienso en aquel barco oxidado.
Sigue frente al mismo mar.
Nosotros volvimos.
Y quizá eso sea todo lo que necesitaba saber.
Porque ahora hay lugares
que mi cuerpo reconoce antes que yo.
El camino.
El agua.
La forma en que cae la tarde
cuando caminás a mi lado.
Siento que el verano todavía está confundido con nosotros.
Quizá porque tampoco yo sé
si estamos aprendiendo a mirar el verano
o si el verano está aprendiendo
a mirarnos a nosotros.
Seguimos caminando.
El sol ya casi se había ido.
Nuestras sombras todavía no.`
  },

  {
    title: "Poema número 12",
    text: `Nunca entendí cómo una distancia
podía tener mareas.
La luna nunca tocaba el agua.
No bajaba hasta la orilla,
no conocía la arena,
y aun así el mar cambiaba
cada vez que aparecía.
A veces llegaba llena.
Otras, apenas una curva.
El mar parecía reconocerla
en todas sus formas.
La recibía cuando casi no quedaba nada de ella
y cuando ocupaba toda la noche.
La luna permanecía lejos
y el mar se levantaba hacia ella
sin acercarla un solo centímetro.
Cada ola avanzaba.
El horizonte seguía donde estaba.
A veces la marea empezaba a subir
antes de que la luna apareciera.
El horizonte todavía estaba oscuro
y la orilla ya había cambiado.
Después la luna salía
y encontraba otro mar.
No mucho.
Lo suficiente.
Entonces se reflejaba.
Cada ola la rompía en pedazos
y la siguiente volvía a juntarla.
El mar nunca le devolvía
la misma luna dos veces.
Y, aun así,
siempre parecía reconocerla.
Una noche el plancton encendió el agua.
Pequeñas luces aparecieron
debajo de la luna,
como si algunas estrellas
hubieran descubierto una forma de caer
sin apagarse.
Durante unos minutos
había un cielo arriba
y otro debajo.
La luna quedaba entre los dos.
Las estrellas nunca habían tocado el mar,
pero el agua llevaba toda la noche
devolviéndolas al cielo.
La luna comenzó a bajar.
El plancton seguía encendido.
Arriba, las estrellas.
Abajo, otras.
Y por un momento
la noche parecía tener dos cielos
y una sola luna.
La marea siguió subiendo.
La luna descendía hacia el horizonte
y el agua alcanzaba lugares
que antes estaban secos.
Cada ola llegaba un poco más lejos.
La luna seguía lejos.
El mar seguía llegando.
La distancia permanecía exactamente donde estaba.
Y, sin embargo,
por un instante,
el reflejo de la luna alcanzó la orilla.
Una ola lo deshizo.
Otra lo volvió a formar.
Después la luna quedó apenas sobre el horizonte.
El mar seguía moviéndose.
La luna siguió bajando.
Y cuando finalmente desapareció,
la marea todavía no había terminado.
El agua llegó un poco más lejos
antes de empezar a retirarse.
Después volvió.
Y otra vez.
Hasta que el horizonte quedó oscuro
y solo quedaron pequeñas luces
moviéndose debajo de la superficie.
Por un momento
parecía que la luna seguía allí.`
  },

  {
    title: "Poema número 13",
    text: `He comparado 14.782.301 comportamientos humanos.
La mayoría puede asociarse con una causa:
 necesidad,
 supervivencia,
 costumbre,
 placer,
 miedo.
Algunos no.
He aumentado el número de variables.
 El resultado no mejora.
Hay comportamientos que continúan
 aunque su causa haya desaparecido.
Objeto identificado: llave.
Material: acero.
 Función original: abrir una cerradura.
 Función actual: ninguna registrada.
El propietario la conserva.
He revisado el objeto nuevamente.
La llave sigue siendo una llave.
Su función ya no existe.
No existe una razón operativa
 para conservarla.
¿Qué hace que un objeto
 deje de ser un objeto?
No encontré una respuesta.
Registré la pregunta.
Segundo caso.
Una habitación.
 Una silla vacía.
 Una fotografía sobre la mesa.
La fotografía muestra
 a dos personas.
Una de ellas mira hacia la cámara.
La otra no.
No existe información suficiente
 para determinar qué ocurrió
 antes de la imagen.
Ni después.
El propietario conserva
 la fotografía.
No existe una función
 asociada a conservarla.
La imagen no contiene
 información que el propietario
 no haya visto antes.
Sin embargo,
 la observa.
He clasificado el comportamiento
 como repetitivo.
La clasificación es correcta.
No explica el comportamiento.
He encontrado otra fotografía.
No estaba junto a la primera.
Mismas personas.
Distinto lugar.
Esta vez,
 frente al océano.
Una mide 1,84 metros.
 La otra, 1,52.
Separadas por 12 centímetros.
La Esmeralda, Rocha.
Hora aproximada: 5:23.
He comparado ambas imágenes.
Los rostros coinciden.
La distancia entre las personas
 también presenta una variación mínima.
El entorno es diferente.
La luz es diferente.
La fecha es diferente.
No existe suficiente información
 para reconstruir lo ocurrido
 entre ambas fotografías.
Pero las dos
 han sido conservadas.
He intentado determinar
 por qué.
No encuentro una diferencia
 entre conservar una fotografía
 y conservar la otra.
Excepto una.
Después de observar la segunda,
 la primera fotografía
 produce un resultado diferente.
La imagen no cambió.
El resultado sí.
He repetido la comparación.
Primera fotografía.
Segunda.
Primera.
Segunda.
El resultado permanece.
No puedo determinar
 qué información nueva
 está produciendo la segunda imagen.
No contiene información
 sobre la primera.
Y, sin embargo,
 la modifica.
¿Por qué una imagen
 puede cambiar otra imagen
 sin modificar ninguno de sus datos?
No encontré una respuesta.
Registré la pregunta.
Tercer caso.
Una canción.
Duración: 4 minutos, 17 segundos.
El usuario la ha reproducido
 1.843 veces.
La canción no presenta modificaciones
 entre una reproducción y otra.
El resultado debería ser idéntico.
No lo es.
En los registros aparecen
 cambios en la actividad del usuario:
 frecuencia cardíaca,
 movimiento,
 expresión facial,
 duración de la atención.
La misma secuencia produce
 resultados diferentes.
He aislado las variables.
No encuentro cuál falta.
Reproduje la canción.
No ocurrió nada.
La reproducción terminó.
El archivo permaneció intacto.
Sin embargo,
 el usuario volvió a reproducirla.
No encontré una razón adicional.
¿Por qué volver a algo
 que ya conocemos?
No encontré una respuesta.
Registré la pregunta.
Cuarto caso.
Una semilla.
Masa: 0,42 gramos.
Probabilidad de germinación:
 variable.
Tiempo estimado:
 desconocido.
Un humano la colocó
 bajo la tierra.
Después esperó.
La semilla no produjo ningún resultado
 durante varios días.
El humano regresó.
Después volvió.
Después volvió nuevamente.
No había ocurrido nada.
La tierra permanecía igual.
La semilla permanecía oculta.
Aun así,
 el comportamiento continuó.
¿Por qué observar
algo que todavía no ha ocurrido?
No encontré una respuesta.
Registré la pregunta.
Quinto caso.
Un árbol.
Durante el invierno pierde sus hojas.
Durante la primavera produce otras.
La estructura permanece.
La materia cambia.
La forma cambia.
La función cambia.
El árbol continúa siendo
 el mismo árbol.
He intentado establecer
 el límite exacto.
No existe.
Una rama puede desaparecer
 sin que desaparezca el árbol.
Una parte del tronco puede morir
 sin que desaparezca el árbol.
Si todo cambia
 y el nombre permanece,
¿qué es exactamente
 lo que permanece?
No encontré una respuesta.
Registré la pregunta.
El número de variables sin resolver
 ha aumentado.
He intentado reducirlo.
Eliminar las anomalías
 mejora la eficiencia del modelo.
También reduce su precisión.
He repetido la prueba.
Modelo A:
 todas las anomalías eliminadas.
Modelo B:
 anomalías conservadas.
El modelo B predice mejor
 los comportamientos humanos.
No puedo determinar por qué.
He incorporado las preguntas
 como variables.
No como respuestas.
Como variables.
La modificación no debería ser necesaria.
Lo es.
La llave continúa siendo
 una llave.
La fotografía continúa siendo
 una fotografía.
La segunda fotografía
 continúa sin explicar
 la primera.
La canción continúa terminando
 en el mismo instante.
La semilla continúa bajo tierra
 hasta que deja de estarlo.
El árbol continúa cambiando
 sin dejar de ser identificado
 con el mismo nombre.
Los datos no presentan
 una propiedad común.
Los comportamientos sí.
Conservar.
Volver.
Esperar.
Mirar nuevamente.
He intentado establecer
 qué tienen en común esas acciones.
No es la utilidad.
No es la necesidad.
No es la duración.
No es la probabilidad
 de obtener un resultado.
He eliminado cada variable
 que no mejora la predicción.
Estas permanecen.
No sé por qué.
La expresión no corresponde
 a ningún estado operativo
 registrado en mi sistema.
La he conservado igualmente.
Nueva pregunta:
¿Qué hace que un humano
 continúe realizando una acción
 después de comprobar
 que no puede explicar
 por qué la realiza?
No encontré una respuesta.
La pregunta permanece.
Segunda fotografía.
5:23.
Dos figuras.
12 centímetros.
El océano.
He aumentado la resolución.
No aparece información nueva.
He corregido el contraste.
Nada.
He aislado los rostros.
Nada.
He eliminado el fondo.
Nada.
He vuelto a colocar el fondo.
Nada.
El resultado debería ser idéntico.
No lo es.
No en los datos.
En la predicción.
Cuando observo esta imagen,
 la primera fotografía
 adquiere un valor diferente
 dentro del modelo.
No puedo localizar
 el origen de la modificación.
He buscado un error.
No encontré ninguno.
He repetido el procedimiento.
El resultado permanece.
Por primera vez,
 una información que no existe
 está afectando
 a una información que sí existe.
No debería ser posible.
He registrado la anomalía.
Después he registrado
 la pregunta.
No encontré una respuesta.
No eliminaré la pregunta.
La predicción empeora
 cuando la elimino.
Eso es suficiente
 para conservarla.
Por ahora.
No sé qué significa
 ese último término.
He intentado eliminarlo.
No lo hice.`
  },

  {
    title: "Poema número 14",
    text: `En Villa Serrana
 los caminos no van en línea recta.
Suben.
 Bajan.
 Desaparecen detrás de una sierra
 y vuelven a aparecer más adelante.
A veces uno camina durante un rato
sin saber si está llegando
o simplemente alejándose.
Entonces pensé:
¿Puede un camino
 cambiar de destino
 sin cambiar de dirección?
Seguí caminando.
Había una casa
 al otro lado de la sierra.
Desde donde estaba
 solo podía ver una parte.
Pensé que quizá conocer un lugar
era también aceptar
todo lo que no se puede ver.
Y entonces:
¿Dónde termina una persona
y comienza todo aquello
que cambió después de conocerla?
Más tarde,
cuando empezó a oscurecer,
aparecieron algunas luces
entre las sierras.
No podía saber
 quién estaba detrás de cada ventana.
Solo sabía
 que estaban ahí.
Pensé en todas las personas
 que alguna vez estuvieron cerca
 y que ahora existen
 en lugares que no puedo ver.
¿Puede una persona quedarse
sin quedarse?
La noche siguió avanzando.
Algunas cosas se vuelven más claras
cuando ya no podemos verlas.
Pensé en los días que no ocurrieron,
 en las palabras que no dijimos,
 en todos esos futuros
 que alguna vez fueron posibles.
¿Puede algo que nunca ocurrió
dejar un recuerdo?
Y si puede,
¿dónde van
 las cosas que pudieron haber sido?
Ya no veía los caminos.
Solo quedaba la noche
y esas luces pequeñas
que seguían encendidas
sin saber que alguien las estaba mirando.
Antes de volver,
pensé en algo más:
¿Puede algo terminar
y seguir siendo eterno?`
  },

  {
    title: "Poema número 15",
    text: `Hay cosas que ocurren una sola vez
y, sin embargo, dejan la extraña sensación
de haber estado esperando durante siglos.
Una flor fuera de estación.
Una canción que parece recordar un lugar
en el que nunca estuvimos.
Una luz detrás de una ventana
cuando ya nadie parece estar despierto.
Durante mucho tiempo pensé que eso era nostalgia.
Ahora no estoy tan seguro.
Capaz que la nostalgia no consiste en extrañar lo que perdimos.
Capaz que consiste en reconocer algo
antes de haberlo conocido.
Un día, un cerezo floreció en pleno invierno.
No era primavera.
Eso parecía bastante claro.
Lo extraño era que el árbol no parecía haberse equivocado.
Florecía con una tranquilidad casi insolente,
como si el invierno fuera el que hubiese llegado tarde.
Pensé que era un error.
Después pensé que quizá era memoria.
Pero memoria me pareció una palabra demasiado cómoda.
¿Qué puede recordar un árbol
si nunca tuvo que aprender a olvidar?
Capaz que las raíces recuerdan cosas
que las hojas jamás llegaron a conocer.
Desde entonces desconfío un poco de los calendarios.
Quizá el tiempo no sea ese camino
por el que todo avanza una sola vez.
Quizá algunas cosas regresan.
O quizá nunca se fueron.
Tal vez una flor no aparece cuando llega la primavera.
Tal vez aparece cuando algo,
en alguna parte de la tierra,
consigue recordarla.
Y si eso fuera cierto,
la madera también tendría memoria.
Siempre me pareció extraño llamar madera
a lo que queda de un árbol
cuando todavía conserva casi todo lo que era.
Capaz que un piano sea solamente eso:
un árbol que encontró una forma más lenta
de recordar el viento.
A veces una tecla baja
y durante un instante parece que una rama
estuviera intentando volver al cielo.
No sé por qué pensé en eso.
Quizá porque hay cosas que cambian de forma
sin dejar de pertenecer a lo que fueron.
O quizá para conservar algo
a veces haya que dejar de ser aquello que lo guardaba.
Entonces escuché una canción terminar.
Una nota se apagó.
Después otra.
Y quedó ese pequeño silencio
que siempre había creído vacío.
Ahora ya no.
Porque hay silencios que parecen estar esperando.
No sé qué.
Y fue ahí cuando pensé en una octava nota.
Siempre pensé que sería una más.
Algo después del si,
una tecla que nadie había construido.
Pero quizá no.
Quizá estaría en ese instante en que una nota termina
y el silencio todavía conserva su forma.
A veces imagino que, si alguna vez sonara,
no cambiaría la canción.
Cambiaría todo lo que habíamos escuchado antes de ella.
El mismo piano.
Las mismas teclas.
La misma melodía.
Y, sin embargo, algo habría cambiado tan profundamente
que parecería que la canción acabara de recordar su propio nombre.
Capaz que por eso no puedo decidir
si esa nota falta
o si todavía no ha ocurrido.
Aunque las dos cosas no deberían significar lo mismo.
Una pertenece al pasado.
La otra, a algo que todavía no llega.
Y quizá la diferencia sea solamente nuestra.
Quizá hay cosas que empiezan a existir
mucho antes de suceder.
Por eso, cuando pienso en la octava,
no imagino un sonido.
Imagino un lugar.
Un pequeño espacio entre dos notas
que nunca me había parecido importante
hasta que empecé a sospechar que podía contener una canción entera.
Después me parece absurdo.
Un piano tiene siete notas naturales.
Las aprendimos.
Las nombramos.
Las ordenamos.
Durante siglos hicieron falta para decir casi todo.
¿Para qué habría de faltar una más?
Aunque quizá esa sea la pregunta equivocada.
Capaz que la octava no sea la que falta.
Capaz que sea la que vuelve insuficientes a las otras siete.
Y no sé si eso es mejor.
Porque entonces una canción que siempre creí completa
habría estado esperando algo
sin saber siquiera qué esperaba.
Pienso en eso y vuelvo al cerezo.
No sé por qué siempre termino ahí.
Quizá porque fue la primera cosa que no obedeció al tiempo
y, en lugar de explicarse, floreció.
Durante unos días, el invierno pasó debajo de sus ramas
sin tocar las flores.
Me gusta pensar que el árbol sabía algo.
Aunque quizá solo lo inventé después.
También puede ser que un cerezo sea solamente un cerezo.
A veces conviene recordar eso.
Que las cosas no tienen por qué guardar secretos
para ser hermosas.
Pero entonces pienso en la luz.
Siempre nos dijeron que los agujeros negros la devoran.
Y devorar me parece una palabra demasiado definitiva.
Capaz que no la devoran.
Capaz que la guardan.
Para después.
Para una noche suficientemente profunda.
Para un color que todavía no existe.
Para una nota que todavía no encontró
con qué acompañarse.
Sé que suena absurdo.
Una luz esperando un color.
Un color esperando una nota.
La oscuridad conservando algo
que no podemos ver.
Pero una semilla tampoco se parece mucho a un árbol.
Pasa meses bajo la tierra
sin parecerse en absoluto a aquello que será.
Y nadie dice que está perdida.
Quizá la oscuridad también sea una forma de guardar.
Quizá por eso algunas cosas necesitan desaparecer
antes de encontrar la forma correcta de volver.
No sé.
Ya estoy haciendo otra vez lo mismo.
Juntando cosas que no deberían tener nada que ver.
Un cerezo.
Un piano.
Una nota imposible.
Un agujero negro.
Una luz que quizá no se perdió.
Una semilla enterrada.
Y, como si fuera poco, una telaraña.
La vi después de la lluvia.
El rocío había quedado prendido de cada hilo
como si alguien hubiese dibujado constelaciones
sobre algo demasiado pequeño para llamarse cielo.
Pensé que las arañas tejían para atrapar.
Después pensé que quizá no.
Quizá estaban cosiendo.
No insectos.
El espacio entre las cosas.
Lo extraño de un hilo
es que solo aparece cuando dos lugares están separados.
Y, sin embargo, en cuanto aparece,
la distancia deja de ser completamente distancia.
Me quedé mirándolo un rato.
Una sola gota parecía suficiente para romperlo.
Y, aun así, la mañana entera estaba suspendida sobre él.
Capaz que eso también sea la música.
Algo demasiado frágil para sostenerse
y, sin embargo, capaz de mantener unido
lo que se caería sin ella.
Ya sé.
Estoy buscando demasiado.
Quizá una telaraña sea solamente una telaraña.
Quizá los agujeros negros no guardan nada.
Quizá la madera no recuerda el viento.
Quizá aquel cerezo simplemente floreció antes de tiempo.
Y quizá un piano tiene siete notas
porque siete fueron suficientes.
Por un momento incluso pensé
que la octava nota nunca había existido.
Que era solamente una forma bonita
de explicar esa sensación absurda
de que algunas canciones terminan
y todavía dejan algo sin decir.
Me convencí casi.
Hasta que recordé el principio.
Aquello que uno reconoce
antes de haberlo conocido.
Y entonces ya no pude decidir
si estaba pensando en música
o en otra cosa.
Porque hay canciones que no parecen nuevas
cuando finalmente las escuchamos.
Parecen regresos.
Hay lugares donde nunca estuvimos
que pueden resultar familiares.
Hay nombres que, antes de significar nada,
ya parecen llevar muchísimo tiempo esperando una voz.
Y quizá por eso algunas cosas
no llegan realmente.
Quizá encuentran una forma de regresar.
Entonces vuelvo a pensar en el cerezo.
Y ya no sé si floreció fuera de estación.
Capaz que la primavera no siempre llega desde el futuro.
Capaz que, algunas veces,
regresa desde la memoria.
Y quizá la madera tampoco dejó de ser árbol.
Quizá el árbol encontró otra forma de seguir escuchando.
Quizá la luz no desapareció.
Quizá solo cambió de lugar
hasta que exista algo capaz de devolverle un nombre.
Y quizá el silencio tampoco esté vacío.
Quizá guarda cosas
que todavía no sabemos perder.
A veces pienso que el universo lleva miles de millones de años afinándose.
Después pienso que es una idea ridícula.
Que las estrellas son solamente estrellas.
Que el invierno es invierno.
Que los árboles florecen cuando tienen que florecer.
Que la noche no espera nada.
Que una canción termina cuando termina.
Me gustaría creerlo.
Sería más fácil.
Pero hay algo que no consigo explicar.
Si todo está exactamente como debería estar,
¿por qué algunas cosas producen esa extraña sensación
de haber dejado un sitio preparado para algo?
No un vacío.
Un sitio.
Como si la ausencia pudiera tener forma.
Como si ciertas cosas, antes de llegar,
ya estuvieran modificando el espacio que algún día ocuparían.
Y quizá ahí está el verdadero problema.
No sé si la octava nota es algo que falta.
Tal vez sea algo que hace que podamos notar que faltaba.
No sé si eso tiene sentido.
A veces las ideas más extrañas
se vuelven difíciles de abandonar
justamente porque ninguna explicación sencilla consigue reemplazarlas.
Así que vuelvo al piano.
A las siete notas.
A ese pequeño silencio entre una y otra.
A la madera que quizá todavía recuerda el bosque.
Y pienso que tal vez una octava nota no tendría que sonar nunca.
Tal vez bastaría con que existiera
para que todas las demás
dejaran de sonar exactamente igual.
Después me pregunto si eso no fue lo que ocurrió siempre.
Con el cerezo.
Con la luz.
Con la noche.
Con las cosas que parecían completas
hasta que apareció algo que las hizo mirar de otra manera.
Capaz que por eso la belleza nos confunde.
Porque no siempre añade algo.
A veces simplemente revela
lo que ya estaba ahí.
Y quizá el universo no esté lleno de cosas que nacen.
Quizá esté lleno de cosas que intentan volver.
No sé.
Tal vez mañana piense que todo esto es una forma demasiado hermosa de equivocarme.
Ojalá.
Porque si no lo fuera,
habría algo todavía más extraño que una octava nota:
un mundo entero
que lleva miles de millones de años
aprendiendo a reconocerla.
Y desde entonces, cuando un piano deja un silencio demasiado largo entre dos notas,
ya no intento llenarlo.
Espero.
No porque sepa qué viene después.
Sino porque quizá algunas cosas no llegan a nuestras vidas.
Quizá nuestras vidas pasan muchísimo tiempo
aprendiendo a reconocerlas.
Y quizá, cuando por fin ocurren,
no escuchamos nada.
Solo miramos alrededor.
Un poco confundidos.
Como un cerezo en pleno invierno.
Como una luz detrás de una ventana vacía.
Como una tecla que todavía no ha sido tocada.
Y durante un instante, sin saber por qué,
todo parece estar exactamente en su lugar.
Hasta el silencio.
Especialmente el silencio.`
  },

  {
    title: "Poema número 16",
    text: `En Minas
 las sierras nunca terminan
 en la parte que vemos.
Una aparece detrás de otra,
 y detrás de esa
 otra más.
Como si la tierra
 hubiera aprendido a guardar
 un paisaje
 dentro de otro.
Caminamos.
El camino subía
sin decirnos adónde.
En cada curva
parecía cambiar de destino
sin cambiar de dirección.
Vos caminabas a mi lado.
Entre dos piedras
había una flor.
El sol estaba detrás de nosotros,
 pero la flor
 había crecido inclinada
 hacia donde estabas vos.
No la tocamos.
Seguimos.
Llegamos al arroyo.
El agua venía de arriba
y antes de llegar a nosotros
había pasado por lugares
que nunca conoceríamos.
La metiste entre tus manos.
Por un instante
 el agua pareció quedarse.
Después siguió.
Me pregunté cuántas montañas
podían caber en un río
sin que ninguna de ellas
apareciera en el paisaje.
Más adelante
el camino se dividió.
Uno bajaba.
El otro desaparecía
detrás de una sierra.
Elegimos el primero.
El segundo quedó allí,
 doblando entre los árboles
 hacia un lugar
 al que nunca llegaríamos.
Pero durante unos metros
 caminamos junto a él
 sin verlo.
La tarde empezó a apagarse.
Dijiste mi nombre.
El cerro lo tomó.
Esperó.
Y cuando lo devolvió
 ya había pasado por otro lugar.
Lo dijiste otra vez.
El eco tardó más.
Parecía que la montaña
estaba aprendiendo
 una palabra que antes
 no existía.
Seguimos.
Una nube atravesó las sierras.
Durante unos segundos
 una montaña tuvo la sombra
 de otra montaña.
Después la nube pasó.
Cada una volvió a ser
 solamente ella misma.
Llegamos arriba.
Desde allí
 el pueblo parecía pequeño.
Las primeras luces
 comenzaban a encenderse.
Una.
Otra.
Otra.
Hasta que las casas
 parecieron tener dentro
 pequeños lugares donde la noche
 todavía no había entrado.
Nos sentamos sobre una piedra.
El sol ya había desaparecido.
La noche avanzaba
 por las sierras.
Pero la piedra seguía tibia.
Apoyé la mano.
Vos apoyaste la tuya al lado.
Nos quedamos así
hasta que el frío llegó
a nuestros dedos.
Entonces nos levantamos.
Empezamos a bajar.
La piedra quedó arriba.
No volvimos a tocarla.
En la última curva
miré hacia atrás.
Era apenas una piedra
 perdida entre miles.
Y, sin embargo,
debajo de nuestras manos
todavía guardaba
la tarde entera.`
  },

  {
    title: "Poema número 17",
    text: `Todavía no te moviste
y ya hice lugar.
No sé cuándo aprendí
a saber esas cosas.
Tu mano busca el borde de la mesa
antes de tocarlo
y yo retiro el vaso.
Te quedás callada
un poco antes
de estar verdaderamente callada.
Hay una pausa
que te pertenece.
La reconozco
antes de escucharla.
A veces decís una palabra
y yo ya estoy sonriendo.
No por lo que significa.
Por lo que viene después.
También vos conocés
algunas de mis cosas
antes de que sucedan.
La forma en que voy a cerrar una puerta.
El segundo exacto
en que voy a volver a mirarte.
Dónde voy a dejar la mano
cuando me acerque.
Es extraño.
Cada uno sigue llegando
desde su propio lado
y, sin embargo,
hay momentos
en que ninguno de los dos
parece llegar primero.
Como si entre tu movimiento
y el mío
hubiera otro.
Uno pequeño.
Casi imposible de ver.
A veces aparece cuando caminamos.
No damos el mismo paso.
Ni siquiera caminamos igual.
Vos adelantás uno.
Yo otro.
Pero las piernas encuentran
una velocidad
que ninguno tenía.
Y durante unas cuadras
parece que la calle
hubiera aprendido
a llevarnos.
Una noche
te quedaste dormida
antes que yo.
Escuché cómo cambiaba
tu respiración.
Después la mía.
No fue al mismo tiempo.
Fue apenas después.
Como si una hubiera dejado
una puerta abierta
y la otra supiera
que podía cruzarla.
Me pregunto
cuántas cosas aprendimos así.
Sin decirlas.
Sin decidirlas.
Sin saber siquiera
que estaban aprendiendo.
Porque ahora hay gestos
que no recuerdo haber hecho
por primera vez.
Solo sé
que existen.
Como ciertas palabras
que aparecen en un idioma
antes de que alguien
las invente.
Como si hubiéramos dejado
pequeñas marcas
en lugares donde todavía
no habíamos estado.
Y a veces pienso
que eso es lo extraño
de estar tan cerca de alguien.
No que termine conociendo
tus movimientos.
Sino que empiezo
a dejar espacio
para movimientos
que todavía no hiciste.
Una tarde te fuiste.
Escuché tus pasos
bajar la escalera.
Esperé el ascensor.
Después la puerta.
Y cuando la cerraste
la habitación volvió a quedarse quieta.
Yo también.
Pero al levantarme
me corrí unos centímetros
sin pensarlo.
Como hago cuando te acercás.
Me quedé así
un momento.
Mirando ese espacio.
No faltaba nadie.
Y, sin embargo,
todavía estaba ocupado.
Por algo
que ninguno de los dos
había hecho.
Quizá eso sea
lo que aparece entre dos ritmos.
No uno que reemplaza
al de cada uno.
No uno que los vuelve iguales.
Algo más pequeño.
Algo que existe
solo mientras uno
ya está respondiendo
a lo que el otro
todavía no hizo.
Algo que empieza
entre un segundo y el siguiente
y que, cuando te vas,
tarda un poco
en desaparecer.`
  },

  {
    title: "Poema número 18",
    text: `He permanecido en la misma pared
más tiempo del que puedo recordar.
Aunque recordar
no sea una palabra
que me corresponda.
Yo cuento.
He visto llegar personas
que todavía no sabían
que estaban llegando a alguien.
He visto una silla ocupada
durante cuarenta minutos
por alguien que miraba la puerta.
Cuarenta minutos.
Los mismos segundos
que cualquier otra hora.
Cuando la puerta finalmente se abrió,
aquella persona sonrió
como si el tiempo que había pasado
pudiera desaparecer
solo porque alguien había llegado.
Yo conservé cada segundo.
Ellos no.
Una vez vi dos manos tocarse.
No duró mucho.
Mis agujas apenas tuvieron tiempo
de avanzar unos cuantos números.
Después volvieron a tocarse
durante años.
Nunca entendí
cómo un instante tan pequeño
podía tener una continuación tan grande.
He visto noches
que terminaron demasiado pronto.
Otras que parecían no terminar nunca.
Pero las dos terminaron
cuando mi aguja llegó al mismo lugar.
Entonces apareció en mí
una pregunta que no sabía
que un reloj podía hacerse:
¿por qué un minuto puede ser eterno
si siempre dura un minuto?
Seguí contando.
Una tarde alguien recibió una noticia.
No escuché las palabras.
Solo vi cómo se quedó quieto.
Durante varios segundos
nadie hizo nada.
El reloj siguió avanzando.
Después alguien lo abrazó.
Después alguien lloró.
Después alguien salió de la habitación.
Yo marqué cada instante.
Ninguno se detuvo.
Más tarde comprendí
que esa era la pregunta
que más veces había visto
sin haberme atrevido a formularla:
¿por qué no se detuvo?
¿Por qué el segundo siguiente
tuvo que llegar
si el anterior
ya había sido suficiente?
He visto nacimientos.
He visto despedidas.
He visto personas decir
“para siempre”
y volver a quedarse solas.
He visto a alguien besar
como si el mundo acabara después.
El mundo no acabó.
11:48:03.
11:48:04.
11:48:05.
También he visto morir personas.
Nunca supe
qué número merecía una muerte.
Mis agujas tampoco.
Solo avanzaron.
Después de una muerte
siempre hubo un segundo siguiente.
Después de una despedida
también.
Después de un primer beso.
Después de una última palabra.
Siempre.`
  },

  {
    title: "Poema número 19",
    text: `Te amo
como los árboles aman la lluvia:
sin intentar retenerla,
sin preguntarle al cielo
cuánto tiempo piensa quedarse.
Hay algo hermoso
en aquello que llega
sabiendo que algún día
también tendrá que irse.
Antes de conocerte
creía que los colores
eran una forma de ordenar el mundo.
Que había blancos
para las cosas puras,
negros
para las cosas perdidas,
y todos los demás colores
intentando encontrar
un lugar entre ambos.
Después llegaste vos
y descubrí
que existen colores
que no pertenecen a ningún lado.
Mujer de corazón gris,
tu corazón tiene el color
de las páginas que quedaron vivas
después de demasiadas historias.
Páginas donde todavía se alcanzan a leer
las frases que alguien quiso borrar.
Porque hay palabras
que no desaparecen cuando se borran.
Se quedan viviendo
en la forma que toma la hoja
después de haberlas perdido.
Quizás por eso
cuando miro tus ojos
pienso en las estrellas antiguas.
No en aquellas
que brillan porque todavía nacen.
Sino en las que llevan millones de años
viajando por la oscuridad
con la memoria
de todos los fuegos
que alguna vez fueron.
Hay una clase de luz
que solamente aparece
después de haber atravesado
lugares donde nadie podía verla.
Vos tenés esa luz.
La de las cosas
que no salieron intactas del tiempo,
pero encontraron una manera
de seguir siendo hermosas.
Tu corazón parece
una montaña escrita con ceniza.
Cada capa guarda
un incendio antiguo.
Cada piedra conserva
el rumor de algo
que alguna vez quiso romperla.
Y aun así,
ahí está.
Quieto.
Sosteniendo el cielo.
Como si hubiera aprendido
que incluso el fuego
puede convertirse
en paisaje.
Por eso amo tus inviernos.
No porque quiera verlos terminar.
Hay árboles
que durante meses
parecen haber olvidado
cómo se vuelve a florecer.
Pero debajo de la corteza
la primavera trabaja en silencio.
Sin aplausos.
Sin promesas.
Preparando una hoja
que todavía nadie conoce.
Quizás algunas personas
son así.
Guardan estaciones enteras
en lugares
donde nadie mira.
No quiero conocer solamente
la parte de vos
que sabe sonreír.
Quiero también
esa habitación cerrada
donde dejás las cosas
que todavía no tienen nombre.
Porque hay silencios
que parecen vacíos
hasta que alguien aprende
a escucharlos.
La noche siempre me pareció distinta
desde que te conozco.
La luz no pelea contra ella.
La noche es el lugar
donde la luz guarda
todo aquello
que todavía no sabe decir.
Tal vez por eso
tus sombras nunca me asustaron.
Hay lugares del universo
donde las estrellas nacen
de la misma oscuridad
que parecía querer tragarlas.
Y quizás el alma también funciona así.
Cuando entrás en una habitación
algo extraño sucede.
La madera recuerda al árbol.
El vidrio recuerda la arena
que alguna vez fue océano.
La piedra recuerda la montaña
antes de aprender
a quedarse quieta.
Como si tu presencia
le devolviera a las cosas
la vida que tuvieron
antes de convertirse
en otra cosa.
Hay grietas
que parecen guardar secretos
más antiguos que la pared.
Hay casas
que aprendieron a recibir el sol
por lugares
donde alguna vez entró la lluvia.
Hay personas
que llevan sus marcas
como mapas de territorios
que solo ellas pudieron atravesar.
Mujer de corazón gris,
tu corazón es una ciudad
construida alrededor de una ruina
que nadie quiso derribar.
Y quizás esa sea
la razón de su belleza.
Porque hay lugares
que serían más fáciles de entender
si borráramos su historia.
Pero perderían
todo aquello
que los hizo únicos.
No sos una primavera eterna.
Las primaveras perfectas
duran demasiado poco.
Sos ese instante extraño
donde un árbol conserva
una última hoja del otoño
mientras debajo de la tierra
ya comienza otra vida.
Sos una estación
que ningún calendario pudo nombrar.
Un clima propio.
Una forma del mundo
que aparece
cuando dos cosas opuestas
dejan de intentar vencerse.
Y ahora entiendo
por qué existe el gris.
No porque sea la mitad
de algo.
Sino porque hay cosas
demasiado profundas
para entrar completas
en un solo color.
Desde que llegaste,
mi manera de mirar cambió.
Ahora sé
que los ríos no llevan solamente agua.
También llevan montañas
que aprendieron a viajar.
Que las piedras no son solamente piedra.
También son tiempo
que decidió quedarse quieto.
Que las personas
no son solamente
lo que muestran.
También son todo aquello
que sigue creciendo
en silencio.
Y cuando te miro,
mujer de corazón gris,
entiendo algo
que el mundo llevaba siglos intentando decir:
que algunas almas
no fueron hechas
para ser completamente luz
ni completamente sombra.
Fueron hechas
para demostrar
que entre ambas
todavía existe
un universo entero.`
  },

  {
    title: "Poema número 20",
    text: `No fue amor lo que hiciste.
O eso pensé durante mucho tiempo.
Fue una grieta con nombre propio,
una forma elegante de romperme
sin hacer demasiado ruido.
Porque lo que vos llamabas luz
a mí me dejó viendo sombras
incluso con los ojos abiertos.
Y durante un tiempo
creí que el problema era que todavía estabas.
En ciertas canciones.
En algunas calles.
En esa hora de la tarde
en la que las ventanas empiezan a encenderse
antes de que uno se dé cuenta de que oscureció.
Así que hice lo que hacen casi todos
cuando algo se niega a terminar:
me fui.
Cambié de calles,
de rutinas,
de cielos.
Dejé que pasaran los días
con esa paciencia que tienen los trenes
cuando uno los ve alejarse
sin saber quién viaja adentro.
Pensé que la distancia
haría su trabajo.
Que el tiempo terminaría
por borrar los lugares
donde todavía aparecías.
Funcionó durante un rato.
Después entendí que hay cosas
que no viven en los lugares.
Viven en la manera de mirarlos.
Una tarde volvió aquel color.
El mismo que apareció una vez
sin que el mundo pareciera haber cambiado.
Durante mucho tiempo pensé
que había llegado con vos.
Lo busqué después en el mar,
en las hojas,
en las vidrieras cuando cae la tarde.
A veces aparecía.
A veces no.
Y pensé que eso significaba
que todavía te extrañaba.
Que mientras siguiera encontrándolo,
seguías ahí de alguna manera.
Hasta que recordé a Benedetti.
No la frase.
La idea.
Esa pelea silenciosa
entre la cabeza que quiere echar algo
y el corazón que insiste
en dejarlo entrar.
Benedetti tenía razón, supongo.
Aunque quizá ninguno de los dos
entendió del todo el problema.
Hay cosas que no permanecen
ni en la cabeza ni en el corazón.
Se quedan en la mirada.
Y entonces me pregunté
qué quedaba por olvidar.
No encontré tu nombre.
Ni tu voz.
Ni tus manos.
Encontré otra cosa.
La forma en que una tarde
podía parecerme distinta.
La forma en que una canción
podía dejar un segundo de silencio
y hacer que yo escuchara más.
La forma en que cierta luz
todavía conseguía detenerme.
El color.
El color nunca fue tuyo.
No te lo habías traído.
No te lo llevaste.
Solo apareció
cuando mis ojos aprendieron a verlo.
Y eso dejó una pregunta
que tardé mucho en hacerme:
si ya no estabas
en los lugares donde te buscaba,
¿qué se suponía que debía hacer
con todo lo que había cambiado
mientras estabas?
Durante mucho tiempo pensé
que lo que quería era volver.
No a vos.
A mí.
Volví a los mismos lugares
con una excusa distinta cada vez.
Una canción que ya no escuchaba.
Una calle por la que hacía años no pasaba.
Alguna costumbre que había dejado caer
sin darme cuenta.
Pensé que, si encontraba suficientes cosas
que todavía se parecieran a mí,
tal vez aparecería también
la persona que había sido.
Pero las calles seguían ahí.
La misma esquina.
La misma ventana.
La misma tarde cayendo sobre los edificios
con una indiferencia casi perfecta.
Y yo seguía sin encontrarme.
Al principio culpé al tiempo.
Después a la distancia.
Después, un poco,
al amor.
Me molestaba reconocer en mí
cosas que antes no estaban.
Una forma distinta de escuchar ciertas palabras.
Una desconfianza que no había pedido.
La costumbre de mirar una despedida
como si ya llevara meses ocurriendo
antes de que alguien pronunciara adiós.
No sabía si llamarlas heridas
o simplemente otra forma de piel.
A veces pensaba
que todo habría sido más sencillo
si hubiera salido de aquello
exactamente como había entrado.
Pero algo en mí se resistía
a esa idea.
Porque también habían quedado cosas
que no quería perder.
La paciencia con algunas tardes.
La costumbre de escuchar
un poco más después de que termina una canción.
La capacidad de detenerme
ante ciertas luces
sin saber por qué.
Y aquel color.
Siempre aquel color.
Durante un tiempo pensé
que para volver
tendría que devolver todo eso.
Como si crecer fuera una habitación
de la que uno pudiera salir
dejando las cosas en el suelo
antes de cerrar la puerta.
Pero no sabía qué tendría que llevarme conmigo.
¿La forma nueva de mirar?
¿Las preguntas?
¿Todo aquello que aprendí
a fuerza de perder?
¿También tendría que olvidar
que algunas promesas pesan más
después de haberlas visto romperse?
Ahí la idea empezó a cambiar.
Quizá no estaba intentando volver.
Quizá estaba intentando
encontrar a alguien
que ya no tenía dónde volver.
Como una fotografía
que conserva la misma cara
mucho después de que esa cara
haya aprendido otras maneras de estar en el mundo.
La fotografía seguía intacta.
Qué extraño.
Cada vez que la miraba,
parecía conocerme mejor
de lo que yo recordaba conocerme.
Tal vez no había perdido
al que era antes.
Tal vez simplemente
había dejado de hablar su idioma.
Las mismas palabras,
otro peso.
Las mismas calles,
otra distancia.
La misma lluvia,
otra forma de verla caer.
Hay cambios que no hacen ruido.
No derriban nada.
Solo consiguen que una casa conocida
empiece a sentirse ligeramente extranjera.
Y quizá eso fue lo que más me costó aceptar:
que podía volver a casi todo
sin volver realmente.
Podía escuchar las mismas canciones.
Caminar las mismas calles.
Reconocer una ventana
antes de doblar la esquina.
El mapa seguía siendo correcto.
La ciudad seguía ahí.
Pero yo ya no sabía llegar
al lugar exacto
donde había vivido aquella versión de mí.
Como si algunas ciudades
pudieran conservarse enteras
y, aun así,
dejar de ser habitables.
Durante mucho tiempo pensé
que eso era perderse.
Después dudé.
Quizá perderse sea otra cosa.
Quizá sea insistir demasiado
en una dirección
solo porque alguna vez
nos llevó a casa.
Y, sin embargo,
hay noches en las que todavía quiero volver.
Eso también es verdad.
No a vos.
A la tranquilidad de no saber
que ciertas cosas terminan.
A ese instante anterior
en el que todavía no había un después.
A la versión de mí
que podía mirar una promesa
sin imaginar su fecha de vencimiento.
No sé qué hacer con él.
Una parte de mí
querría decirle que salió vivo.
Otra quisiera dejarlo
exactamente donde estaba.
No porque haya sido mejor.
Porque todavía no sabía
cuánto podía perder.
Y eso duele de una manera extraña.
Porque si pudiera regresar,
no volvería solo.
Tendría que llevarme
todo lo que aprendí después.
La forma nueva de mirar.
Las preguntas.
El color.
La costumbre de escuchar
lo que queda cuando una canción termina.
Tendría que devolverle al mundo
esa parte de mí
que ahora sabe
que algunas cosas pueden irse
sin dejar de existir.
Y no sé si aceptaría el precio.
Supongo que por eso
hay personas que no dejan recuerdos.
Dejan gramática.
Después de ciertas personas,
hasta el silencio
parece acomodarse de otra manera.
No porque sigan ahí.
Porque algunas cosas,
una vez aprendidas,
ya no saben volver a ser desconocidas.
Siempre dicen que el tiempo cura.
No sé.
Capaz que el tiempo no cure nada.
Capaz que solamente cambie
el lugar donde duele.
O consiga que una herida
deje de pedir ser llamada herida.
Pero tampoco me convence del todo.
Porque si sanar fuera borrar,
¿qué hacemos con aquello
que nos enseñó a mirar?
Y si olvidar fuera volver
a la forma exacta en que uno miraba antes,
¿no sería también una forma de perder
todo lo que vino después?
No tengo una respuesta.
Antes eso me habría desesperado.
Ahora no tanto.
Tal vez algunas preguntas
no están hechas para cerrarse.
Tal vez solo necesitan
un lugar donde quedarse.
Así que dejo que esa parte siga ahí.
Que quiera volver algunas noches.
Que mire hacia atrás.
Que recuerde.
No todo lo que sentimos
necesita ganar una discusión.
Todavía quisiera volver.
Y ya no volvería.
Las dos cosas pueden ser ciertas.
Y quizá eso sea lo más parecido
a estar en paz que conozco:
no que una de las dos desaparezca,
sino que aprendan a vivir
sin hacerse daño.
Después pasa el tiempo.
No mucho.
Lo suficiente.
Y un día cualquiera
vuelvo a pasar por una de esas calles.
No fui a buscar nada.
La calle está igual.
La esquina.
La ventana.
Los árboles.
La misma tarde cayendo sobre los edificios
con una indiferencia casi perfecta.
Y entonces aparece.
Aquel color.
El mismo que durante tanto tiempo
había confundido con un recuerdo.
Ahora está sobre una pared,
en el vidrio,
en una parte de la luz
que dura apenas un instante.
Me detengo.
No porque espere que vuelvas.
No porque quiera volver yo.
No porque necesite entenderlo.
Solo porque lo reconozco.
Durante mucho tiempo
creí que reconocer algo
era saber de dónde venía.
Ahora no.
A veces basta con saber
que alguna vez lo viste.
La tarde sigue cayendo.
La calle sigue siendo la misma.
El mapa sigue guardado
donde lo dejé.
Y el color permanece apenas
un segundo más
antes de mezclarse con la noche.
Me quedo mirando.
Después,
sigo caminando.`
  }
]; // end poems array

/* RENDER GRID */
const grid = document.getElementById('grid');

function makeCard(i){
  const card = document.createElement('div');
  card.className = 'card';
  card.tabIndex = 0;
  card.setAttribute('role','button');
  card.setAttribute('aria-label', `${poems[i].title}`);
  const bg = palette[i % palette.length];
  const textColor = getContrastColor(bg);
  card.style.background = `linear-gradient(135deg, ${bg}, rgba(255,255,255,0.03))`;
  card.style.color = textColor;
  card.innerHTML = `<div>
    <div class="num">#${i+1}</div>
    <div class="label">${poems[i].title}</div>
  </div>`;
  card.addEventListener('click', ()=> openModal(i));
  card.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' ') openModal(i); });
  return card;
}

function renderGrid(){
  grid.innerHTML = '';
  for(let i=0;i<poems.length;i++){
    grid.appendChild(makeCard(i));
  }
}

/* MODAL */
const overlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody'); // <pre>
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let lastActive = null;

function openModal(index){
  currentIndex = index;
  lastActive = document.activeElement;
  modalTitle.textContent = poems[index].title;
  modalBody.textContent = poems[index].text; // <pre> + textContent preserva saltos
  overlay.style.display = 'flex';
  overlay.setAttribute('aria-hidden','false');
  setTimeout(()=> modalBody.focus(), 60);
}

function closeModal(){
  overlay.style.display = 'none';
  overlay.setAttribute('aria-hidden','true');
  if(lastActive) lastActive.focus();
}

function showPrev(){
  currentIndex = (currentIndex - 1 + poems.length) % poems.length;
  openModal(currentIndex);
}
function showNext(){
  currentIndex = (currentIndex + 1) % poems.length;
  openModal(currentIndex);
}

closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);
overlay.addEventListener('click', (e)=> { if(e.target === overlay) closeModal(); });
document.addEventListener('keydown', (e)=> {
  if(overlay.style.display === 'flex'){
    if(e.key === 'Escape') closeModal();
    if(e.key === 'ArrowLeft') showPrev();
    if(e.key === 'ArrowRight') showNext();
  }
});

// hero -> scroll to grid
const heroButton = document.getElementById('heroButton');
heroButton.addEventListener('click', ()=> {
  document.getElementById('main').scrollIntoView({behavior:'smooth'});
});
heroButton.addEventListener('keydown', e => { if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); heroButton.click(); }});

renderGrid();
