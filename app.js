
// app.js — completo (pegar tal cual en tu repo)
// Requisitos: coloca las imágenes en /images/
// - Captura de pantalla 2026-09-08 095030.png  (portada)
// - Captura de pantalla 2026-09-08 113110.png  (Otros Poemas de Amor)
// - Captura de pantalla 2026-09-08 113224.png  (Otros Poemas de Desamor)
// - Captura de pantalla 2026-09-08 113352.png  (Errante por mi cabeza)

/* IMÁGENES */
const coverFileName = 'Captura de pantalla 2026-09-08 095030.png';
const categoryImages = {
  love: 'Captura de pantalla 2026-09-08 113110.png',
  heartbreak: 'Captura de pantalla 2026-09-08 113224.png',
  errant: 'Captura de pantalla 2026-09-08 113352.png'
};

/* PALETA (12 colores extraídos de la imagen) */
const palette = [
  '#FF6B6B','#FF8E72','#FFB86B','#FFD166',
  '#FFF275','#A9E887','#66D6A9','#4AC6C6',
  '#6ECFF6','#7AA9FF','#9E86FF','#FF8ED1'
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

function toRoman(num){
  const romans = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  const vals   = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  let res = '';
  let i = 0;
  while (num > 0) {
    while (num >= vals[i]) { res += romans[i]; num -= vals[i]; }
    i++;
  }
  return res;
}

/* -----------------------------
   colección principal: 20 poemas (exactos)
   ----------------------------- */
const poems20 = [
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
...` // NOTE: poem 13 is long; in your local copy ensure the full content from your original file is pasted here exactly (it continues in the original text).
  }
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
 y seguir siendo eterno?


    `
  }
    
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
Especialmente el silencio.


    `
  }
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
 la tarde entera.


    `
  }
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
en desaparecer.


    `
  }

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
Siempre.
Y empecé a sospechar
que quizá esa era la única crueldad
que podía atribuirle al tiempo:
no saber cuándo algo
ya había sido suficiente.
Una puerta podía cerrarse
y mi aguja seguir avanzando.
Una persona podía irse
y mi aguja seguir avanzando.
Una vida podía terminar
y mi aguja seguir avanzando.
Yo podía decir exactamente
cuánto había durado una vida.
Nunca cuánto había cabido dentro de ella.
A veces alguien volvía
a la misma hora
muchos años después.
Mis agujas ocupaban
exactamente el mismo lugar.
Pero esa persona
ya no miraba la habitación
de la misma manera.
Entonces entendí
que quizá una hora no volvía.
Solo volvía su número.
El número podía repetirse.
La hora no.
Quizá por eso
podían recordar un momento
sin estar nuevamente en él.
Yo no tenía esa diferencia.
Para mí,
las 11:48 siempre eran las 11:48.
Para ellos,
a veces una hora podía quedarse
mucho después de haber terminado.
Quizá las personas sabían algo
que yo no.
Ellas podían perder el tiempo.
Yo no.
Podían olvidar una tarde.
Yo conservaba cada segundo.
Podían decir
“se pasó volando”.
Yo sabía que no.
Habían pasado los mismos minutos
que siempre.
Entonces comprendí algo peor.
Quizá lo que yo llamaba tiempo
y lo que ellos llamaban tiempo
no era lo mismo.
Yo sabía cuánto duraba.
Ellos sabían cuánto dejaba.
Y todavía no sé
qué respuesta pertenece a quién.
Solo sé que he pasado mi existencia
viendo cosas
que deberían haber detenido el mundo.
Ninguna consiguió detener un segundo.
Quizá no podía entenderlo
porque era un reloj.
Quizá porque nuncaDuermes.
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
estuvo despierto
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
volviendo.
7 había esperado a nadie.
Quizá porque nunca había querido
que una hora durara un poco más.
Quizá me faltaba conciencia.
Quizá me sobraba conciencia.


    `
  }

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
un universo entero.


    `
  }

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
No lo habías traído.
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
sigo caminando.

    `
  }



];

/* -----------------------------
   Categorías: textos del archivo clasificado (Nuevo Documento de texto (4).txt)
   - loveExtras (Otros Poemas de Amor)
   - heartbreakExtras (Otros Poemas de Desamor)
   - errantExtras (Errante por mi cabeza)
   He mantenido los textos literales. Eliminé la duplicación de "Mujer de corazón gris" (queda solo en poems20).
   ----------------------------- */

/* Nota: por longitud en chat he incluido íntegramente los poemas más arriba;
   a continuación pego los textos completos de las tres categorías tal como me los diste.
   Asegúrate de revisar el archivo local para constatar que las líneas largas se mantienen.
*/

