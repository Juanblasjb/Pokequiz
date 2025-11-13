import React, { useState } from 'react';
import { X, Award } from 'lucide-react';

const POKEMON_DATA = [
  {
    id: 1,
    name: "Bulbasaur",
    type: ["Planta", "Veneno"],
    rarity: "Infrecuente",
    stats: {
      hp: 45,
      atk: 49,
      def: 49,
      spd: 45,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.",
    height: "0.7 m",
    weight: "6.9 kg",
    quiz: [
      { question: "¿De qué tipo es Bulbasaur?", options: ["Fuego", "Agua", "Planta", "Eléctrico"], correct: 2 },
      { question: "¿Cuál es el número de Bulbasaur en la Pokédex?", options: ["001", "002", "003", "004"], correct: 0 },
      { question: "¿Qué tiene Bulbasaur en su espalda?", options: ["Una concha", "Una semilla", "Espinas", "Alas"], correct: 1 },
      { question: "¿A qué evoluciona Bulbasaur?", options: ["Venusaur", "Ivysaur", "Oddish", "Bellsprout"], correct: 1 },
      { question: "¿Cuál es el tipo secundario de Bulbasaur?", options: ["Ninguno", "Veneno", "Tierra", "Bicho"], correct: 1 },
      { question: "¿En qué nivel evoluciona Bulbasaur?", options: ["14", "16", "18", "20"], correct: 1 },
      { question: "¿Qué categoría de Pokémon es Bulbasaur?", options: ["Semilla", "Flor", "Hoja", "Planta"], correct: 0 },
      { question: "¿Cuál es la habilidad oculta de Bulbasaur?", options: ["Espesura", "Clorofila", "Superguarda", "Efecto Espora"], correct: 1 },
      { question: "¿Qué generación introdujo a Bulbasaur?", options: ["I", "II", "III", "IV"], correct: 0 },
      { question: "¿En qué región se encuentra Bulbasaur originalmente?", options: ["Johto", "Hoenn", "Kanto", "Sinnoh"], correct: 2 },
      { question: "¿Cuál de estos movimientos NO puede aprender Bulbasaur naturalmente?", options: ["Látigo Cepa", "Hoja Afilada", "Síntesis", "Bomba Germen"], correct: 3 },
      { question: "¿Qué profesor regala a Bulbasaur como inicial?", options: ["Oak", "Elm", "Birch", "Rowan"], correct: 0 },
      { question: "¿Cuántas patas tiene Bulbasaur?", options: ["2", "4", "6", "8"], correct: 1 },
      { question: "¿De qué color son los ojos de Bulbasaur?", options: ["Azules", "Rojos", "Verdes", "Amarillos"], correct: 1 },
      { question: "¿Qué tipo de ataque es más efectivo contra Bulbasaur?", options: ["Agua", "Eléctrico", "Fuego", "Planta"], correct: 2 },
      { question: "¿Cuál es la evolución final de Bulbasaur?", options: ["Ivysaur", "Venusaur", "Meganium", "Sceptile"], correct: 1 },
      { question: "¿Qué movimiento aprende Bulbasaur al nivel 13?", options: ["Hojas Mágicas", "Drenadoras", "Látigo Cepa", "Polvo Veneno"], correct: 2 },
      { question: "¿Bulbasaur puede aprender movimientos de tipo Psíquico?", options: ["Sí", "No", "Solo en generación I", "Solo con MT"], correct: 3 },
      { question: "¿Cuál es el grupo huevo de Bulbasaur?", options: ["Monstruo", "Planta y Monstruo", "Campo", "Dragón"], correct: 1 },
      { question: "¿Qué objeto sostiene Bulbasaur salvaje a veces?", options: ["Milagrosemilla", "Ninguno", "Hierbas revitalizadoras", "Energíaraíz"], correct: 1 },
      { question: "¿En qué generación Bulbasaur recibió su tipo Veneno?", options: ["Siempre lo tuvo", "II", "III", "IV"], correct: 0 },
      { question: "¿Cuál es la proporción de género de Bulbasaur?", options: ["50% M - 50% H", "75% M - 25% H", "87.5% M - 12.5% H", "100% M"], correct: 2 },
      { question: "¿Qué MT puede aprender Bulbasaur que sorprende por su tipo?", options: ["Terremoto", "Rayo", "Puño Trueno", "Tóxico"], correct: 0 },
      { question: "¿Cuántos PS base tiene Bulbasaur?", options: ["40", "45", "50", "55"], correct: 1 },
      { question: "¿Qué estadística base es la más alta de Bulbasaur?", options: ["Ataque", "Defensa", "Ataque Especial", "Velocidad"], correct: 2 },
      { question: "¿En qué juego apareció Bulbasaur por primera vez?", options: ["Rojo y Azul", "Oro y Plata", "Rubí y Zafiro", "Amarillo"], correct: 0 },
      { question: "¿Bulbasaur puede aprender Danza Espada?", options: ["Sí", "No", "Solo en Pokémon Amarillo", "Solo con tutor"], correct: 1 },
      { question: "¿Qué movimiento de estado aprende Bulbasaur tempranamente?", options: ["Desarrollo", "Pantalla de Luz", "Reflejo", "Amnesia"], correct: 0 },
      { question: "¿Cuál es el número de la ruta donde puedes encontrar Bulbasaur en Pokémon Amarillo?", options: ["Ruta 1", "Ruta 24", "Ruta 25", "Ciudad Celeste"], correct: 2 },
      { question: "¿Bulbasaur es exclusivo de alguna versión?", options: ["Sí, Pokémon Verde", "Sí, Pokémon Rojo", "Sí, Pokémon Azul", "No"], correct: 3 },
      { question: "¿Qué habilidad normal tiene Bulbasaur?", options: ["Clorofila", "Espesura", "Hoja Guardia", "Absorbe Agua"], correct: 1 },
      { question: "¿Cuánto pesa Bulbasaur en libras?", options: ["13.2 lbs", "15.2 lbs", "17.6 lbs", "19.8 lbs"], correct: 1 },
      { question: "¿En qué episodio del anime aparece por primera vez Bulbasaur?", options: ["Ep. 1", "Ep. 10", "Ep. 51", "Ep. 25"], correct: 1 },
      { question: "¿Qué Bulbasaur famoso se negó a evolucionar en el anime?", options: ["El de Ash", "El de Gary", "El de Misty", "El de Brock"], correct: 0 },
      { question: "¿Bulbasaur puede Megaevolucionar?", options: ["Sí", "No, pero Venusaur sí", "Sí, pero solo en Gen VII", "No"], correct: 1 },
      { question: "¿Qué movimiento Z puede usar Bulbasaur?", options: ["Aurorafloral Letal", "Ácido Mortífero", "Gigadrenado Atroz", "Ambos A y B"], correct: 3 },
      { question: "¿De qué color es la semilla en la espalda de Bulbasaur?", options: ["Verde", "Marrón", "Roja", "Verde con manchas"], correct: 3 },
      { question: "¿Cuál es la tasa de captura de Bulbasaur?", options: ["45", "90", "120", "255"], correct: 0 },
      { question: "¿Bulbasaur puede aprender Gigadrenado?", options: ["Sí, naturalmente", "Sí, por MT", "Sí, al evolucionar", "No"], correct: 0 },
      { question: "¿En qué película de Pokémon tiene Bulbasaur un papel importante?", options: ["Mewtwo vs Mew", "El Poder de Uno", "Pokémon 3", "Pokémon 4Ever"], correct: 0 },
      { question: "¿Qué movimiento huevo puede aprender Bulbasaur?", options: ["Maldición", "Vendetta", "Amnesia", "Todos los anteriores"], correct: 3 },
      { question: "¿Cuántos pasos necesitas para eclosionar un huevo de Bulbasaur?", options: ["5120", "5376", "5632", "5888"], correct: 0 },
      { question: "¿Bulbasaur fue diseñado por quién?", options: ["Satoshi Tajiri", "Ken Sugimori", "Junichi Masuda", "Shigeki Morimoto"], correct: 1 },
      { question: "¿Qué significa el nombre Bulbasaur?", options: ["Bulbo + Dinosaurio", "Bulbo + Lagarto", "Bombilla + Dinosaurio", "Bulbo + Saurio"], correct: 0 },
      { question: "¿En qué Super Smash Bros apareció Bulbasaur?", options: ["Melee", "Brawl", "Ninguno", "Ultimate"], correct: 2 },
      { question: "¿Cuál es el valor de experiencia base que da Bulbasaur?", options: ["60", "64", "70", "75"], correct: 1 },
      { question: "¿Bulbasaur puede aprender Amnesia por nivel?", options: ["Sí", "No", "Solo en Gen I", "Solo como movimiento huevo"], correct: 1 },
      { question: "¿Qué estadística tiene 65 de base en Bulbasaur?", options: ["Ataque Especial", "Defensa Especial", "Ambas", "Ninguna"], correct: 2 },
      { question: "¿Bulbasaur puede estar en el grupo huevo Amorfo?", options: ["Sí", "No", "Solo si es hembra", "Depende de la generación"], correct: 1 },
      { question: "¿En qué TCG set apareció la primera carta de Bulbasaur?", options: ["Base Set", "Jungle", "Fossil", "Team Rocket"], correct: 0 }
    ]
  },{
    id: 2,
    name: "Ivysaur",
    type: ["Planta", "Veneno"],
    rarity: "Infrecuente",
    stats: {
      hp: 60,
      atk: 62,
      def: 63,
      spd: 60,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Cuando el bulbo de su espalda crece, parece no poder ponerse de pie sobre sus patas traseras.",
    height: "1.0 m",
    weight: "13.0 kg",
    quiz: [
      { question: "¿Cuál es el número de Ivysaur en la Pokédex Nacional?", options: ["001", "002", "003", "004"], correct: 1 },
      { question: "¿Qué empieza a florecer en la espalda de Ivysaur?", options: ["Una semilla", "Un brote", "Una flor", "Hojas"], correct: 2 },
      { question: "¿A qué nivel evoluciona Ivysaur a Venusaur?", options: ["30", "32", "34", "36"], correct: 1 },
      { question: "¿Qué le ocurre al bulbo de Ivysaur cuando está a punto de evolucionar?", options: ["Se cae", "Suelta un dulce aroma", "Se vuelve azul", "Se encoge"], correct: 1 },
      { question: "¿Cuál de estos movimientos aprende Ivysaur por nivel de forma natural?", options: ["Rayo Solar", "Bomba Germen", "Drenadoras", "Síntesis"], correct: 3 },
      { question: "¿Qué estadística base es la más alta en Ivysaur?", options: ["Ataque", "Defensa", "Defensa Especial", "Ataque Especial"], correct: 3 },
      { question: "¿El peso de Ivysaur es mayor o menor que el de Bulbasaur?", options: ["Menor", "Igual", "Mayor", "Depende del género"], correct: 2 },
      { question: "¿Cuál es la habilidad oculta de Ivysaur?", options: ["Espesura", "Clorofila", "Sebo", "Poder Solar"], correct: 1 },
      { question: "En Super Smash Bros. Melee, ¿qué movimiento usa Ivysaur?", options: ["Látigo Cepa", "Hoja Afilada", "Rayo Solar", "No aparece"], correct: 3 },
      { question: "En Super Smash Bros. Brawl y Ultimate, Ivysaur es controlable por:", options: ["Ash", "Red (Entrenador Pokémon)", "Leaf", "Profesor Oak"], correct: 1 },
      { question: "¿De qué color son los ojos de Ivysaur?", options: ["Rojos", "Azules", "Verdes", "Morados"], correct: 0 },
      { question: "¿Cuánto mide Ivysaur?", options: ["0.8 m", "1.0 m", "1.2 m", "1.5 m"], correct: 1 },
      { question: "¿Qué tipo de ataque es súper efectivo contra Ivysaur?", options: ["Agua", "Lucha", "Psíquico", "Tierra"], correct: 2 },
      { question: "¿Cuál es la categoría de Pokémon de Ivysaur?", options: ["Bulbo", "Flor", "Semilla", "Jardín"], correct: 2 },
      { question: "¿Ivysaur puede aprender el movimiento Dulce Aroma?", options: ["Sí, por nivel", "No", "Solo por MT", "Solo como movimiento huevo"], correct: 0 },
      { question: "¿Cuál es su PS base?", options: ["55", "60", "65", "70"], correct: 1 },
      { question: "La flor en su espalda necesita... para crecer.", options: ["Agua de río", "Piedra Solar", "Luz solar", "Abono"], correct: 2 },
      { question: "¿Qué habilidad le permite a Ivysaur ser más rápido bajo el sol?", options: ["Espesura", "Don Floral", "Clorofila", "Poder Solar"], correct: 2 },
      { question: "El nombre 'Ivysaur' es una combinación de 'Ivy' (hiedra) y...", options: ["Saurio", "Dinosaurio", "Lagarto", "Planta"], correct: 0 },
      { question: "¿Cuántos puntos de Ataque base tiene Ivysaur?", options: ["60", "62", "63", "65"], correct: 1 },
      { question: "¿En qué generación se introdujo la habilidad Clorofila?", options: ["Generación II", "Generación III", "Generación IV", "Siempre existió"], correct: 1 },
      { question: "¿Qué movimiento de tipo Veneno aprende Ivysaur al evolucionar?", options: ["Bomba Lodo", "Tóxico", "Carga Tóxica", "Polvo Veneno"], correct: 3 },
      { question: "En el anime, el Bulbasaur de Ash evoluciona a Ivysaur.", options: ["Verdadero", "Falso", "Solo temporalmente", "Nunca se muestra"], correct: 1 },
      { question: "¿Qué le pasa a Ivysaur si pasa mucho tiempo sin sol?", options: ["Se duerme", "Se debilita", "Busca cuevas", "Evoluciona más rápido"], correct: 1 },
      { question: "¿Cuál es su valor de experiencia base al ser derrotado?", options: ["140", "142", "145", "150"], correct: 1 },
      { question: "¿En qué grupos huevo está Ivysaur?", options: ["Monstruo y Campo", "Planta y Hada", "Monstruo y Planta", "Solo Planta"], correct: 2 },
      { question: "¿Ivysaur es más pesado que Charmeleon?", options: ["Sí", "No", "Pesan lo mismo", "Depende del juego"], correct: 1 },
      { question: "¿A qué nivel aprende Ivysaur el movimiento Desarrollo?", options: ["15", "18", "20", "22"], correct: 2 },
      { question: "El color predominante de la piel de Ivysaur es:", options: ["Verde claro", "Turquesa", "Azul verdoso", "Verde oscuro"], correct: 2 },
      { question: "¿Cuál de estos movimientos NO puede aprender Ivysaur vía MT?", options: ["Danza Espada", "Día Soleado", "Terremoto", "Tóxico"], correct: 2 },
      { question: "La flor de Ivysaur se fortalece con:", options: ["Vitaminas", "Nutrientes y luz solar", "Agua de mar", "Piedra Lunar"], correct: 1 },
      { question: "¿Su tasa de captura es la misma que la de Bulbasaur?", options: ["Sí, es 45", "No, es mayor", "No, es menor", "Sí, es 65"], correct: 0 },
      { question: "En Super Smash Bros. Ultimate, ¿cuál es su Smash Final?", options: ["Frenesí Floral", "Rayo Solar", "Triple remate", "Gigabomba Planta"], correct: 2 },
      { question: "¿Cuántos puntos de Defensa Especial base tiene?", options: ["70", "75", "80", "85"], correct: 2 },
      { question: "¿Puede aprender Gigadrenado por MT en la Gen VIII?", options: ["Sí", "No", "Solo por tutor", "Solo al evolucionar"], correct: 0 },
      { question: "El aroma de su flor atrae a:", options: ["Humanos", "Otros Pokémon de Planta", "Pokémon tipo Bicho", "Nadie, es inodoro"], correct: 2 },
      { question: "¿Cuál es la velocidad base de Ivysaur?", options: ["50", "55", "60", "65"], correct: 2 },
      { question: "En el TCG, la primera carta de Ivysaur apareció en el set:", options: ["Jungle", "Fossil", "Base Set", "Team Rocket"], correct: 2 },
      { question: "¿Qué le sucede a sus patas para soportar el peso de la flor?", options: ["Se alargan", "Se vuelven más fuertes y robustas", "Le salen garras", "Cambian de color"], correct: 1 },
      { question: "¿Cuántas debilidades de tipo tiene Ivysaur?", options: ["3", "4", "5", "6"], correct: 1 },
      { question: "Ivysaur es débil a Fuego, Hielo, Volador y...", options: ["Roca", "Acero", "Psíquico", "Bicho"], correct: 2 },
      { question: "En Pokémon GO, ¿cuántos caramelos cuesta evolucionar un Bulbasaur a Ivysaur?", options: ["12", "25", "50", "100"], correct: 1 },
      { question: "¿A qué nivel aprende Hoja Afilada?", options: ["20", "25", "27", "30"], correct: 1 },
      { question: "¿Es posible encontrar un Ivysaur salvaje en Pokémon Rojo/Azul?", options: ["Sí, en la Zona Safari", "Sí, en la Cueva Celeste", "No, solo por evolución", "Sí, en la ruta 21"], correct: 2 },
      { question: "¿Qué movimiento de estado aprende que sube su Ataque y Ataque Especial?", options: ["Amnesia", "Danza Espada", "Desarrollo", "Maquinación"], correct: 2 },
      { question: "El nombre japonés de Ivysaur es 'Fushigisou', que se relaciona con:", options: ["Flor misteriosa", "Semilla extraña", "Hierba misteriosa", "Planta rara"], correct: 2 },
      { question: "¿Cuál es su estadística de Ataque Especial base?", options: ["70", "75", "80", "85"], correct: 2 },
      { question: "¿Puede aprender el movimiento Meteorobola vía MT?", options: ["Sí", "No", "Solo en Gen VIII", "Solo en Gen VII"], correct: 0 },
      { question: "La proporción de género de Ivysaur es:", options: ["50% M / 50% H", "100% Hembra", "87.5% M / 12.5% H", "25% M / 75% H"], correct: 2 },
      { question: "En el anime, ¿quién tiene un Ivysaur que luego evoluciona en el especial de Mewtwo?", options: ["Ash", "Corey", "Misty", "Fergus"], correct: 1 }
    ]
  },{
    id: 3,
    name: "Venusaur",
    type: ["Planta", "Veneno"],
    rarity: "Raro",
    stats: {
      hp: 80,
      atk: 82,
      def: 83,
      spd: 80,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "La planta florece cuando absorbe energía solar. Ésta le obliga a ponerse en busca de la luz solar.",
    height: "2.0 m",
    weight: "100.0 kg",
    quiz: [
      { question: "¿Cuál es el número de Venusaur en la Pokédex?", options: ["002", "003", "004", "005"], correct: 1 },
      { question: "¿Qué hay en la espalda de Venusaur?", options: ["Un árbol pequeño", "Un capullo gigante", "Una flor enorme", "Un arbusto"], correct: 2 },
      { question: "El aroma de la flor de Venusaur puede...", options: ["Atraer la lluvia", "Calmar las emociones", "Repeler a los tipo Bicho", "Predecir el clima"], correct: 1 },
      { question: "¿Qué forma especial puede alcanzar Venusaur en la Gen VI?", options: ["Forma Sol", "Megaevolución", "Forma Floral", "Forma Primigenia"], correct: 1 },
      { question: "Al Megaevolucionar, ¿qué habilidad obtiene Mega-Venusaur?", options: ["Espesura", "Clorofila", "Sebo", "Poder Solar"], correct: 2 },
      { question: "¿Qué forma especial puede alcanzar Venusaur en la Gen VIII?", options: ["Megaevolución", "Forma Dinamax", "Forma regional", "Gigamax"], correct: 3 },
      { question: "El movimiento Gigamax de Venusaur se llama:", options: ["Giga Drenado", "Giga Látigo", "Gigarrayo Floral", "Gigalianas"], correct: 3 },
      { question: "¿Cuál es la estadística más alta de Venusaur (sin megaevolucionar)?", options: ["Ataque", "Defensa", "Ataque Especial", "Defensa Especial"], correct: 3 },
      { question: "¿Cuál es la estadística más alta de Mega-Venusaur?", options: ["Defensa", "Defensa Especial", "Ataque Especial", "PS"], correct: 1 },
      { question: "¿Qué hace la habilidad 'Sebo' de Mega-Venusaur?", options: ["Reduce el daño de ataques de Fuego y Hielo", "Aumenta la defensa bajo la lluvia", "Es inmune a quemaduras", "Duplica la velocidad al sol"], correct: 0 },
      { question: "¿Qué movimiento poderoso de tipo Planta aprende Venusaur en niveles altos?", options: ["Bomba Germen", "Lluevehojas", "Rayo Solar", "Ciclón de Hojas"], correct: 2 },
      { question: "¿Cuánto pesa Venusaur?", options: ["80.5 kg", "90.5 kg", "100.0 kg", "115.0 kg"], correct: 2 },
      { question: "¿Cuánto mide Venusaur?", options: ["1.8 m", "2.0 m", "2.2 m", "2.4 m"], correct: 1 },
      { question: "La flor de Venusaur se vuelve más vívida...", options: ["Después de una batalla", "Con buena nutrición y luz solar", "Cuando está enfadado", "Durante la noche"], correct: 1 },
      { question: "¿Cuál es el PS base de Venusaur?", options: ["70", "80", "90", "100"], correct: 1 },
      { question: "En la primera película de Pokémon, Mewtwo clona a un Venusaur llamado:", options: ["Venusaurtwo", "Bruteroot", "Copyvenus", "No tiene nombre"], correct: 1 },
      { question: "Venusaur es la mascota del juego:", options: ["Pokémon Rojo", "Pokémon Azul", "Pokémon Verde", "Pokémon Amarillo"], correct: 2 },
      { question: "¿Puede Venusaur aprender el movimiento Terremoto?", options: ["Sí, por MT", "No", "Solo como movimiento huevo", "Solo en Gen I"], correct: 0 },
      { question: "La flor en su espalda se usa para absorber:", options: ["Agua", "Sonido", "Luz solar", "Energía eléctrica"], correct: 2 },
      { question: "¿Cuántos puntos de Ataque Especial base tiene Venusaur?", options: ["90", "100", "110", "120"], correct: 1 },
      { question: "¿Qué le pasa a Venusaur después de un día lluvioso?", options: ["Se debilita", "El aroma de su flor es más fuerte", "Se entierra", "Duerme más"], correct: 1 },
      { question: "¿Cuál es su velocidad base?", options: ["70", "80", "90", "100"], correct: 1 },
      { question: "El movimiento Gigalianas de Venusaur Gigamax, ¿qué efecto secundario tiene?", options: ["Baja la velocidad del oponente", "Envenena al oponente", "Hace daño residual a Pokémon no-Planta", "Sube su ataque"], correct: 2 },
      { question: "¿Mega-Venusaur tiene más Defensa que Ataque?", options: ["Sí", "No", "Tienen el mismo valor", "Depende del nivel"], correct: 0 },
      { question: "¿En qué grupos huevo está Venusaur?", options: ["Monstruo y Campo", "Planta y Hada", "Monstruo y Planta", "Solo Planta"], correct: 2 },
      { question: "El nombre japonés de Venusaur es 'Fushigibana', que significa:", options: ["Flor Misteriosa", "Hierba Extraña", "Planta Rara", "Sapo de Flor"], correct: 0 },
      { question: "¿Qué movimiento aprende Venusaur justo al evolucionar?", options: ["Danza Pétalo", "Tormenta Floral", "Hoja Mágica", "Látigo Cepa"], correct: 0 },
      { question: "¿Su tasa de captura es la misma que la de sus preevoluciones?", options: ["Sí, es 45", "No, es mayor", "No, es menor", "Sí, es 65"], correct: 0 },
      { question: "¿Cuántos puntos de Defensa base tiene Mega-Venusaur?", options: ["120", "122", "123", "125"], correct: 2 },
      { question: "En Pokémon GO, ¿se necesita un objeto especial para evolucionar a Ivysaur?", options: ["Sí, una Piedra Solar", "Sí, 200 caramelos", "No", "Sí, una Piedra Hoja"], correct: 2 },
      { question: "¿Cuál es la categoría de Pokémon de Venusaur?", options: ["Flor", "Selva", "Semilla", "Jardín"], correct: 2 },
      { question: "¿Es Venusaur más alto que Charizard?", options: ["Sí", "No", "Miden lo mismo", "Depende de la megaevolución"], correct: 0 },
      { question: "En el TCG, ¿cuál fue uno de los primeros Venusaur más codiciados?", options: ["Venusaur-EX", "Shining Venusaur", "Venusaur del Base Set", "Dark Venusaur"], correct: 2 },
      { question: "¿Qué tipo de clima beneficia más a Venusaur?", options: ["Lluvioso", "Soleado", "Nevado", "Tormenta de arena"], correct: 1 },
      { question: "¿Puede aprender el movimiento Enfado por tutor?", options: ["Sí", "No", "Solo en ciertas generaciones", "Solo como movimiento huevo"], correct: 0 },
      { question: "¿Cuántas debilidades tiene Mega-Venusaur gracias a su habilidad Sebo?", options: ["4", "3", "2", "1"], correct: 2 },
      { question: "¿En el anime, qué personaje importante de Kanto tiene un Venusaur?", options: ["Profesor Oak", "Gary Oak", "El líder de gimnasio Koga", "El Alto Mando Drake"], correct: 3 },
      { question: "¿Cuál es su estadística de Defensa Especial base?", options: ["90", "100", "110", "120"], correct: 1 },
      { question: "¿A qué se parece físicamente Venusaur, además de una planta?", options: ["Tortuga", "Dinosaurio", "Sapo o anfibio", "Lagarto"], correct: 2 },
      { question: "¿El movimiento característico de Venusaur en el anime solía ser?", options: ["Látigo Cepa", "Bomba Germen", "Rayo Solar", "Drenadoras"], correct: 2 },
      { question: "Venusaur Gigamax tiene una flor que cubre casi todo su cuerpo como un:", options: ["Escudo", "Paraguas", "Cañón", "Manto"], correct: 1 },
      { question: "¿Mega-Venusaur es de tipo Planta/Hada?", options: ["Sí", "No, sigue siendo Planta/Veneno", "Es solo tipo Planta", "Es Planta/Tierra"], correct: 1 },
      { question: "¿Cuántos pétalos tiene la flor de Venusaur?", options: ["4", "5", "6", "8"], correct: 2 },
      { question: "¿Cuál es el valor de experiencia base que da Venusaur?", options: ["236", "241", "253", "263"], correct: 3 },
      { question: "En la Pokédex se menciona que se mueve para buscar...", options: ["Comida", "Agua", "Luz solar", "Pareja"], correct: 2 },
      { question: "¿Qué MT de tipo Normal muy común puede aprender Venusaur?", options: ["Hiperrayo", "Corte", "Fuerza", "Golpe Cuerpo"], correct: 0 },
      { question: "¿Cuánto pesa Mega-Venusaur?", options: ["130.5 kg", "155.5 kg", "175.5 kg", "100.0 kg"], correct: 1 },
      { question: "El Pokémon inicial de Kanto que tiene ventaja sobre Venusaur es:", options: ["Squirtle", "Pikachu", "Eevee", "Charmander"], correct: 3 },
      { question: "¿Puede aprender el movimiento Tierra Viva?", options: ["Sí, por tutor", "No", "Solo en Gen VII", "Sí, por MT"], correct: 0 },
      { question: "La altura de Venusaur Gigamax es de:", options: ["15 m", "20 m", "Más de 24 m", "10 m"], correct: 2 }
    ]
  },
  {
    id: 4,
    name: "Charmander",
    type: ["Fuego"],
    rarity: "Infrecuente",
    stats: {
      hp: 39,
      atk: 52,
      def: 43,
      spd: 65,
      critRate: 5.0,
      critDmg: 50.0,
    },
    description: "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.",
    height: "0.6 m",
    weight: "8.5 kg",
    quiz: [
      { question: "¿De qué tipo es Charmander?", options: ["Agua", "Fuego", "Planta", "Normal"], correct: 1 },
      { question: "¿Qué parte de Charmander siempre está encendida?", options: ["Sus ojos", "Su boca", "Su cola", "Sus garras"], correct: 2 },
      { question: "¿Cuál es el número de Charmander en la Pokédex?", options: ["003", "004", "005", "006"], correct: 1 },
      { question: "¿Qué pasa si la llama de Charmander se apaga?", options: ["Duerme", "Evoluciona", "Muere", "Se vuelve más fuerte"], correct: 2 },
      { question: "¿A qué nivel evoluciona Charmander?", options: ["14", "16", "18", "20"], correct: 1 },
      { question: "¿Cuál es la evolución de Charmander?", options: ["Charmeleon", "Charizard", "Charcoal", "Blaziken"], correct: 0 },
      { question: "¿Qué categoría de Pokémon es Charmander?", options: ["Llama", "Lagartija", "Dragón", "Fuego"], correct: 1 },
      { question: "¿Cuál es la habilidad oculta de Charmander?", options: ["Mar Llamas", "Impulso", "Poder Solar", "Cuerpo Llama"], correct: 2 },
      { question: "¿De qué color es Charmander?", options: ["Rojo", "Naranja", "Amarillo", "Rojo-naranja"], correct: 3 },
      { question: "¿Cuántas garras tiene Charmander en cada mano?", options: ["3", "4", "5", "2"], correct: 0 },
      { question: "¿En qué región se origina Charmander?", options: ["Johto", "Hoenn", "Kanto", "Sinnoh"], correct: 2 },
      { question: "¿Qué profesor regala a Charmander como inicial?", options: ["Oak", "Elm", "Birch", "Rowan"], correct: 0 },
      { question: "¿Cuál es el tipo secundario de Charmander?", options: ["Dragón", "Volador", "Ninguno", "Lucha"], correct: 2 },
      { question: "¿Qué movimiento aprende Charmander al nivel 7?", options: ["Ascuas", "Lanzallamas", "Garra Dragón", "Pirotecnia"], correct: 0 },
      { question: "¿Charmander puede aprender movimientos de tipo Dragón?", options: ["Sí", "No", "Solo al evolucionar", "Solo con MT"], correct: 0 },
      { question: "¿Cuántos PS base tiene Charmander?", options: ["35", "39", "45", "50"], correct: 1 },
      { question: "¿Qué estadística base es la más alta de Charmander?", options: ["Ataque", "Velocidad", "Ataque Especial", "Defensa"], correct: 1 },
      { question: "¿Cuál es el grupo huevo de Charmander?", options: ["Monstruo", "Dragón", "Monstruo y Dragón", "Campo"], correct: 2 },
      { question: "¿Cuánto pesa Charmander?", options: ["6.5 kg", "7.5 kg", "8.5 kg", "9.5 kg"], correct: 2 },
      { question: "¿Qué altura tiene Charmander?", options: ["0.5 m", "0.6 m", "0.7 m", "0.8 m"], correct: 1 },
      { question: "¿Cuál es la proporción de género de Charmander?", options: ["50% M - 50% H", "75% M - 25% H", "87.5% M - 12.5% H", "100% M"], correct: 2 },
      { question: "¿En qué generación apareció Charmander?", options: ["I", "II", "III", "IV"], correct: 0 },
      { question: "¿Qué tipo de ataque es más efectivo contra Charmander?", options: ["Fuego", "Planta", "Agua", "Normal"], correct: 2 },
      { question: "¿Cuál es la evolución final de Charmander?", options: ["Charmeleon", "Charizard", "Salamence", "Dragonite"], correct: 1 },
      { question: "¿Charmander puede Megaevolucionar?", options: ["Sí", "No, pero Charizard sí", "Sí, pero solo en Gen VI", "No"], correct: 1 },
      { question: "¿La llama de Charmander indica qué?", options: ["Su edad", "Su salud y emociones", "Su poder", "Nada"], correct: 1 },
      { question: "¿En qué episodio del anime Ash captura a Charmander?", options: ["Ep. 1", "Ep. 11", "Ep. 20", "Ep. 25"], correct: 1 },
      { question: "¿Por qué fue abandonado el Charmander de Ash?", options: ["Era débil", "Su entrenador lo consideraba inútil", "Se perdió", "Huyó"], correct: 1 },
      { question: "¿Quién abandonó al Charmander de Ash?", options: ["Gary", "Damian", "Paul", "Silver"], correct: 1 },
      { question: "¿Qué movimiento huevo puede aprender Charmander?", options: ["Danza Dragón", "Garra Dragón", "Vendetta", "Todos los anteriores"], correct: 3 },
      { question: "¿Cuál es la tasa de captura de Charmander?", options: ["45", "90", "120", "255"], correct: 0 },
      { question: "¿Cuántos pasos necesitas para eclosionar un huevo de Charmander?", options: ["5120", "5376", "5632", "5888"], correct: 0 },
      { question: "¿Qué habilidad normal tiene Charmander?", options: ["Poder Solar", "Mar Llamas", "Cuerpo Llama", "Sequía"], correct: 1 },
      { question: "¿Charmander puede aprender Terremoto?", options: ["Sí", "No", "Solo como movimiento huevo", "Solo con MT en Gen I"], correct: 0 },
      { question: "¿En qué juego principal NO puedes obtener a Charmander?", options: ["Rojo/Azul", "Oro/Plata", "X/Y", "Ninguno, está en todos"], correct: 1 },
      { question: "¿Qué valor de experiencia base da Charmander al derrotarlo?", options: ["60", "62", "65", "70"], correct: 1 },
      { question: "¿Cuánto mide la llama de la cola de Charmander típicamente?", options: ["10 cm", "15 cm", "20 cm", "Varía"], correct: 3 },
      { question: "¿Charmander es vulnerable a qué estado?", options: ["Quemadura", "Parálisis", "Congelación", "Todos menos Quemadura"], correct: 3 },
      { question: "¿En qué Super Smash Bros es jugable Charizard?", options: ["Melee", "Brawl", "3DS/Wii U", "Brawl en adelante"], correct: 3 },
      { question: "¿Qué movimiento Z puede usar Charmander?", options: ["Embestida Ígnea Feroz", "Hiperimpulsor Aciago", "Gigallanura Atroz", "Llamarada Drake"], correct: 0 },
      { question: "¿La línea evolutiva de Charmander fue diseñada por?", options: ["Satoshi Tajiri", "Ken Sugimori", "Atsuko Nishida", "Motofumi Fujiwara"], correct: 1 },
      { question: "¿Qué significa el nombre Charmander en inglés?", options: ["Char + Salamander", "Charcoal + Mander", "Charm + Salamander", "Char + Commander"], correct: 0 },
      { question: "¿En qué TCG set apareció la primera carta de Charmander?", options: ["Base Set", "Jungle", "Fossil", "Team Rocket"], correct: 0 },
      { question: "¿Charmander puede aprender Lanzallamas naturalmente?", options: ["Sí", "No", "Solo al evolucionar a Charmeleon", "Solo al llegar a Charizard"], correct: 1 },
      { question: "¿A qué nivel Charmander aprende Garra Dragón?", options: ["No la aprende", "25", "28", "30"], correct: 0 },
      { question: "¿Dónde encuentras a Charmander en Pokémon Amarillo?", options: ["Ruta 24", "Ciudad Celeste", "Ruta 25", "Te lo regalan en Ciudad Plateada"], correct: 0 },
      { question: "¿Cuál es la estadística de Ataque Especial base de Charmander?", options: ["50", "60", "65", "70"], correct: 1 },
      { question: "¿Charmander puede estar en el grupo huevo Campo?", options: ["Sí", "No", "Solo en Gen I", "Solo si es hembra"], correct: 1 },
      { question: "¿Qué medalla necesitas para controlar a Charmander intercambiado?", options: ["Medalla Cascada", "Medalla Trueno", "Medalla Volcán", "Ninguna específica"], correct: 2 },
      { question: "¿En Pokémon GO, Charmander es común en qué bioma?", options: ["Agua", "Montaña", "Ciudad/Cálido", "Bosque"], correct: 2 }
    ]
  },{
    id: 5,
    name: "Charmeleon",
    type: ["Fuego"],
    rarity: "Infrecuente",
    stats: {
      hp: 58,
      atk: 64,
      def: 58,
      spd: 80,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Cuando balancea su ardiente cola, eleva la temperatura a niveles muy altos.",
    height: "1.1 m",
    weight: "19.0 kg",
    quiz: [
      { question: "¿Cuál es el número de Charmeleon en la Pokédex?", options: ["004", "005", "006", "007"], correct: 1 },
      { question: "¿A qué nivel evoluciona Charmeleon a Charizard?", options: ["32", "34", "36", "38"], correct: 2 },
      { question: "La personalidad de Charmeleon es descrita como:", options: ["Tímida y tranquila", "Orgullosa y agresiva", "Juguetona y curiosa", "Perezosa y dormilona"], correct: 1 },
      { question: "¿Qué busca Charmeleon constantemente?", options: ["Comida", "Un nido cálido", "Oponentes fuertes", "Agua"], correct: 2 },
      { question: "Las garras de Charmeleon son descritas como:", options: ["Pequeñas y romas", "Afiladas como cuchillas", "Retráctiles", "Decorativas"], correct: 1 },
      { question: "Si Charmeleon está emocionado, ¿qué hace la llama de su cola?", options: ["Se encoge", "Cambia a color azul", "Arde con más intensidad", "Se apaga"], correct: 2 },
      { question: "¿Qué estadística base es la más alta de Charmeleon?", options: ["Ataque", "Velocidad", "Ataque Especial", "Ambas B y C"], correct: 3 },
      { question: "¿Cuál es la habilidad oculta de Charmeleon?", options: ["Mar Llamas", "Poder Solar", "Cuerpo Llama", "Absorbe Fuego"], correct: 1 },
      { question: "¿Cuánto mide Charmeleon?", options: ["0.9 m", "1.1 m", "1.3 m", "1.5 m"], correct: 1 },
      { question: "¿Cuánto pesa Charmeleon?", options: ["15.0 kg", "17.0 kg", "19.0 kg", "21.0 kg"], correct: 2 },
      { question: "En el anime, ¿el Charmander de Ash evoluciona a Charmeleon y obedece sus órdenes?", options: ["Sí, siempre le obedece", "No, deja de obedecerle", "Solo obedece en gimnasios", "Nunca evoluciona a Charmeleon"], correct: 1 },
      { question: "¿Qué movimiento de tipo Dragón aprende Charmeleon por nivel?", options: ["Pulso Dragón", "Garra Dragón", "Danza Dragón", "Furia Dragón"], correct: 3 },
      { question: "¿De qué color es la piel de Charmeleon?", options: ["Naranja", "Rojo carmesí", "Amarillo oscuro", "Rojo anaranjado"], correct: 1 },
      { question: "¿Cuál es su PS base?", options: ["55", "58", "60", "62"], correct: 1 },
      { question: "El nombre japonés de Charmeleon es 'Lizardo'. ¿A qué hace referencia?", options: ["Lagartija", "Llama", "Lagarto", "Carbón"], correct: 2 },
      { question: "El temperamento de Charmeleon lo hace un Pokémon...", options: ["Fácil de entrenar", "Difícil de manejar para entrenadores novatos", "Perfecto para concursos", "Muy sociable"], correct: 1 },
      { question: "¿A qué nivel aprende Charmeleon el movimiento Lanzallamas?", options: ["30", "32", "34", "No lo aprende, solo Charizard"], correct: 2 },
      { question: "¿Cuál es su estadística de Ataque base?", options: ["64", "68", "70", "72"], correct: 0 },
      { question: "¿Y su estadística de Velocidad base?", options: ["70", "75", "80", "85"], correct: 2 },
      { question: "¿Puede Charmeleon aprender Puño Trueno por tutor?", options: ["Sí", "No", "Solo en Gen IV", "Solo como movimiento huevo"], correct: 0 },
      { question: "¿Qué parte de su cuerpo usa para derribar a sus oponentes?", options: ["Sus garras", "Su cabeza", "Su cola", "Sus patas"], correct: 2 },
      { question: "En la Zona Safari de Kanto, ¿es posible encontrar un Charmeleon salvaje?", options: ["Sí", "No, solo por evolución", "Solo en la versión Amarilla", "Solo usando un truco"], correct: 1 },
      { question: "La habilidad 'Poder Solar' de Charmeleon aumenta su... bajo el sol, a cambio de PS.", options: ["Velocidad", "Ataque", "Defensa Especial", "Ataque Especial"], correct: 3 },
      { question: "¿En qué grupos huevo se encuentra?", options: ["Monstruo y Fuego", "Monstruo y Dragón", "Solo Dragón", "Campo y Monstruo"], correct: 1 },
      { question: "¿Cuál de estos movimientos NO aprende Charmeleon por nivel?", options: ["Cara Susto", "Cuchillada", "Infierno", "Colmillo Ígneo"], correct: 2 },
      { question: "Si hay muchos Charmeleon en un lugar, ¿cómo se vuelve la temperatura del ambiente?", options: ["Fría", "Húmeda", "Extremadamente alta", "No cambia"], correct: 2 },
      { question: "Su tasa de captura es la misma que la de sus evoluciones.", options: ["Verdadero, es 45", "Falso, es 90", "Verdadero, es 60", "Falso, es 30"], correct: 0 },
      { question: "¿Cuántas debilidades de tipo tiene Charmeleon?", options: ["2", "3", "4", "5"], correct: 1 },
      { question: "Charmeleon es débil a Agua, Tierra y...", options: ["Hielo", "Psíquico", "Roca", "Eléctrico"], correct: 2 },
      { question: "El valor de experiencia base que otorga Charmeleon es:", options: ["140", "142", "145", "151"], correct: 1 },
      { question: "En el TCG, la primera carta de Charmeleon se encontraba en:", options: ["Base Set", "Jungle", "Fossil", "Team Rocket"], correct: 0 },
      { question: "En el anime, el Charmeleon de Ash evoluciona para luchar contra un:", options: ["Dragonite", "Aerodactyl", "Gyarados", "Magmar"], correct: 1 },
      { question: "¿Cuál es su estadística de Defensa base?", options: ["55", "58", "60", "65"], correct: 1 },
      { question: "¿Charmeleon puede aprender el movimiento Danza Espada por MT?", options: ["Sí", "No", "Solo en las primeras generaciones", "Solo por tutor"], correct: 0 },
      { question: "La cresta en la cabeza de Charmeleon es más... que la de Charmander.", options: ["Pequeña", "Grande y pronunciada", "Del mismo tamaño", "Suave"], correct: 1 },
      { question: "En Pokémon GO, ¿cuántos caramelos necesitas para evolucionar Charmander a Charmeleon?", options: ["12", "25", "50", "100"], correct: 1 },
      { question: "¿A qué nivel aprende el movimiento Cuchillada?", options: ["24", "26", "28", "30"], correct: 0 },
      { question: "Comparado con Ivysaur, Charmeleon es:", options: ["Más pesado", "Más ligero", "Pesan igual", "Más alto"], correct: 0 },
      { question: "La habilidad Mar Llamas potencia los movimientos de tipo... cuando tiene pocos PS.", options: ["Normal", "Dragón", "Fuego", "Lucha"], correct: 2 },
      { question: "¿Cuál es su estadística de Defensa Especial base?", options: ["60", "65", "70", "75"], correct: 1 },
      { question: "¿Puede aprender el movimiento Avalancha por MT?", options: ["Sí", "No", "Solo como Charizard", "Solo en ciertos juegos"], correct: 0 },
      { question: "Charmeleon es conocido por ser muy...", options: ["Amistoso", "Leal", "Cabezota", "Cobarde"], correct: 2 },
      { question: "¿Es posible que un Charmeleon nazca de un huevo?", options: ["Sí", "No, siempre nace Charmander", "Solo si los padres son Charizard", "Solo en la Gen II"], correct: 1 },
      { question: "¿A qué nivel aprende el movimiento Ascuas?", options: ["Nivel 1", "Nivel 7", "Nivel 10", "No lo aprende, solo Charmander"], correct: 3 },
      { question: "Su cola es lo suficientemente fuerte como para...", options: ["Crear huracanes", "Derretir rocas", "Derribar a un humano adulto", "Romper árboles"], correct: 2 },
      { question: "¿Qué movimiento de tipo Fuego aprende por nivel que puede quemar al oponente?", options: ["Giro Fuego", "Pirotecnia", "Nitrocarga", "Colmillo Ígneo"], correct: 3 },
      { question: "¿Es Charmeleon más rápido que Ivysaur?", options: ["Sí", "No", "Tienen la misma velocidad", "Depende del clima"], correct: 0 },
      { question: "En el manga Pokémon Adventures, el Charmander de Blue (Green en Japón) evoluciona a Charmeleon.", options: ["Verdadero", "Falso", "Evoluciona directamente a Charizard", "Blue no tiene un Charmander"], correct: 0 },
      { question: "¿Puede aprender el movimiento Puño Fuego?", options: ["Sí, por tutor", "No", "Sí, por nivel", "Sí, por MT"], correct: 0 },
      { question: "La temperatura de su llama puede alcanzar hasta...", options: ["500°C", "800°C", "1,200°C", "2,000°C"], correct: 2 }
    ]
  },{
    id: 6,
    name: "Charizard",
    type: ["Fuego", "Volador"],
    rarity: "Raro",
    stats: {
      hp: 78,
      atk: 84,
      def: 78,
      spd: 100,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Escupe fuego tan caliente que funde las rocas. Causa incendios forestales sin querer.",
    height: "1.7 m",
    weight: "90.5 kg",
    quiz: [
      { question: "¿Cuál es el número de Charizard en la Pokédex?", options: ["005", "006", "007", "008"], correct: 1 },
      { question: "Al evolucionar de Charmeleon, Charizard adquiere un segundo tipo. ¿Cuál es?", options: ["Dragón", "Acero", "Siniestro", "Volador"], correct: 3 },
      { question: "¿Cuántas formas de Megaevolución tiene Charizard?", options: ["Ninguna", "Una", "Dos", "Tres"], correct: 2 },
      { question: "¿Cuáles son los tipos de Mega-Charizard X?", options: ["Fuego/Volador", "Fuego/Dragón", "Fuego/Siniestro", "Dragón/Volador"], correct: 1 },
      { question: "¿Cuáles son los tipos de Mega-Charizard Y?", options: ["Fuego/Volador", "Fuego/Dragón", "Fuego puro", "Dragón/Fuego"], correct: 0 },
      { question: "La habilidad de Mega-Charizard X es:", options: ["Mar Llamas", "Garra Dura", "Sequía", "Poder Solar"], correct: 1 },
      { question: "La habilidad de Mega-Charizard Y es:", options: ["Mar Llamas", "Garra Dura", "Sequía", "Poder Solar"], correct: 2 },
      { question: "¿Qué forma especial puede alcanzar Charizard en la Gen VIII?", options: ["Megaevolución", "Forma Primigenia", "Gigamax", "Forma Alola"], correct: 2 },
      { question: "El movimiento Gigamax de Charizard se llama:", options: ["Giga Llama", "Giga Infierno", "Giga Fatuo", "Gigallamarada"], correct: 3 },
      { question: "El aliento de Charizard es tan caliente que puede derretir...", options: ["Acero", "Rocas y glaciares", "Diamantes", "Cualquier metal"], correct: 1 },
      { question: "Charizard es la mascota del juego:", options: ["Pokémon Rojo", "Pokémon Azul", "Pokémon Verde", "Pokémon Amarillo"], correct: 0 },
      { question: "A pesar de su apariencia, Charizard no es de tipo Dragón de forma natural, lo que lo hace vulnerable a ataques de tipo...", options: ["Tierra", "Hada", "Roca", "Veneno"], correct: 2 },
      { question: "La debilidad x4 (cuádruple) de Charizard es al tipo:", options: ["Agua", "Roca", "Eléctrico", "Hielo"], correct: 1 },
      { question: "¿Cuál es la estadística más alta de Charizard (sin megaevolucionar)?", options: ["Ataque", "Velocidad", "Ataque Especial", "Defensa"], correct: 2 },
      { question: "¿Qué estadística aumenta drásticamente en Mega-Charizard Y?", options: ["Ataque", "Defensa", "Velocidad", "Ataque Especial"], correct: 3 },
      { question: "¿Qué estadísticas se igualan en Mega-Charizard X?", options: ["Ataque y Defensa", "Ataque y Ataque Especial", "Velocidad y Defensa", "PS y Ataque"], correct: 1 },
      { question: "¿Qué movimiento aprende Charizard al evolucionar?", options: ["Lanzallamas", "Tajo Aéreo", "Garra Dragón", "Infierno"], correct: 1 },
      { question: "¿Cuánto mide Charizard?", options: ["1.5 m", "1.7 m", "1.9 m", "2.1 m"], correct: 1 },
      { question: "¿Cuánto pesa Charizard?", options: ["90.5 kg", "100.5 kg", "110.5 kg", "120.5 kg"], correct: 0 },
      { question: "En el anime, el Charizard de Ash es famoso por su...", options: ["Lealtad inicial", "Desobediencia y orgullo", "Miedo a las alturas", "Amor por las bayas"], correct: 1 },
      { question: "¿Contra qué Pokémon legendario lucha el Charizard de Ash en una batalla memorable?", options: ["Mewtwo", "Entei", "Articuno", "Lugia"], correct: 2 },
      { question: "¿Puede Charizard aprender el movimiento Rayo Solar?", options: ["Sí, por MT", "No", "Solo Mega-Charizard Y", "Solo en Gen I"], correct: 0 },
      { question: "El movimiento Gigallamarada de Charizard Gigamax tiene un efecto secundario. ¿Cuál es?", options: ["Quema al oponente", "Baja la defensa del oponente", "Hace daño residual a Pokémon no-Fuego", "Atrapa al oponente"], correct: 2 },
      { question: "¿De qué color es un Charizard variocolor (shiny)?", options: ["Azul", "Verde", "Dorado", "Negro"], correct: 3 },
      { question: "La habilidad 'Garra Dura' de Mega-Charizard X potencia los movimientos...", options: ["De tipo Fuego", "De contacto directo", "Con alta probabilidad de crítico", "De tipo Dragón"], correct: 1 },
      { question: "La habilidad 'Sequía' de Mega-Charizard Y invoca...", options: ["Lluvia", "Día Soleado", "Tormenta de Arena", "Granizo"], correct: 1 },
      { question: "Charizard solo usa su lanzallamas contra...", options: ["Pokémon más débiles", "Humanos", "Oponentes dignos", "Cualquier cosa que se mueva"], correct: 2 },
      { question: "El nombre japonés de Charizard es 'Lizardon'. Es una combinación de 'Lizard' (lagarto) y...", options: ["Don (sufijo de poder)", "Dragon", "On (sonido de rugido)", "Burn (quemar)"], correct: 0 },
      { question: "¿Qué movimiento de tipo Volador aprende en niveles altos?", options: ["Acróbata", "Vendaval", "Respiro", "Pájaro Osado"], correct: 1 },
      { question: "En Super Smash Bros. es un personaje jugable desde la edición...", options: ["Melee", "Brawl (como parte del Entrenador)", "Wii U / 3DS (solo)", "Ultimate (de nuevo con el Entrenador)"], correct: 1 },
      { question: "¿Cuál es su PS base?", options: ["78", "80", "85", "90"], correct: 0 },
      { question: "En Pokémon GO, ¿es Charizard uno de los mejores atacantes de tipo Fuego?", options: ["Sí", "No", "Solo en su forma Mega", "Solo en incursiones"], correct: 0 },
      { question: "¿Puede aprender el movimiento Terremoto por MT?", options: ["Sí", "No", "Solo en Gen I", "Solo Mega-Charizard X"], correct: 0 },
      { question: "¿Quién es el campeón de Galar que tiene a Charizard como su Pokémon estrella?", options: ["Lance", "Cynthia", "Steven", "Lionel (Leon)"], correct: 3 },
      { question: "La altura de Charizard Gigamax es de:", options: ["20 m", "25 m", "28 m", "30 m"], correct: 2 },
      { question: "¿A qué se parece el diseño de Mega-Charizard X?", options: ["A un dragón europeo clásico", "A un wyvern", "A un pterodáctilo", "A un grifo"], correct: 0 },
      { question: "El fuego en la cola de Charizard arde con más fuerza cuando...", options: ["Duerme", "Ha ganado una batalla difícil", "Está bajo la lluvia", "Está comiendo"], correct: 1 },
      { question: "¿Qué movimiento característico de tipo Fuego aprende que tiene 110 de potencia?", options: ["Llamarada", "Onda Ígnea", "Sofoco", "Envite Ígneo"], correct: 3 },
      { question: "¿En qué grupos huevo está Charizard?", options: ["Monstruo y Volador", "Fuego y Dragón", "Monstruo y Dragón", "Solo Dragón"], correct: 2 },
      { question: "Si la llama de su cola se apaga...", options: ["Pierde su tipo Fuego", "Se duerme profundamente", "Significa que morirá", "No puede volar"], correct: 2 },
      { question: "¿Cuál es la velocidad base de Charizard?", options: ["90", "95", "100", "105"], correct: 2 },
      { question: "Mega-Charizard Y tiene el Ataque Especial más alto de todos los Pokémon iniciales.", options: ["Verdadero", "Falso", "Está empatado con Primarina", "Mega-Sceptile lo supera"], correct: 0 },
      { question: "¿Cuál es el valor de experiencia base que da Charizard?", options: ["240", "253", "267", "280"], correct: 2 },
      { question: "¿Puede aprender el movimiento Envite Ígneo?", options: ["Sí, por nivel", "No, por tutor", "Sí, como movimiento huevo", "No lo aprende"], correct: 1 },
      { question: "Charizard es conocido por volar hasta una altitud de...", options: ["500 metros", "1,000 metros", "1,400 metros", "2,000 metros"], correct: 2 },
      { question: "En el TCG, la carta de Charizard del Base Set es una de las más...", options: ["Comunes y baratas", "Raras y valiosas", "Con más PS", "Débiles en ataque"], correct: 1 },
      { question: "¿Qué movimiento de estado puede aprender para recuperar la mitad de su vida?", options: ["Síntesis", "Recuperación", "Amortiguador", "Respiro"], correct: 3 },
      { question: "En la película 'Detective Pikachu', ¿contra qué Pokémon lucha un Charizard?", options: ["Gyarados", "Mewtwo", "Greninja", "Magikarp"], correct: 0 },
      { question: "¿Cuál es la estadística de Ataque base de Mega-Charizard X?", options: ["120", "130", "140", "150"], correct: 1 },
      { question: "El fuego de las alas de Charizard Gigamax está hecho de...", options: ["Fuego normal", "Magma", "Energía Gigamax pura", "Plasma"], correct: 1 }
    ]
  },
  {
    id: 7,
    name: "Squirtle",
    type: ["Agua"],
    rarity: "Infrecuente",
    stats: {
      hp: 44,
      atk: 48,
      def: 65,
      spd: 43,
      critRate: 5.0,
      critDmg: 50.0,
    },
    description: "Tras nacer, su espalda se hincha y endurece como una concha. Echa potente espuma por la boca.",
    height: "0.5 m",
    weight: "9.0 kg",
    quiz: [
      { question: "¿Cuál es el número de Squirtle en la Pokédex Nacional?", options: ["006", "007", "008", "009"], correct: 1 },
      { question: "¿A qué nivel evoluciona Squirtle a Wartortle?", options: ["14", "16", "18", "20"], correct: 1 },
      { question: "¿Qué parte de Squirtle es blanda al nacer pero se endurece con el tiempo?", options: ["Su cola", "Su cabeza", "Sus garras", "Su caparazón"], correct: 3 },
      { question: "Para protegerse, Squirtle se esconde en su caparazón y...", options: ["Se entierra", "Dispara agua hacia arriba", "Rueda", "Se hace el muerto"], correct: 1 },
      { question: "¿Cuál es la categoría de Pokémon de Squirtle?", options: ["Tortuguita", "Agua Dulce", "Burbuja", "Caparazón"], correct: 0 },
      { question: "En el anime, el Squirtle de Ash era el líder de un famoso grupo llamado:", options: ["Los Tortugas Ninja", "El Escuadrón Squirtle", "Los Chicos de Agua", "La Patrulla Acuática"], correct: 1 },
      { question: "¿Qué accesorio distintivo usaba el Squirtle de Ash?", options: ["Un sombrero", "Una bufanda", "Unas gafas de sol", "Un collar"], correct: 2 },
      { question: "¿Cuál es la habilidad oculta de Squirtle?", options: ["Torrente", "Nado Rápido", "Cura Lluvia", "Absorbe Agua"], correct: 2 },
      { question: "La forma de su caparazón le ayuda a...", options: ["Flotar mejor", "Reducir la resistencia en el agua", "Almacenar comida", "Atraer pareja"], correct: 1 },
      { question: "¿Desde dónde dispara Squirtle sus chorros de agua?", options: ["Su nariz", "Sus manos", "Su boca", "Su cola"], correct: 2 },
      { question: "¿Cuál es la estadística base más alta de Squirtle?", options: ["Ataque", "Defensa", "Velocidad", "PS"], correct: 1 },
      { question: "¿Cuánto mide Squirtle?", options: ["0.4 m", "0.5 m", "0.6 m", "0.7 m"], correct: 1 },
      { question: "¿Cuánto pesa Squirtle?", options: ["7.0 kg", "8.0 kg", "9.0 kg", "10.0 kg"], correct: 2 },
      { question: "En Super Smash Bros. Brawl y Ultimate, ¿qué movimiento usa Squirtle para cambiar de Pokémon?", options: ["Retirada", "Cambio Pokémon", "Relevo", "Sustituto"], correct: 1 },
      { question: "La habilidad 'Torrente' de Squirtle potencia sus movimientos de tipo Agua cuando...", options: ["Está lloviendo", "Tiene problemas de estado", "Le quedan pocos PS", "Lucha contra un tipo Fuego"], correct: 2 },
      { question: "¿Qué profesor Pokémon te da a Squirtle como inicial en Kanto?", options: ["Elm", "Sycamore", "Oak", "Birch"], correct: 2 },
      { question: "El nombre 'Squirtle' es una combinación de 'Squirrel' (ardilla) y...", options: ["Little", "Bubble", "Turtle", "Shell"], correct: 2 },
      { question: "¿Cuál de estos movimientos puede aprender Squirtle como movimiento huevo?", options: ["Esfera Aural", "Pulso Dragón", "Agua Lodosa", "Todos los anteriores"], correct: 3 },
      { question: "¿De qué color son los ojos de Squirtle?", options: ["Rojos/Marrones", "Azules", "Verdes", "Negros"], correct: 0 },
      { question: "¿Cuál de estos tipos es súper efectivo contra Squirtle?", options: ["Fuego", "Acero", "Eléctrico", "Hielo"], correct: 2 },
      { question: "El caparazón de Squirtle no es solo para protegerse, también lo usa para...", options: ["Dormir", "Guardar bayas", "Nadar más rápido", "Excavar"], correct: 2 },
      { question: "¿En qué grupos huevo se encuentra Squirtle?", options: ["Monstruo y Agua 1", "Solo Agua 1", "Campo y Agua 1", "Monstruo y Campo"], correct: 0 },
      { question: "¿Cuál es su PS base?", options: ["40", "44", "48", "50"], correct: 1 },
      { question: "La habilidad 'Cura Lluvia' le permite a Squirtle...", options: ["Ser más rápido en la lluvia", "Recuperar PS cada turno bajo la lluvia", "Subir su ataque en la lluvia", "Evitar problemas de estado"], correct: 1 },
      { question: "En la primera película, el Squirtle clonado por Mewtwo se distingue por...", options: ["Ser más grande", "Tener un color diferente", "Unas marcas en su caparazón", "Ser más agresivo"], correct: 2 },
      { question: "¿Squirtle puede aprender el movimiento Rayo Hielo por MT?", options: ["Sí", "No", "Solo en Gen I", "Solo Wartortle"], correct: 0 },
      { question: "En el anime, ¿a qué trabajo regresa el Squirtle de Ash?", options: ["Modelo de calendarios", "Bombero", "Surfista profesional", "Líder del Escuadrón Squirtle"], correct: 3 },
      { question: "El valor de experiencia base que otorga Squirtle al ser derrotado es:", options: ["60", "63", "66", "70"], correct: 1 },
      { question: "¿Qué movimiento de estado aprende por nivel para subir su defensa?", options: ["Refugio", "Rizo Defensa", "Fortaleza", "Retirada"], correct: 3 },
      { question: "En el TCG, la primera carta de Squirtle apareció en el set:", options: ["Jungle", "Base Set", "Fossil", "Team Rocket"], correct: 1 },
      { question: "¿Quién diseñó originalmente a Squirtle?", options: ["Ken Sugimori", "Satoshi Tajiri", "Atsuko Nishida", "Junichi Masuda"], correct: 2 },
      { question: "La cola de Squirtle se describe como:", options: ["Corta y puntiaguda", "Larga y ondulada", "Pequeña y redonda", "Ancha y peluda"], correct: 1 },
      { question: "¿Qué movimiento aprende al nivel 7?", options: ["Pistola Agua", "Burbuja", "Látigo", "Placaje"], correct: 1 },
      { question: "¿Es Squirtle más pesado que Bulbasaur?", options: ["Sí", "No", "Pesan lo mismo", "Depende del género"], correct: 0 },
      { question: "En Pokémon Amarillo, ¿dónde puedes conseguir a Squirtle?", options: ["Te lo da el Prof. Oak", "En la Zona Safari", "Te lo da la Agente Mara/Oficial Jenny", "En las Islas Espuma"], correct: 2 },
      { question: "¿Cuál es su estadística de Defensa base?", options: ["60", "65", "70", "75"], correct: 1 },
      { question: "¿A qué se parece el nombre japonés de Squirtle, 'Zenigame'?", options: ["Tortuga de agua", "Tortuga de estanque", "Tortuga bebé", "Tortuga moneda"], correct: 1 },
      { question: "El chorro de agua de Squirtle es muy preciso, incluso a distancia.", options: ["Verdadero", "Falso", "Solo de cerca", "Solo cuando evoluciona"], correct: 0 },
      { question: "¿Squirtle puede aprender Giro Rápido?", options: ["Sí, por nivel", "No", "Sí, por movimiento huevo", "Solo por tutor"], correct: 0 },
      { question: "En Super Smash Bros., ¿cuál es su movimiento especial lateral?", options: ["Pistola Agua", "Cascada", "Refugio", "Cabezazo"], correct: 2 },
      { question: "¿Qué tipo de ataque resiste Squirtle?", options: ["Planta", "Eléctrico", "Lucha", "Fuego"], correct: 3 },
      { question: "¿Su tasa de captura es de?", options: ["45", "90", "120", "190"], correct: 0 },
      { question: "En Pokémon GO, Squirtle con gafas de sol es un homenaje a:", options: ["La primera película", "El manga", "El Escuadrón Squirtle del anime", "Un evento especial de verano"], correct: 2 },
      { question: "¿Puede aprender el movimiento Terremoto por MT?", options: ["Sí", "No", "Solo como Blastoise", "Solo en Gen I"], correct: 1 },
      { question: "¿Cuál es su estadística de Ataque Especial base?", options: ["50", "55", "60", "64"], correct: 0 },
      { question: "¿Qué movimiento aprende que puede bajar la velocidad del oponente?", options: ["Burbuja", "Rayo Burbuja", "Agua Lodosa", "Salmuera"], correct: 0 },
      { question: "¿Cuántos pasos se necesitan para eclosionar un huevo de Squirtle?", options: ["5120", "5376", "5632", "5888"], correct: 0 },
      { question: "¿El caparazón de un Squirtle recién nacido es duro?", options: ["Sí, es como una roca", "No, es blando y gomoso", "Es semiduro", "No tienen caparazón al nacer"], correct: 1 },
      { question: "¿Puede Squirtle aprender el movimiento Puño Hielo?", options: ["Sí, por tutor", "No", "Solo por MT", "Sí, por nivel"], correct: 0 },
      { question: "En la Pokédex se dice que puede disparar espuma por la boca.", options: ["Verdadero", "Falso", "Solo en los juegos", "Solo en el anime"], correct: 0 }
    ]
  },{
    id: 8,
    name: "Wartortle",
    type: ["Agua"],
    rarity: "Infrecuente",
    stats: {
      hp: 59,
      atk: 63,
      def: 80,
      spd: 58,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Se oculta en el agua para cazar a sus presas. Al nadar rápidamente, mueve sus orejas para nivelarse.",
    height: "1.0 m",
    weight: "22.5 kg",
    quiz: [
      { question: "¿Cuál es el número de Wartortle en la Pokédex?", options: ["007", "008", "009", "010"], correct: 1 },
      { question: "¿A qué nivel evoluciona Wartortle a Blastoise?", options: ["32", "34", "36", "38"], correct: 2 },
      { question: "La cola larga y peluda de Wartortle es un símbolo de:", options: ["Fuerza", "Velocidad", "Longevidad y suerte", "Realeza"], correct: 2 },
      { question: "¿Qué puede hacer Wartortle con sus orejas?", options: ["Oír a largas distancias", "Usarlas como timón para mantener el equilibrio", "Detectar lluvia", "Asustar a sus enemigos"], correct: 1 },
      { question: "¿Para qué usa Wartortle su cola al nadar?", options: ["Para impulsarse", "Como depósito de aire para inmersiones largas", "Para atraer presas", "Para defenderse"], correct: 1 },
      { question: "Se dice que un Wartortle puede vivir...", options: ["100 años", "500 años", "1,000 años", "10,000 años"], correct: 3 },
      { question: "¿Cuál es la categoría de Pokémon de Wartortle?", options: ["Tortuga", "Agua", "Caparazón", "Mar"], correct: 0 },
      { question: "En el anime, ¿qué personaje importante tiene un Wartortle como su inicial?", options: ["Ash", "Misty", "Brock", "Gary Oak"], correct: 3 },
      { question: "¿Qué habilidad oculta tiene Wartortle?", options: ["Torrente", "Nado Rápido", "Cura Lluvia", "Hidratación"], correct: 2 },
      { question: "¿Qué indican los arañazos en el caparazón de un Wartortle?", options: ["Que es viejo", "Que está enfermo", "Que es un guerrero curtido", "Que es torpe"], correct: 2 },
      { question: "¿Cuál es la estadística base más alta de Wartortle?", options: ["Ataque", "Defensa y Defensa Especial", "Velocidad", "PS"], correct: 1 },
      { question: "¿Cuánto mide Wartortle?", options: ["0.8 m", "1.0 m", "1.2 m", "1.4 m"], correct: 1 },
      { question: "¿Cuánto pesa Wartortle?", options: ["20.5 kg", "22.5 kg", "25.5 kg", "28.5 kg"], correct: 1 },
      { question: "El nombre 'Wartortle' combina 'Warrior' (guerrero), 'Tortoise' (tortuga terrestre) y...", options: ["Turtle", "Water", "Bubble", "Little"], correct: 0 },
      { question: "¿Qué movimiento aprende Wartortle justo al evolucionar de Squirtle?", options: ["Giro Rápido", "Mordisco", "Pistola Agua", "Rayo Burbuja"], correct: 1 },
      { question: "¿Es Wartortle más rápido que Charmeleon?", options: ["Sí", "No", "Tienen la misma velocidad", "Solo en el agua"], correct: 1 },
      { question: "¿Cuál es su PS base?", options: ["55", "59", "62", "65"], correct: 1 },
      { question: "El pelaje de su cola se oscurece con la...", options: ["Luz del sol", "Edad", "Derrota", "Evolución"], correct: 1 },
      { question: "¿Cuál es el nombre japonés de Wartortle?", options: ["Kameil", "Zenigame", "Kamex", "Watoru"], correct: 0 },
      { question: "En Super Smash Bros., ¿aparece Wartortle como personaje jugable?", options: ["Sí, en Melee", "Sí, en Brawl", "No, solo Squirtle y Blastoise", "No, solo Squirtle e Ivysaur"], correct: 3 },
      { question: "Wartortle es deliberadamente más... que Squirtle.", options: ["Amistoso", "Juguetón", "Agresivo", "Tímido"], correct: 2 },
      { question: "¿En qué grupos huevo se encuentra?", options: ["Monstruo y Agua 1", "Solo Agua 1", "Campo y Agua 1", "Monstruo y Campo"], correct: 0 },
      { question: "El valor de experiencia base que otorga Wartortle es:", options: ["140", "142", "145", "150"], correct: 1 },
      { question: "¿Qué movimiento aprende por nivel que puede hacer retroceder al oponente?", options: ["Acua Jet", "Pulso Umbrío", "Hidropulso", "Salmuera"], correct: 2 },
      { question: "En el TCG, ¿en qué set apareció la primera carta de Wartortle?", options: ["Jungle", "Fossil", "Base Set", "Team Rocket"], correct: 2 },
      { question: "¿Puede aprender el movimiento Puño Hielo por tutor?", options: ["Sí", "No", "Solo como Blastoise", "Solo en Gen IV"], correct: 0 },
      { question: "La gente solía usar la cola de Wartortle como...", options: ["Amuleto", "Pincel", "Símbolo de estatus", "Almohada"], correct: 0 },
      { question: "¿A qué nivel aprende el movimiento Protección?", options: ["25", "28", "31", "34"], correct: 2 },
      { question: "Comparado con Ivysaur, Wartortle tiene más...", options: ["Velocidad", "Defensa", "Ataque Especial", "PS"], correct: 1 },
      { question: "¿Es posible encontrar un Wartortle salvaje en Pokémon Rojo/Azul?", options: ["Sí, surfeando en Ciudad Carmín", "No, solo por evolución", "Sí, en las Islas Espuma", "Sí, en la Cueva Celeste"], correct: 1 },
      { question: "¿Su habilidad Torrente potencia qué tipo de movimiento?", options: ["Fuego", "Acero", "Hielo", "Agua"], correct: 3 },
      { question: "El color de su piel es un azul más... que el de Squirtle.", options: ["Claro", "Verdoso", "Profundo", "Grisáceo"], correct: 2 },
      { question: "¿Cuál es su estadística de Ataque Especial base?", options: ["60", "65", "70", "75"], correct: 1 },
      { question: "¿Wartortle puede tener problemas para mantener el equilibrio en tierra firme?", options: ["Sí, por su pesada cola", "No, sus orejas le ayudan", "Solo si está mareado", "No, es muy ágil"], correct: 1 },
      { question: "¿Cuántas debilidades de tipo tiene?", options: ["1", "2", "3", "4"], correct: 1 },
      { question: "Wartortle es resistente al tipo...", options: ["Planta", "Eléctrico", "Acero", "Lucha"], correct: 2 },
      { question: "¿Cuál es su tasa de captura?", options: ["45", "90", "120", "190"], correct: 0 },
      { question: "En Pokémon GO, ¿cuántos caramelos se necesitan para evolucionar Wartortle a Blastoise?", options: ["25", "50", "100", "125"], correct: 2 },
      { question: "¿Qué movimiento aprende que tiene más potencia si el rival tiene menos de la mitad de sus PS?", options: ["Acua Cola", "Hidrobomba", "Salmuera", "Surf"], correct: 2 },
      { question: "¿Puede aprender el movimiento Cola Férrea por MT?", options: ["Sí", "No", "Solo en ciertas generaciones", "Solo por movimiento huevo"], correct: 0 },
      { question: "¿Qué parte de su cuerpo se parece a las alas?", options: ["La cola", "Las garras", "El caparazón", "Las orejas"], correct: 3 },
      { question: "Es conocido por cazar de forma activa, a diferencia de Squirtle.", options: ["Verdadero", "Falso", "Cazan igual", "Solo caza en grupo"], correct: 0 },
      { question: "¿Cuál es su estadística de Velocidad base?", options: ["55", "58", "60", "62"], correct: 1 },
      { question: "Los Wartortle son Pokémon muy leales a sus entrenadores si se les trata con respeto.", options: ["Verdadero", "Falso", "Son siempre rebeldes", "No les importan los entrenadores"], correct: 0 },
      { question: "¿Puede aprender el movimiento Danza Lluvia por nivel?", options: ["Sí", "No, por MT", "No lo aprende", "Sí, al evolucionar"], correct: 0 },
      { question: "En el manga, el Squirtle de Green (Blue en Japón) evoluciona a Wartortle.", options: ["Verdadero", "Falso", "Nunca tuvo un Squirtle", "Evoluciona directamente a Blastoise"], correct: 0 },
      { question: "¿Su caparazón es más duro que el de un Squirtle?", options: ["Sí", "No, es igual", "Es más blando pero flexible", "Solo los bordes"], correct: 0 },
      { question: "Se esconde en el agua al cazar y espera a que su presa se acerque.", options: ["Verdadero", "Falso", "Caza en tierra", "No caza"], correct: 0 },
      { question: "¿Cuál de estos movimientos NO puede aprender Wartortle por MT?", options: ["Rayo Hielo", "Excavar", "Lanzallamas", "Puntapié"], correct: 2 },
      { question: "Su popularidad es a menudo eclipsada por sus evoluciones.", options: ["Verdadero", "Falso", "Es el más popular de los tres", "Es tan popular como Squirtle"], correct: 0 }
    ]
  },{
    id: 9,
    name: "Blastoise",
    type: ["Agua"],
    rarity: "Raro",
    captureRate: 0.90,
    stats: {
      hp: 79,
      atk: 83,
      def: 100,
      spd: 78,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Un brutal Pokémon con reactores de agua en su caparazón. Éstos son usados para rápidos placajes.",
    height: "1.6 m",
    weight: "85.5 kg",
    quiz: [
      { question: "¿Cuál es el número de Blastoise en la Pokédex?", options: ["008", "009", "010", "011"], correct: 1 },
      { question: "¿Qué tiene Blastoise en su caparazón que sus preevoluciones no tienen?", options: ["Púas", "Cañones de agua", "Propulsores", "Un timón"], correct: 1 },
      { question: "Los chorros de agua de Blastoise pueden perforar...", options: ["Madera", "Roca", "Acero grueso", "Diamante"], correct: 2 },
      { question: "¿Qué forma especial puede alcanzar Blastoise en la Gen VI?", options: ["Forma Primigenia", "Gigamax", "Megaevolución", "Forma Kanto"], correct: 2 },
      { question: "¿Qué habilidad obtiene Mega-Blastoise?", options: ["Torrente", "Chorro Arena", "Mega Disparador", "Potencia"], correct: 2 },
      { question: "La habilidad 'Mega Disparador' potencia los movimientos de...", options: ["Agua", "Tipo Pulso y Aura", "Con alta probabilidad de crítico", "Contacto"], correct: 1 },
      { question: "¿Qué forma especial puede alcanzar Blastoise en la Gen VIII?", options: ["Megaevolución", "Forma Galar", "Dinamax", "Gigamax"], correct: 3 },
      { question: "El movimiento Gigamax de Blastoise se llama:", options: ["Giga Chorro", "Giga Tsunami", "Giga Cañonazo", "Giga Tormenta"], correct: 2 },
      { question: "Blastoise es la mascota del juego:", options: ["Pokémon Rojo", "Pokémon Azul", "Pokémon Verde", "Pokémon Agua"], correct: 1 },
      { question: "Para realizar ataques de alta velocidad, Blastoise puede usar sus cañones como...", options: ["Anclas", "Propulsores de cohete", "Alas", "Equilibrio"], correct: 1 },
      { question: "¿Cuál es la categoría de Pokémon de Blastoise?", options: ["Armazón", "Tortuga", "Cañón", "Tanque"], correct: 0 },
      { question: "¿Cuál es la estadística base más alta de Blastoise (sin megaevolucionar)?", options: ["Defensa", "Ataque", "Defensa Especial", "PS"], correct: 2 },
      { question: "Mega-Blastoise tiene un gran cañón en su espalda y dos más pequeños en...", options: ["Sus hombros", "Su cabeza", "Sus brazos/patas delanteras", "Su cola"], correct: 2 },
      { question: "¿Qué movimiento de tipo Aura puede aprender Blastoise que se ve potenciado por su Mega-Habilidad?", options: ["Pulso Dragón", "Esfera Aural", "Pulso Umbrío", "Todos los anteriores"], correct: 3 },
      { question: "En el anime, ¿quién es el primer rival de Ash que tiene un Blastoise?", options: ["Paul", "Richie", "Gary Oak", "Trip"], correct: 2 },
      { question: "¿Cuánto mide Blastoise?", options: ["1.5 m", "1.6 m", "1.7 m", "1.8 m"], correct: 1 },
      { question: "¿Cuánto pesa Blastoise?", options: ["85.5 kg", "90.5 kg", "95.5 kg", "101.1 kg"], correct: 0 },
      { question: "¿Cuál es su PS base?", options: ["75", "79", "83", "85"], correct: 1 },
      { question: "El movimiento Giga Cañonazo de Blastoise Gigamax, ¿qué efecto secundario tiene?", options: ["Baja la velocidad del rival", "Hace daño residual a Pokémon que no son de tipo Agua", "Confunde al rival", "Sube su defensa"], correct: 1 },
      { question: "El nombre 'Blastoise' es una combinación de 'Blast' (explosión) y...", options: ["Poise", "Tortoise", "Noise", "Moisture"], correct: 1 },
      { question: "En la primera película, ¿quién lidera al grupo de Pokémon clonados junto a Mewtwo?", options: ["Charizardtwo", "Blastoisetwo", "Venusaurtwo", "Los tres por igual"], correct: 3 },
      { question: "¿Puede Blastoise aprender el movimiento Terremoto por MT?", options: ["Sí", "No", "Solo en Gen I", "Solo en su forma Mega"], correct: 0 },
      { question: "¿Cuál es su estadística de Defensa base?", options: ["95", "100", "105", "110"], correct: 1 },
      { question: "¿En qué grupos huevo se encuentra?", options: ["Monstruo y Agua 1", "Solo Agua 1", "Campo y Agua 1", "Monstruo y Campo"], correct: 0 },
      { question: "Blastoise es intencionadamente pesado para poder...", options: ["Nadar más profundo", "Resistir el retroceso de sus propios cañones", "Atraer presas más grandes", "Romper rocas al caer"], correct: 1 },
      { question: "El nombre japonés de Blastoise, 'Kamex', probablemente viene de 'Kame' (tortuga) y...", options: ["Excellent", "Max", "Extra", "Complex"], correct: 1 },
      { question: "¿Cuál es su tasa de captura?", options: ["45", "90", "120", "30"], correct: 0 },
      { question: "¿Qué estadística de Mega-Blastoise alcanza los 135 puntos base?", options: ["Ataque", "Defensa", "Ataque Especial", "Velocidad"], correct: 2 },
      { question: "En el anime, un Blastoise famoso era el líder de la Isla de los Pokémon Gigantes.", options: ["Verdadero", "Falso", "Era un Dragonite", "Era un Wartortle"], correct: 1 },
      { question: "El caparazón de Blastoise Gigamax se asemeja a...", options: ["Una fortaleza", "Un submarino", "Un acorazado con 31 cañones", "Una isla"], correct: 2 },
      { question: "¿Puede aprender el movimiento Destello por MT en Gen I?", options: ["Sí", "No, pero sí Foco Resplandor", "No", "Solo por tutor"], correct: 2 },
      { question: "En Super Smash Bros., ¿aparece Blastoise como personaje jugable?", options: ["Sí", "No, solo Squirtle", "Aparece como un espíritu", "Sí, en el Smash Final del Entrenador"], correct: 2 },
      { question: "¿Qué movimiento aprende por nivel que puede golpear a ambos oponentes en batallas dobles?", options: ["Hidropulso", "Surf", "Agua Lodosa", "Salpicar"], correct: 1 },
      { question: "Blastoise puede disparar balas de agua con la suficiente precisión para golpear latas a... de distancia.", options: ["20 metros", "35 metros", "50 metros", "100 metros"], correct: 2 },
      { question: "¿Quién es el miembro del Alto Mando de Kanto que usa un Blastoise?", options: ["Agatha", "Bruno", "Lorelei", "Ninguno, pero sí Azul (Blue)"], correct: 3 },
      { question: "¿Cuál es el valor de experiencia base que otorga Blastoise?", options: ["239", "255", "265", "270"], correct: 2 },
      { question: "¿Puede aprender el movimiento Cola Férrea por MT?", options: ["Sí", "No", "Solo en ciertas generaciones", "Solo por movimiento huevo"], correct: 0 },
      { question: "La altura de Blastoise Gigamax es de:", options: ["20 m", "Más de 25 m", "30 m", "15 m"], correct: 1 },
      { question: "¿Cuál es la estadística de Defensa de Mega-Blastoise?", options: ["115", "120", "125", "130"], correct: 1 },
      { question: "El Pokémon inicial de Kanto que tiene ventaja sobre Blastoise es:", options: ["Charmander", "Pikachu", "Bulbasaur", "Eevee"], correct: 2 },
      { question: "¿Qué movimiento aprende que es el ataque de tipo Agua más potente?", options: ["Acua Cola", "Surf", "Salpicar", "Hidrocañón"], correct: 3 },
      { question: "El Blastoise de Green (Blue en el manga) tiene una particularidad en sus cañones. ¿Cuál?", options: ["Puede guardarlos", "Son extraíbles", "Disparan de forma independiente", "Disparan fuego a veces"], correct: 0 },
      { question: "¿Blastoise es más pesado que Venusaur?", options: ["Sí", "No", "Pesan lo mismo", "Depende de la forma"], correct: 1 },
      { question: "Para usar Hidrocañón, Blastoise necesita descansar el siguiente turno.", options: ["Verdadero", "Falso", "Solo si falla", "Solo en su forma Mega"], correct: 0 },
      { question: "¿Puede Blastoise aprender el movimiento Foco Resplandor?", options: ["Sí, por MT", "No", "Solo por tutor", "Solo Mega-Blastoise"], correct: 0 },
      { question: "En el TCG, ¿fue Blastoise del Base Set famoso por su Habilidad Pokémon?", options: ["Sí, 'Danza Lluvia'", "No, por su ataque", "No tenía habilidad", "Sí, 'Propagar'"], correct: 0 },
      { question: "¿A qué se parece el diseño de Blastoise?", options: ["A una tortuga marina", "A un tanque de guerra y una tortuga", "A un submarino", "A un dinosaurio acuático"], correct: 1 },
      { question: "¿Cuál de estos movimientos NO puede aprender Blastoise?", options: ["Giga Impacto", "Avalancha", "Voto Agua", "Rayo"], correct: 3 },
      { question: "¿Cuál es la estadística de Ataque Especial de Mega-Blastoise?", options: ["130", "135", "140", "145"], correct: 1 },
      { question: "En la película 'Detective Pikachu', los Blastoise son usados por la policía para:", options: ["Transporte", "Control de multitudes", "Investigación", "Batallas clandestinas"], correct: 3 }
    ]
  },
  {
    id: 10,
    name: "Caterpie",
    type: ["Bicho"],
    rarity: "Común",
    stats: {
      hp: 45,
      atk: 30,
      def: 35,
      spd: 45,
      critRate: 5.0,
      critDmg: 50.0,
    },
    description: "Sus cortas patas están recubiertas de ventosas que le permiten subir incansable por muros y cuestas.",
    height: "0.3 m",
    weight: "2.9 kg",
    quiz: [
  { question: "¿Cuál es el número de Caterpie en la Pokédex?", options: ["009", "010", "011", "012"], correct: 1 },
  { question: "¿A qué nivel evoluciona Caterpie a Metapod?", options: ["5", "7", "9", "10"], correct: 1 },
  { question: "¿Cuál es el tipo de Caterpie?", options: ["Planta", "Bicho", "Veneno", "Normal"], correct: 1 },
  { question: "¿Qué parte del cuerpo de Caterpie libera un olor fétido para repeler a los depredadores?", options: ["Su boca", "Su cola", "Sus patas", "Su antena roja (osmaterium)"], correct: 3 },
  { question: "En el anime, Caterpie fue el... Pokémon que Ash capturó.", options: ["Primer", "Segundo", "Tercer", "Cuarto"], correct: 0 },
  { question: "¿Cuál es la habilidad principal de Caterpie, que lo protege de efectos secundarios de ataques?", options: ["Efecto Espora", "Ojo Compuesto", "Polvo Escudo", "Fuga"], correct: 2 },
  { question: "¿Cuál es la habilidad oculta de Caterpie?", options: ["Cromolente", "Fuga", "Nerviosismo", "Punto Tóxico"], correct: 1 },
  { question: "Las patas de Caterpie tienen... en sus extremos para adherirse a superficies.", options: ["Garras", "Ventosas", "Pegamento", "Púas"], correct: 1 },
  { question: "¿Cuál es el principal alimento de Caterpie?", options: ["Bayas", "Hojas", "Otros insectos", "Tierra"], correct: 1 },
  { question: "¿Qué Pokémon es el depredador natural de Caterpie?", options: ["Pikachu", "Rattata", "Pidgey", "Zubat"], correct: 2 },
  { question: "¿Cuál es la categoría de Pokémon de Caterpie?", options: ["Insecto", "Oruga", "Gusano", "Larva"], correct: 2 },
  { question: "En el anime, ¿qué personaje le tenía un miedo terrible a Caterpie?", options: ["Ash", "Brock", "Misty", "Jessie"], correct: 2 },
  { question: "Su nombre, 'Caterpie', es una derivación de la palabra inglesa para oruga:", options: ["Worm", "Caterpillar", "Insect", "Larva"], correct: 1 },
  { question: "¿Cuál es la estadística base más alta de Caterpie?", options: ["Ataque", "Defensa", "Velocidad", "PS"], correct: 3 },
  { question: "¿Qué dos únicos movimientos aprende Caterpie por nivel en la mayoría de los juegos?", options: ["Placaje y Fortaleza", "Picadura y Disparo Demora", "Placaje y Disparo Demora", "Malicioso y Placaje"], correct: 2 },
  { question: "¿En qué grupo huevo se encuentra Caterpie?", options: ["Campo", "Planta", "Monstruo", "Bicho"], correct: 3 },
  { question: "¿Su tasa de captura es de?", options: ["120", "190", "255", "45"], correct: 2 },
  { question: "La antena de Caterpie está inspirada en un órgano real de las orugas mariposa llamado:", options: ["Antenapalpus", "Osmaterium", "Flagelo", "Sensilia"], correct: 1 },
  { question: "¿Cuánto mide Caterpie?", options: ["0.2 m", "0.3 m", "0.4 m", "0.5 m"], correct: 1 },
  { question: "¿Cuánto pesa Caterpie?", options: ["2.9 kg", "3.2 kg", "3.5 kg", "4.0 kg"], correct: 0 },
  { question: "¿De qué color es un Caterpie variocolor (shiny)?", options: ["Azul", "Rojo", "Verde", "Dorado"], correct: 3 },
  { question: "¿Es Caterpie uno de los Pokémon que evoluciona en el nivel más bajo?", options: ["Sí", "No", "Evoluciona a nivel medio", "Es el que evoluciona más tarde"], correct: 0 },
  { question: "Para crecer, Caterpie muda su piel muchas veces.", options: ["Verdadero", "Falso", "Solo una vez", "Nunca muda la piel"], correct: 0 },
  { question: "En el anime, el Caterpie de Ash evoluciona después de una batalla contra:", options: ["Un Pidgey", "El Equipo Rocket", "Un Weedle", "Brock"], correct: 1 },
  { question: "¿Cuál es su PS base?", options: ["30", "35", "40", "45"], correct: 3 },
  { question: "¿Puede Caterpie aprender algún movimiento por MT?", options: ["Sí, Corte", "No", "Sí, Tóxico", "Solo en Gen I"], correct: 1 },
  { question: "En el TCG, la primera carta de Caterpie apareció en:", options: ["Jungle", "Fossil", "Base Set", "Team Rocket"], correct: 2 },
  { question: "¿Qué tipo de ataque es súper efectivo contra Caterpie?", options: ["Agua", "Planta", "Volador", "Tierra"], correct: 2 },
  { question: "El nombre japonés de Caterpie es 'Caterpie'.", options: ["Verdadero", "Falso", "Es 'Kyatapī'", "Es 'Gusano'"], correct: 2 },
  { question: "¿Cuál es su estadística de Velocidad base?", options: ["30", "35", "45", "50"], correct: 2 },
  { question: "Caterpie puede devorar hojas más grandes que él mismo.", options: ["Verdadero", "Falso", "Solo si están mojadas", "Solo de ciertos árboles"], correct: 0 },
  { question: "¿Cuál es su estadística de Ataque base?", options: ["30", "35", "40", "45"], correct: 0 },
  { question: "La habilidad 'Fuga' le permite a Caterpie...", options: ["Ser más rápido", "Huir siempre de batallas salvajes", "Evitar ataques de estado", "Subir su evasión"], correct: 1 },
  { question: "¿Puede aprender el movimiento Electrotela por tutor?", options: ["Sí", "No", "Solo como Metapod", "Solo en ciertos juegos"], correct: 0 },
  { question: "¿Cuántas patas tiene Caterpie?", options: ["8", "12", "16", "Muchas"], correct: 2 },
  { question: "En Pokémon GO, ¿cuántos caramelos cuesta evolucionar un Caterpie?", options: ["12", "25", "50", "100"], correct: 0 },
  { question: "¿Es Caterpie exclusivo de alguna versión en los juegos originales?", options: ["Sí, de Pokémon Rojo", "Sí, de Pokémon Azul", "No", "Sí, de Pokémon Verde"], correct: 2 },
  { question: "El apetito de Caterpie es...", options: ["Pequeño", "Normal", "Insaciable", "Selectivo"], correct: 2 },
  { question: "El valor de experiencia base que otorga Caterpie es:", options: ["30", "39", "45", "50"], correct: 1 },
  { question: "En el Bosque Verde, Caterpie es un Pokémon muy...", options: ["Raro", "Común", "Agresivo", "Difícil de encontrar"], correct: 1 },
  { question: "¿Su diseño está basado en la oruga de qué mariposa real?", options: ["Monarca", "Mariposa tigre del este", "Almirante Rojo", "Mariposa de la col"], correct: 1 },
  { question: "¿Qué resiste Caterpie?", options: ["Lucha, Tierra y Planta", "Fuego, Volador y Roca", "Agua, Eléctrico y Hielo", "Psíquico, Fantasma y Siniestro"], correct: 0 },
  { question: "En el anime, ¿qué le dice Caterpie a Pikachu en un sueño?", options: ["Que quiere volar", "Que quiere ser fuerte", "Que le teme a Misty", "Que quiere ser un Charizard"], correct: 0 },
  { question: "¿Cuál es su estadística de Defensa base?", options: ["30", "35", "40", "45"], correct: 1 },
  { question: "¿Puede un Caterpie nacer con un movimiento huevo?", options: ["Sí, como Disparo Demora", "No, no puede tener movimientos huevo", "Sí, como Placaje", "Depende de los padres"], correct: 1 },
  { question: "Para evolucionar, Caterpie se envuelve en...", options: ["Hojas", "Seda", "Barro", "Su propia piel"], correct: 1 },
  { question: "Su llanto en el anime es muy característico y agudo.", options: ["Verdadero", "Falso", "No tiene llanto", "Suena como un rugido"], correct: 0 },
  { question: "¿Aparece Caterpie en la Zona Safari de Kanto?", options: ["Sí", "No", "Solo en Pokémon Amarillo", "Solo de noche"], correct: 1 },
  { question: "¿Puede aprender el movimiento Picadura Venenosa?", options: ["Sí, por nivel", "No", "Sí, por MT", "No, ese es Weedle"], correct: 3 },
  { question: "En la Pokédex se afirma que su antena es un...", options: ["Órgano sensorial", "Arma defensiva", "Atrayente de pareja", "Indicador de salud"], correct: 1 }
]
  },{
    id: 11,
    name: "Metapod",
    type: ["Bicho"],
    rarity: "Común",
    stats: {
      hp: 50,
      atk: 20,
      def: 55,
      spd: 30,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Este Pokémon es vulnerable al ataque cuando su concha es blanda, dejando expuesto su frágil cuerpo.",
    height: "0.7 m",
    weight: "9.9 kg",
    quiz: [
  { question: "¿Cuál es el número de Metapod en la Pokédex?", options: ["010", "011", "012", "013"], correct: 1 },
  { question: "¿A qué nivel evoluciona Metapod a Butterfree?", options: ["9", "10", "11", "12"], correct: 1 },
  { question: "El único movimiento que Metapod aprende por nivel es:", options: ["Placaje", "Protección", "Fortaleza", "No aprende ninguno"], correct: 2 },
  { question: "La habilidad de Metapod, 'Mudar', le permite...", options: ["Ser más rápido", "Curar sus problemas de estado al final del turno", "Subir su defensa", "Cambiar de tipo"], correct: 1 },
  { question: "¿Qué hace Metapod principalmente en su etapa de capullo?", options: ["Dormir", "Comer", "Endurecer su coraza", "Cazar"], correct: 2 },
  { question: "La coraza de Metapod es tan dura como...", options: ["La madera", "Una roca", "El acero", "El diamante"], correct: 2 },
  { question: "En el anime, hubo una famosa batalla de 'Fortaleza' entre el Metapod de Ash y el de...", options: ["Misty", "Brock", "Un Samurái", "Gary"], correct: 2 },
  { question: "¿Qué le sucede a Metapod si recibe un golpe muy fuerte?", options: ["Explota", "Su interior blando puede quedar expuesto", "Evoluciona al instante", "Se entierra"], correct: 1 },
  { question: "¿Cuál es la categoría de Pokémon de Metapod?", options: ["Capullo", "Crisálida", "Coraza", "Evolución"], correct: 0 },
  { question: "Dentro de su coraza, el cuerpo de Metapod es...", options: ["Hueco", "Líquido y blando", "Musculoso", "Igual de duro"], correct: 1 },
  { question: "¿Puede Metapod moverse?", options: ["No, es completamente inmóvil", "Sí, puede saltar", "Sí, pero solo ligeramente", "Sí, puede rodar"], correct: 2 },
  { question: "¿Cuál es la estadística base más alta de Metapod?", options: ["PS", "Ataque", "Defensa", "Velocidad"], correct: 2 },
  { question: "En el anime, ¿qué Pokémon secuestra al Metapod de Ash?", options: ["Un Fearow", "Un grupo de Beedrill", "El Equipo Rocket", "Un Primeape"], correct: 1 },
  { question: "El nombre 'Metapod' es una combinación de 'Metamorfosis' y...", options: ["Pod (vaina)", "Pad (almohadilla)", "Hard (duro)", "Shield (escudo)"], correct: 0 },
  { question: "¿Cuál es su PS base?", options: ["40", "45", "50", "55"], correct: 2 },
  { question: "¿Es Metapod más pesado que Caterpie?", options: ["Sí", "No", "Pesan lo mismo", "Depende del individuo"], correct: 0 },
  { question: "¿Cuánto mide Metapod?", options: ["0.6 m", "0.7 m", "0.8 m", "0.9 m"], correct: 1 },
  { question: "¿Cuánto pesa Metapod?", options: ["9.9 kg", "10.9 kg", "11.9 kg", "12.9 kg"], correct: 0 },
  { question: "El valor de experiencia base que otorga Metapod es:", options: ["68", "72", "75", "80"], correct: 1 },
  { question: "¿De qué color es un Metapod variocolor (shiny)?", options: ["Dorado", "Plateado", "Naranja", "Azul"], correct: 2 },
  { question: "En la mayoría de los juegos, si un Caterpie evoluciona a Metapod, ¿qué movimiento reemplaza a Placaje?", options: ["Ninguno, lo conserva", "Fortaleza", "Protección", "Disparo Demora"], correct: 1 },
  { question: "¿En qué grupo huevo se encuentra Metapod?", options: ["Bicho", "Planta", "Monstruo", "Campo"], correct: 0 },
  { question: "¿Puede Metapod aprender algún movimiento por MT?", options: ["Sí, Fortaleza", "No", "Sí, Tóxico", "Solo en Gen I"], correct: 1 },
  { question: "Su tasa de captura es de:", options: ["255", "190", "120", "90"], correct: 2 },
  { question: "El nombre japonés de Metapod es 'Transe'l. ¿A qué hace referencia?", options: ["Trance", "Transformación", "Tranquilidad", "Transición"], correct: 0 },
  { question: "En el Bosque Verde, Metapod es... que Caterpie.", options: ["Más común", "Igual de común", "Menos común", "Imposible de encontrar"], correct: 2 },
  { question: "¿Qué tipo de ataque es súper efectivo contra Metapod?", options: ["Fuego", "Agua", "Planta", "Tierra"], correct: 0 },
  { question: "Para conservar energía para la evolución, Metapod apenas se mueve.", options: ["Verdadero", "Falso", "Se mueve constantemente", "Solo se mueve para buscar sol"], correct: 0 },
  { question: "¿Cuál es su estadística de Defensa base?", options: ["50", "55", "60", "65"], correct: 1 },
  { question: "En el anime, ¿cómo evoluciona el Metapod de Ash?", options: ["Por entrenamiento", "Por una Piedra Hoja", "Para salvar a Ash de un Beedrill", "Por accidente"], correct: 2 },
  { question: "¿Cuál es su estadística de Ataque base?", options: ["20", "25", "30", "35"], correct: 0 },
  { question: "En el TCG, las cartas de Metapod a menudo tienen un alto costo de retirada.", options: ["Verdadero", "Falso", "No tienen costo de retirada", "Tienen un costo bajo"], correct: 0 },
  { question: "¿Cuál es su estadística de Velocidad base?", options: ["20", "25", "30", "35"], correct: 2 },
  { question: "El cuerpo de Metapod se está reconstruyendo a nivel celular para su evolución.", options: ["Verdadero", "Falso", "El cambio es solo externo", "La reconstrucción ya terminó"], correct: 0 },
  { question: "¿A qué se parece la forma de Metapod?", options: ["A una roca", "A una hoja", "A una luna creciente", "A una semilla"], correct: 2 },
  { question: "¿Puede Metapod aprender Electrotela por tutor?", options: ["Sí", "No", "Solo como Caterpie", "Solo como Butterfree"], correct: 0 },
  { question: "Un Metapod salvaje solo usará Fortaleza hasta quedarse sin PP.", options: ["Verdadero", "Falso", "Usará Combate", "Huirá"], correct: 0 },
  { question: "Si su coraza se daña, ¿puede repararla?", options: ["Sí, rápidamente", "No, queda vulnerable", "Sí, pero tarda mucho", "Se endurece aún más"], correct: 1 },
  { question: "Metapod resiste ataques de tipo...", options: ["Fuego y Roca", "Lucha y Planta", "Agua y Hielo", "Eléctrico y Volador"], correct: 1 },
  { question: "¿Cuántos días dura la etapa de Metapod en la vida real?", options: ["1-2 días", "Alrededor de una semana", "Un mes", "Un año"], correct: 1 },
  { question: "En Pokémon GO, ¿se puede encontrar a Metapod en estado salvaje?", options: ["Sí", "No, solo por evolución", "Solo durante eventos", "Solo en incursiones"], correct: 0 },
  { question: "¿Cuál es su estadística de Ataque Especial base?", options: ["20", "25", "30", "35"], correct: 1 },
  { question: "¿Qué Pokémon tiene una etapa de capullo similar a Metapod?", options: ["Weedle", "Wurmple", "Venonat", "Spinarak"], correct: 1 },
  { question: "Su diseño es minimalista y muy reconocible.", options: ["Verdadero", "Falso", "Es un diseño complejo", "A menudo se confunde con otros Pokémon"], correct: 0 },
  { question: "La única forma de dañar a un Metapod que solo usa Fortaleza es con:", options: ["Ataques de estado (veneno, quemadura)", "Golpes críticos", "Movimientos de daño fijo", "Todas las anteriores"], correct: 3 },
  { question: "En el manga, ¿el Caterpie de Red evoluciona a Metapod?", options: ["Sí", "No, lo libera antes", "No, Red no tiene un Caterpie", "Sí, pero es de Yellow"], correct: 3 },
  { question: "¿Aparece Metapod en la Zona Safari?", options: ["Sí", "No", "Solo en la versión Amarilla", "Solo si llevas un Caterpie"], correct: 1 },
  { question: "Su estrategia de batalla es puramente...", options: ["Ofensiva", "Defensiva y de desgaste", "Rápida", "Equilibrada"], correct: 1 },
  { question: "¿Puede Metapod aprender Picadura de alguna forma?", options: ["Sí, si Caterpie lo sabía al evolucionar", "No, nunca", "Sí, por MT", "Sí, por tutor"], correct: 0 },
  { question: "Al estar cerca de evolucionar, su capullo se vuelve ligeramente...", options: ["Más pesado", "Más blando", "Transparente", "Brillante"], correct: 1 }
]
  },{
    id: 12,
    name: "Butterfree",
    type: ["Bicho", "Volador"],
    rarity: "Infrecuente",
    stats: {
      hp: 60,
      atk: 45,
      def: 50,
      spd: 70,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "En combate, aletea a gran velocidad para lanzar al aire sus tóxicos polvillos.",
    height: "1.1 m",
    weight: "32.0 kg",
    quiz: [
  { question: "¿Cuál es el número de Butterfree en la Pokédex?", options: ["011", "012", "013", "014"], correct: 1 },
  { question: "Al evolucionar, Butterfree gana un segundo tipo. ¿Cuáles son sus tipos?", options: ["Bicho/Normal", "Bicho/Psíquico", "Bicho/Volador", "Solo Bicho"], correct: 2 },
  { question: "Su habilidad principal, Ojos Compuestos, aumenta la... de sus movimientos.", options: ["Potencia", "Precisión", "Velocidad", "Probabilidad de Crítico"], correct: 1 },
  { question: "¿Qué movimiento de tipo Psíquico aprende Butterfree justo al evolucionar?", options: ["Psicorrayo", "Psíquico", "Confusión", "Teletransporte"], correct: 2 },
  { question: "Las alas de Butterfree están cubiertas de un polvo que...", options: ["Es inflamable", "Brilla en la oscuridad", "Repele el agua", "Atrae la lluvia"], correct: 2 },
  { question: "En el famoso episodio del anime 'Adiós Butterfree', ¿por qué Ash lo libera?", options: ["Para que se uniera a un circo", "Porque era muy débil", "Para que pudiera aparearse y migrar con otros Butterfree", "Para intercambiarlo por un Raticate"], correct: 2 },
  { question: "¿Cuál es la habilidad oculta de Butterfree?", options: ["Cromolente", "Nerviosismo", "Efecto Espora", "Polvo Escudo"], correct: 0 },
  { question: "La habilidad 'Cromolente' hace que los movimientos 'no muy eficaces'...", options: ["Fallen", "Hagan daño normal", "Sean súper eficaces", "Hagan el doble de daño"], correct: 1 },
  { question: "En la Gen VIII, Butterfree puede alcanzar una forma especial llamada:", options: ["Megaevolución", "Forma Alola", "Gigamax", "Forma Primigenia"], correct: 2 },
  { question: "El movimiento Gigamax de Butterfree, Gigaestupor, puede causar...", options: ["Solo daño", "Parálisis, veneno o sueño al azar", "Bajar todas las estadísticas del rival", "Invocar Día Soleado"], correct: 1 },
  { question: "¿Cuál es la estadística base más alta de Butterfree?", options: ["Velocidad", "Ataque", "Defensa Especial", "Ataque Especial"], correct: 3 },
  { question: "Existe una famosa teoría de fans que sugiere que Butterfree y... intercambiaron sus evoluciones durante el desarrollo del juego.", options: ["Beedrill", "Venonat", "Scyther", "Venomoth"], correct: 3 },
  { question: "¿Cómo se puede diferenciar un Butterfree hembra de un macho?", options: ["La hembra es más grande", "El macho tiene antenas más largas", "La hembra tiene una mancha negra en sus alas inferiores", "No hay diferencia visible"], correct: 2 },
  { question: "¿Qué busca Butterfree constantemente?", options: ["Néctar de las flores", "Oponentes fuertes", "Cuevas oscuras", "Ríos"], correct: 0 },
  { question: "¿A qué velocidad bate sus alas?", options: ["Lentamente", "Moderadamente", "A gran velocidad", "No las bate, planea"], correct: 2 },
  { question: "En el anime, el interés amoroso del Butterfree de Ash era un Butterfree de color...", options: ["Azul", "Rosa", "Dorado", "Blanco"], correct: 1 },
  { question: "¿Puede Butterfree aprender el movimiento Rayo Solar?", options: ["Sí, por MT", "No", "Solo en su forma Gigamax", "Solo por tutor"], correct: 0 },
  { question: "¿Cuál es su PS base?", options: ["60", "65", "70", "75"], correct: 0 },
  { question: "¿Cuánto mide Butterfree?", options: ["1.0 m", "1.1 m", "1.2 m", "1.3 m"], correct: 1 },
  { question: "¿Cuánto pesa Butterfree?", options: ["30.0 kg", "32.0 kg", "35.0 kg", "38.0 kg"], correct: 1 },
  { question: "¿De qué color es un Butterfree variocolor (shiny)?", options: ["Cuerpo morado, alas verdes y extremidades rosas", "Cuerpo azul, alas naranjas", "Completamente dorado", "Completamente plateado"], correct: 0 },
  { question: "Butterfree es débil x4 (cuádruple) al tipo...", options: ["Fuego", "Volador", "Roca", "Hielo"], correct: 2 },
  { question: "¿En qué grupos huevo se encuentra?", options: ["Bicho", "Volador", "Bicho y Volador", "Bicho y Hada"], correct: 0 },
  { question: "¿Qué trío de movimientos de polvo son característicos de Butterfree?", options: ["Polvo Ira, Polvo Nocivo, Polvo Sueño", "Somnífero, Paralizador, Polvo Veneno", "Polvo Escudo, Polvo Nieve, Polvo Arena", "Polvo Deslumbrante, Polvo Furia, Polvo Cura"], correct: 1 },
  { question: "La altura de Butterfree Gigamax es de:", options: ["15 m", "17 m", "19 m", "21 m"], correct: 1 },
  { question: "En el TCG, la primera carta de Butterfree apareció en el set:", options: ["Base Set", "Jungle", "Fossil", "Team Rocket"], correct: 1 },
  { question: "Su nombre en japonés es 'Butterfree', igual que en inglés.", options: ["Verdadero", "Falso", "Es 'Batafurai'", "Es 'Chou'"], correct: 2 },
  { question: "¿Qué movimiento de tipo Aire aprende por nivel?", options: ["Tornado", "Viento Aciago", "Aire Afilado", "Vendaval"], correct: 2 },
  { question: "El valor de experiencia base que otorga Butterfree es:", options: ["160", "178", "185", "192"], correct: 1 },
  { question: "¿Cuál es su estadística de Velocidad base?", options: ["60", "70", "80", "90"], correct: 1 },
  { question: "¿Puede aprender el movimiento Psíquico por MT?", options: ["Sí", "No", "Solo en Gen I", "Solo en su forma Gigamax"], correct: 0 },
  { question: "¿Qué hace Butterfree durante la temporada de apareamiento?", options: ["Busca pareja cruzando el mar", "Lucha contra otros Butterfree", "Construye un nido", "Cambia de color"], correct: 0 },
  { question: "Las alas de Butterfree Gigamax son de un color...", options: ["Azul brillante", "Verde esmeralda", "Naranja rojizo", "Blanco puro"], correct: 1 },
  { question: "¿Cuál es su estadística de Ataque Especial base?", options: ["80", "90", "100", "110"], correct: 1 },
  { question: "¿Es Butterfree más rápido que Beedrill?", options: ["Sí", "No", "Tienen la misma velocidad", "Solo si hay viento a favor"], correct: 1 },
  { question: "En Pokémon GO, ¿es Butterfree un buen atacante para incursiones?", options: ["Sí, de los mejores", "No, es bastante frágil", "Solo en su forma shiny", "Solo contra tipo Planta"], correct: 1 },
  { question: "¿Puede aprender el movimiento Energibola por MT?", options: ["Sí", "No", "Solo por tutor", "Solo en ciertos juegos"], correct: 0 },
  { question: "Butterfree resiste ataques de tipo...", options: ["Lucha, Planta y Tierra", "Fuego, Volador y Roca", "Bicho, Lucha y Planta", "Agua, Eléctrico y Hielo"], correct: 2 },
  { question: "¿Qué movimiento aprende que puede proteger a todo el equipo del daño por un turno?", options: ["Detección", "Vastaguardia", "Aguante", "Anticipo"], correct: 1 },
  { question: "La categoría de Butterfree es 'Pokémon...'", options: ["Mariposa", "Polvo", "Ala", "Néctar"], correct: 0 },
  { question: "En el Bosque Verde, ¿se puede encontrar a Butterfree salvaje?", options: ["Sí, pero es muy raro", "No, solo por evolución", "Solo en la versión Amarilla", "Solo de día"], correct: 1 },
  { question: "El movimiento 'Danza Aleteo' sube el Ataque Especial, la Defensa Especial y...", options: ["El Ataque", "La Defensa", "La Velocidad", "La Precisión"], correct: 2 },
  { question: "¿Puede Butterfree aprender Danza Aleteo por nivel?", options: ["Sí", "No, es de Volcarona", "Solo como movimiento huevo", "Solo por tutor"], correct: 0 },
  { question: "El polvo que suelta de sus alas es tóxico.", options: ["Verdadero", "Falso", "Solo el de los machos", "Solo si está enfadado"], correct: 0 },
  { question: "¿Qué objeto puede potenciar la precisión de sus movimientos de estado?", options: ["Lupa", "Telescopio", "Gema Voladora", "Polvo Brillo"], correct: 0 },
  { question: "¿Cuál es su estadística de Defensa Especial base?", options: ["70", "80", "90", "100"], correct: 1 },
  { question: "Butterfree necesita recolectar miel todos los días.", options: ["Verdadero", "Falso", "Solo necesita agua", "Prefiere la savia"], correct: 0 },
  { question: "¿Qué movimiento aprende que puede intercambiar habilidades con el oponente?", options: ["Danza Amiga", "Cede Paso", "Cambia Almas", "Intercambio"], correct: 3 },
  { question: "En Pokémon Snap, ¿cómo se puede hacer que Butterfree baile?", options: ["Tocando la Poké Flauta", "Lanzándole comida", "Usando el radar", "Fotografiándolo varias veces"], correct: 0 },
  { question: "El diseño de Butterfree está basado en una mariposa real, específicamente la...", options: ["Mariposa Monarca", "Mariposa Blanca de la Col", "Mariposa Pavo Real", "Mariposa Morfo Azul"], correct: 1 }
]
  },{
    id: 13,
    name: "Weedle",
    type: ["Bicho", "Veneno"],
    rarity: "Común",
    stats: {
      hp: 40,
      atk: 35,
      def: 30,
      spd: 50,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Fácil de ver por los bosques comiendo hojas. Tiene un aguijón venenoso en la cabeza.",
    height: "0.3 m",
    weight: "3.2 kg",
    quiz: [
  { question: "¿Cuál es el número de Weedle en la Pokédex?", options: ["012", "013", "014", "015"], correct: 1 },
  { question: "¿A qué nivel evoluciona Weedle a Kakuna?", options: ["5", "7", "9", "10"], correct: 1 },
  { question: "¿Cuáles son los tipos de Weedle?", options: ["Bicho", "Bicho/Planta", "Bicho/Veneno", "Veneno"], correct: 2 },
  { question: "¿Qué parte del cuerpo de Weedle contiene un potente veneno?", options: ["Su nariz", "Sus patas", "Su boca", "El aguijón de su cabeza"], correct: 3 },
  { question: "Además del de su cabeza, ¿dónde tiene Weedle otro aguijón?", options: ["En las patas", "En la cola", "Debajo de la boca", "No tiene otro"], correct: 1 },
  { question: "¿Cuál es la habilidad principal de Weedle?", options: ["Enjambre", "Polvo Escudo", "Punto Tóxico", "Fuga"], correct: 1 },
  { question: "La habilidad 'Polvo Escudo' protege a Weedle de...", options: ["Ataques de tipo Volador", "Ser envenenado", "Los efectos secundarios de los ataques", "Perder velocidad"], correct: 2 },
  { question: "¿Cuál es la habilidad oculta de Weedle?", options: ["Fuga", "Francotirador", "Nerviosismo", "Mudar"], correct: 0 },
  { question: "¿Cuál es el principal alimento de Weedle?", options: ["Bayas", "Hojas", "Otros insectos", "Tierra"], correct: 1 },
  { question: "El depredador natural de Weedle en los juegos es a menudo:", options: ["Pidgey", "Rattata", "Mankey", "Spearow"], correct: 3 },
  { question: "¿Cuál es la categoría de Pokémon de Weedle?", options: ["Gusano", "Aguijón", "Oruga Peluda", "Veneno"], correct: 2 },
  { question: "El color de la nariz de Weedle le ayuda a...", options: ["Oler mejor", "Distinguir entre hojas venenosas y comestibles", "Detectar enemigos", "Respirar"], correct: 1 },
  { question: "Su nombre, 'Weedle', es una combinación de 'Worm' (gusano) y...", options: ["Needle (aguja)", "Little (pequeño)", "Beetle (escarabajo)", "Poison (veneno)"], correct: 0 },
  { question: "¿Cuál es la estadística base más alta de Weedle?", options: ["PS", "Ataque", "Defensa", "Velocidad"], correct: 3 },
  { question: "¿Qué dos únicos movimientos aprende Weedle por nivel?", options: ["Placaje y Fortaleza", "Picadura y Picotazo Venenoso", "Picotazo Venenoso y Disparo Demora", "Malicioso y Picotazo Venenoso"], correct: 2 },
  { question: "¿En qué grupo huevo se encuentra?", options: ["Monstruo", "Campo", "Planta", "Bicho"], correct: 3 },
  { question: "¿Su tasa de captura es de?", options: ["45", "120", "190", "255"], correct: 3 },
  { question: "¿Cuánto mide Weedle?", options: ["0.3 m", "0.4 m", "0.5 m", "0.6 m"], correct: 0 },
  { question: "¿Cuánto pesa Weedle?", options: ["2.9 kg", "3.2 kg", "3.5 kg", "4.1 kg"], correct: 1 },
  { question: "¿De qué color es un Weedle variocolor (shiny)?", options: ["Azul", "Verde", "Dorado/Amarillo", "Rojo"], correct: 2 },
  { question: "Para crecer, Weedle come su propio peso en hojas cada día.", options: ["Verdadero", "Falso", "Come el doble", "No necesita comer tanto"], correct: 0 },
  { question: "En el anime, ¿a quién pica un Weedle provocando que Ash lo capture?", options: ["A Ash", "A Misty", "A Pikachu", "A Brock"], correct: 1 },
  { question: "¿Cuál es su PS base?", options: ["40", "45", "50", "55"], correct: 0 },
  { question: "¿Puede Weedle aprender algún movimiento por MT?", options: ["Sí, Corte", "No", "Sí, Tóxico", "Solo en Gen I"], correct: 1 },
  { question: "En el TCG, la primera carta de Weedle apareció en:", options: ["Jungle", "Base Set", "Fossil", "Team Rocket"], correct: 1 },
  { question: "¿Qué tipo de ataque es súper efectivo contra Weedle?", options: ["Agua", "Psíquico", "Planta", "Tierra"], correct: 1 },
  { question: "El nombre japonés de Weedle es 'Beedle'. ¿A qué hace referencia?", options: ["Abeja", "Aguja", "Avispa", "Bicho"], correct: 0 },
  { question: "¿Cuál es su estadística de Velocidad base?", options: ["50", "55", "60", "65"], correct: 0 },
  { question: "¿Es Weedle exclusivo de alguna versión en los juegos originales?", options: ["Sí, de Pokémon Rojo", "Sí, de Pokémon Azul", "No", "Sí, de Pokémon Amarillo"], correct: 2 },
  { question: "¿Cuál es su estadística de Ataque base?", options: ["35", "40", "45", "50"], correct: 0 },
  { question: "El aguijón de su cabeza mide aproximadamente...", options: ["1 cm", "3 cm", "5 cm", "8 cm"], correct: 2 },
  { question: "¿Puede aprender el movimiento Electrotela por tutor?", options: ["Sí", "No", "Solo como Beedrill", "Solo en Alola"], correct: 0 },
  { question: "¿Cuántas patas tiene Weedle?", options: ["8", "12", "14", "16"], correct: 3 },
  { question: "En Pokémon GO, ¿cuántos caramelos cuesta evolucionar un Weedle?", options: ["12", "25", "50", "100"], correct: 0 },
  { question: "Weedle y Caterpie comparten la misma...", options: ["Habilidad oculta", "Cantidad de PS base", "Velocidad base", "Suma total de estadísticas base"], correct: 3 },
  { question: "El valor de experiencia base que otorga Weedle es:", options: ["30", "39", "45", "50"], correct: 1 },
  { question: "En el Bosque Verde, Weedle es un Pokémon muy...", options: ["Raro", "Común", "Agresivo", "Difícil de encontrar"], correct: 1 },
  { question: "¿Qué resiste Weedle gracias a sus tipos?", options: ["Lucha, Veneno, Bicho, Hada y Planta", "Fuego, Volador y Roca", "Agua, Eléctrico y Hielo", "Psíquico, Fantasma y Siniestro"], correct: 0 },
  { question: "¿Cuál es su estadística de Defensa base?", options: ["30", "35", "40", "45"], correct: 0 },
  { question: "¿Cuál es la contraparte de Weedle en la región de Johto?", options: ["Spinarak", "Ledyba", "Pineco", "Wurmple"], correct: 1 },
  { question: "A menudo se esconde en la hierba alta y bajo las hojas.", options: ["Verdadero", "Falso", "Prefiere los árboles", "Prefiere las cuevas"], correct: 0 },
  { question: "¿Aparece Weedle en la Zona Safari de Kanto?", options: ["Sí", "No", "Solo en Pokémon Amarillo", "Solo de noche"], correct: 1 },
  { question: "El veneno de Weedle es particularmente fuerte para su tamaño.", options: ["Verdadero", "Falso", "Su veneno es muy débil", "No es venenoso, solo pica"], correct: 0 },
  { question: "¿Puede aprender el movimiento Picadura?", options: ["Sí, por nivel", "Sí, por tutor", "No, solo Disparo Demora", "Sí, si evoluciona de un huevo especial"], correct: 1 },
  { question: "La forma de su cuerpo le permite camuflarse fácilmente entre la maleza.", options: ["Verdadero", "Falso", "Su color brillante lo delata", "No se camufla"], correct: 0 },
  { question: "¿Qué tipo de entrenador suele usar a Weedle en los primeros juegos?", options: ["Pescadores", "Montañeros", "Cazabichos", "Entrenadoras Guay"], correct: 2 },
  { question: "El aguijón de su cola es más pequeño que el de su cabeza.", options: ["Verdadero", "Falso", "Son del mismo tamaño", "No tiene aguijón en la cola"], correct: 0 },
  { question: "¿Cuál es su estadística de Ataque Especial base?", options: ["20", "25", "30", "35"], correct: 0 },
  { question: "En el anime, el primer intento de Ash de capturar un Weedle falla porque...", options: ["Weedle huye", "Ash se asusta", "Pikachu se niega a luchar", "Aparece un Samurái"], correct: 2 },
  { question: "El aguijón de su cabeza es de color...", options: ["Blanco", "Plateado", "Amarillo", "Del color de su piel"], correct: 0 }
]
  },
  {
    id: 14,
    name: "Kakuna",
    type: ["Bicho", "Veneno"],
    rarity: "Común",
    stats: {
      hp: 45,
      atk: 25,
      def: 50,
      spd: 35,
      critRate: 5.0,
      critDmg: 50.0,
    },
    description: "Casi incapaz de moverse, este Pokémon sólo puede endurecer su caparazón para protegerse.",
    height: "0.6 m",
    weight: "10.0 kg",
    quiz: [
  { question: "¿Cuál es el número de Kakuna en la Pokédex?", options: ["013", "014", "015", "016"], correct: 1 },
  { question: "¿A qué nivel evoluciona Kakuna a Beedrill?", options: ["9", "10", "11", "12"], correct: 1 },
  { question: "¿Cuál es el único movimiento que Kakuna aprende por nivel?", options: ["Placaje", "Protección", "Fortaleza", "No aprende ninguno"], correct: 2 },
  { question: "La única habilidad de Kakuna es 'Mudar'. ¿Qué le permite hacer?", options: ["Ser más rápido", "Curar sus problemas de estado", "Subir su defensa", "Cambiar de tipo"], correct: 1 },
  { question: "Kakuna es prácticamente inmóvil porque...", options: ["Está durmiendo", "Está preparando su cuerpo para la evolución", "Pesa demasiado", "No tiene patas"], correct: 1 },
  { question: "Si se le molesta, Kakuna puede...", options: ["Huir rodando", "Explotar", "Extender su aguijón y envenenar", "Gritar muy fuerte"], correct: 2 },
  { question: "En el anime, Ash se enfrenta a un enjambre de Beedrill para proteger a su...", options: ["Pikachu", "Caterpie", "Metapod", "Kakuna"], correct: 2 },
  { question: "¿Cuál es la categoría de Pokémon de Kakuna?", options: ["Capullo", "Crisálida", "Coraza", "Aguijón"], correct: 0 },
  { question: "Dentro de su coraza, Kakuna genera mucho... debido a la reorganización de su cuerpo.", options: ["Ruido", "Calor", "Luz", "Frío"], correct: 1 },
  { question: "La coraza de Kakuna se va volviendo más cálida al tacto a medida que...", options: ["Se acerca el invierno", "Se enfada", "Se acerca la evolución", "Recibe luz solar"], correct: 2 },
  { question: "¿Cuál es la estadística base más alta de Kakuna?", options: ["PS", "Ataque", "Defensa", "Velocidad"], correct: 2 },
  { question: "¿Es Kakuna más pesado que Metapod?", options: ["Sí, por 0.1 kg", "No, Metapod es más pesado", "Pesan exactamente lo mismo", "Sí, por 1 kg"], correct: 0 },
  { question: "¿Cuánto mide Kakuna?", options: ["0.5 m", "0.6 m", "0.7 m", "0.8 m"], correct: 1 },
  { question: "¿Cuánto pesa Kakuna?", options: ["9.0 kg", "9.5 kg", "10.0 kg", "10.5 kg"], correct: 2 },
  { question: "El valor de experiencia base que otorga Kakuna es:", options: ["68", "72", "75", "80"], correct: 1 },
  { question: "¿De qué color es un Kakuna variocolor (shiny)?", options: ["Dorado", "Plateado", "Naranja", "Verde"], correct: 3 },
  { question: "En la mayoría de los juegos, si un Weedle evoluciona, ¿qué movimiento reemplaza a Picotazo Venenoso?", options: ["Ninguno, lo conserva", "Fortaleza", "Protección", "Disparo Demora"], correct: 1 },
  { question: "¿En qué grupo huevo se encuentra?", options: ["Bicho", "Planta", "Monstruo", "Campo"], correct: 0 },
  { question: "¿Puede Kakuna aprender algún movimiento por MT?", options: ["Sí, Fortaleza", "No", "Sí, Tóxico", "Solo en Gen I"], correct: 1 },
  { question: "Su tasa de captura es de:", options: ["255", "190", "120", "90"], correct: 2 },
  { question: "El nombre japonés de Kakuna es 'Cocoon'.", options: ["Verdadero", "Falso", "Es 'Kokūn'", "Es 'Sanagi'"], correct: 2 },
  { question: "¿Qué tipo de ataque es súper efectivo contra Kakuna?", options: ["Volador", "Agua", "Planta", "Tierra"], correct: 0 },
  { question: "Kakuna se adhiere a los árboles para evitar ser visto por sus depredadores.", options: ["Verdadero", "Falso", "Se entierra", "No se esconde"], correct: 0 },
  { question: "¿Cuál es su estadística de Defensa base?", options: ["50", "55", "60", "65"], correct: 0 },
  { question: "¿Cuál es su estadística de Ataque base?", options: ["20", "25", "30", "35"], correct: 1 },
  { question: "En el TCG, las cartas de Kakuna son similares a las de...", options: ["Caterpie", "Weedle", "Beedrill", "Metapod"], correct: 3 },
  { question: "¿Cuál es su estadística de Velocidad base?", options: ["20", "25", "30", "35"], correct: 3 },
  { question: "La habilidad 'Mudar' tiene un... de probabilidad de activarse cada turno.", options: ["10%", "25%", "30%", "50%"], correct: 2 },
  { question: "¿Kakuna resiste ataques de tipo...?", options: ["Fuego y Roca", "Lucha y Planta", "Agua y Hielo", "Eléctrico y Volador"], correct: 1 },
  { question: "¿Qué Pokémon tiene una etapa de capullo similar a Kakuna?", options: ["Caterpie", "Wurmple", "Venonat", "Spinarak"], correct: 1 },
  { question: "En Pokémon GO, ¿se puede encontrar a Kakuna en estado salvaje?", options: ["Sí", "No, solo por evolución", "Solo durante eventos", "Solo en incursiones"], correct: 0 },
  { question: "¿Cuál es su estadística de Ataque Especial base?", options: ["20", "25", "30", "35"], correct: 1 },
  { question: "Un Kakuna salvaje solo usará Fortaleza hasta quedarse sin PP.", options: ["Verdadero", "Falso", "Usará Combate", "Huirá"], correct: 0 },
  { question: "¿Puede aprender Electrotela por tutor?", options: ["Sí", "No", "Solo como Weedle", "Solo como Beedrill"], correct: 0 },
  { question: "En el Bosque Verde, los entrenadores que usan Kakuna son los...", options: ["Pescadores", "Montañeros", "Cazabichos", "Chicas"], correct: 2 },
  { question: "A pesar de su apariencia, los ojos de Kakuna son muy...", options: ["Débiles", "Agudos", "Ciegos", "Decorativos"], correct: 1 },
  { question: "¿Puede Kakuna envenenar a un oponente?", options: ["Sí, con Picotazo Venenoso", "Solo si es atacado con un movimiento de contacto", "No, ha perdido su aguijón", "Solo si es shiny"], correct: 1 },
  { question: "¿Cuánto tiempo pasa Kakuna en su etapa de capullo?", options: ["Unas horas", "Unos días", "Unos meses", "Un año"], correct: 1 },
  { question: "Su diseño triangular le ayuda a...", options: ["Camuflarse", "Rodar", "Desviar ataques", "Ser más aerodinámico"], correct: 2 },
  { question: "En el manga, ¿el Weedle del Equipo Rocket evoluciona a Kakuna?", options: ["Sí", "No", "El Equipo Rocket no tiene un Weedle", "Sí, pero es de Koga"], correct: 3 },
  { question: "La estrategia de batalla de Kakuna es idéntica a la de...", options: ["Weedle", "Metapod", "Caterpie", "Butterfree"], correct: 1 },
  { question: "¿Es posible que un Kakuna huya de una batalla?", options: ["Sí, con la habilidad Fuga", "No, es inmóvil", "Solo si el oponente es de tipo Fuego", "No tiene la habilidad Fuga"], correct: 3 },
  { question: "La etapa de Kakuna es crucial para el desarrollo de los... de Beedrill.", options: ["Ojos", "Alas y aguijones", "Patas", "Colores"], correct: 1 },
  { question: "¿Cuál es su PS base?", options: ["40", "45", "50", "55"], correct: 1 },
  { question: "Aparece en la Zona Safari de Kanto.", options: ["Sí", "No", "Solo en Pokémon Amarillo", "Solo si llevas un Weedle"], correct: 1 },
  { question: "Un golpe crítico ignora los aumentos de defensa de 'Fortaleza'.", options: ["Verdadero", "Falso", "Solo si es un ataque de Fuego", "No, la defensa siempre se aplica"], correct: 0 },
  { question: "El Pokémon que evoluciona de Kakuna es:", options: ["Butterfree", "Dustox", "Beedrill", "Venomoth"], correct: 2 },
  { question: "Kakuna es la contraparte de...", options: ["Silcoon", "Cascoon", "Metapod", "Todas las anteriores"], correct: 2 },
  { question: "¿Puede aprender Picadura?", options: ["Sí, si Weedle lo sabía al evolucionar", "No, nunca", "Sí, por MT", "Sí, por tutor"], correct: 0 },
  { question: "El caparazón de Kakuna es...", options: ["Temporal y se cae", "Permanente", "Parte de su cuerpo", "Una construcción de seda"], correct: 2 }
]
  },{
    id: 15,
    name: "Beedrill",
    type: ["Bicho", "Veneno"],
    rarity: "Infrecuente",
    stats: {
      hp: 65,
      atk: 90,
      def: 40,
      spd: 75,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Vuela muy deprisa y ataca con los venenosos y grandes aguijones de su cola y patas delanteras.",
    height: "1.0 m",
    weight: "29.5 kg",
    quiz: [
  { question: "¿Cuál es el número de Beedrill en la Pokédex?", options: ["014", "015", "016", "017"], correct: 1 },
  { question: "Además de Bicho/Veneno, ¿qué tipo gana Mega-Beedrill?", options: ["Acero", "Siniestro", "Dragón", "Ninguno, mantiene sus tipos"], correct: 3 },
  { question: "¿Qué habilidad obtiene Mega-Beedrill?", options: ["Enjambre", "Francotirador", "Adaptable", "Potencia"], correct: 2 },
  { question: "La habilidad 'Adaptable' de Mega-Beedrill hace que sus ataques con STAB (mismo tipo) peguen...", options: ["Con un 50% más de daño (x1.5)", "Con un 100% más de daño (x2)", "Siempre de forma crítica", "Con prioridad"], correct: 1 },
  { question: "¿Cuántos aguijones tiene Beedrill?", options: ["Uno en la cola", "Dos en las manos", "Tres (dos en las manos y uno en la cola)", "Cuatro (en manos y pies)"], correct: 2 },
  { question: "Beedrill es extremadamente territorial y ataca en...", options: ["Solitario", "Parejas", "Tríos", "Enjambres"], correct: 3 },
  { question: "En el anime, Ash huye de un enjambre de Beedrill y se refugia con...", options: ["Pikachu", "Su Metapod", "Misty", "Brock"], correct: 1 },
  { question: "La habilidad principal de Beedrill es 'Enjambre', que potencia sus movimientos de tipo Bicho cuando...", options: ["Está lloviendo", "Tiene problemas de estado", "Le quedan pocos PS", "Lucha contra un tipo Psíquico"], correct: 2 },
  { question: "¿Cuál es la habilidad oculta de Beedrill?", options: ["Francotirador", "Adaptable", "Cromolente", "Nerviosismo"], correct: 0 },
  { question: "La habilidad 'Francotirador' aumenta el daño de los...", options: ["Movimientos de tipo Veneno", "Golpes críticos", "Movimientos con alta precisión", "Primeros ataques en batalla"], correct: 1 },
  { question: "¿Cuál es la estadística más alta de Beedrill (sin megaevolucionar)?", options: ["Velocidad", "Ataque", "Defensa", "Defensa Especial"], correct: 1 },
  { question: "¿Qué dos estadísticas de Mega-Beedrill son extremadamente altas?", options: ["PS y Defensa", "Defensa y Ataque Especial", "Ataque y Velocidad", "Defensa Especial y PS"], correct: 2 },
  { question: "¿Qué estadística de Mega-Beedrill baja drásticamente?", options: ["Defensa", "Ataque", "Velocidad", "Ataque Especial"], correct: 3 },
  { question: "¿Qué movimiento con prioridad aprende Beedrill?", options: ["Ataque Rápido", "Acua Jet", "Agilidad", "Puya Nociva"], correct: 2 },
  { question: "¿Cuál es la categoría de Pokémon de Beedrill?", options: ["Avispa", "Abeja Venenosa", "Aguijón", "Enjambre"], correct: 1 },
  { question: "¿Puede Beedrill aprender el movimiento Ida y Vuelta?", options: ["Sí, por MT", "No", "Solo como movimiento huevo", "Solo Mega-Beedrill"], correct: 0 },
  { question: "¿Cuánto mide Beedrill?", options: ["0.8 m", "1.0 m", "1.2 m", "1.4 m"], correct: 1 },
  { question: "¿Cuánto pesa Beedrill?", options: ["29.5 kg", "32.5 kg", "35.5 kg", "39.5 kg"], correct: 0 },
  { question: "¿De qué color es un Beedrill variocolor (shiny)?", options: ["Rojo", "Azul", "Verde", "Dorado"], correct: 2 },
  { question: "El nombre 'Beedrill' es una combinación de 'Bee' (abeja) y...", options: ["Drill (taladro)", "Kill (matar)", "Thrill (emoción)", "Will (voluntad)"], correct: 0 },
  { question: "¿Cuál es su PS base?", options: ["60", "65", "70", "75"], correct: 1 },
  { question: "El movimiento 'Aguijón Letal', cuando debilita a un oponente, aumenta mucho el... de Beedrill.", options: ["Ataque", "Velocidad", "Defensa", "Crítico"], correct: 0 },
  { question: "En el TCG, la primera carta de Beedrill apareció en:", options: ["Base Set", "Jungle", "Fossil", "Team Rocket"], correct: 1 },
  { question: "¿Qué tipo de ataque es súper efectivo contra Beedrill?", options: ["Roca", "Agua", "Planta", "Tierra"], correct: 0 },
  { question: "El nombre japonés de Beedrill es 'Spear'. ¿A qué hace referencia?", options: ["Lanza", "Avispa", "Velocidad", "Aguijón"], correct: 0 },
  { question: "¿Cuál es su estadística de Velocidad base?", options: ["70", "75", "80", "85"], correct: 1 },
  { question: "El valor de experiencia base que otorga Beedrill es:", options: ["170", "178", "185", "190"], correct: 1 },
  { question: "¿Qué líder de gimnasio de Kanto usa un Beedrill en el manga?", options: ["Brock", "Misty", "Surge", "Koga"], correct: 3 },
  { question: "¿Cuál es su estadística de Ataque base?", options: ["80", "90", "100", "110"], correct: 1 },
  { question: "Beedrill usa sus aguijones de las 'manos' para atacar y el de la cola para...", options: ["Equilibrarse", "Inyectar el veneno más potente", "Defenderse", "Atraer pareja"], correct: 1 },
  { question: "¿Puede aprender el movimiento Taladradora?", options: ["Sí, por MT", "No", "Solo por tutor", "Solo Mega-Beedrill"], correct: 1 },
  { question: "Mega-Beedrill tiene una velocidad base de:", options: ["125", "135", "145", "150"], correct: 2 },
  { question: "¿Y un ataque base de...?", options: ["130", "140", "150", "160"], correct: 2 },
  { question: "En Pokémon GO, ¿cuántos caramelos cuesta evolucionar un Kakuna?", options: ["25", "50", "100", "12"], correct: 1 },
  { question: "¿Es Beedrill más rápido que Butterfree?", options: ["Sí", "No", "Tienen la misma velocidad", "Solo si es shiny"], correct: 0 },
  { question: "¿En qué grupo huevo se encuentra?", options: ["Bicho", "Volador", "Bicho y Volador", "Bicho y Monstruo"], correct: 0 },
  { question: "Beedrill es la contraparte de...", options: ["Butterfree", "Dustox", "Ariados", "Ledian"], correct: 0 },
  { question: "El zumbido de sus alas es usado para intimidar.", options: ["Verdadero", "Falso", "No hace ruido al volar", "Es para comunicarse"], correct: 0 },
  { question: "¿Qué resiste Beedrill gracias a sus tipos?", options: ["Lucha, Veneno, Bicho, Hada y Planta", "Fuego, Volador y Roca", "Agua, Eléctrico y Hielo", "Psíquico, Fantasma y Siniestro"], correct: 0 },
  { question: "Los Beedrill suelen hacer sus nidos...", options: ["Bajo tierra", "En cuevas", "En los árboles", "Cerca de ríos"], correct: 2 },
  { question: "¿Puede aprender el movimiento Desarme por tutor?", options: ["Sí", "No", "Solo Mega-Beedrill", "Solo en Alola"], correct: 0 },
  { question: "A menudo regresa a su nido para atacar repetidamente.", options: ["Verdadero", "Falso", "Nunca regresa", "Solo si está perdiendo"], correct: 0 },
  { question: "Mega-Beedrill es considerado un 'glass cannon' (cañón de cristal), ¿por qué?", options: ["Es muy lento", "Tiene poco ataque", "Tiene mucho ataque pero defensas muy bajas", "Brilla mucho"], correct: 2 },
  { question: "¿Qué movimiento aprende por nivel que siempre golpea dos veces?", options: ["Doble Rayo", "Doble Filo", "Doble Ataque", "Doble Patada"], correct: 2 },
  { question: "El diseño de Beedrill está basado en:", options: ["Una abeja común", "Un abejorro", "Un avispón gigante asiático", "Una avispa de papel"], correct: 2 },
  { question: "¿Su tasa de captura es de?", options: ["45", "90", "120", "30"], correct: 0 },
  { question: "¿Puede aprender el movimiento Tijera X por MT?", options: ["Sí", "No", "Solo por nivel", "Solo por tutor"], correct: 0 },
  { question: "En Pokémon Snap, ¿cómo puedes hacer que aparezca un Beedrill?", options: ["Tocando la flauta", "Lanzando una Pester Ball a un Kakuna", "Fotografiando un Weedle", "Usando el radar"], correct: 1 },
  { question: "Los aguijones de Mega-Beedrill se asemejan a...", options: ["Espadas", "Cuchillos", "Lanzas o taladros", "Misiles"], correct: 2 },
  { question: "El veneno de Beedrill es de acción...", options: ["Lenta", "Instantánea", "Moderada", "No es venenoso"], correct: 1 }
]
  },{
    id: 16,
    name: "Pidgey",
    type: ["Normal", "Volador"],
    rarity: "Común",
    stats: {
      hp: 40,
      atk: 45,
      def: 40,
      spd: 56,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Muy común en bosques y selvas. Aletea al nivel del suelo para levantar la gravilla.",
    height: "0.3 m",
    weight: "1.8 kg",
    quiz: [
  { question: "¿Cuál es el número de Pidgey en la Pokédex?", options: ["015", "016", "017", "018"], correct: 1 },
  { question: "¿A qué nivel evoluciona Pidgey a Pidgeotto?", options: ["16", "18", "20", "22"], correct: 1 },
  { question: "¿Cuáles son los tipos de Pidgey?", options: ["Solo Volador", "Normal", "Normal/Volador", "Pájaro/Normal"], correct: 2 },
  { question: "Pidgey es conocido por ser muy dócil y...", options: ["Agresivo", "Evitar la confrontación", "Inteligente", "Lento"], correct: 1 },
  { question: "¿Cuál es su principal método de defensa si es atacado?", options: ["Usar sus garras", "Picar con su pico", "Levantar arena para cegar al enemigo", "Llamar a su bandada"], correct: 2 },
  { question: "La habilidad principal de Pidgey es 'Vista Lince'. ¿Qué previene?", options: ["La reducción de su ataque", "La reducción de su precisión", "Que se duerma", "Que se confunda"], correct: 1 },
  { question: "Su segunda habilidad, 'Tumbos', aumenta su... si está confuso.", options: ["Ataque", "Defensa", "Evasión", "Velocidad"], correct: 2 },
  { question: "¿Cuál es la habilidad oculta de Pidgey?", options: ["Ímpetu Arena", "Alas Vendaval", "Afortunado", "Sacapecho"], correct: 3 },
  { question: "La habilidad 'Sacapecho' previene que...", options: ["Su velocidad baje", "Su ataque baje", "Su defensa baje", "Su precisión baje"], correct: 2 },
  { question: "Pidgey tiene un excelente sentido de la...", options: ["Orientación", "Vista", "Oído", "Olfato"], correct: 0 },
  { question: "Puede encontrar su nido sin importar lo lejos que esté.", options: ["Verdadero", "Falso", "Solo si hay sol", "Solo si es de día"], correct: 0 },
  { question: "¿Cuál es la categoría de Pokémon de Pidgey?", options: ["Pájaro", "Pajarito", "Ave Pequeña", "Polluelo"], correct: 1 },
  { question: "En el anime, el primer Pokémon que Ash intenta capturar (y falla) es un:", options: ["Caterpie", "Rattata", "Pidgey", "Spearow"], correct: 2 },
  { question: "Su nombre, 'Pidgey', se deriva de la palabra inglesa para paloma:", options: ["Dove", "Sparrow", "Pigeon", "Birdy"], correct: 2 },
  { question: "¿Cuál es la estadística base más alta de Pidgey?", options: ["Ataque", "Defensa", "PS", "Velocidad"], correct: 3 },
  { question: "¿En qué grupo huevo se encuentra?", options: ["Volador", "Campo", "Volador y Campo", "Pájaro"], correct: 0 },
  { question: "¿Su tasa de captura es de?", options: ["45", "120", "190", "255"], correct: 3 },
  { question: "¿Cuánto mide Pidgey?", options: ["0.2 m", "0.3 m", "0.4 m", "0.5 m"], correct: 1 },
  { question: "¿Cuánto pesa Pidgey?", options: ["1.8 kg", "2.1 kg", "2.5 kg", "3.0 kg"], correct: 0 },
  { question: "¿De qué color es un Pidgey variocolor (shiny)?", options: ["Azul", "Rojo", "Verde", "Dorado/Amarillo"], correct: 3 },
  { question: "¿Qué movimiento aprende por nivel que puede bajar la precisión del rival?", options: ["Malicioso", "Ataque Arena", "Tornado", "Remolino"], correct: 1 },
  { question: "En el TCG, la primera carta de Pidgey apareció en:", options: ["Base Set", "Jungle", "Fossil", "Team Rocket"], correct: 0 },
  { question: "¿Qué tipo de ataque es súper efectivo contra Pidgey?", options: ["Eléctrico", "Agua", "Planta", "Tierra"], correct: 0 },
  { question: "El nombre japonés de Pidgey es 'Poppo'. ¿A qué se refiere?", options: ["Al sonido de una paloma", "A 'pequeño'", "A 'popular'", "A 'viento'"], correct: 0 },
  { question: "¿Cuál es su estadística de Velocidad base?", options: ["51", "56", "61", "66"], correct: 1 },
  { question: "El valor de experiencia base que otorga Pidgey es:", options: ["50", "55", "60", "65"], correct: 0 },
  { question: "Pidgey es el Pokémon Regional de Kanto, similar a... en Hoenn.", options: ["Swellow", "Starly", "Taillow", "Wingull"], correct: 2 },
  { question: "¿Cuál es su PS base?", options: ["40", "45", "50", "55"], correct: 0 },
  { question: "¿Cuál es su estadística de Ataque base?", options: ["40", "45", "50", "55"], correct: 1 },
  { question: "Aletea sus alas a gran velocidad para levantar nubes de polvo.", options: ["Verdadero", "Falso", "No puede levantar polvo", "Solo lo hace Pidgeotto"], correct: 0 },
  { question: "En Pokémon GO, ¿cuántos caramelos cuesta evolucionar un Pidgey?", options: ["12", "25", "50", "100"], correct: 0 },
  { question: "Pidgey es inmune a los ataques de tipo...", options: ["Roca", "Fantasma", "Acero", "Eléctrico"], correct: 1 },
  { question: "Es muy común encontrar a Pidgey en...", options: ["Cuevas", "Rutas y bosques", "Zonas de agua", "Montañas"], correct: 1 },
  { question: "¿Puede aprender el movimiento Respiro por MT?", options: ["Sí", "No", "Solo Pidgeot", "Solo por nivel"], correct: 0 },
  { question: "¿Qué resiste Pidgey?", options: ["Lucha y Veneno", "Planta y Bicho", "Fuego y Agua", "Roca y Hielo"], correct: 1 },
  { question: "¿Cuál es la contraparte 'agresiva' de Pidgey en Kanto?", options: ["Fearow", "Doduo", "Farfetch'd", "Spearow"], correct: 3 },
  { question: "¿El diseño de Pidgey está basado en qué ave?", options: ["Un gorrión", "Un águila", "Una paloma", "Un pinzón"], correct: 0 },
  { question: "¿Puede aprender el movimiento Ida y Vuelta por MT?", options: ["Sí", "No", "Solo por tutor", "Solo Pidgeotto"], correct: 0 },
  { question: "El plumaje de Pidgey es de colores apagados para camuflarse.", options: ["Verdadero", "Falso", "Sus colores son brillantes", "No se camufla"], correct: 0 },
  { question: "¿Aparece Pidgey en la Zona Safari?", options: ["Sí", "No", "Solo en la versión Amarilla", "Solo de mañana"], correct: 1 },
  { question: "¿El movimiento Tornado que aprende tiene STAB (bonificación por mismo tipo)?", options: ["Sí", "No, es de tipo Dragón", "Sí, es Normal/Volador", "No, es de tipo Psíquico"], correct: 0 },
  { question: "¿Cuál es su estadística de Defensa base?", options: ["40", "45", "50", "55"], correct: 0 },
  { question: "¿Puede nacer un Pidgey con la habilidad Sacapecho?", options: ["Sí, como habilidad oculta", "No", "Sí, como habilidad normal", "Solo si evoluciona"], correct: 0 },
  { question: "En los primeros juegos, Pidgey era uno de los Pokémon más comunes de encontrar.", options: ["Verdadero", "Falso", "Era muy raro", "Solo salía en una ruta"], correct: 0 },
  { question: "¿Qué movimiento aprende por nivel que confunde al objetivo?", options: ["Supersónico", "Canto", "Contoneo", "Danza Caos"], correct: 2 },
  { question: "En el TCG, Pidgey es conocido por tener un bajo coste de retirada.", options: ["Verdadero", "Falso", "Tiene un coste alto", "No tiene coste de retirada"], correct: 0 },
  { question: "Su principal rival en el ecosistema es...", options: ["Weedle", "Caterpie", "Rattata", "Spearow"], correct: 3 },
  { question: "¿Puede aprender el movimiento Viento Afín por nivel?", options: ["Sí", "No, por tutor", "Sí, pero en niveles muy altos", "No lo aprende"], correct: 2 },
  { question: "Es un Pokémon ideal para entrenadores principiantes por su carácter dócil.", options: ["Verdadero", "Falso", "Es muy difícil de entrenar", "Es agresivo con los novatos"], correct: 0 },
  { question: "¿A qué tipo de ataque es débil Pidgey?", options: ["Hielo, Roca y Eléctrico", "Fuego, Agua y Planta", "Lucha, Veneno y Psíquico", "Bicho, Fantasma y Siniestro"], correct: 0 }
]
  },{
    id: 17,
    name: "Pidgeotto",
    type: ["Normal", "Volador"],
    rarity: "Común",
    stats: {
      hp: 63,
      atk: 60,
      def: 55,
      spd: 71,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Muy protector de su amplio territorio, este Pokémon picoteará ferozmente a todo intruso.",
    height: "1.1 m",
    weight: "30.0 kg",
    quiz: [
  { question: "¿Cuál es el número de Pidgeotto en la Pokédex?", options: ["016", "017", "018", "019"], correct: 1 },
  { question: "¿A qué nivel evoluciona Pidgeotto a Pidgeot?", options: ["32", "34", "36", "38"], correct: 2 },
  { question: "Pidgeotto es conocido por ser muy...", options: ["Dócil", "Vago", "Territorial", "Tímido"], correct: 2 },
  { question: "Las garras de Pidgeotto están muy desarrolladas para...", options: ["Excavar", "Trepar árboles", "Atrapar presas como Exeggcute", "Construir su nido"], correct: 2 },
  { question: "Patrulla un área de hasta... kilómetros en busca de presas.", options: ["20", "50", "100", "200"], correct: 2 },
  { question: "¿Qué parte de su cuerpo es más llamativa en comparación con Pidgey?", options: ["Sus alas", "Su cola", "Su cresta roja y amarilla", "Su pico"], correct: 2 },
  { question: "La habilidad 'Vista Lince' de Pidgeotto previene que baje su...", options: ["Ataque", "Defensa", "Velocidad", "Precisión"], correct: 3 },
  { question: "¿Cuál es su habilidad oculta?", options: ["Alas Vendaval", "Ímpetu Arena", "Sacapecho", "Tumbos"], correct: 2 },
  { question: "En el anime, el Pidgey de Ash evoluciona a Pidgeotto durante una batalla contra...", options: ["Un Fearow", "El Equipo Rocket", "Un Pidgeotto salvaje", "Un Spearow"], correct: 1 },
  { question: "Pidgeotto fue uno de los Pokémon más constantes en el equipo de Ash en la región de...", options: ["Johto", "Kanto", "Hoenn", "Sinnoh"], correct: 1 },
  { question: "¿Cuál es la estadística base más alta de Pidgeotto?", options: ["Ataque", "Defensa", "PS", "Velocidad"], correct: 3 },
  { question: "¿Cuánto mide Pidgeotto?", options: ["1.0 m", "1.1 m", "1.2 m", "1.3 m"], correct: 1 },
  { question: "¿Cuánto pesa Pidgeotto?", options: ["25.0 kg", "30.0 kg", "35.0 kg", "40.0 kg"], correct: 1 },
  { question: "El nombre 'Pidgeotto' se parece a 'Pidgey', pero con un sufijo que indica que es...", options: ["Más pequeño", "Más rápido", "Más grande o desarrollado", "Más inteligente"], correct: 2 },
  { question: "¿Cuál de estos movimientos aprende Pidgeotto por nivel?", options: ["Pájaro Osado", "Vendaval", "Respiro", "Ciclón"], correct: 3 },
  { question: "¿Es Pidgeotto más rápido que Charmeleon?", options: ["Sí", "No", "Tienen la misma velocidad", "Solo si hay viento a favor"], correct: 1 },
  { question: "¿Cuál es su PS base?", options: ["60", "63", "65", "68"], correct: 1 },
  { question: "Su vista es tan aguda que puede divisar una presa desde grandes alturas.", options: ["Verdadero", "Falso", "Su vista es promedio", "Es casi ciego"], correct: 0 },
  { question: "El valor de experiencia base que otorga Pidgeotto es:", options: ["122", "132", "142", "152"], correct: 0 },
  { question: "¿De qué color es un Pidgeotto variocolor (shiny)?", options: ["Dorado/Amarillo", "Plateado", "Verde", "Azul"], correct: 0 },
  { question: "En el TCG, la primera carta de Pidgeotto apareció en el set:", options: ["Base Set", "Jungle", "Fossil", "Team Rocket"], correct: 2 },
  { question: "¿A qué tipo de ataque es inmune?", options: ["Tierra y Fantasma", "Tierra y Lucha", "Tierra y Normal", "Tierra y Veneno"], correct: 0 },
  { question: "El nombre japonés de Pidgeotto es 'Pigeon'.", options: ["Verdadero", "Falso", "Es 'Pijon'", "Es 'Poppo'"], correct: 2 },
  { question: "¿Cuál es su estadística de Velocidad base?", options: ["61", "66", "71", "76"], correct: 2 },
  { question: "En Pokémon GO, ¿se puede encontrar a Pidgeotto en estado salvaje?", options: ["Sí", "No, solo por evolución", "Solo en incursiones", "Solo en huevos"], correct: 0 },
  { question: "¿Cuál es su estadística de Ataque base?", options: ["60", "65", "70", "75"], correct: 0 },
  { question: "No dudará en picotear ferozmente a cualquiera que invada su territorio.", options: ["Verdadero", "Falso", "Es muy amigable", "Huirá"], correct: 0 },
  { question: "¿Puede aprender el movimiento Respiro por nivel?", options: ["Sí", "No, por MT", "No lo aprende", "Solo Pidgeot"], correct: 0 },
  { question: "Su principal presa en los juegos es...", options: ["Caterpie", "Weedle", "Magikarp", "Exeggcute"], correct: 2 },
  { question: "¿Cuál es su categoría de Pokémon?", options: ["Pájaro", "Ave", "Pájaro Guardián", "Pájaro Veloz"], correct: 0 },
  { question: "La cresta de Pidgeotto es sensible a las corrientes de aire.", options: ["Verdadero", "Falso", "Es solo decorativa", "Es para el equilibrio"], correct: 0 },
  { question: "Pidgeotto es débil a...", options: ["Hielo, Roca y Eléctrico", "Fuego, Agua y Planta", "Lucha, Veneno y Psíquico", "Bicho, Fantasma y Siniestro"], correct: 0 },
  { question: "En el manga, el Pidgey de Red (Rojo) evoluciona a Pidgeotto.", options: ["Verdadero", "Falso", "Red no tiene un Pidgey", "Evoluciona, pero es de Blue (Azul)"], correct: 3 },
  { question: "¿Puede aprender el movimiento Remolino para forzar el cambio del rival?", options: ["Sí, por nivel", "No", "Sí, por MT", "Solo Pidgeot"], correct: 0 },
  { question: "¿Cuál es su estadística de Defensa base?", options: ["50", "55", "60", "65"], correct: 1 },
  { question: "La habilidad 'Tumbos' de Pidgeotto se activa cuando...", options: ["Tiene pocos PS", "Está confuso", "Está dormido", "Está lloviendo"], correct: 1 },
  { question: "Pidgeotto y Fearow son rivales naturales.", options: ["Verdadero", "Falso", "Son aliados", "No interactúan"], correct: 0 },
  { question: "¿Su tasa de captura es de?", options: ["45", "90", "120", "190"], correct: 2 },
  { question: "En el anime, el Pidgeotto de Ash evoluciona para proteger a...", options: ["Ash", "Pikachu", "Una bandada de Pidgey y Pidgeotto", "Misty"], correct: 2 },
  { question: "¿Aparece Pidgeotto salvaje en la Calle Victoria?", options: ["Sí", "No", "Solo en la versión Amarilla", "Solo en la entrada"], correct: 0 },
  { question: "Sus alas son más fuertes que las de Pidgey, permitiéndole volar más tiempo.", options: ["Verdadero", "Falso", "Tienen la misma fuerza", "Vuela menos tiempo"], correct: 0 },
  { question: "¿Puede aprender el movimiento Ala de Acero por MT?", options: ["Sí", "No", "Solo Pidgeot", "Solo por tutor"], correct: 0 },
  { question: "¿Qué movimiento aprende por nivel que puede golpear a un oponente en el aire?", options: ["Ataque Aéreo", "Tornado", "Vendaval", "Ciclón"], correct: 1 },
  { question: "Pidgeotto prefiere cazar presas en...", options: ["El agua", "El suelo", "El aire", "Cuevas"], correct: 1 },
  { question: "La coloración de Pidgeotto es más... que la de Pidgey.", options: ["Apagada", "Vibrante", "Oscura", "Clara"], correct: 1 },
  { question: "La habilidad Sacapecho es útil contra Pokémon que usan el movimiento...", options: ["Malicioso", "Intimidación", "Ataque Arena", "Tóxico"], correct: 1 },
  { question: "¿En qué grupo huevo se encuentra?", options: ["Volador", "Campo", "Volador y Campo", "Pájaro"], correct: 0 },
  { question: "En los juegos originales, ¿qué rival importante tiene un Pidgeotto?", options: ["El Samurái", "El Pescador", "Tu rival (Azul/Gary)", "El Cazabichos"], correct: 2 },
  { question: "Resiste los ataques de tipo Bicho y...", options: ["Roca", "Eléctrico", "Hielo", "Planta"], correct: 3 },
  { question: "Su grito se puede oír a más de un kilómetro de distancia.", options: ["Verdadero", "Falso", "Es silencioso", "Solo se oye de cerca"], correct: 0 }
]
  },{
    id: 18,
    name: "Pidgeot",
    type: ["Normal", "Volador"],
    rarity: "Raro",
    stats: {
      hp: 83,
      atk: 80,
      def: 75,
      spd: 91,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Cuando caza, vuela muy deprisa a ras del agua, y sorprende a inocentes presas como Magikarp.",
    height: "1.5 m",
    weight: "39.5 kg",
    quiz: [
  { question: "¿Cuál es el número de Pidgeot en la Pokédex?", options: ["017", "018", "019", "020"], correct: 1 },
  { question: "¿Qué forma especial puede alcanzar Pidgeot en la Gen VI?", options: ["Forma Gigamax", "Forma Alola", "Megaevolución", "Forma Primigenia"], correct: 2 },
  { question: "¿Qué habilidad obtiene Mega-Pidgeot?", options: ["Sacapecho", "Vista Lince", "Alas Vendaval", "Indefenso"], correct: 3 },
  { question: "La habilidad 'Indefenso' de Mega-Pidgeot hace que...", options: ["Sus ataques nunca fallen (ni los del rival)", "Sea inmune a cambios de estado", "Sus ataques de tipo Volador tengan prioridad", "Siempre ataque primero"], correct: 0 },
  { question: "¿Qué movimiento de baja precisión se vuelve 100% preciso gracias a la habilidad de Mega-Pidgeot?", options: ["Pájaro Osado", "Vendaval", "Ataque Aéreo", "Hiperrayo"], correct: 1 },
  { question: "Pidgeot puede volar a una velocidad de...", options: ["Mach 1", "Mach 2", "Mach 3", "Velocidad del sonido"], correct: 1 },
  { question: "Las plumas de su cabeza son muy sensibles y le ayudan a...", options: ["Detectar cambios en el aire", "Atraer pareja", "Intimidar a sus rivales", "Mantener el calor"], correct: 0 },
  { question: "En el anime, ¿qué le promete Ash a su Pidgeot al dejarlo?", options: ["Que le traerá comida", "Que volverá a por él", "Que lo visitará", "Que lo llamará para la Liga Pokémon"], correct: 1 },
  { question: "La principal presa de Pidgeot en las aguas costeras es:", options: ["Tentacool", "Staryu", "Magikarp", "Horsea"], correct: 2 },
  { question: "¿Cuál es la categoría de Pokémon de Pidgeot?", options: ["Pájaro", "Ave", "Pájaro Real", "Pájaro Veloz"], correct: 0 },
  { question: "¿Cuál es la estadística más alta de Pidgeot (sin megaevolucionar)?", options: ["Ataque", "Defensa", "PS", "Velocidad"], correct: 3 },
  { question: "¿Qué estadística aumenta masivamente en Mega-Pidgeot?", options: ["Ataque", "Defensa", "Ataque Especial", "Velocidad"], correct: 2 },
  { question: "¿Cuánto mide Pidgeot?", options: ["1.3 m", "1.5 m", "1.7 m", "1.9 m"], correct: 1 },
  { question: "¿Cuánto pesa Pidgeot?", options: ["35.5 kg", "39.5 kg", "45.5 kg", "50.5 kg"], correct: 1 },
  { question: "El plumaje de Pidgeot es conocido por su...", options: ["Dureza", "Brillo y belleza", "Capacidad de camuflaje", "Resistencia al fuego"], correct: 1 },
  { question: "¿Es Pidgeot más rápido que Charizard (forma normal)?", options: ["Sí", "No", "Tienen la misma velocidad", "Solo Mega-Pidgeot"], correct: 0 },
  { question: "¿Cuál es su PS base?", options: ["80", "83", "85", "90"], correct: 1 },
  { question: "Mega-Pidgeot tiene un Ataque Especial base de:", options: ["120", "125", "135", "145"], correct: 2 },
  { question: "El valor de experiencia base que otorga Pidgeot es:", options: ["195", "205", "216", "225"], correct: 2 },
  { question: "¿De qué color es un Pidgeot variocolor (shiny)?", options: ["Dorado/Amarillo", "Plateado", "Verde", "Azul"], correct: 0 },
  { question: "En el TCG, la primera carta de Pidgeot apareció en el set:", options: ["Base Set", "Jungle", "Fossil", "Team Rocket"], correct: 1 },
  { question: "El nombre japonés de Pidgeot es 'Pigeot'.", options: ["Verdadero", "Falso", "Es 'Pijotto'", "Es 'Ōdori'"], correct: 2 },
  { question: "¿Cuál es su estadística de Velocidad base (forma normal)?", options: ["91", "101", "111", "121"], correct: 1 },
  { question: "En Pokémon GO, ¿cuántos caramelos cuesta evolucionar un Pidgeotto?", options: ["25", "50", "100", "125"], correct: 1 },
  { question: "¿Cuál de estos movimientos NO puede aprender Pidgeot?", options: ["Ida y Vuelta", "Onda Ígnea", "Pájaro Osado", "Terremoto"], correct: 3 },
  { question: "En el manga, ¿qué personaje importante tiene un Pidgeot?", options: ["Red (Rojo)", "Green (Verde/chica)", "Blue (Azul/rival)", "Yellow (Amarilla)"], correct: 2 },
  { question: "La vista de Pidgeot le permite ver una presa desde... de altura.", options: ["100 m", "500 m", "1,000 m", "2,000 m"], correct: 2 },
  { question: "¿Qué movimiento aprende por nivel que tiene alta probabilidad de crítico?", options: ["Cuchillada", "Tajo Aéreo", "Tajo Umbrío", "Golpe Aéreo"], correct: 1 },
  { question: "¿Su tasa de captura es de?", options: ["45", "90", "120", "30"], correct: 0 },
  { question: "¿La velocidad de Mega-Pidgeot es de?", options: ["111", "121", "131", "141"], correct: 1 },
  { question: "Al volar a máxima velocidad, sus alas pueden crear ráfagas de viento capaces de doblar árboles.", options: ["Verdadero", "Falso", "Solo Mega-Pidgeot", "Es una exageración"], correct: 0 },
  { question: "Pidgeot es débil a...", options: ["Hielo, Roca y Eléctrico", "Fuego, Agua y Planta", "Lucha, Veneno y Psíquico", "Bicho, Fantasma y Siniestro"], correct: 0 },
  { question: "¿Puede aprender el movimiento Onda Ígnea por tutor?", options: ["Sí", "No", "Solo en su forma Mega", "Solo en ciertos juegos"], correct: 0 },
  { question: "¿Qué habilidad es más útil para un Pidgeot que no es Mega?", options: ["Vista Lince", "Tumbos", "Sacapecho", "Depende del set de movimientos"], correct: 3 },
  { question: "El rival de Ash, Azul (Gary), tiene un Pidgeot como uno de sus Pokémon principales.", options: ["Verdadero", "Falso", "Tiene un Fearow", "Tiene un Dodrio"], correct: 0 },
  { question: "¿Qué movimiento aprende por nivel que lo cura?", options: ["Luz Lunar", "Sol Matinal", "Recuperación", "Respiro"], correct: 3 },
  { question: "¿En qué grupo huevo se encuentra?", options: ["Volador", "Campo", "Volador y Campo", "Pájaro"], correct: 0 },
  { question: "El plumaje de su cabeza y cola es el más largo y vistoso de su línea evolutiva.", options: ["Verdadero", "Falso", "Pidgeotto tiene la cresta más larga", "Son iguales"], correct: 0 },
  { question: "Es un Pokémon muy leal a su entrenador.", options: ["Verdadero", "Falso", "Es muy rebelde", "No le importan los humanos"], correct: 0 },
  { question: "Mega-Pidgeot mantiene sus tipos Normal/Volador.", options: ["Verdadero", "Falso, se vuelve Volador puro", "Falso, se vuelve Normal puro", "Falso, se vuelve Volador/Psíquico"], correct: 0 },
  { question: "Los músculos pectorales de Pidgeot son extremadamente fuertes.", options: ["Verdadero", "Falso", "Son su punto débil", "Son promedio"], correct: 0 },
  { question: "Es el Pokémon 'pájaro regional' más rápido de todos (en su forma normal).", options: ["Verdadero", "Falso, Swellow lo es", "Falso, Staraptor lo es", "Falso, Talonflame lo es"], correct: 1 },
  { question: "¿Aparece Pidgeot salvaje en algún lugar de Kanto?", options: ["Sí, en la Calle Victoria", "No, solo por evolución", "Sí, en la Ruta 1", "Sí, en la Zona Safari"], correct: 1 },
  { question: "¿Qué movimiento de estado aprende que aumenta mucho su velocidad?", options: ["Danza Espada", "Maquinación", "Danza Dragón", "Agilidad"], correct: 3 },
  { question: "¿Cuál es el Pokémon más común en el equipo de los 'Ornitólogos'?", options: ["Spearow", "Pidgeot", "Dodrio", "Farfetch'd"], correct: 1 },
  { question: "En el anime, el Pidgeot de Ash lucha contra un... antes de que Ash lo deje.", options: ["Dragonite", "Spearow gigante", "Gyarados", "Fearow (el mismo que molestaba a los Pidgey)"], correct: 3 },
  { question: "La habilidad Indefenso es perfecta para spamear Vendaval, que normalmente tiene un...% de precisión.", options: ["50%", "60%", "70%", "80%"], correct: 2 },
  { question: "Pidgeot y Staraptor comparten la misma velocidad base.", options: ["Verdadero", "Falso, Pidgeot es más rápido", "Falso, Staraptor es más rápido", "Solo en sus formas shiny"], correct: 1 },
  { question: "¿Cuál es su estadística de Ataque Especial base?", options: ["70", "80", "85", "90"], correct: 0 },
  { question: "Mega-Pidgeot tiene marcas azules alrededor de sus ojos, parecidas a las de un...", options: ["Águila", "Halcón peregrino", "Búho", "Colibrí"], correct: 1 }
]
  },{
    id: 19,
    name: "Rattata",
    type: ["Normal"],
    rarity: "Común",
    stats: {
      hp: 30,
      atk: 56,
      def: 35,
      spd: 72,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Cuando ataca lo muerde todo. Pequeño y muy rápido, es muy fácil de ver en muchos sitios.",
    height: "0.3 m",
    weight: "3.5 kg",
    quiz: [
  { question: "¿Cuál es el número de Rattata en la Pokédex?", options: ["018", "019", "020", "021"], correct: 1 },
  { question: "¿A qué nivel evoluciona Rattata a Raticate?", options: ["18", "20", "22", "24"], correct: 1 },
  { question: "¿Cuál es el tipo de Rattata de Kanto?", options: ["Normal", "Siniestro", "Tierra", "Lucha"], correct: 0 },
  { question: "En Alola, Rattata tiene una forma regional. ¿De qué tipos es?", options: ["Siniestro/Normal", "Siniestro/Tierra", "Siniestro puro", "Normal/Veneno"], correct: 0 },
  { question: "¿Qué parte del cuerpo de Rattata nunca deja de crecer?", options: ["Su cola", "Sus orejas", "Sus colmillos", "Sus garras"], correct: 2 },
  { question: "La habilidad principal de Rattata es 'Fuga'. ¿Qué le permite hacer?", options: ["Atacar primero", "Huir siempre de batallas salvajes", "Ser más rápido", "Evitar trampas"], correct: 1 },
  { question: "Su segunda habilidad, 'Agallas' (Guts), aumenta su... si sufre un problema de estado.", options: ["Velocidad", "Defensa", "Ataque", "Evasión"], correct: 2 },
  { question: "¿Cuál es la habilidad oculta de Rattata?", options: ["Entusiasmo (Hustle)", "Ímpetu Tóxico", "Audaz", "Cobardía"], correct: 0 },
  { question: "La habilidad 'Entusiasmo' aumenta el Ataque pero reduce la...", options: ["Velocidad", "Defensa", "Precisión", "Defensa Especial"], correct: 2 },
  { question: "Rattata es famoso por la estrategia 'F.E.A.R'. ¿Qué significa?", options: ["Focus Energy, Attack, Run", "Fast, Evasive, Annoying, Rodent", "Focus Sash, Endeavor, Quick Attack, Rattata", "Fear, Evade, Attack, Repeat"], correct: 2 },
  { question: "¿Cuál es la categoría de Pokémon de Rattata?", options: ["Ratón", "Roedor", "Campo", "Pequeño"], correct: 0 },
  { question: "En el anime, Ash ve un Rattata en el primer episodio, justo después de...", options: ["Recibir a Pikachu", "Luchar contra Gary", "Ser atacado por Spearow", "Ver a Ho-Oh"], correct: 3 },
  { question: "El nombre 'Rattata' es una combinación de 'Rat' y...", options: ["Attack", "Rattle", "Rat-a-tat (sonido de golpeteo)", "Tata (adiós)"], correct: 2 },
  { question: "¿Cuál es la estadística base más alta de Rattata?", options: ["PS", "Ataque", "Defensa", "Velocidad"], correct: 3 },
  { question: "¿Qué movimiento con prioridad aprende Rattata por nivel?", options: ["Ataque Rápido", "Golpe Bajo", "Sombra Vil", "Acua Jet"], correct: 0 },
  { question: "¿En qué grupo huevo se encuentra?", options: ["Roedor", "Monstruo", "Campo", "Humanoide"], correct: 2 },
  { question: "¿Su tasa de captura es de?", options: ["45", "120", "190", "255"], correct: 3 },
  { question: "¿Cuánto mide Rattata?", options: ["0.2 m", "0.3 m", "0.4 m", "0.5 m"], correct: 1 },
  { question: "¿Cuánto pesa Rattata?", options: ["3.5 kg", "4.0 kg", "4.5 kg", "5.0 kg"], correct: 0 },
  { question: "¿De qué color es un Rattata variocolor (shiny)?", options: ["Azul", "Rojo", "Verde", "Dorado"], correct: 2 },
  { question: "Para mantener sus dientes afilados, Rattata roe constantemente cosas duras.", options: ["Verdadero", "Falso", "Solo roe madera", "Sus dientes no necesitan afilarse"], correct: 0 },
  { question: "En el TCG, la primera carta de Rattata apareció en:", options: ["Base Set", "Jungle", "Fossil", "Team Rocket"], correct: 0 },
  { question: "¿Qué tipo de ataque es súper efectivo contra Rattata?", options: ["Lucha", "Agua", "Planta", "Tierra"], correct: 0 },
  { question: "El nombre japonés de Rattata es 'Koratta'. ¿A qué hace referencia?", options: ["'Ko' (pequeño) + Ratta", "'Koro' (rodar) + Ratta", "'Kowai' (miedo) + Ratta", "Es solo un sonido"], correct: 0 },
  { question: "¿Cuál es su estadística de Velocidad base?", options: ["68", "72", "75", "80"], correct: 1 },
  { question: "El valor de experiencia base que otorga Rattata es:", options: ["51", "55", "60", "65"], correct: 0 },
  { question: "En los juegos, ¿qué tipo de entrenador es famoso por usar Rattata?", options: ["Cazabichos", "Chicos y Chicas (jóvenes)", "Pescadores", "Montañeros"], correct: 1 },
  { question: "¿Cuál es su PS base?", options: ["30", "35", "40", "45"], correct: 0 },
  { question: "¿Cuál es su estadística de Ataque base?", options: ["51", "56", "60", "65"], correct: 1 },
  { question: "En la Ruta 1 de Kanto, Rattata es extremadamente...", options: ["Raro", "Común", "Agresivo", "Difícil de capturar"], correct: 1 },
  { question: "En Pokémon GO, ¿cuántos caramelos cuesta evolucionar un Rattata?", options: ["12", "25", "50", "100"], correct: 1 },
  { question: "Rattata es inmune a los ataques de tipo...", options: ["Roca", "Fantasma", "Acero", "Eléctrico"], correct: 1 },
  { question: "¿Puede aprender el movimiento Superdiente?", options: ["Sí, por nivel", "No", "Sí, por tutor", "Solo Raticate"], correct: 0 },
  { question: "¿Qué movimiento aprende que siempre golpea primero y puede hacer retroceder al rival?", options: ["Sorpresa", "Ataque Rápido", "Golpe Bajo", "Persecución"], correct: 0 },
  { question: "¿Resiste Rattata algún tipo de ataque?", options: ["No, ninguno", "Sí, Siniestro", "Sí, Veneno", "Sí, Normal"], correct: 0 },
  { question: "¿Cuál es la principal diferencia del Rattata de Alola?", options: ["Es más grande", "Es nocturno y tiene bigote", "Es más rápido", "Es de tipo Fuego"], correct: 1 },
  { question: "La Pokédex afirma que si ves uno, hay... más escondidos cerca.", options: ["10", "20", "30", "40"], correct: 3 },
  { question: "¿Puede aprender el movimiento Rayo por MT?", options: ["Sí", "No", "Solo en Gen I", "Solo Raticate"], correct: 0 },
  { question: "Aparece en la Zona Safari de Kanto.", options: ["Sí", "No", "Solo en la versión Amarilla", "Solo de noche"], correct: 0 },
  { question: "Rattata puede vivir en casi cualquier lugar y reproducirse rápidamente.", options: ["Verdadero", "Falso", "Solo vive en bosques", "Se reproduce lentamente"], correct: 0 },
  { question: "¿Cuál es su estadística de Defensa base?", options: ["35", "40", "45", "50"], correct: 0 },
  { question: "¿Es posible que un Rattata nazca con la habilidad Agallas?", options: ["Sí, es una de sus habilidades normales", "No", "Solo como habilidad oculta", "Solo si evoluciona"], correct: 0 },
  { question: "En el manga, el Rattata de Red (Rojo) es uno de sus primeros Pokémon.", options: ["Verdadero", "Falso", "Es de Blue (Azul)", "Red no tiene un Rattata"], correct: 1 },
  { question: "¿Qué movimiento aprende que puede bajar la defensa del oponente?", options: ["Látigo", "Malicioso", "Gruñido", "Placaje"], correct: 0 },
  { question: "En el TCG, Rattata es conocido por el ataque 'Mordisco'.", options: ["Verdadero", "Falso", "Su ataque principal es 'Roer'", "No tiene ataques ofensivos"], correct: 0 },
  { question: "Sus bigotes le sirven para mantener el equilibrio.", options: ["Verdadero", "Falso", "Son solo decorativos", "Son para oler"], correct: 0 },
  { question: "¿Puede aprender el movimiento Excavar por MT?", options: ["Sí", "No", "Solo en Alola", "Solo Raticate"], correct: 0 },
  { question: "Rattata es la contraparte de... en Johto.", options: ["Hoothoot", "Spinarak", "Sentret", "Ledyba"], correct: 2 },
  { question: "¿Cuál es el Pokémon dominante en Alola que hizo que Rattata se volviera nocturno?", options: ["Gumshoos", "Toucannon", "Lycanroc", "Crabominable"], correct: 0 },
  { question: "Es cauteloso hasta el extremo y está siempre alerta.", options: ["Verdadero", "Falso", "Es muy descuidado", "Es valiente"], correct: 0 }
]
  },{
    id: 20,
    name: "Raticate",
    type: ["Normal"],
    rarity: "Común",
    stats: {
      hp: 55,
      atk: 81,
      def: 60,
      spd: 97,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Utiliza sus bigotes para equilibrarse. Parece que si son cortados va más despacio.",
    height: "0.7 m",
    weight: "18.5 kg",
    quiz: [
  { question: "¿Cuál es el número de Raticate en la Pokédex?", options: ["019", "020", "021", "022"], correct: 1 },
  { question: "Los colmillos de Raticate son lo suficientemente fuertes como para...", options: ["Romper madera", "Roer rocas", "Derribar edificios de hormigón", "Masticar acero"], correct: 2 },
  { question: "En Alola, Raticate tiene una forma regional que es el Pokémon Dominante del...", options: ["Bosque de Melemele", "Túnel de Verdant", "Cementerio de Hau'oli", "Jardín de Melemele"], correct: 1 },
  { question: "¿Qué le sucede a Raticate si sus colmillos crecen demasiado?", options: ["Se le caen", "Se vuelven más débiles", "Le impiden comer", "Se vuelven de oro"], correct: 2 },
  { question: "La habilidad 'Agallas' (Guts) de Raticate es muy usada en competitivo porque...", options: ["Sube su velocidad", "Ignora la bajada de ataque por quemadura", "Lo cura del veneno", "Le hace inmune a la parálisis"], correct: 1 },
  { question: "¿Qué objeto se suele equipar a un Raticate con 'Agallas'?", options: ["Banda Focus", "Pañuelo Elección", "Llamasfera o Toxisfera", "Vidasfera"], correct: 2 },
  { question: "Sus bigotes le sirven para mantener el equilibrio. Si se los cortan...", options: ["Se vuelve más rápido", "Se vuelve más agresivo", "Se ralentiza drásticamente", "No puede oler"], correct: 2 },
  { question: "La forma de Alola de Raticate es conocida por ser...", options: ["Muy delgada", "Gourmet y almacenar comida en sus mofletes", "Muy rápida", "Muy amigable"], correct: 1 },
  { question: "¿Cuál es la categoría de Pokémon de Raticate?", options: ["Ratón", "Roedor", "Colmillo", "Plaga"], correct: 0 },
  { question: "En los juegos originales, ¿qué objeto encontrabas al intercambiar un Pokémon por un Raticate?", options: ["Nada", "Una Baya", "Un Éter", "Una Poción"], correct: 2 },
  { question: "¿Cuál es la estadística base más alta de Raticate?", options: ["Velocidad", "Ataque", "Defensa", "PS"], correct: 0 },
  { question: "¿Cuánto mide Raticate?", options: ["0.6 m", "0.7 m", "0.8 m", "0.9 m"], correct: 1 },
  { question: "¿Cuánto pesa Raticate?", options: ["18.5 kg", "20.5 kg", "22.5 kg", "25.5 kg"], correct: 0 },
  { question: "El nombre 'Raticate' es una combinación de 'Rat' y...", options: ["Eradicate (erradicar)", "Delicate (delicado)", "Duplicate (duplicar)", "Indicate (indicar)"], correct: 0 },
  { question: "¿Qué movimiento aprende Raticate al evolucionar?", options: ["Triturar", "Golpe Cuerpo", "Cara Susto", "Doble Filo"], correct: 2 },
  { question: "Es Raticate más rápido que Fearow?", options: ["Sí", "No", "Tienen la misma velocidad", "Solo el de Alola"], correct: 1 },
  { question: "¿Cuál es su PS base?", options: ["55", "60", "65", "70"], correct: 0 },
  { question: "Sus patas traseras están palmeadas, lo que le permite...", options: ["Saltar muy alto", "Correr más rápido", "Nadar y cruzar ríos", "Excavar túneles"], correct: 2 },
  { question: "El valor de experiencia base que otorga Raticate es:", options: ["145", "155", "161", "170"], correct: 0 },
  { question: "¿De qué color es un Raticate variocolor (shiny)?", options: ["Azul", "Rojo/Marrón rojizo", "Verde", "Dorado"], correct: 1 },
  { question: "En el TCG, la primera carta de Raticate apareció en el set:", options: ["Base Set", "Jungle", "Fossil", "Team Rocket"], correct: 0 },
  { question: "El Raticate de tu rival en Pokémon Rojo/Azul desaparece del juego. ¿Qué teoría de fans rodea este hecho?", options: ["Que lo liberó", "Que lo intercambió", "Que murió en el S.S. Anne", "Que lo dejó en la guardería"], correct: 2 },
  { question: "El nombre japonés de Raticate es 'Ratta'.", options: ["Verdadero", "Falso", "Es 'Koratta'", "Es 'Kyodai Nezumi'"], correct: 0 },
  { question: "¿Cuál es su estadística de Velocidad base?", options: ["92", "97", "101", "105"], correct: 1 },
  { question: "¿Qué movimiento aprende que corta los PS del rival a la mitad?", options: ["Guillotina", "Superdiente", "Triturar", "Sacrificio"], correct: 1 },
  { question: "¿Cuál es su estadística de Ataque base?", options: ["71", "76", "81", "86"], correct: 2 },
  { question: "Raticate de Alola tiene la habilidad 'Gula' o 'Sebo'. ¿Qué hace 'Sebo'?", options: ["Reduce el daño de Fuego y Hielo", "Le permite comer bayas antes", "Aumenta su defensa", "Lo hace más rápido"], correct: 0 },
  { question: "¿Puede aprender el movimiento Rayo Hielo por MT?", options: ["Sí", "No", "Solo en Gen I", "Solo el de Alola"], correct: 0 },
  { question: "Es un Pokémon que se encuentra comúnmente en:", options: ["Cuevas y montañas", "Praderas y campos", "Zonas de agua", "Ciudades"], correct: 1 },
  { question: "El Raticate de Alola es más... que el de Kanto.", options: ["Rápido y ligero", "Lento y robusto", "Amistoso", "Colorido"], correct: 1 },
  { question: "La habilidad 'Entusiasmo' (Hustle) de Raticate es útil con movimientos que...", options: ["Son de estado", "Nunca fallan (como Golpe Aéreo)", "Son de tipo Normal", "Son a distancia"], correct: 1 },
  { question: "Un Raticate puede criar con un... para pasar movimientos huevo.", options: ["Pikachu", "Nidoran", "Sandshrew", "Todos los anteriores"], correct: 3 },
  { question: "En el anime, ¿quién intercambia un Butterfree por un Raticate con Ash?", options: ["Misty", "Un Caballero", "Brock", "Jessie"], correct: 1 },
  { question: "¿Qué movimiento aprende que puede golpear a Pokémon de tipo Fantasma?", options: ["Profecía", "Triturar", "Persecución", "Golpe Bajo"], correct: 0 },
  { question: "Sus colmillos son su principal herramienta y arma.", options: ["Verdadero", "Falso", "Usa más sus garras", "Usa más su cola"], correct: 0 },
  { question: "Raticate es famoso por ser un Pokémon del principio del juego que se mantiene útil por más tiempo.", options: ["Verdadero", "Falso", "Se vuelve inútil rápidamente", "Es débil desde el principio"], correct: 0 },
  { question: "En la Cueva Celeste de Kanto, es posible encontrar Raticate salvajes de alto nivel.", options: ["Verdadero", "Falso", "No hay Raticate en la Cueva Celeste", "Solo en la versión Amarilla"], correct: 0 },
  { question: "¿Puede aprender el movimiento Danza Espada por MT?", options: ["Sí", "No", "Solo en Alola", "Solo en ciertos juegos"], correct: 1 },
  { question: "Raticate es la evolución de:", options: ["Sentret", "Pikachu", "Rattata", "Sandshrew"], correct: 2 },
  { question: "Es un Pokémon muy persistente y no se rinde fácilmente.", options: ["Verdadero", "Falso", "Huye al primer golpe", "Es muy cobarde"], correct: 0 },
  { question: "La forma de Alola es vulnerable x4 (cuádruple) al tipo...", options: ["Hada", "Lucha", "Bicho", "Veneno"], correct: 1 },
  { question: "¿Qué movimiento aprende que aumenta su potencia si el usuario tiene menos PS que el rival?", "options": ["Represalia", "Aguante", "Inversión", "Vendetta"], "correct": 0 },
  { question: "El Raticate de Kanto es inmune a:", "options": ["Veneno", "Lucha", "Fantasma", "Psíquico"], "correct": 2 },
  { question: "¿Cuál es la contraparte de Raticate en Johto?", "options": ["Ursaring", "Donphan", "Furret", "Noctowl"], "correct": 2 },
  { question: "Los líderes del Equipo Rocket en Alola usan Raticate de Alola.", "options": ["Verdadero", "Falso", "Usan Persian de Alola", "Usan Salazzle"], "correct": 0 },
  { question: "El movimiento 'Hipercolmillo' es característico de Raticate. ¿Qué efecto tiene?", "options": ["Siempre es crítico", "Puede hacer retroceder al oponente", "Baja la defensa del oponente", "Tiene alta probabilidad de envenenar"], "correct": 1 },
  { question: "En qué grupo huevo está Raticate?", "options": ["Campo", "Monstruo", "Agua 1", "Bicho"], "correct": 0 },
  { question: "¿Qué movimiento de tipo Siniestro aprende por nivel?", "options": ["Golpe Bajo", "Triturar", "Pulso Umbrío", "Vendetta"], "correct": 0 },
  { question: "Raticate es más común en las rutas cercanas a ciudades.", "options": ["Verdadero", "Falso", "Solo en bosques", "Solo en cuevas"], "correct": 0 },
  { question: "Su cola es gruesa y fuerte.", "options": ["Verdadero", "Falso", "Es delgada y frágil", "No tiene cola"], "correct": 0 }
]
  }
];

const TYPES = [
  "Todos", "Normal", "Fuego", "Agua", "Planta", "Eléctrico", "Hielo", 
  "Lucha", "Veneno", "Tierra", "Volador", "Psíquico", "Bicho", 
  "Roca", "Fantasma", "Dragón", "Siniestro", "Acero", "Hada"
];

const TYPE_ICONS = {
  "Todos": "⭐",
  "Fuego": "🔥",
  "Agua": "💧",
  "Planta": "🌿",
  "Eléctrico": "⚡",
  "Normal": "⚪",
  "Hielo": "❄️",
  "Lucha": "👊",
  "Veneno": "☠️",
  "Tierra": "🌍",
  "Volador": "🦅",
  "Psíquico": "🔮",
  "Bicho": "🐛",
  "Roca": "🪨",
  "Fantasma": "👻",
  "Dragón": "🐉",
  "Siniestro": "🌙",
  "Acero": "⚙️",
  "Hada": "✨"
};

const RARITY_COLORS = {
  "Común": "text-gray-400",
  "Infrecuente": "text-green-400",
  "Raro": "text-purple-400",
  "Legendario": "text-yellow-400"
};

const RARITY_CAPTURE_RATES = {
  "Común": 0.90,
  "Infrecuente": 0.65,
  "Raro": 0.40,
  "Legendario": 0.15
};

const RARITY_STARS = {
  "Común": 1,
  "Infrecuente": 2,
  "Raro": 3,
  "Legendario": 4
};

export default function PokemonQuiz() {
  const [captured, setCaptured] = useState({});
  const [selectedType, setSelectedType] = useState("Todos");
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [quizMode, setQuizMode] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [captureAttempt, setCaptureAttempt] = useState(null);

  const filteredPokemon = selectedType === "Todos"
  ? POKEMON_DATA
  : POKEMON_DATA.filter(p => p.type.includes(selectedType));

  const capturedCount = Object.keys(captured).length;
  const totalPokemon = POKEMON_DATA.length;

  const [userAnswers, setUserAnswers] = useState([]);

  // Función para seleccionar 15 preguntas aleatorias de las 50
  const selectRandomQuestions = (allQuestions) => {
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 15);
  };

  // Función para mezclar las opciones de respuesta
  const shuffleOptions = (question) => {
    const correctAnswer = question.options[question.correct];
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
    
    return {
      ...question,
      options: shuffledOptions,
      correct: newCorrectIndex
    };
  };

  const handlePokemonClick = (pokemon) => {
    if (captured[pokemon.id]) {
      setSelectedPokemon(pokemon);
    } else {
      setSelectedPokemon(pokemon);
      setQuizMode(true);
      setCurrentQuestion(0);
      setScore(0);
      setUserAnswers([]);
      setShowResult(false);
      setCaptureAttempt(null);
      // Seleccionar 15 preguntas aleatorias y mezclar sus opciones
      const randomQuestions = selectRandomQuestions(pokemon.quiz);
      const questionsWithShuffledOptions = randomQuestions.map(q => shuffleOptions(q));
      setQuizQuestions(questionsWithShuffledOptions);
    }
  };

  const handleAnswer = (selectedIndex) => {
    const isCorrect = selectedIndex === quizQuestions[currentQuestion].correct;
    
    // Guardar la respuesta del usuario
    const newAnswers = [...userAnswers, isCorrect];
    setUserAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 500);
    } else {
      setTimeout(() => {
        // Calcular el puntaje final basado en todas las respuestas
        const finalScore = newAnswers.filter(answer => answer === true).length;
        setScore(finalScore);
        setShowResult(true);
        const percentage = (finalScore / quizQuestions.length) * 100;
        if (percentage >= 75) {
          attemptCapture();
        }
      }, 500);
    }
  };

  const attemptCapture = () => {
  // 1. Obtiene la rareza del Pokémon seleccionado (ej. "Infrecuente")
  const rarity = selectedPokemon.rarity;
  
  // 2. Usa esa rareza para buscar la probabilidad en tu nuevo objeto (ej. 0.65)
  const captureRate = RARITY_CAPTURE_RATES[rarity];

  const random = Math.random();
  const success = random < captureRate;
  setCaptureAttempt({ success, probability: captureRate });
  if (success) {
    setCaptured({ ...captured, [selectedPokemon.id]: true });
  }
};
  const closeModal = () => {
    setSelectedPokemon(null);
    setQuizMode(false);
    setShowResult(false);
    setCaptureAttempt(null);
    setUserAnswers([]);
    setScore(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Pokédex Quiz</h1>
            <p className="text-sm text-gray-400">Región Kanto</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">Capturados</p>
          <p className="text-3xl font-bold">{capturedCount}/{totalPokemon}</p>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Sidebar */}
        <div className="w-64 space-y-2">
          {TYPES.map(type => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                selectedType === type 
                  ? 'bg-blue-600 shadow-lg shadow-blue-500/50' 
                  : 'bg-slate-800/50 hover:bg-slate-700/50'
              }`}
            >
              <span className="text-2xl">{TYPE_ICONS[type]}</span>
              <span className="font-medium">{type}</span>
            </button>
          ))}
        </div>

        {/* Pokemon Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-4">
            {filteredPokemon.map(pokemon => (
              <div
                key={pokemon.id}
                onClick={() => handlePokemonClick(pokemon)}
                className="relative bg-slate-800/50 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all group"
              >
                <div className="aspect-square p-4 flex items-center justify-center bg-gradient-to-br from-slate-700/50 to-slate-800/50">
                  {captured[pokemon.id] ? (
                    <img 
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
                      alt={pokemon.name}
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-30">
                      <img 
                      src={`/assets/Pokedex_silueta/${pokemon.id}.png`} 
                      alt="Silueta de Pokémon" 
                      className="w-full h-full object-contain" 
                    />
                </div>
                  )}
                </div>
                <div className="p-3 text-center border-t border-slate-700">
                  <p className="font-bold text-lg">{captured[pokemon.id] ? pokemon.name : '???'}</p>
                  <p className="text-xs text-gray-400">#{String(pokemon.id).padStart(3, '0')}</p>
                  <div className="flex gap-1 justify-center mt-1">
                    {[...Array(RARITY_STARS[pokemon.rarity] || 1)].map((_, i) => (
                    <span key={i} className={`text-xs ${RARITY_COLORS[pokemon.rarity]}`}>★</span>
                    ))}
                  </div>
                </div>
                {!captured[pokemon.id] && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-blue-600 px-4 py-2 rounded-lg font-bold">Iniciar Quiz</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPokemon && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto relative">
            <button onClick={closeModal} className="absolute top-4 right-4 p-2 hover:bg-slate-700 rounded-lg">
              <X className="w-6 h-6" />
            </button>

            {quizMode && !showResult ? (
              <div className="p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2">Quiz - {selectedPokemon.name}</h2>
                  <p className="text-gray-400">Pregunta {currentQuestion + 1} de {quizQuestions.length}</p>
                  <div className="w-full bg-slate-700 h-2 rounded-full mt-4">
                    <div 
                      className="bg-blue-500 h-full rounded-full transition-all"
                      style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl mb-6 text-center">{quizQuestions[currentQuestion].question}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {quizQuestions[currentQuestion].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(idx)}
                        className="p-4 bg-slate-700 hover:bg-blue-600 rounded-lg font-medium transition-all"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : showResult ? (
              <div className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-4">¡Quiz Completado!</h2>
                <p className="text-xl mb-2">Puntuación: {score}/{quizQuestions.length}</p>
                <p className="text-lg mb-6">{(score / quizQuestions.length * 100).toFixed(0)}% correctas</p>

                {score / quizQuestions.length >= 0.75 ? (
                  captureAttempt ? (
                    <div>
                      {captureAttempt.success ? (
                        <div className="bg-green-900/50 p-8 rounded-xl">
                          <p className="text-3xl mb-4">🎉</p>
                          <p className="text-2xl font-bold mb-2">¡Captura Exitosa!</p>
                          <p className="text-gray-300">Has capturado a {selectedPokemon.name}</p>
                        </div>
                      ) : (
                        <div className="bg-red-900/50 p-8 rounded-xl">
                          <p className="text-3xl mb-4">💨</p>
                          <p className="text-2xl font-bold mb-2">¡El {selectedPokemon.name} salvaje ha huido del combate!</p>
                          <p className="text-gray-300">¡Inténtalo de nuevo!</p>
                          <p className="text-sm text-gray-400 mt-2">Probabilidad de captura: {(captureAttempt.probability * 100).toFixed(0)}%</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-green-400">Intentando capturar...</p>
                  )
                ) : (
                  <div className="bg-red-900/50 p-8 rounded-xl">
                    <p className="text-xl">Necesitas al menos 75% de respuestas correctas para intentar capturar</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-0 h-[90vh] flex">
                {/* Left Sidebar */}
                <div className="w-64 bg-slate-900/80 p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📋</span>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Detalles</p>
                      <p className="font-bold">{selectedPokemon.type} / {selectedPokemon.name}</p>
                    </div>
                  </div>

                  <button className="w-full text-left px-4 py-3 bg-blue-600 rounded-lg flex items-center gap-3">
                    <span className="text-xl">📊</span>
                    <span className="font-medium">Detalles</span>
                  </button>

                  <div className="pt-4 border-t border-slate-700">
                    <p className="text-xs text-gray-400 mb-2">CATEGORÍAS</p>
                    <button className="w-full text-left px-4 py-2 hover:bg-slate-800 rounded-lg flex items-center gap-3 text-gray-300">
                      <span>❄️</span>
                      <span className="text-sm">Light Cone</span>
                    </button>
                    <button className="w-full text-left px-4 py-2 hover:bg-slate-800 rounded-lg flex items-center gap-3 text-gray-300">
                      <span>✨</span>
                      <span className="text-sm">Eidolons</span>
                    </button>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 relative overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  {/* Character Display */}
                  <div className="absolute inset-0 flex items-end justify-center pb-20">
                    <div className="relative">
                      <img 
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${selectedPokemon.id}.png`}
                        alt={selectedPokemon.name}
                        className="h-[500px] object-contain drop-shadow-2xl"
                      />
                      {/* Circular platform */}
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-24">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-xl"></div>
                        <div className="absolute inset-0 rounded-full border-2 border-blue-400/30"></div>
                        <div className="absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>
                      </div>
                    </div>
                  </div>

                  {/* Top Info */}
                  <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start">
                    <div className="flex gap-3">
                      <div className="w-12 h-12 rounded-full bg-slate-700 border-2 border-blue-400 overflow-hidden">
                        <img 
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selectedPokemon.id}.png`}
                          alt={selectedPokemon.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-slate-700 border-2 border-slate-600 overflow-hidden opacity-50">
                        <img 
                          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                          alt="Other"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Left - Additional Info */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-slate-800/60 backdrop-blur-sm rounded-lg p-4 w-64">
                      <p className="text-xs text-gray-400 mb-2">INFORMACIÓN</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Altura:</span>
                          <span className="font-medium">{selectedPokemon.height}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Peso:</span>
                          <span className="font-medium">{selectedPokemon.weight}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Tipo:</span>
                          <span className="font-medium">{selectedPokemon.type.join(' / ')}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Rareza:</span>
                          <span className={`font-medium ${RARITY_COLORS[selectedPokemon.rarity]}`}>
                            {selectedPokemon.rarity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Stats Panel */}
                <div className="w-80 bg-slate-900/80 p-6">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold mb-1">{selectedPokemon.name}</h2>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <span className="text-blue-400">⚡</span>
                      <span>{selectedPokemon.type.join(' / ')}</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      {[...Array(4)].map((_, i) => ( // <-- Cambiado a 4
                      <div key={i} className={`w-3 h-3 rounded-sm ${
                      i < RARITY_STARS[selectedPokemon.rarity]
                      ? 'bg-blue-400' 
                      : 'bg-slate-700'
                      }`}></div>
                      ))}
                      </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400">Lv.</span>
                      <span className="text-2xl font-bold">1/80</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-6">
                    <button className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-medium text-sm transition-colors">
                      Stats
                    </button>
                    <button className="flex-1 bg-slate-700 hover:bg-slate-600 py-2 rounded-lg font-medium text-sm transition-colors">
                      Skill
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center">
                        <span className="text-red-400">❤️</span>
                      </div>
                      <span className="text-sm text-gray-400 flex-1">HP</span>
                      <span className="font-bold text-lg">{selectedPokemon.stats.hp}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center">
                        <span className="text-orange-400">⚔️</span>
                      </div>
                      <span className="text-sm text-gray-400 flex-1">ATK</span>
                      <span className="font-bold text-lg">{selectedPokemon.stats.atk}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center">
                        <span className="text-blue-400">🛡️</span>
                      </div>
                      <span className="text-sm text-gray-400 flex-1">DEF</span>
                      <span className="font-bold text-lg">{selectedPokemon.stats.def}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center">
                        <span className="text-green-400">⚡</span>
                      </div>
                      <span className="text-sm text-gray-400 flex-1">SPD</span>
                      <span className="font-bold text-lg">{selectedPokemon.stats.spd}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center">
                        <span className="text-yellow-400">✨</span>
                      </div>
                      <span className="text-sm text-gray-400 flex-1">CRIT Rate</span>
                      <span className="font-bold text-lg">{selectedPokemon.stats.critRate}%</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-700 rounded flex items-center justify-center">
                        <span className="text-purple-400">💥</span>
                      </div>
                      <span className="text-sm text-gray-400 flex-1">CRIT DMG</span>
                      <span className="font-bold text-lg">{selectedPokemon.stats.critDmg}%</span>
                    </div>
                  </div>

                  <button className="w-full mt-6 bg-slate-700 hover:bg-slate-600 py-3 rounded-lg font-medium transition-colors">
                    More Stats
                  </button>

                  <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-medium transition-colors">
                    Level Up
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}