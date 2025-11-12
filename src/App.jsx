import React, { useState } from 'react';
import { X, Award } from 'lucide-react';

const POKEMON_DATA = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Planta,Veneno",
    rarity: "Infrecuente",
    captureRate: 0.65,
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
    silhouette: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M100 180 C70 180 50 160 50 130 L50 100 C50 70 70 50 90 40 C95 20 105 20 110 40 C130 50 150 70 150 100 L150 130 C150 160 130 180 100 180 Z' fill='%23000000'/%3E%3C/svg%3E",
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
    type: "Planta,Veneno",
    rarity: "Infrecuente",
    captureRate: 0.65,
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
    silhouette: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M100 180 C70 180 50 160 50 130 L50 100 C50 70 70 50 90 40 C95 20 105 20 110 40 C130 50 150 70 150 100 L150 130 C150 160 130 180 100 180 Z' fill='%23000000'/%3E%3C/svg%3E",
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
  },
  {
    id: 4,
    name: "Charmander",
    type: "Fuego",
    rarity: "Rara",
    captureRate: 0.40,
    stats: {
      hp: 39,
      atk: 52,
      def: 43,
      spd: 65,
      critRate: 5.0,
      critDmg: 50.0
    },
    description: "Prefiere las cosas calientes. Dicen que cuando llueve le sale vapor de la punta de la cola.",
    height: "0.6 m",
    weight: "8.5 kg",
    silhouette: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cpath d='M100 180 C80 180 65 165 65 145 L65 100 C65 80 75 65 85 55 C90 45 95 30 105 35 C115 30 120 45 125 55 C135 65 145 80 145 100 L145 145 C145 165 120 180 100 180 Z M115 20 C120 15 125 20 125 30 C125 35 120 40 115 35 C110 30 110 25 115 20 Z' fill='%23000000'/%3E%3C/svg%3E",
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
  "Rara": "text-blue-400",
  "Legendario": "text-purple-400"
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
    : POKEMON_DATA.filter(p => p.type === selectedType);

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
    const random = Math.random();
    const success = random < selectedPokemon.captureRate;
    setCaptureAttempt({ success, probability: selectedPokemon.captureRate });
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
                      <img src={pokemon.silhouette} alt="?" className="w-full h-full object-contain" />
                    </div>
                  )}
                </div>
                <div className="p-3 text-center border-t border-slate-700">
                  <p className="font-bold text-lg">{captured[pokemon.id] ? pokemon.name : '???'}</p>
                  <p className="text-xs text-gray-400">#{String(pokemon.id).padStart(3, '0')}</p>
                  <div className="flex gap-1 justify-center mt-1">
                    {[...Array(pokemon.rarity === "Común" ? 1 : pokemon.rarity === "Infrecuente" ? 2 : pokemon.rarity === "Rara" ? 3 : 5)].map((_, i) => (
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
                          <span className="font-medium">{selectedPokemon.type}</span>
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
                      <span>{selectedPokemon.type}</span>
                    </div>
                    <div className="flex gap-2 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`w-3 h-3 rounded-sm ${
                          i < (selectedPokemon.rarity === "Común" ? 1 : 
                               selectedPokemon.rarity === "Infrecuente" ? 2 : 
                               selectedPokemon.rarity === "Rara" ? 3 : 5)
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