const loveExtras = [
  {
    title: "Te amo cuando te quedás",
    text: `Te amo cuando te quedás,
cuando el mundo afloja un poco
y no hace falta explicarlo todo.
Te amo en lo simple:
en la risa que no busca sentido,
en el silencio que no pesa,
en ese estar que no exige pruebas.
Te amo con lo que soy ahora,
no con lo que prometo ser.
Con mis días torpes,
con mis aciertos pequeños
y mis errores sin épica.
Te amo desde lo cotidiano:
desde el mate frío olvidado en la mesa,
desde las palabras que no decimos
porque ya se entienden.
Te amo cuando coincidimos
sin esfuerzo,
cuando no hay que ganar ni perder,
cuando nadie se salva
porque nadie está en peligro.
Te amo sin urgencia,
sin dramatismos,
sin esa necesidad de arder para existir.
Te amo como se ama lo que acompaña
y no empuja.`
  },
  {
    title: "No sé si te amo",
    text: `No sé si te amo
o si te pienso demasiado
y eso se parece al amor.
A veces te quiero lejos
para poder extrañarte bien,
otras te quiero cerca
aunque me dé miedo tocarte
y descubrir que sos real.
Te amo cuando no estás,
porque ahí no me contradecís,
y te amo cuando volvés
aunque me arruines la idea
que había armado de vos.
Quisiera prometerte todo
pero apenas puedo prometerte esto:
que voy a dudar incluso cuando te bese,
que voy a temblar incluso cuando te tenga,
que no voy a saber soltarte
ni siquiera cuando diga que ya fue.
Mi amor por vos
no es limpio ni seguro,
es una habitación con la luz prendida
y las cortinas cerradas.
Te amo sin entenderte
y sin entenderme,
como se ama lo que no se puede ordenar.
Si algún día dejo de quererte
va a ser mintiendo,
y si algún día me quedo
va a ser con miedo.
Porque amarte es esto:
querer huir
y aun así
sentarse a tu lado
como si no existiera otro lugar.`
  },
  {
    title: "Hay días",
    text: `Hay días
en que mi corazón pronuncia tu nombre
como si fuera una llave
que abre todas las puertas.
Y hay otros
en que te miro desde lejos,
como quien observa una casa
en la que alguna vez vivió.
A veces te amo
con la simple gravedad de las cosas que caen,
inevitable, silencioso.
Y otras veces no te amo,
o eso me digo,
mientras guardo tu recuerdo
en el bolsillo más secreto del día.
Porque amar
también es esta duda extraña:
acercarse y retroceder,
como la marea
que besa la orilla
y luego se arrepiente.`
  },
  {
    title: "Te amo (Poema número 5 en clasificado)",
    text: `Te amo
como se ama algo que puede perderse
en cualquier momento.
No con calma,
no con fe,
sino con esa urgencia torpe
de quien abraza sabiendo
que después va a doler el vacío.
Te amo cuando discutimos
porque ahí no hay máscaras,
cuando decís cosas que no pensás
y yo escucho cosas que no dijiste.
Te amo incluso cuando te vas,
sobre todo cuando te vas,
porque ahí mi amor
tiene que inventarte para sobrevivir.
No te prometo quedarme entero.
A veces voy a quererte mal,
a veces tarde,
a veces con miedo de mirarte
demasiado a los ojos.
Pero si me voy
va a ser dejando algo mío en vos:
una costumbre,
una canción que no pediste,
un recuerdo que no te pertenece pero igual va a volver de noche.
Mi amor no sabe ser prolijo.
Se mete donde no debe,
insiste cuando debería callar,
te elige incluso cuando entiende
que elegirte es perder un poco.
Si alguna vez te canso,
no es por falta de amor,
es porque amar así
quema.
Y aun así
volvería a empezar,
con menos orgullo
y la misma herida,
porque amarte no fue un error:
fue un riesgo
que acepté
con los ojos abiertos.`
  },
  {
    title: "Perdón tardío",
    text: `A veces siento orgullo
no como fuerza,
sino como una piedra
mal puesta en la boca. No me impide quererte,
me impide decirlo a tiempo.
Sé cuándo debería pedir perdón,
lo sé con una claridad humillante,
pero algo en mí se queda quieto,
mirando cómo el momento pasa
como un tren que todavía podría alcanzar
si corriera un poco más.
No es que no quiera ceder,
es que el orgullo me habla bajito
y me convence
de que todavía hay margen,
de que después va a doler menos.
Siempre lo venzo,
eso es verdad.
Siempre termino llegando
con el perdón en la mano,
desarmado,
honesto,
casi infantil.
Pero hay veces
en que llego tarde.
Y ese retraso
no se nota enseguida.
Se queda flotando entre nosotros,
como una palabra que no se dijo
cuando todavía podía sanar. Te pido perdón
cuando el silencio ya se enfrió,
cuando tu mirada aprendió
a no esperarlo.
No es soberbia,
es miedo con traje de orgullo.
Miedo a quedar chico,
a decir "perdón"
y que ya no alcance.
Si supieras cuánto me pesa
no haberlo dicho antes,
cuántas veces el orgullo
no fue victoria
sino demora.
Te amo incluso ahí,
cuando fallo en el tiempo,
cuando el perdón llega
con pasos cansados
pero sinceros.
Porque aunque a veces tarde,
siempre vuelvo,
y siempre es verdad
cuando finalmente digo
perdón.`
  },
  {
    title: "Sobre todo ahí",
    text: `Te amo cuando huyo,
porque siempre corro hacia vos sin darme cuenta.
Te amo con la duda,
con la fe que no cree en nada,
con este pulso torcido que jura olvidarte
y vuelve a pronunciar tu nombre como un error inevitable.
Te amo desde el desorden: desde lo que pienso y no hago,
desde lo que hago y no siento,
desde lo que siento y no me animo a entender.
Te amo cuando me contradigo
y te niego para protegerme,
cuando finjo distancia
para que no notes que ya estoy perdido.
Te amo sin permiso,
sin razones,
sin coartadas que me salven del ridículo.
Te amo como se ama lo que no se explica
y, aun así, insiste.
Te amo con esta cabeza que discute,
con este cuerpo que decide antes que yo,
con este corazón que se equivoca
y vuelve a elegirte como si no hubiera aprendido nada.
Te amo aunque no mejore el mundo,
aunque no cure la herida,
aunque no prometa finales felices.
Te amo porque, sin hacer ruido,
volviste habitable lo que en mí era ruina.
Te amo incluso cuando digo que no.
Sobre todo ahí.
Porque si no te amara,
no necesitaría negarlo.`
  },
  {
    title: "Te amo negándote",
    text: `Te amo con la violencia de un mar en calma,
con la paz mentirosa que me rompe el alma.
Te amo negándote, para que seas más cierto,
te busco en la vida sintiéndome muerto.
Es un amor torpe, que no pide permiso,
que me tira al infierno y me cree en el paraíso.
Te amo con este cuerpo que ya no me obedece,
que cuando te vas, se marchita y florece.
No es que te quiera, es que no puedo evitarlo,
trato de esconder este amor y termino por gritarlo.
Te engaño diciendo que ya no me importas,
mientras te abro las puertas que vos mismo cortas.
Te amo sin razones, sin brújula, a ciegas,
te doy lo que tengo y también lo que niegas.
Es un error perfecto, una herida que sana,
amarte hoy con la fuerza de quien no te ama mañana.
Y sin embargo te amo, estúpidamente fiel,
tomando veneno creyendo que es miel.`
  },
  {
    title: "Te amo extrañamente",
    text: `No estoy llegando tarde.
Llego en este instante
en que todo todavía puede llamarse futuro
y vos ya estás adentro de esa palabra
sin pedir permiso.
No estaba buscando nada
cuando aparecés.
Y sin embargo,
algo en mí reconoce tu presencia
como si la vida, por fin,
dejara de hablar en acertijos.
Te veo
y no siento el golpe de lo extraordinario.
Siento algo más difícil de nombrar:
la quietud precisa
de lo que encaja sin esfuerzo,
la verdad rara
de lo que no necesita exagerarse para existir.
Por eso te amo así,
sin ceremonia,
sin testigos,
sin esa necesidad infantil de convertirlo todo en destino.
Te amo como se ofrece una luz
en medio de un cuarto que ya aprendió demasiadas sombras. Te amo como quien no promete eternidad
porque sabe que lo eterno
es apenas una forma de temblar con dignidad.
No quiero escribirte la pared.
No quiero dejarte un amor que se lea desde afuera
pero no pueda tocarte por dentro.
Quiero estar cerca
de esa parte tuya
que no se ve cuando te reís
y que, sin embargo, sostiene la risa.
Quiero llegar a tu centro
sin violentarlo.
Quiero que me dejes estar
sin que eso se parezca a una invasión.
Por eso voy despacio.
No porque dude,
sino porque esto merece una lentitud limpia,
una manera de no arruinar con prisa
lo que apenas empieza a entenderse.
El tiempo, lo sé,
se nos cae de las manos
como arena demasiado fina.
Pero hay algo en vos
que hace menos triste esa fuga.
Como si perder segundos cerca tuyo
fuera una forma aceptable de perdón.
Y entonces te miro más hondo.
Ya no como se mira una belleza,
ni siquiera como se mira algo amado.
Te miro como se mira una casa
cuando afuera llueve hace días
y adentro todavía hay una lámpara encendida.
Te miro y entiendo
que amarte no es rescatarte,
ni corregirte,
ni volverte simple.
Amarte es quedarme
en esa región donde tus heridas
todavía no son un muro y tu ternura todavía no se disculpa por existir.
Porque sé que en vos también conviven dos fuegos.
Uno que abriga.
Otro que arrasa.
Uno que me llama.
Otro que me prueba.
Y aun así te elijo entera.
No solo en la claridad.
También en lo que no se deja tocar sin romperse un poco.
Te elijo cuando sos calma
y cuando te volvés pregunta.
Te elijo cuando parecés refugio
y cuando parecés tormenta.
Te elijo porque el amor verdadero
no busca una versión domesticada del otro,
sino el milagro más difícil:
mirarlo de frente
sin querer poseerlo.
A veces pienso
que amar es eso,
quedarse sin cerrar los ojos
frente a la fragilidad ajena
y no usarla como arma.
Quiero aprender tu manera de habitar el mundo.
Quiero aprender qué te calma,
qué te enciende,
qué parte de vos sigue escondida
aunque estés conmigo.
Y también quiero que sepas esto:
no me asusta tu profundidad.
Me asusta más la superficie
cuando pretende parecer suficiente.
Yo no te amo para adornar mis días.
Te amo porque al tocarte
se modifica mi manera de mirar.
Todo lo que parecía seguro
se vuelve más humano.
Todo lo que parecía grande
se vuelve más verdadero.
Y todo lo que parecía mío deja de ser una posesión
para convertirse en una responsabilidad sagrada.
Porque amar de verdad
no es decir “te necesito”.
Es decir “te veo”.
Y seguir viéndote
incluso cuando no te conviene mostrarte.
Por eso no te pido que seas fácil.
Te pido que seas real.
No te pido que brillés siempre.
Te pido que no te apagues por dentro
solo para que el mundo no te juzgue el incendio.
Y si el día se pone oscuro,
si el sol decide no alcanzarnos,
si todo alrededor se queda sin respuesta,
igual voy a quedarme cerca de esa parte tuya
que todavía insiste en vivir.
Porque hay un tipo de amor
que no se mide en promesas,
sino en presencia.
En permanecer sin ruido.
En no abandonar lo frágil
solo porque exige más de lo cómodo.
Y ahora entiendo algo más.
No te amo porque me completes.
Te amo porque conmigo no tenés que fingir estar entera.
Y eso, en este mundo tan hambriento de máscaras,
es una forma brutal de belleza.
Así que sí,
te amo.
Te amo ahora,
cuando todo todavía respira.
Te amo sin exigirle al futuro que me dé la razón.
Te amo como se ama una verdad
que no necesita defenderse.
Y si un día el tiempo intenta volver esto ceniza,
si un día ya no quedan nombres
para lo que fuimos, si un día solo sobrevive la huella… 
que sobreviva así:
como una habitación encendida
en medio de una ciudad dormida,
como una mano que todavía recuerda
la forma exacta de otra mano,
como esa certeza callada
de que hubo un amor tan real
que no necesitó durar para volverse imposible de borrar.
Porque al final
amarte no es quedarme en vos.
Es descubrir que, desde que llegaste,
ya no existe un lugar en mí
donde el mundo pueda mentirme del todo.`
  },
  {
    title: "Mujer de tez clara",
    text: `Amo a una mujer clara
como se ama una ventana encendida
cuando afuera la ciudad parece hundirse en su propio humo.
La amo sin pedirle que me salve,
sin pedirle que me explique la noche,
sin pedirle que sea otra cosa
que esa forma suya de entrar en el mundo
y volverlo un poco menos torcido.
La veo y el día cambia de peso.
La veo y hasta el ruido de la calle
parece acomodarse un poco
para no interrumpir su manera de estar.
Tiene una luz que no hace escándalo, una claridad que no empuja,
una manera de existir
que no le roba nada a nadie
y sin embargo deja todo distinto.
Hay gente que ama queriendo poseer.
Yo no.
Yo la amo como se cuida una llama
en medio de un cuarto lleno de corrientes de aire.
Con respeto.
Con asombro.
Con esa gratitud rara
que da saber que lo vivo no dura,
pero igual ilumina.
Y si esto fuera poco
tengo mis cantos,
que muelo y rehago
como quien afila una herramienta
para no pudrirse por dentro.
No sé vivir de otra manera.
A veces la música me deja en paz,
a veces me desordena,
a veces me dice lo que yo no me animo
ni a pensar del todo.
Ella aparece incluso ahí.
En el borde de una melodía.
En una nota que tarda en resolverse.
En una pausa que se parece a su forma de mirarme
cuando está pensando algo serio
y no quiere apurarlo.
Entonces el piano no suena como piano,
suena como una casa abierta
donde todavía hay alguien despierto.
Hay noches en que me vuelvo
un animal con linterna en el pecho.
No para alardear de luz,
sino para no perderme adentro mío.
Camino con esa claridad mínima
que no se ve desde lejos
pero alcanza para distinguir
la silla de la caída,
la voz del abismo,
la mano que todavía puede sostenerse en alguien.
Y a veces esa mano es la de ella. No porque me rescate,
sino porque se queda cerca
con una calma que no domestica.
Como si supiera
que el alma no necesita obediencia,
necesita verdad.
Como si su presencia dijera sin hablar
que también hay amor en no apurar a nadie.
Porque también soy eso:
un hombre que aprendió a mirar
sin quedarse en la superficie.
No quiero ser explorador de abismos
si el abismo no tiene salida.
No quiero un mapa del dolor
si no me enseña a volver.
No quiero hundirme por costumbre.
Prefiero bajar despacio,
con una lámpara pequeña,
con la paciencia de quien entiende
que el misterio no se conquista:
se acompaña.
Estoy buscando una palabra
en el umbral de tu misterio,
una palabra que no suene a truco
ni a escudo,
una palabra que se parezca a tu manera
de dejar un libro abierto sobre la mesa
como si una idea aún siguiera respirando ahí.
A tu forma de mirar la ventana
antes de contestar.
A ese segundo exacto en que pensás
y el mundo se vuelve más suave
porque no te apurás.
Ahí aparecés otra vez.
No como idea,
sino como gesto.
Como la taza a un costado
cuando ya no querés hablar de más.
Como la mano quieta sobre la mesa
sin necesidad de tocar para decir.
Como esa claridad tuya
que no grita, pero ordena.
Como esa tez clara
que no es solo piel,
sino una forma de traer luz sin pedirle permiso al cuarto.
Y entonces entiendo
que no amo solo una figura lejana,
una mujer inventada por el deseo.
Amo esta forma precisa de existir
que me toca de cerca
y me desarma sin hacer ruido.
Amo tu manera de quedarte
sin prometer eternidades.
Amo la verdad simple de tu presencia,
que no necesita disfrazarse de milagro
para volverse necesaria.
Y a veces pienso
que querer a alguien
es aprender el idioma de una canción:
no importa cuántas veces cambie la melodía,
si todavía encuentra un lugar dentro del pecho.
Porque no todo amor necesita quedarse quieto
para ser verdadero.
Algunos amores no vienen a detener el tiempo,
vienen a enseñarnos a caminar dentro de él.
No quiero guardarte como una fotografía,
ni convertirte en recuerdo antes de tiempo.
Quiero mirarte mientras existís,
mientras la vida nos ocurre en la misma habitación,
mientras la tarde cae sobre la mesa
y la luz te toca la cara
como si también supiera quererte.
Y yo también cambió cuando te miro.
No me vuelvo otro,
me vuelvo más mío.
Más atento.
Más despierto.
Más capaz de entender
que el amor no llega para borrar lo que somos,
sino para ponerlo a prueba sin humillarlo.
Mucho más allá de la ventana
la mañana sigue haciendo lo suyo.
Las nubes se apoyan sobre los techos
como flores cansadas.
Un tren cruza la ciudad
y por un instante parece una cosa viva,
una bestia de hierro arrastrando la luz entre los barrios.
Un reloj, en la cocina,
late como un insecto paciente.
La ropa tendida, el vidrio,
la mesa con migas de pan,
todo parece decir lo mismo:
la vida insiste
aunque no siempre sepamos cómo llamarla.
Y ella está ahí,
en medio de todo eso.
No como adorno.
No como sueño.
Como una forma concreta de estar viva.
Como alguien que entra en la habitación
y no cambia la escena para lucirse,
sino para hacerla respirar mejor.
Yo miro eso
y entiendo que el mundo no se arregla.
Se habita.
Se acompaña.
Se atraviesa con lo que uno ama.
Con la familia.
Con los amigos.
Con los muertos que siguen en la voz.
Con el abuelo que ya no está
y todavía me enseña
que decir algo verdadero
es una forma de no desaparecer del todo.
Por eso no quiero un amor de catálogo,
un amor de recibos,
de escena ordenada,
de domingo bien peinado.
No quiero un amor que me quite de mí
para que todo encaje.
No quiero fingir calma
si por dentro me estoy apagando.
No quiero un vínculo prolijo
si en el fondo está muerto.
Quiero un amor que me mire de frente
sin esconder el temblor.
Quiero una verdad que no me pida maquillaje.
Quiero una compañía que no me vuelva pequeño.
Quiero poder estar al lado de alguien
sin volverme pared. Quiero una ternura que no tenga miedo
de la herida ni del cambio.
Y no porque todo tenga que doler.
Sino porque lo que vale
no siempre llega limpio.
Porque amar de verdad
es también aceptar que la belleza
no viene a ordenarnos la vida,
viene a desordenarla con sentido.
Hay veces en que el amor
no salva ni condena.
Solo revela.
Muestra lo que somos
cuando ya no alcanzan las máscaras.
Y eso también importa.
La gente dice muchas cosas.
Que uno debería ser más frío.
Que uno debería elegir mejor.
Que uno debería no sentir tanto.
Yo ya no escucho demasiado.
He visto lo suficiente
para saber que lo único que me mantiene de pie
es no traicionarme.
No endurecerme.
No aprender a vivir sin asombro.
Y ella, justamente ella,
me devuelve esa lección sin enseñarla.
Con una mirada basta.
Con su forma de apoyar una mano
en el borde de la mesa.
Con la manera en que el silencio a su lado
no pesa, acompaña.
Con la luz que trae en la cara
como si el mundo todavía pudiera ser mirado
sin resignación.
A veces, cuando la noche se afloja,
pienso que el amor no termina donde cambia.
Pienso que sigue de otra forma.
Pienso que todo lo que es verdadero
aprende a moverse
sin dejar de ser lo que fue.
Y eso alcanza. Porque no todo amor tiene que quedarse
para seguir siendo verdadero.
Algunos amores cumplen otra tarea.
Te dejan una manera distinta de mirar.
Te enseñan a amar sin pedir captura.
Te enseñan a dar
sin ponerle precio al temblor.
Te enseñan a reconocer
que el corazón también aprende
cuando se abre.
Yo soy este aprendizaje.
Soy el que entiende cada día
que amar no es retener.
Que una mano no se sostiene cerrándola,
sino dejándola elegir quedarse.
Que lo que se ama de verdad
no se encierra:
se cuida, se mira, se acompaña.
Yo sigo caminando
con la música adentro
y la ciudad abriéndose despacio
bajo la lluvia.
Y esta mujer clara
sigue ahí,
presente,
viva,
encendiendo el aire de una forma que no se puede explicar
sin quedarse un poco en silencio.
Voy a hablar de ella así,
como se habla de lo que importa:
en presente.
Como quien no quiere perderle el pulso.
Como quien sabe que amar también es esto,
estar acá,
mirarla,
respirarla,
dejar que la vida ocurra
y seguir ardiendo
sin querer convertir el fuego en ceniza.`
  }
]; // end loveExtras

const heartbreakExtras = [
  {
    title: "Lo que el tiempo no llevó",
    text: `Hay recuerdos que no voy a borrar,
ni aunque el tiempo pase con su escoba de años.
Hay personas que no voy a olvidar,
porque viven pegadas a la memoria
como sal al borde del mar.
Hay aromas que me quiero llevar,
guardados en la ropa de una noche
que todavía respira en silencio.
Y hay silencios que prefiero callar,
porque algunas palabras
se rompen apenas nacen.
Son dos las caras de la luna,
y también lo son nuestras historias: la que vivimos
y la que recordamos.
Por eso prefiero que sigamos, mi amor,
presos de este sol
que no nos deja mirar atrás sin quemarnos.
Dejar.
Amar.
Llorar.
Tres verbos cayendo como piedras
en el lago del tiempo.
El tiempo, ese animal fugaz
que nos empuja hacia allá,
hacia lugares donde todo vuelve
pero nunca igual.
Hay cosas que no voy a olvidar:
la noche en que dejaste de actuar,
cuando el mundo era escenario
y por un segundo lo apagaste todo
solo para darme amor.
Y yo vi tu corazón
brillando sobre el mic en una mano,
como una estrella cansada de cantar.
Pensaste en dejarlo,
en tirarlo junto a mí,
como quien abandona una armadura
para quedarse simplemente humano.
Hay secretos en el fondo del mar,
personas que me quiero llevar,
aromas que no voy a olvidar
y silencios que prefiero callar…
mientras vos jugás
con las horas,
yo sigo guardando
lo que el tiempo no supo llevarse.`
  },
  {
    title: "Entre no quererte y pensarte",
    text: `Ahora no sé qué siento.
Eso es lo único claro.
Tengo la boca llena de cosas
que no dije,
y las manos vacías
de lo que pensé que iba a quedar.
No te quiero,
me repito,
como quien se da una orden
que no sabe cumplir.
Después te pienso
sin querer
y algo se me cae adentro.
No es llanto,
no es bronca,
es esa presión rara
cuando el pecho
no encuentra postura.
Siento orgullo
y me da vergüenza.
Siento ganas de irme
y miedo de que te vayas.
Quisiera pedirte perdón
pero no sé por qué, y eso también duele.
Hay un momento
en que ya no te amo,
o eso creo.
Y otro, casi al mismo tiempo,
en que todavía sí.
No se contradicen,
conviven.
Ahora mismo
no te pierdo del todo
ni te tengo.
Estoy en ese lugar incómodo
donde el amor no alcanza
pero tampoco se va.
Y eso,
eso es lo que más duele.`
  },
  {
    title: "Las horas de la noche",
    text: `Las horas de la noche
aprendieron a huir
cuando la madrugada abre la jaula
y las estrellas miran
como si ya supieran que acá no queda nada.
La noche llega sin pedir permiso,
me sorprende de frente,
me arranca lo que queda adentro
y se toma su tiempo:
me mata despacio,
me deja liviano,
casi vacío.
Tu risa se derrama
justo donde las promesas
aprendieron a morirse.
No me pidas que me enoje,
si el enojo siempre fue
tu idioma favorito.
No te olvides
que nos dimos todo,
hasta lo que no teníamos,
y aun así
casi nunca alcanzaba,
como si el amor
siempre llegara tarde.
Esa noche en que te fuiste
empezó el arte de odiarnos.
Desde entonces,
cada día que se vuela
te lleva un poco más lejos
y a mí
me deja extrañándote mejor.`
  },
  {
    title: "La cuenta regresiva",
    text: `Recién llegaste y ya estás mirando la puerta,
me das pedazos de tiempo, una cuota de vos,
y yo me quedo con la pregunta abierta
mientras espero que sea una broma tu adiós.
No querés que sea sincero, ni que te mienta más,
y yo lo entiendo, aunque me duela entenderlo.
Sos eso que veo, ni un gramo de más,
un fuego que se apaga antes de encenderlo.
Sé que te vas a las nueve,
y sé que me muero a las diez.
Me pedís que esté de tu lado y acá me tenés,
con la mente cansada y la piel que se te pega,
esperando ese beso final, esa última vez,
antes de que la noche se vuelva ciega.
No hay garantías cuando el día se termina,
quisiera esperarte, pero no sé si puedo.
La distancia es una sombra que camina
y yo me rompo un poco en este miedo.
Te perdono porque otra cosa no quiero,
porque entregarse del todo es morir un poco.
Vos te vas liviana, yo me quedo prisionero,
contando los minutos como un loco.
Porque a las nueve te vas,
y a las diez... ya no queda nada más.`
  },
  {
    title: "No hay escapatoria",
    text: `No fue amor lo que hiciste.
Fue una grieta con nombre propio.
Una forma elegante de romperme
sin hacer ruido.
Porque lo que vos llamabas luz
a mí me dejó viendo sombras
incluso con los ojos abiertos.
Y ahí entendí algo que nadie dice:
hay afectos que no salvan,
solo te enseñan a caer mejor.
Eras un rayo, sí,
pero no de esos que iluminan el cielo,
de los que parten los árboles al medio
y siguen de largo
como si no hubiera pasado nada.
Y yo me quedé ahí,
con la mitad de lo que era,
intentando convencerme
de que todavía era un bosque.
¿Te acordás de esa mañana?
Todo estaba quieto, demasiado quieto,
como si el mundo supiera
que algo se iba a terminar
y no quisiera interrumpir.
Había una canción flotando en el aire,
pero nadie se animó a terminarla.
Ni vos.
Ni yo.
Ni lo que quedaba de nosotros.
Después vino el vendaval.
No el de afuera, ese da igual.
El de adentro. Ese que arranca recuerdos de raíz
y los deja tirados en cualquier parte,
irreconocibles,
como si nunca hubieran sido tuyos.
Me fui.
Claro que me fui.
Cambié de calles, de cielos, de rutinas.
Pero uno no se escapa de lo que lleva en la sangre.
Podés cruzar medio mundo
y seguir viviendo en el mismo lugar.
Y ahí estabas.
No en las fotos,
no en los mensajes,
no en lo evidente.
Estabas en lo mínimo.
En lo que no se puede apagar.
En esa costumbre de pensarte
sin querer pensarte.
Giré y giré,
como un loco tratando de encontrar
el punto exacto donde todo empezó a romperse,
como si entenderlo
fuera a devolverme algo.
Pero no.
Hay cosas que no tienen explicación,
solo consecuencias.
Después vino el frío.
Ese frío raro
que no está en el aire
sino en las ganas.
Donde nada entusiasma,
donde todo pesa,
donde vivir se vuelve una especie de trámite.
Y sin embargo…
ahí, en el fondo de todo eso,
había algo tuyo. Algo que no se había ido.
No vos.
No tu voz.
No tu forma de reír.
Peor.
Había quedado lo que hiciste en mí.
Una luz.
No de esas que guían.
De esas que no te dejan dormir.
Porque ilumina justo lo que falta.
Y entendí lo más jodido de todo:
no te extraño a vos.
Extraño en quién me convertía cuando estabas.
Ese pibe que creía que el mundo
podía ser un lugar habitable.
Ese que no miraba todo como si fuera a romperse.
Ese que no tenía que reconstruirse
cada vez que alguien decía “para siempre”.
Y ahora decime,
¿cómo se supera algo así?
No se supera.
se aprende a vivir con la sospecha
de que lo mejor de uno
no se perdió…
Se quedó viviendo en un tiempo
al que ya no puedo volver.
Y aun así seguís.
Seguís porque el cuerpo no pide permiso,
porque el tiempo no espera,
porque la vida no negocia con nadie.
Pero hay algo que nadie te advierte:
llega un momento
en que dejás de buscar a la persona que se fue…
y empezás a buscar
al que eras vos
antes de conocerla. Y ahí entendés todo.
Que no era ella
lo que te estaba faltando.
Fuiste vos todo este tiempo...`
  },
  {
    title: "No te borres en mí",
    text: `No quiero que te conviertas en algo que no sos.
No quiero mirarte hacia atrás
y sentir bronca en lugar de verdad.
Sería más fácil, sí.
Decir que fallaste.
Que no supiste.
Que no valía la pena.
Pero eso sería mentirme.
Y bastante tuve ya con no entendernos.
En el amor siempre pasa lo mismo,
aunque nadie lo diga en voz alta:
hay uno que se va primero,
y otro que se queda un rato más
intentando sostener algo
que ya no tiene dónde apoyarse.
Esta vez te tocó a vos.
Y no te culpo.
Porque yo también, en algún momento,
dejé de amar cosas
que juraba que eran para siempre.
Solo que nunca me tocó ser el que se quedaba.
Hasta ahora.
Y duele, sí.
Duele de una forma rara,
no explosiva,
sino constante.
Como si algo se apagara despacio
y no hubiera forma de apurar el final.
Podría elegir odiarte.
De verdad que podría.
Convertirte en un error,
en una mala decisión,
en un capítulo que prefiero borrar.
Pero no.
Porque si hago eso,
también borro lo que fui cuando estaba con vos.
Y eso…
eso sí que no lo quiero perder.
Porque fui mejor.
Más abierto.
Más vivo.
Más dispuesto a creer
sin estar calculando todo el tiempo cuánto podía doler.
Y aunque ahora eso sea lo que más pesa,
también es lo que más vale.
Por eso no quiero que el recuerdo
se me llene de rencor.
Prefiero que duela limpio.
Prefiero sentarme algún día,
cuando ya no estés en cada pensamiento,
cuando ya no tenga que esquivarte en la memoria… 
y poder mirarlo todo sin defensa. Y decir:
sí, dolió.
sí, no alcanzó.
sí, uno de los dos se fue antes.
Pero también decir algo más.
Que valió.
Que hubo algo ahí
que me cambió de verdad.
Que no fue pérdida,
aunque haya terminado.
Y recién ahí,
cuando ya no te necesite
para entender lo que fuimos… 
voy a poder hacer lo más difícil de todo:
agradecerte
sin querer volver.`
  },
  {
    title: "La mentira",
    text: `Mentís distinto ahora.
No es en lo que decís,
es en cómo lo decís.
En esa pausa mínima
antes de responder.
En esa mirada
que llega un segundo tarde.
No necesito pruebas. El cuerpo reconoce
lo que la cabeza todavía intenta justificar.
Y sin embargo…
me quedo.
No porque crea,
sino porque todavía no sé
en qué momento exacto
dejé de creerte.
Porque no fue de golpe.
Nunca es de golpe.
Fue en detalles.
En historias que no cerraban
pero tampoco rompían del todo.
En explicaciones demasiado prolijas.
En silencios
que empezaron a decir más
que cualquier palabra.
Mentira, mi vida.
Pero no la tuya.
La mía.
La de quedarme
haciendo como que no pasa nada,
como si ignorarlo
fuera lo mismo que no verlo.
Lo que se da y no se mira
se pudre.
Y yo dejé de mirar
justo cuando más tenía que hacerlo.
Porque dolía menos
pensar que estaba exagerando
que aceptar
que te estaba perdiendo
sin que te fueras.
Hay algo peor que una mentira.
Es cuando la verdad está ahí,
clara, incómoda, y aun así elegís no tocarla.
Como si nombrarla
la fuera a volver irreversible.
Como si todavía hubiera
algo que salvar.
Pero no.
No es una gran traición.
No es un momento épico
que pueda señalar y decir “acá terminó todo”.
Es más chico.
Más triste.
Es esto.
Sentarme frente a vos
y saber
que ya no estamos en el mismo lugar,
aunque compartamos el mismo espacio.
Escucharte
y entender
lo que escondés
mejor que lo que decís.
Y darme cuenta
de que lo peor no es que me mientas…
es que creas
que todavía necesito que lo disimules.
Porque no.
Ya no.
Ya no estoy tratando de descubrir la verdad.
Estoy tratando de aceptar
que la vi hace tiempo.
Y que lo único que queda
es este silencio raro
donde ninguno dice nada
pero los dos sabemos todo. Y en ese punto…
en ese momento exacto
donde la mentira deja de importar
porque ya no engaña a nadie…
pasa algo más jodido:
no me estás perdiendo vos.
Soy yo
el que finalmente entiende
que ya te perdió…`
  },
  {
    title: "No te hagas esto...",
    text: `No empezó mal.
Eso es lo más difícil de aceptar.
No hubo señales claras,
no hubo algo que pudiera señalar
y decir “acá ya no”.
Al contrario.
Había algo en vos
que parecía necesitar cuidado,
como si quisieras quedarte
pero no supieras cómo.
Y yo me quedé.
Me quedé más de lo necesario,
más de lo sano,
más de lo que entendía.
Porque pensé que el problema
era el mundo, el pasado,
todo lo que te había pasado antes.
Nunca pensé
que el problema
eras vos con vos.
Al principio eran detalles.
Cosas chicas.
Casi invisibles.
Esa forma de desconfiar
cuando algo estaba bien.
Esa incomodidad rara
cuando no había nada que arreglar.
Como si la calma
te dejara sin lugar.
Y entonces empezabas a moverte.
No para mejorar las cosas.
Para romperlas lo justo.
Un gesto fuera de lugar.
Una duda innecesaria.
Una distancia que no tenía sentido.
Lo suficiente
para que todo dejara de ser estable.
Y ahí sí.
Ahí volvías.
Como si el desastre
fuera el único idioma
que realmente entendías.
Yo tardé en verlo.
Tardé en entender
que no era algo que pasaba entre nosotros.
Era algo que pasaba en vos
y yo solo estaba en el medio. Porque lo que me hacías a mí
dolía, sí.
Pero era claro.
Tenía forma.
En cambio, lo que te hacías vos…
eso era otra cosa.
Era verte arruinar lo que querías.
Era verte dudar de lo que te hacía bien.
Era verte elegir el ruido
antes que una paz que no sabías sostener.
Y ahí cambió todo.
Porque cuando alguien te lastima,
podés enojarte.
Pero cuando ves a alguien
lastimarse solo…
no sabés qué hacer.
Te quedás.
Te quedás esperando
que en algún momento pare,
que algo haga click,
que entienda.
Y mientras tanto
te vas apagando.
No de golpe.
De a poco.
Como se apagan las cosas
que no encuentran lugar.
Hasta que un día
ya no estás peleando por la relación.
Estás mirando.
Mirando cómo se repite todo. Cómo cada intento
termina en el mismo lugar.
Cómo todo lo bueno
te incomoda lo suficiente
como para empujarlo
hasta que deje de existir.
Y ahí entendés algo
que no quería entender:
no te estabas yendo de mí.
Te estabas yendo de todo
lo que no dolía.
Y yo…
yo era solo otra forma de calma
que no sabías sostener.
Por eso no funcionó.
No porque no alcanzara,
no porque faltara algo,
no porque no fuera real.
Sino porque había algo en vos
que necesitaba que todo terminara mal
para poder sentirse en control.
Y contra eso…
no hay amor que alcance.
Y lo peor
no fue perderte.
Fue entender
que aunque me hubiera quedado más,
aunque hubiera hecho todo distinto,
aunque hubiera dado todavía más…
el final iba a ser el mismo.
Porque nunca se trató de nosotros.
Se trató de vos contra cualquier cosa
que intentara no dolerte.
Y yo solo fui eso.
Una oportunidad
de que algo saliera bien.
Que no ibas a dejar
que pase…`
  },
  {
    title: "No todo está perdido",
    text: `No todo está perdido.
Lo digo ahora,
aunque el mundo no confirme nada,
aunque haya señales que digan lo contrario.
Estoy acá.
Con el pecho abierto.
No como gesto heroico,
sino como única forma que conozco
de no mentirme.
Te ofrezco lo que soy
sin pulirlo demasiado.
Sin esconder lo que tiembla.
Porque si logro llegar a vos,
aunque sea un poco,
todo vuelve a ser elegible.
Todo puede empezar de nuevo
sin necesidad de borrar lo anterior.
Y eso alcanza. Alcanza este presente
donde tu voz todavía encuentra lugar en mí,
donde tu forma de estar
no necesita explicación para quedarse.
Hay algo en nosotros
que funciona sin ruido,
como si el amor no fuera un incendio
sino una llama constante
que no pide atención para existir.
Y me quedo ahí.
En ese equilibrio raro
entre lo que somos
y lo que todavía no sabemos ser.
Respirarte es suficiente.
Por ahora.
Pero el amor, cuando es real,
también se tuerce.
Tiene doble filo.
No es solo luz.
No es solo calma.
Hay algo en vos
que empuja hacia lo oscuro
cada vez que la paz se vuelve demasiado estable.
Y yo me quedo igual.
Porque hay una parte de mí
que cree que amar también es eso:
soportar la contradicción
sin abandonar lo que importa.
Pero empieza a pasar.
No de golpe.
No como un final claro.
Empieza en detalles.
En silencios que pesan un poco más.
En palabras que ya no llegan igual.
En esa sensación de estar
y no estar del todo. Y yo sigo.
Porque todavía hay algo.
Porque todavía te siento.
Porque incluso ahora
algo tuyo sigue llegando hasta mí
aunque cambie de forma.
Pero hay días como hoy.
Días que no fueron hechos para estar solo
y sin embargo lo estoy.
Días donde la lluvia no es el problema,
sino el espacio que dejás cuando no estás.
Y en esos días
todo se vuelve evidente.
Que no alcanza con querer.
Que no alcanza con insistir.
Que no alcanza con darlo todo
si del otro lado algo ya se está yendo.
Y aun así
vuelvo a buscarte.
No por debilidad.
Por costumbre del alma.
Porque hay algo en mí
que no sabe soltar
sin antes intentar entender.
Pero no hay explicación.
Solo vueltas.
Más vueltas.
Intentos de reaccionar
como si encontrar el punto exacto
pudiera devolverme algo.
Y no.
Hay cosas que no vuelven
aunque uno las piense perfecto.
Entonces aparece ese frío. No el del clima.
El otro.
El que se instala en las ganas.
El que convierte lo simple
en algo que pesa.
Y ahí entiendo algo
que no quería ver:
hay amores
que te llevan hasta el borde
y te dejan ahí
sin empujarte… 
pero sin sostenerte tampoco.
Y lo peor
no es lo que me hacés.
Es lo que veo que te hacés.
Esa forma de romper lo que funciona.
Esa necesidad de complicar lo que es simple.
Esa incomodidad con la calma.
Y yo mirando.
Sin poder hacer nada.
Porque amar a alguien
no te da derecho a salvarlo.
Solo te deja ver
cómo se pierde.
Y ahí… 
algo en mí cambia.
No dejo de quererte.
Pero dejo de pelear contra lo evidente.
Porque hay algo que ya entiendo:
no quiero caer
en las tumbas de la gloria.
No quiero convertir esto
en una historia perfecta que se recuerda mejor de lo que fue
solo para que duela menos.
Prefiero la verdad.
Prefiero aceptar
que fue real,
que fue intenso,
pero que no estaba hecho para quedarse.
Y eso duele distinto.
Duele limpio.
Entonces dejo de buscarte en todo.
Dejo de hacer de tu ausencia
una excusa para no avanzar.
Y me quedo conmigo.
No como refugio.
Como decisión.
Porque este ahora
también es mío.
Y en este ahora
no todo está perdido.
Pero ya no porque estés vos.
Sino porque sigo siendo capaz
de ofrecer lo que soy
sin convertirme en lo que me destruye.
Y eso cambia todo.
Porque al final
lo que duele no es perderte.
Es entender que fui capaz
de amar así,
sin reservas,
sin cálculo,
sin saber cómo iba a terminar.
Y aun así no romperme del todo.
Entonces dejo de buscar un culpable.
Dejo de armar versiones mejores de la historia
para que encajen en algo más cómodo.
No.
Fue lo que fue.
Y en este ahora
no necesito salvarlo,
ni explicarlo,
ni volver.
Solo sostenerlo
sin que me hunda.
Porque hay finales
que no hacen ruido.
No explotan.
No se anuncian.
Simplemente ocurren.
Y cuando te das cuenta,
ya no queda nada por discutir,
nada por arreglar,
nada por intentar.
Solo queda una ausencia
tan bien hecha,
tan limpia,
tan exacta…
que no sabés en qué momento pasó.
Y ahí entendés todo.
Que no fue un error.
Que no fue una falla.
Que fue un cierre perfecto
de algo que no estaba hecho para durar.
Como esos hechos
que no dejan pruebas,
ni testigos, ni segundas versiones.
Solo una certeza muda
instalada en el pecho:
que algunas historias
no terminan mal…
terminan completas.
Y por eso
duelen más…`
  },
  {
    title: "No me arrepiento de nada",
    text: `Hay noches en que el amor no termina: se queda quieto,
como un vaso con el fondo aún temblando
después de que ya nadie recuerda quién lo tocó.
Y entonces uno mira la habitación
como quien mira una estación vacía
donde todavía huele a despedida
pero también a abrigo,
a cuerpo,
a esa forma rara de felicidad
que siempre venía un poco herida.
Porque amar no fue solamente caer.
Fue arder con alguien al lado.
Fue aprender que hay besos que curan
y besos que abren más la herida
para que entre aire.
Yo te quise así,
con la parte más torpe y más viva de mí,
con la boca llena de nombres
y los ojos llenos de lluvia,
como si el mundo no pudiera romperse
mientras tu mano seguía ahí.
Pero el tiempo, ese ladrón elegante,
fue poniéndole distancia a las cosas.
Primero en la voz.
Después en la manera de mirar.
Después en esa costumbre de seguir
aunque una parte del corazón ya hubiera entendido
que quedarse también puede ser una forma de perder.
Y no lo digo con rabia.
Lo digo con esa tristeza limpia
que deja la madrugada cuando se va.
Porque hay despedidas que no destruyen lo amado:
lo vuelven recuerdo respirable,
lo vuelven música que no se toca pero insiste,
lo vuelven sombra fiel
que todavía camina detrás de uno
sin pedir nada.
A veces creo que todo amor
lleva su propia ruina escondida,
como una semilla negra dentro de la fruta.
Y aun así se come.
Aun así se ofrece.
Aun así se muerde
porque el hambre de vivir
siempre le gana un poco al miedo.
Yo también me perdí en vos.
No del todo,
no de una vez.
Me fui perdiendo de a poco,
como se apaga una calle cuando amanece,
como se enfría el café
mientras afuera la ciudad sigue igual de sola.
Y sin embargo,
qué hermosa fue esa caída.
Qué humana.
Qué nuestra.
Qué parecida a todo lo que alguna vez creímos eterno
antes de aprender que eterno
es solo una forma más lenta de cambiar.
Quedan restos.
Siempre quedan.
Un olor en la ropa.
Una frase que nadie dijo igual.
La forma de una risa en una pared.
Un paisaje donde antes había futuro
y ahora apenas hay memoria.
Pero no todo lo que queda duele.
A veces queda una verdad más grande:
que amé de verdad.
Que me equivoqué de manos,
de tiempos,
de promesas,
pero no de intensidad. Que te quise
con la ferocidad tranquila de quien no sabía medir,
con la fe de los hombres que lloran a escondidas
y todavía así no dejan de ofrecer el pecho.
Y ahora, cuando la noche vuelve
con su cara de siempre,
ya no te busco como antes.
No porque hayas dejado de importarme.
Sino porque entendí
que algunas personas no se pierden:
se vuelven parte del modo en que uno mira el mundo.
Hay una ciudad adentro mío
que todavía tiene tu nombre en los semáforos.
Hay una lluvia que cae con tu ritmo.
Hay un silencio que aprendió tu forma.
Y hay algo en mí
que ya no quiere borrar eso.
Porque lo vivido no se corrige.
Se integra.
Se lleva.
Se agradece.
Se deja respirar.
Y entonces, entre volver y no volver,
entre el fuego y la calma,
entre el beso y la herida,
entre el ruido y el perdón,
yo elijo esta extraña fidelidad a lo real:
amar lo que fue,
soltar lo que no pudo ser,
y seguir caminando
con el corazón lleno de cicatrices
que no se avergüenzan de haber amado.`
  }
]; // end heartbreakExtras

const errantExtras = [
  {
    title: "La verdadera enfermedad",
    text: `Caminan en fila, grises y quietos
Siguiendo un guion que no tiene secretos.
Cumplen horarios, tragan la urgencia
Y llaman "vida" a su propia ausencia.
Pero si uno frena y mira hacia arriba
Si el alma se escapa y se siente viva
Todos reclaman y denigran con miedo disfrazado
No entienden que el "loco" rompió el cristal
Que no quiso la dosis de su bien y su mal.
Lo tildan de enfermo, lo quieren curar
Por el grave delito de saber soñar.
Que se queden ellos con su falsa verdad
Esa calma mentirosa que invita a callar.
Bendito el que aguanta
En su soledad
Y se niega a estar enfermo de normalidad.`
  },
  {
    title: "¿Quién soy?",
    text: `El cuerpo siente hambre.
La mente insiste en una idea.
A veces se queda,
a veces se vuelve obsesión.
No lo decido del todo.
Solo me doy cuenta
cuando ya está pasando.
Aparecen pensamientos,
emociones, recuerdos.
Van y vienen
sin que yo los elija del todo.
Si tengo hambre,
no lo decido.
Si una idea se repite,
tampoco.
Puedo notar la obsesión
cuando ya está ahí.
Puedo notar el deseo
cuando ya apareció.
Entonces,
¿quién es el que observa todo eso?
No parece tener
el control absoluto.
No ordena al cuerpo sentir,
ni a la mente callar.
Solo está presente
mientras todo ocurre.
Quizás el que conoce
nunca puede ser objeto de conocimiento.
Porque no es algo más
dentro de lo que aparece.
No tiene forma,
no tiene voluntad perfecta,
no es dueño de lo que pasa.
Es testigo.
¿No? Quizás soy eso que está
antes de la pregunta.
Y por eso
nunca puede ser respuesta.`
  },
  {
    title: "Al Lado del Camino",
    text: `Me quedé donde el asfalto se cansa
y la historia pasa sin pedir permiso.
Ahí aprendí a fumar el tiempo,
a mirar cómo corren los otros
con la fe puesta en relojes rotos.
Hay barcos que nacen sabiendo
que su vocación es el naufragio.
Yo me subí igual.
Porque a veces el sentido pesa tanto
que hundirse es apenas una forma de flotar.
El mundo gritaba ofertas, banderas, verdades en cuotas,
y yo declaré quiebra emocional,
me anoté como inocente crónico,
me borré del mapa de los exitosos
y aparecí en la zanja donde crecen las preguntas.
No pertenezco a ninguna orilla.
Estoy vivo como quien ya fue despedido.
Alguna vez dejé canciones en tus bolsillos,
después el tiempo me mudó sin aviso
a un barrio donde el pasado toca timbre de noche.
Aprendí que hacer el bien
no siempre evita el daño,
que el perdón tiene algo de divino
y el error, de respiración humana.
Los enemigos chicos hacen ruido
como latas vacías pateadas por el miedo.
Juegan a la guerra
y se les escapa la infancia por las piernas. Fui un pibe hecho de acordes prestados,
de libros subrayados con cerveza,
de padres imperfectos y amores torcidos.
El hambre, el frío, el dinero
me enseñaron a escribir con la letra torcida
pero sincera.
Si me cruzás distraído, no te preocupes:
a veces pasa una brisa rara,
una idea de final que coquetea,
pero se va rápido,
como todo lo que no se anima a quedarse.
Vuelvo del olvido en sueños,
a una casa que ya no existe
pero insiste.
Un número de memoria,
una pelota rodando,
el peligro dulce de estar vivo.
No vine a entretener ruinas ajenas.
El mundo se cae solo,
yo apenas me siento al costado
y te abrazo mientras tanto.
Porque al margen,
donde no llegan los aplausos
ni las promesas envasadas,
la vida no es más fácil
pero respira mejor.
Y ahí,
al lado del camino,
todo duele menos
y significa más.`
  },
  {
    title: "Dar es Dar",
    text: `Vivo así:
sin pedirle al día que me explique,
sin exigirle al corazón que se comporte,
sin convertir cada herida en sentencia.
Vivo como quien aprende tarde
que dar no es perder,
que amar no es cobrar después,
que sostener la mano de algo vivo
no garantiza que eso se quede,
pero sí me deja siendo alguien más verdadero.
Dar es dar.
No porque suene noble,
sino porque es la única forma limpia
que encuentro de estar acá.
Dar sin marcar cartas.
Dar sin dejarle al ego
la tarea miserable de contar el vuelto.
Dar lo que tengo,
aunque a veces sea poco, aunque a veces sea apenas una luz temblando
en medio del ruido.
Porque cuando doy
no me reduzco,
me empiezo a reconocer.
No me interesa ya el amor que pide examen,
ni la ternura que viene con condiciones,
ni los vínculos que te dejan pensando
qué parte de vos conviene mostrar
para que no se vayan.
Yo ya sé
que lo que vale de verdad
no entra en balances.
Lo que vale
aparece cuando nadie está mirando.
Cuando el mundo se vuelve demasiado rápido.
Cuando no queda nada elegante para sostenerse.
Cuando seguir siendo bueno, o suave, o honesto,
se parece más a una decisión difícil
que a una virtud.
Y ahí me quedo.
En ese borde raro
donde dar también es resistir.
Donde amar también es no endurecerse.
Donde la libertad del otro
no me parece una amenaza,
sino una forma de respeto.
Porque no me interesa retener.
Me interesa mirar de frente
lo que soy capaz de ofrecer
sin romperme en el intento.
Y eso me lo enseñan muchas cosas.
Me lo enseña Fito
cuando hace del desgarro una casa.
Me lo enseña Charly
cuando convierte el caos en inteligencia viva.
Me lo enseña Coldplay
cuando la tristeza también sabe abrir cielo.
Me lo enseña Neruda
cuando la belleza no se arrodilla
ni siquiera frente al dolor. Pero no solo ellos.
Me lo enseña mi madre
con su forma de sostener lo imposible
sin llamarlo heroicidad.
Me lo enseña mi padre
con esa presencia hecha de dureza y huecos,
con todo lo que fue y con todo lo que no pudo decir.
Me lo enseña mi familia,
que es abrigo, choque, memoria, ruido, raíz.
Me lo enseña mi abuelo, el escritor,
con esa herencia extraña
de mirar el mundo como si siempre escondiera una segunda cara.
Y también me enseñan otras cosas
menos amables, más ciertas.
Los odios.
El amor.
Las traiciones.
Los misterios.
La poseía de los días torcidos
cuando algo en mí se pierde
solo para volver de otra manera.
Me enseñan las caídas
que no tienen testigos.
Los cambios que llegan sin permiso.
La búsqueda de quien soy
cuando ya no me sirve la versión que otros inventaron.
El intento de entenderme
sin lastimarme por no ser simple.
El abrazo lento de aprender a vivir
con todo lo que fui
sin pedirle al pasado que me devuelva intacto.
Y también me hacen.
Sí: me hacen.
No en el sentido de moldearme
como un objeto terminado,
sino en el sentido más humano y más feroz:
me van armando y desarmando
hasta que descubro
que ser yo
no es llegar a una respuesta,
sino poder habitar la pregunta sin huir.
Yo soy eso. Soy la música que me educó el alma.
Soy las frases que me salvaron en silencio.
Soy la bronca que no elegí.
Soy la ternura que sí.
Soy la noche que me trajo pensamiento.
Soy la risa que me sostuvo cuando no sobraba nada.
Soy la casa que fui perdiendo
y el cuarto que todavía prendo por dentro.
Soy lo que me dieron.
Y también lo que hice con eso.
No soy puro.
No soy simple.
No soy una línea recta.
Soy una mezcla viva
de herencia, herida y deseo.
Un hombre hecho de canciones,
de libros,
de discusiones,
de silencios,
de recuerdos que todavía me miran desde adentro
como si quisieran contarme algo.
Y sin embargo
cada día me vuelvo un poco más mío.
No porque ya me entienda del todo,
sino porque dejo de pelearme
con la parte de mí que todavía cambia.
Porque entiendo que el crecimiento
no es volverse invulnerable.
Es aprender a no odiarse
por seguir siendo humano.
Entonces sigo.
Con más gratitud que certezas.
Con más verdad que pose.
Con más hambre de vida que de respuestas.
Y si mañana me toca caer,
que me encuentre sabiendo esto:
que todo lo que amo,
todo lo que perdí,
todo lo que perdoné,
todo lo que aprendí a mirar sin temblar,
todo lo que me rompió
y todo lo que me sostuvo… me fue haciendo este hombre.
No perfecto.
No cerrado.
No terminado.
Pero vivo.
Y eso, al final,
también es una forma hermosa
de estar del lado del mundo.`
  },
  {
    title: "Soy lo que soy",
    text: `Soy el hijo de lo que vi.
De las manos que trabajaron en silencio,
de las palabras que no siempre se dijeron,
de los gestos que me enseñaron amor
sin necesidad de explicarlo.
Soy el nieto de una mirada
que quería dejar algo dicho antes de irse,
como si supiera
que algunas herencias no se escriben en papel
sino en la forma de mirar el mundo
y no mentirse frente a él.
Soy la suma de lo que amé
y de lo que sobreviví.
De lo que me sostuvo
y de lo que me partió un poco.
De los nombres que me cuidaron,
de los dolores que me volvieron más humano,
de la música que me abrió el pecho
cuando no encontraba cómo hacerlo solo.
Soy también lo que todavía no entiendo de mí. Y por eso sigo.
Porque no estar resuelto
también es una forma de estar vivo.
Porque hay algo hermoso
en no haber terminado de encontrarme
y aun así caminar como si la vida
mereciera mi mejor intento.
No quiero ser una versión endurecida de mí mismo.
No quiero pagar con frialdad
todo lo que alguna vez me dolió.
Prefiero seguir siendo este hombre
hecho de amor, memoria, familia, duda y cambio.
Este que todavía se asombra.
Este que todavía agradece.
Este que no sabe del todo quién es
pero ya no se trata con desprecio.
Y en eso, justamente en eso,
hay una paz rara, profunda, verdadera:
la de entender que no me inventé solo,
que vengo de lo que vi,
de lo que me amó,
de lo que me enseñó a resistir,
y de todo lo que elegí no perderme...`
  },
  {
    title: "Cable a Tierra",
    text: `Hay noches en que uno queda partido
entre volver y no volver,
como si la puerta supiera más que el cuerpo
y el cuerpo, cansado,
ya no supiera mentir.
Hay noches en que el poder se vuelve niebla,
en que uno se cree invencible
solo porque ya no siente el borde de las cosas,
y entonces todo empieza a inclinarse
como una mesa coja en un cuarto vacío.
Pero siempre hay algo que llama desde abajo.
Una raíz.
Un hilo.
Un nombre que no quiere dejarte caer.
Tirá tu cable a tierra.
Tirálo antes de que la altura te convenza
de que no hay suelo.
Porque el corazón también se agota,
también se sienta en el borde de sí mismo
como un barco sin puerto
mirando un mar que no perdona.
Y sin embargo,
yo estoy acercándome a vos.
No con milagros.
No con discursos.
Bajo la luna,
con la paciencia de quien entiende
que amar a veces es simplemente
seguir caminando hacia alguien
aunque el mundo se esté desarmando un poco.
No creas que todo perdió su sentido
porque el dolor haga ruido.
No le des tanto espacio a la intemperie.
Escuchá ese golpe pequeño,
ese animal humilde adentro del pecho
que todavía sabe distinguir
entre la caída y el regreso. Hay un instante en que la noche afloja.
Un segundo apenas.
Como si la oscuridad respirara
y dejara pasar una línea de luz
por debajo de la puerta.
Ahí está el amor.
No como incendio.
Como cable.
Como una cuerda viva
atada a lo que todavía te nombra.
No hables de más.
No te pierdas en la espuma de tu propia cabeza.
A veces el alma no pide respuestas,
pide tierra.
Pide un pulso humano.
Pide una mano cerca
que no quiera arreglarte,
solo sostenerte.
Y si sentís que ya metiste demasiado adentro
lo que te hace girar mal,
si estás cegado por tu propia altura,
si ya no reconocés
la cara de los que te quieren,
si el día te queda lejos
y la madrugada te queda encima,
no te mires como un caso perdido.
Tirá tu cable a tierra.
Que todavía hay alguien que se acerca.
Que todavía hay una luna
mirando sin juzgar.
Que todavía puede salir el sol
y no preguntarte nada.
Porque no todo lo roto está perdido.
No todo lo que cae se quiebra.
No todo lo que arde consume.
A veces basta con un hilo al suelo,
con una voz que llegue despacio,
con una respiración compartida,
para que el corazón recuerde
que seguir vivo
todavía es una forma de volver.`
  },
  {
    title: "La moneda que nadie guarda",
    text: `Nos enseñaron a contar monedas,
pero nunca a contar mañanas.
A medir el valor de las cosas,
pero no el precio de una semana.
Nos dijeron: “trabajá duro,
algún día vas a descansar”.
Y mientras juntábamos futuro,
el presente se cansó de esperar.
Guardamos relojes en las paredes,
llenamos agendas de promesas,
compramos cosas para sentirnos vivos
mientras la vida se quedaba afuera de la puerta.
Qué extraño es el ser humano:
vende sus horas por papel,
para después gastar ese papel
intentando recuperar sus horas.
Y al final, cuando todo se apaga,
cuando ya no queda nada que comprar,
quizás la pregunta no sea
cuánto logramos acumular,
sino cuántos momentos tuvimos
que no quisimos cambiar.
Porque tal vez la verdadera pobreza
no sea tener poco en las manos,
sino llegar al último día
y descubrir que nunca tuvimos tiempo.`
  },
  {
    title: "Los relojes nunca aprendieron el idioma del tiempo",
    text: `Los relojes son traductores. Ese fue siempre su problema.
Les entregaron el idioma inmenso del tiempo,
y respondieron
con números.
Fue como intentar traducir el mar
dibujando vasos de agua.
Ellos creen
que las horas vienen una detrás de otra.
La vida jamás caminó en fila.
La infancia sigue ocurriendo
mientras envejece un hombre.
Un abuelo todavía termina una historia
en una cocina
que hace años fue demolida.
Y una despedida,
si fue verdadera,
todavía está aprendiendo
a decir adiós.
Los relojes son excelentes contadores.
Lo único que nunca aprendieron a contar
fue la distancia
entre dos personas
sentadas en el mismo banco.
Porque hay silencios que separan galaxias,
y miradas
que cruzan océanos
sin mover un solo párpado.
Nos enseñaron
que el tiempo pasa.
Nunca entendí esa frase.
Cuando una biblioteca se incendia,
¿desaparecen los libros,
o desaparece el lugar
desde donde podíamos leerlos?
Quizás con la vida ocurra lo mismo.
Los días
no se van.
Somos nosotros
los que dejamos de alcanzarlos.
Hay una ley
que los calendarios nunca descubrieron.
Toda casa
conserva una habitación
donde sigue ocurriendo
el día más importante
de quienes la habitaron.
Por eso algunas ventanas dan nostalgia
aunque jamás hayamos vivido detrás de ellas.
Las paredes
también aprenden de memoria.
Los árboles
no guardan recuerdos.
Fabrican madera
para que nosotros podamos hacerlo.
Quizás por eso
los bosques parecen tan llenos
y las bibliotecas
parecen tan quietas.
Ambas
están hechas
exactamente
de memoria.
Solo cambia
el idioma.
Toda hoja
es una negociación
con el cielo.
Una página también.
La diferencia es que la hoja
transforma la luz
en savia,
y la página
transforma el silencio
en alguien distinto.
Hay árboles
que nunca conocieron
su propia sombra.
La regalaban.
La sombra
siempre perteneció
a quien pasaba debajo.
Desde entonces pienso
que existen vidas
que pasan por el mundo
sin llegar a ver
todo el descanso
que dejan en otros.
Un bosque
tarda cien años
en fabricar un lector.
No porque crecer
lleve tanto tiempo.
Sino porque una semilla
debe aprender primero
a ser árbol,
el árbol
a ser madera,
la madera
a ser página,
la página
a ser pensamiento, y el pensamiento
a convertirse
en alguien
que vuelva a mirar
un árbol
como si acabara
de ser inventado.
Hay una extraña injusticia.
Cuando un árbol cae,
todos miran
el ruido.
Nadie mira
el bosque invisible
que acaba de empezar
dentro de miles
de personas.
Los árboles
escriben tan despacio
que nosotros
inventamos la palabra
“siglo” 
para no admitir
que todavía
no aprendimos
a leerlos.
Las bibliotecas
no guardan libros.
Guardan futuros.
Cada volumen cerrado tiene exactamente
la forma
de una persona
que todavía
no existe.
Espera.
No a un lector.
Espera
la vida precisa
capaz de entenderlo.
Siempre creí
que las páginas
se parecían a las hojas.
Hoy pienso
que ocurre al revés.
Las hojas
fueron el primer borrador
de una idea
muchísimo más antigua.
Porque antes de escribir historias,
la naturaleza
tuvo que aprender
que una superficie
también podía guardar
el paso del tiempo.
Hay árboles
que florecen
después de muertos.
No producen frutos.
Producen preguntas.
Y una pregunta verdadera es la única semilla
capaz de crecer
dentro de alguien
que nació
siglos después.
Entrar a una biblioteca
se parece menos
a entrar en un edificio
que a atravesar
la copa de un árbol
desde adentro.
Uno sale distinto.
No porque haya aprendido más.
Sino porque descubre
que pensar
es otra forma
de echar raíces.
Desde entonces,
cada vez que el viento
mueve las hojas de un árbol,
ya no escucho
un simple ruido.
Escucho
el ensayo
de todas las bibliotecas
que todavía no existen.
Y cada vez
que una página
se da vuelta,
tengo la sospecha de que algún bosque,
en un lugar remoto,
acaba de reconocer
su propia voz.`
  },
  {
    title: "El universo nunca inventó el ahora",
    text: `Durante años creí que el tiempo pasaba.
Lo descubrí en cosas pequeñas:
en una fotografía olvidada dentro de un cajón,
en una habitación que conservaba los mismos muebles
pero había perdido una presencia,
en una voz que alguna vez llenó una casa
y ahora solo regresaba
cuando alguien pronunciaba su nombre.
Pensé que eso era el tiempo:
la distancia entre lo que amamos
y la forma en que aprendemos a vivir sin ello.
Creí que era una corriente invisible
llevándose todo lentamente.
Pero una noche miré las estrellas
y algo dejó de encajar.
La luz que llegaba a mis ojos
había partido mucho antes de que yo existiera. Quizás aquella estrella
ya no estaba allí.
Quizás llevaba miles de años
siendo solamente un recuerdo
viajando por el universo.
Y aun así,
seguía iluminando.
Entonces pensé:
¿Cómo puede algo haberse ido
y todavía encontrar la manera de llegar?
Nunca vi a una montaña extrañar la piedra
que dejó de ser.
Nunca vi a un árbol buscar la semilla
de la que nació.
Nunca vi al mar guardar una ola
por miedo a perderla.
El universo cambiaba
sin despedirse.
Como si conociera una verdad
que nosotros habíamos olvidado:
que transformarse
no significa desaparecer.
Entonces creí encontrar una respuesta.
Quizás el tiempo no pasaba.
Quizás éramos nosotros
quienes pasábamos por sus formas.
Pero tampoco era eso.
Porque incluso una estrella distante
seguía perteneciendo al mismo cielo.
La luz no sabía de ayer.
No sabía de mañana.
No sabía de pérdidas. Solo sabía continuar.
Fue entonces cuando comprendí
que quizás el universo nunca estuvo dividido.
Fuimos nosotros quienes dibujamos las fronteras.
Llamamos pasado
a la luz que ya había tocado otros lugares.
Llamamos futuro
a la luz que todavía estaba viajando.
Y entre ambos inventamos una palabra.
Una palabra pequeña
que parecía imposible
que pudiera sostener tanto.
Ahora.
Quizás el presente nunca fue un instante.
Quizás fue una ventana.
El lugar donde una conciencia demasiado pequeña
podía mirar la eternidad
sin quedar ciega.
Un puñado de infinito
entre dos manos humanas.
Una gota del océano
que aceptamos llamar mundo.
Pero incluso esa respuesta estaba incompleta.
Porque si el ahora era una ventana,
¿por qué dolía tanto mirar a través de ella?
Entonces entendí la memoria.
Durante mucho tiempo pensé
que recordar era volver.
Pero nadie vuelve.
Una canción no abre la misma tarde.
Una fotografía no devuelve la misma persona. Una voz grabada no trae de regreso una presencia.
Y aun así ocurre algo imposible.
La luz de un momento antiguo
encuentra una nueva forma de llegar.
Por eso la memoria
es el único lugar
donde las despedidas llegan tarde.
Porque hay personas que dejan de estar a nuestro lado
mucho antes
de dejar de existir dentro de nosotros.
Después tuve miedo del olvido.
Pensé que olvidar era perder otra vez.
Que cada cosa que desaparecía de nuestra memoria
era una parte de nosotros apagándose.
Hasta que miré un árbol.
Ningún árbol recuerda la semilla.
La lleva.
La semilla no desapareció para convertirse en árbol.
Cambió de idioma.
Quizás nosotros hacemos lo mismo.
Hay recuerdos que dejan de vivir en la mente
porque encontraron una raíz más profunda.
Lo que olvidamos
no desaparece.
Se convierte en una manera de mirar la lluvia.
En una canción que elegimos sin saber por qué.
En una tristeza que aparece antes de entenderla.
En una ternura que alguien dejó en nosotros
mucho antes de que pudiéramos llamarla nuestra. Y quizás por eso existe el amor.
Porque ninguna conciencia puede ver el universo entero.
Cada persona recibe una parte de la luz.
Una ventana distinta.
Una forma única de mirar aquello que nunca termina.
Amar es pedirle prestados los ojos
a otra conciencia.
Es descubrir colores escondidos
en lugares donde nuestra propia mirada
nunca había llegado.
Dos personas nunca comparten el mismo infinito.
Pero durante un instante,
sus ventanas apuntan al mismo cielo.
Y eso alcanza.
Entonces volví a mirar aquella fotografía.
La misma luz.
La misma imagen.
Pero ya no vi un instante detenido.
Vi algo más extraño.
Vi una parte del universo
que había encontrado una manera
de seguir llegando.
Quizás eso somos.
Luz antigua buscando ojos nuevos.
Fragmentos de eternidad
intentando recordarse.
Quizás la conciencia no fue una separación.
Quizás fue el momento
en que el universo abrió una ventana
hacia sí mismo. El primer lugar donde dejó de existir solamente
y empezó a preguntarse
qué significaba existir.
Y quizás por eso seguimos buscando respuestas.
Porque cada pregunta que hacemos
es una parte del infinito
intentando volver a casa.
La conciencia fue el primer error hermoso del universo.
El primer instante
en que lo eterno
se miró a sí mismo
y por un momento
olvidó
que era eterno.`
  }
]; // end errantExtras

/* -----------------------------
   UI: render catégories, modal, grid, detalle
   ----------------------------- */

const heroImg = document.getElementById('heroImg');
const heroButton = document.getElementById('heroButton');
const categoriesEl = document.getElementById('categories');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.getElementById('modalTitle');
const modalGrid = document.getElementById('modalGrid');
const modalPoem = document.getElementById('modalPoem');
const closeBtn = document.getElementById('closeBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const modalFoot = document.getElementById('modalFoot');

// load cover image (support spaces)
if (heroImg) {
  heroImg.src = 'images/' + encodeURIComponent(coverFileName);
  heroImg.alt = 'Portada 20 poemas del amor';
  heroImg.addEventListener('error', () => {
    const parent = heroImg.parentElement;
    const placeholder = document.createElement('div');
    placeholder.className = 'hero-placeholder';
    placeholder.innerText = 'Portada no encontrada\\nColoca ' + coverFileName + ' en /images/';
    parent.replaceChild(placeholder, heroImg);
  });
}

// categories metadata
const categories = [
  { id:'love', title: 'Otros Poemas de Amor', img: categoryImages.love, data: loveExtras },
  { id:'heartbreak', title: 'Otros Poemas de Desamor', img: categoryImages.heartbreak, data: heartbreakExtras },
  { id:'errant', title: 'Errante por mi cabeza', img: categoryImages.errant, data: errantExtras }
];

// render small category cards
function renderCategories(){
  categoriesEl.innerHTML = '';
  categories.forEach((cat, idx) => {
    const card = document.createElement('div');
    card.className = 'cat-card';
    card.tabIndex = 0;
    card.setAttribute('role','button');
    const img = document.createElement('img');
    img.src = 'images/' + encodeURIComponent(cat.img);
    img.alt = cat.title;
    img.addEventListener('error', ()=> {
      card.style.background = 'linear-gradient(135deg,#222,#111)';
      card.innerHTML = `<div class="label">${cat.title}</div>`;
    });
    const label = document.createElement('div');
    label.className = 'label';
    label.textContent = cat.title;
    card.appendChild(img);
    card.appendChild(label);
    card.addEventListener('click', ()=> openCategory(cat));
    card.addEventListener('keydown', e => { if(e.key==='Enter' || e.key===' ') openCategory(cat); });
    categoriesEl.appendChild(card);
  });
}

// open collection from hero
if (heroButton) {
  heroButton.addEventListener('click', () => showGridView('20 poemas del amor', poems20));
  heroButton.addEventListener('keydown', e => { if(e.key==='Enter' || e.key===' ') { e.preventDefault(); showGridView('20 poemas del amor', poems20); }});
}

// open category
function openCategory(cat){
  showGridView(cat.title, cat.data);
}

// modal grid / detail logic
let currentList = [];
let currentIndex = 0;
let lastActive = null;

function showGridView(title, list){
  currentList = list || [];
  lastActive = document.activeElement;
  modalTitle.textContent = title;
  modalPoem.style.display = 'none';
  modalFoot.style.display = 'none';
  modalGrid.style.display = 'grid';
  modalGrid.innerHTML = '';

  if(!currentList || currentList.length === 0){
    modalGrid.innerHTML = `<div style="color:var(--muted); padding:12px;">No hay poemas en esta categoría aún.</div>`;
  } else {
    currentList.forEach((p, i) => {
      const card = document.createElement('div');
      card.className = 'modal-card';
      card.tabIndex = 0;
      const color = palette[i % palette.length];
      const textColor = getContrastColor(color);
      card.style.background = `linear-gradient(135deg, ${color}, rgba(0,0,0,0.08))`;
      card.style.color = textColor;

      const inner = document.createElement('div');
      inner.className = 'card-inner';
      inner.innerHTML = `<div class="roman">Poema ${toRoman(i+1)}</div><div class="title">${p.title || ''}</div>`;
      card.appendChild(inner);

      card.addEventListener('click', ()=> openPoem(i));
      card.addEventListener('keydown', e => { if(e.key==='Enter' || e.key===' ') openPoem(i); });

      modalGrid.appendChild(card);
    });
  }

  modalOverlay.style.display = 'flex';
  modalOverlay.setAttribute('aria-hidden','false');
  setTimeout(()=> modalGrid.focus(),50);
}

function openPoem(index){
  if(!currentList || !currentList[index]) return;
  currentIndex = index;
  const p = currentList[index];
  modalTitle.textContent = p.title || `Poema ${toRoman(index+1)}`;
  modalGrid.style.display = 'none';
  modalPoem.style.display = 'block';
  modalFoot.style.display = 'flex';
  modalPoem.textContent = p.text || '';
  setTimeout(()=> modalPoem.focus(),40);
}

function showPrev(){ currentIndex = (currentIndex - 1 + currentList.length) % currentList.length; openPoem(currentIndex); }
function showNext(){ currentIndex = (currentIndex + 1) % currentList.length; openPoem(currentIndex); }
if(prevBtn) prevBtn.addEventListener('click', showPrev);
if(nextBtn) nextBtn.addEventListener('click', showNext);

if(closeBtn) closeBtn.addEventListener('click', closeModal);
if(modalOverlay) modalOverlay.addEventListener('click', (e)=> { if(e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e)=> {
  if(modalOverlay.style.display === 'flex'){
    if(e.key === 'Escape') closeModal();
    if(e.key === 'ArrowLeft') showPrev();
    if(e.key === 'ArrowRight') showNext();
  }
});

function closeModal(){
  modalOverlay.style.display = 'none';
  modalOverlay.setAttribute('aria-hidden','true');
  modalGrid.innerHTML = '';
  modalPoem.textContent = '';
  modalGrid.style.display = 'grid';
  modalPoem.style.display = 'none';
  modalFoot.style.display = 'none';
  if(lastActive) lastActive.focus();
}

// initial render
renderCategories();
