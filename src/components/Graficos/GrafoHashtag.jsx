import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import './../../Dashboard.css'

export default function GraphHashtags(){
  const [edges, setEdges] = useState();
  const [nodes, setNodes] = useState();
  const [allNodes, setAllNodes] = useState();
  const [allEdges, setAllEdges] = useState();
  const [nodeColors, setNodeColors] = useState();
  const [originalNodes, setOriginalNodes] = useState();
  const [network, setNetwork] = useState();
  const [container, setContainer] = useState();
  const [options, setOptions] = useState();
  const [data, setData] = useState();
  const [filter, setFilter] = useState({
    item: '',
    property: '',
    value: []
  });
  
  useEffect(() => {
    const drawGraph = () => {
      const container = document.getElementById('mynetwork3');

      // parsing and collecting nodes and edges from the python
     
                  const nodes = new DataSet([{"color": "#008080", "font": {"color": "black"}, "id": "#lopezreydelcash", "label": "#lopezreydelcash", "shape": "dot"}, {"color": "#009c9c", "font": {"color": "black"}, "id": "#charropoliticopodcast", "label": "#charropoliticopodcast", "shape": "dot"}, {"color": "#009393", "font": {"color": "black"}, "id": "#4t", "label": "#4t", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#4tavanza", "label": "#4tavanza", "shape": "dot"}, {"color": "#008484", "font": {"color": "black"}, "id": "#alegobernadora", "label": "#alegobernadora", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#irc", "label": "#irc", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#jefadegobierno", "label": "#jefadegobierno", "shape": "dot"}, {"color": "#00ffff", "font": {"color": "black"}, "id": "#tigresdelnorte", "label": "#tigresdelnorte", "shape": "dot"}, {"color": "#008c8c", "font": {"color": "black"}, "id": "#ciudaddelconocimientoylaeducacion", "label": "#ciudaddelconocimientoylaeducacion", "shape": "dot"}, {"color": "#00b9b9", "font": {"color": "black"}, "id": "#hijosdemx", "label": "#hijosdemx", "shape": "dot"}, {"color": "#00b9b9", "font": {"color": "black"}, "id": "#mxconpi\u00f1a", "label": "#mxconpi\u00f1a", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#queretaro", "label": "#queretaro", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#delfinarata", "label": "#delfinarata", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#claudiamamalona", "label": "#claudiamamalona", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#l12", "label": "#l12", "shape": "dot"}, {"color": "#00d4d4", "font": {"color": "black"}, "id": "#conmarcelosi", "label": "#conmarcelosi", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#bienestarentucolonia", "label": "#bienestarentucolonia", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#puebla", "label": "#puebla", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#cartelinmobiliario", "label": "#cartelinmobiliario", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#avanzadanacionalgamcdmx", "label": "#avanzadanacionalgamcdmx", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#conmarcelosigue", "label": "#conmarcelosigue", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#movimientoprogresistajalisco", "label": "#movimientoprogresistajalisco", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#nomamar", "label": "#nomamar", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#aifa", "label": "#aifa", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#laredcincoradio", "label": "#laredcincoradio", "shape": "dot"}, {"color": "#008484", "font": {"color": "black"}, "id": "#pasaporte", "label": "#pasaporte", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#iheartradio", "label": "#iheartradio", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#marcelova", "label": "#marcelova", "shape": "dot"}, {"color": "#008484", "font": {"color": "black"}, "id": "#cuartatransformacion", "label": "#cuartatransformacion", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#tercergradodeportivo", "label": "#tercergradodeportivo", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#avanzadamc_cdmx", "label": "#avanzadamc_cdmx", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#checalanota", "label": "#checalanota", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#morena", "label": "#morena", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#santino", "label": "#santino", "shape": "dot"}, {"color": "#00a1a1", "font": {"color": "black"}, "id": "#mexico", "label": "#mexico", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#quintanaroo", "label": "#quintanaroo", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#solidaridad", "label": "#solidaridad", "shape": "dot"}, {"color": "#008989", "font": {"color": "black"}, "id": "#jovenesmarcelo", "label": "#jovenesmarcelo", "shape": "dot"}, {"color": "#00adad", "font": {"color": "black"}, "id": "#cdmx", "label": "#cdmx", "shape": "dot"}, {"color": "#008484", "font": {"color": "black"}, "id": "#preveniresvivir", "label": "#preveniresvivir", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#simulacronacional2023", "label": "#simulacronacional2023", "shape": "dot"}, {"color": "#008c8c", "font": {"color": "black"}, "id": "#ine", "label": "#ine", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#tgd", "label": "#tgd", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#fakenewsalert", "label": "#fakenewsalert", "shape": "dot"}, {"color": "#009090", "font": {"color": "black"}, "id": "#elcaminodemexico", "label": "#elcaminodemexico", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#lopezdementegenocida", "label": "#lopezdementegenocida", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#morenaconmdemuerte", "label": "#morenaconmdemuerte", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#guacamayaleaks", "label": "#guacamayaleaks", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#guacamayanews", "label": "#guacamayanews", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#ma\u00f1anera", "label": "#ma\u00f1anera", "shape": "dot"}, {"color": "#008c8c", "font": {"color": "black"}, "id": "#metrocdmx", "label": "#metrocdmx", "shape": "dot"}, {"color": "#008989", "font": {"color": "black"}, "id": "#ultimahora", "label": "#ultimahora", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#bienestar", "label": "#bienestar", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#jornadadesalud", "label": "#jornadadesalud", "shape": "dot"}, {"color": "#009898", "font": {"color": "black"}, "id": "#marceloebrard", "label": "#marceloebrard", "shape": "dot"}, {"color": "#008c8c", "font": {"color": "black"}, "id": "#esclaudia", "label": "#esclaudia", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#liberenaely", "label": "#liberenaely", "shape": "dot"}, {"color": "#008484", "font": {"color": "black"}, "id": "#agenda", "label": "#agenda", "shape": "dot"}, {"color": "#008484", "font": {"color": "black"}, "id": "#pilares", "label": "#pilares", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#avanzadanacional", "label": "#avanzadanacional", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#pegasus", "label": "#pegasus", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#lunesdeobras", "label": "#lunesdeobras", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#ebrardva", "label": "#ebrardva", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#ciudaddemexico", "label": "#ciudaddemexico", "shape": "dot"}, {"color": "#008e8e", "font": {"color": "black"}, "id": "#segurodedesempleoactivo", "label": "#segurodedesempleoactivo", "shape": "dot"}, {"color": "#009c9c", "font": {"color": "black"}, "id": "#trabajoenlaciudad", "label": "#trabajoenlaciudad", "shape": "dot"}, {"color": "#008484", "font": {"color": "black"}, "id": "#tiktok", "label": "#tiktok", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#femec", "label": "#femec", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#feministasconmarcelo", "label": "#feministasconmarcelo", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#eu", "label": "#eu", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#mejoropcion", "label": "#mejoropcion", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#alertaadn", "label": "#alertaadn", "shape": "dot"}, {"color": "#008989", "font": {"color": "black"}, "id": "#whatsapp", "label": "#whatsapp", "shape": "dot"}, {"color": "#009898", "font": {"color": "black"}, "id": "#poderjudicialcorrupto", "label": "#poderjudicialcorrupto", "shape": "dot"}, {"color": "#009a9a", "font": {"color": "black"}, "id": "#votomasivopormorena2023y2024", "label": "#votomasivopormorena2023y2024", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#todaslasvoces", "label": "#todaslasvoces", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#romaymilan", "label": "#romaymilan", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#oaxaca", "label": "#oaxaca", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#relevante", "label": "#relevante", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#feriadelbienestar", "label": "#feriadelbienestar", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#avisoimportante", "label": "#avisoimportante", "shape": "dot"}, {"color": "#009595", "font": {"color": "black"}, "id": "#laprevencionesnuestrafuerza", "label": "#laprevencionesnuestrafuerza", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#avanzadanacionalgam", "label": "#avanzadanacionalgam", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#audiolibro", "label": "#audiolibro", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#fueralopez", "label": "#fueralopez", "shape": "dot"}, {"color": "#008484", "font": {"color": "black"}, "id": "#linea12noseolvida", "label": "#linea12noseolvida", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#lopeznarcopresidente", "label": "#lopeznarcopresidente", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#morenacuevadedelincuentes", "label": "#morenacuevadedelincuentes", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#todesconelcarnal", "label": "#todesconelcarnal", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#prianrdmc", "label": "#prianrdmc", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#marcelopresidente", "label": "#marcelopresidente", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#honestidadquedaresultados", "label": "#honestidadquedaresultados", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#yabasta", "label": "#yabasta", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#hoyyash", "label": "#hoyyash", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#pollsmx", "label": "#pollsmx", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#sre", "label": "#sre", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#joseluismora", "label": "#joseluismora", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#tlatelolco", "label": "#tlatelolco", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#noti12", "label": "#noti12", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#adanaugusto", "label": "#adanaugusto", "shape": "dot"}, {"color": "#008c8c", "font": {"color": "black"}, "id": "#amlo", "label": "#amlo", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#breakingnews", "label": "#breakingnews", "shape": "dot"}, {"color": "#009090", "font": {"color": "black"}, "id": "#claudiasheinbaum", "label": "#claudiasheinbaum", "shape": "dot"}, {"color": "#008989", "font": {"color": "black"}, "id": "#corcholatas", "label": "#corcholatas", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#siguemeytesigo", "label": "#siguemeytesigo", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#unextra\u00f1oenemigo", "label": "#unextra\u00f1oenemigo", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#almomento", "label": "#almomento", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#pasaportemexicano", "label": "#pasaportemexicano", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#sabiasque", "label": "#sabiasque", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#trabajocdmx", "label": "#trabajocdmx", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#ciudadconorden", "label": "#ciudadconorden", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#ciudaddelbienestar", "label": "#ciudaddelbienestar", "shape": "dot"}, {"color": "#008484", "font": {"color": "black"}, "id": "#eloctagono", "label": "#eloctagono", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#reydelcash", "label": "#reydelcash", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#lopezobrador", "label": "#lopezobrador", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#rosalia", "label": "#rosalia", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#zocalo", "label": "#zocalo", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#contralinea", "label": "#contralinea", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#linea9", "label": "#linea9", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#periodismodeinvestigacion", "label": "#periodismodeinvestigacion", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#ffaa", "label": "#ffaa", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#mexicoeu", "label": "#mexicoeu", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#lineab", "label": "#lineab", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#metro", "label": "#metro", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#noticias", "label": "#noticias", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#viral", "label": "#viral", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#esclaudiaasesina", "label": "#esclaudiaasesina", "shape": "dot"}, {"color": "#008484", "font": {"color": "black"}, "id": "#esclaudiacorrupta", "label": "#esclaudiacorrupta", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#asesina", "label": "#asesina", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#eeuu", "label": "#eeuu", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#juntosconstruimoslapaz", "label": "#juntosconstruimoslapaz", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#derechoshumanoslaborales", "label": "#derechoshumanoslaborales", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#alerta", "label": "#alerta", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#ift", "label": "#ift", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#simulacronacional", "label": "#simulacronacional", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#loultimo", "label": "#loultimo", "shape": "dot"}, {"color": "#008787", "font": {"color": "black"}, "id": "#powerranking", "label": "#powerranking", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#reddecooperativas", "label": "#reddecooperativas", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#marceloeslarespuesta", "label": "#marceloeslarespuesta", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#marcelosigue", "label": "#marcelosigue", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#ar2tv\ud83e\udd8e\ud83d\udcfa", "label": "#ar2tv\ud83e\udd8e\ud83d\udcfa", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#dea", "label": "#dea", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#espionaje", "label": "#espionaje", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#estadosunidos", "label": "#estadosunidos", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#pentagono", "label": "#pentagono", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#conacytnocumple", "label": "#conacytnocumple", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#conacytnopaga", "label": "#conacytnopaga", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#niunvotoalprianrdmc", "label": "#niunvotoalprianrdmc", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#prianrd", "label": "#prianrd", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#sabotajealmetro", "label": "#sabotajealmetro", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#amlovers", "label": "#amlovers", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#karnalmarcelo\u2757", "label": "#karnalmarcelo\u2757", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#marcelovers", "label": "#marcelovers", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#valkiriaonline\u00ae", "label": "#valkiriaonline\u00ae", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#bicicleta", "label": "#bicicleta", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#paisesbajos", "label": "#paisesbajos", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#wilfredmohr", "label": "#wilfredmohr", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#contiendasinternas", "label": "#contiendasinternas", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#elecciones2024", "label": "#elecciones2024", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#columna", "label": "#columna", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#franciscochiguil", "label": "#franciscochiguil", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#chapultepecnaturalezaycultura", "label": "#chapultepecnaturalezaycultura", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#dreamers", "label": "#dreamers", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#sisepudo", "label": "#sisepudo", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#felizlunes", "label": "#felizlunes", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#gobiernocdmx", "label": "#gobiernocdmx", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#avanzadanacionql", "label": "#avanzadanacionql", "shape": "dot"}, {"color": "#008282", "font": {"color": "black"}, "id": "#felizmartesatodos", "label": "#felizmartesatodos", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#marchelitopresidente2024", "label": "#marchelitopresidente2024", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#bartlett", "label": "#bartlett", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#cfe", "label": "#cfe", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#tlalpan", "label": "#tlalpan", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#narcopan", "label": "#narcopan", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#nuncaseraspresidenta", "label": "#nuncaseraspresidenta", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#marcelo", "label": "#marcelo", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#laciudadylatransformacion", "label": "#laciudadylatransformacion", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#charlas", "label": "#charlas", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#dft", "label": "#dft", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#impunidad", "label": "#impunidad", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#linea12", "label": "#linea12", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#pasedelista1al26\u2753\ud83e\udd14\ud83d\ude44", "label": "#pasedelista1al26\u2753\ud83e\udd14\ud83d\ude44", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#quetal", "label": "#quetal", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#tragedia", "label": "#tragedia", "shape": "dot"}, {"color": "#008080", "font": {"color": "black"}, "id": "#citaspasaporte", "label": "#citaspasaporte", "shape": "dot"}]);

                  const edges = new DataSet([{"from": "#4t", "to": "#4tavanza", "value": 2}, {"from": "#4t", "to": "#checalanota", "value": 1}, {"from": "#4t", "to": "#morena", "value": 1}, {"from": "#4t", "to": "#marceloebrard", "value": 1}, {"from": "#4t", "to": "#votomasivopormorena2023y2024", "value": 1}, {"from": "#4t", "to": "#felizlunes", "value": 1}, {"from": "#alegobernadora", "to": "#delfinarata", "value": 2}, {"from": "#irc", "to": "#jefadegobierno", "value": 1}, {"from": "#jefadegobierno", "to": "#bienestarentucolonia", "value": 2}, {"from": "#jefadegobierno", "to": "#trabajoenlaciudad", "value": 1}, {"from": "#tigresdelnorte", "to": "#claudiasheinbaum", "value": 1}, {"from": "#tigresdelnorte", "to": "#lopezobrador", "value": 1}, {"from": "#tigresdelnorte", "to": "#rosalia", "value": 1}, {"from": "#tigresdelnorte", "to": "#zocalo", "value": 1}, {"from": "#hijosdemx", "to": "#mxconpi\u00f1a", "value": 25}, {"from": "#claudiamamalona", "to": "#l12", "value": 1}, {"from": "#conmarcelosi", "to": "#avanzadanacionalgamcdmx", "value": 4}, {"from": "#conmarcelosi", "to": "#conmarcelosigue", "value": 2}, {"from": "#conmarcelosi", "to": "#movimientoprogresistajalisco", "value": 2}, {"from": "#conmarcelosi", "to": "#avanzadamc_cdmx", "value": 1}, {"from": "#conmarcelosi", "to": "#mexico", "value": 2}, {"from": "#conmarcelosi", "to": "#jovenesmarcelo", "value": 4}, {"from": "#conmarcelosi", "to": "#elcaminodemexico", "value": 4}, {"from": "#conmarcelosi", "to": "#marceloebrard", "value": 2}, {"from": "#conmarcelosi", "to": "#avanzadanacional", "value": 4}, {"from": "#conmarcelosi", "to": "#ebrardva", "value": 2}, {"from": "#conmarcelosi", "to": "#femec", "value": 1}, {"from": "#conmarcelosi", "to": "#feministasconmarcelo", "value": 1}, {"from": "#conmarcelosi", "to": "#audiolibro", "value": 1}, {"from": "#conmarcelosi", "to": "#avanzadanacionql", "value": 2}, {"from": "#conmarcelosi", "to": "#felizmartesatodos", "value": 2}, {"from": "#bienestarentucolonia", "to": "#trabajoenlaciudad", "value": 1}, {"from": "#bienestarentucolonia", "to": "#honestidadquedaresultados", "value": 1}, {"from": "#conmarcelosigue", "to": "#movimientoprogresistajalisco", "value": 2}, {"from": "#laredcincoradio", "to": "#pasaporte", "value": 1}, {"from": "#pasaporte", "to": "#whatsapp", "value": 2}, {"from": "#pasaporte", "to": "#sre", "value": 2}, {"from": "#checalanota", "to": "#morena", "value": 1}, {"from": "#mexico", "to": "#quintanaroo", "value": 1}, {"from": "#mexico", "to": "#solidaridad", "value": 1}, {"from": "#mexico", "to": "#cdmx", "value": 4}, {"from": "#mexico", "to": "#ine", "value": 6}, {"from": "#mexico", "to": "#metrocdmx", "value": 4}, {"from": "#mexico", "to": "#ultimahora", "value": 4}, {"from": "#mexico", "to": "#marceloebrard", "value": 2}, {"from": "#mexico", "to": "#oaxaca", "value": 1}, {"from": "#mexico", "to": "#relevante", "value": 1}, {"from": "#mexico", "to": "#metro", "value": 4}, {"from": "#mexico", "to": "#noticias", "value": 4}, {"from": "#mexico", "to": "#viral", "value": 4}, {"from": "#mexico", "to": "#eeuu", "value": 1}, {"from": "#mexico", "to": "#juntosconstruimoslapaz", "value": 1}, {"from": "#mexico", "to": "#avanzadanacionql", "value": 2}, {"from": "#mexico", "to": "#felizmartesatodos", "value": 2}, {"from": "#quintanaroo", "to": "#solidaridad", "value": 1}, {"from": "#jovenesmarcelo", "to": "#marceloeslarespuesta", "value": 1}, {"from": "#jovenesmarcelo", "to": "#marcelosigue", "value": 1}, {"from": "#cdmx", "to": "#preveniresvivir", "value": 3}, {"from": "#cdmx", "to": "#simulacronacional2023", "value": 3}, {"from": "#cdmx", "to": "#metrocdmx", "value": 4}, {"from": "#cdmx", "to": "#ultimahora", "value": 4}, {"from": "#cdmx", "to": "#liberenaely", "value": 2}, {"from": "#cdmx", "to": "#alertaadn", "value": 1}, {"from": "#cdmx", "to": "#joseluismora", "value": 1}, {"from": "#cdmx", "to": "#tlatelolco", "value": 1}, {"from": "#cdmx", "to": "#claudiasheinbaum", "value": 1}, {"from": "#cdmx", "to": "#ciudadconorden", "value": 1}, {"from": "#cdmx", "to": "#ciudaddelbienestar", "value": 1}, {"from": "#cdmx", "to": "#metro", "value": 4}, {"from": "#cdmx", "to": "#noticias", "value": 4}, {"from": "#cdmx", "to": "#viral", "value": 4}, {"from": "#cdmx", "to": "#dreamers", "value": 1}, {"from": "#cdmx", "to": "#sisepudo", "value": 1}, {"from": "#preveniresvivir", "to": "#simulacronacional2023", "value": 3}, {"from": "#simulacronacional2023", "to": "#laprevencionesnuestrafuerza", "value": 1}, {"from": "#tgd", "to": "#ar2tv\ud83e\udd8e\ud83d\udcfa", "value": 1}, {"from": "#elcaminodemexico", "to": "#femec", "value": 1}, {"from": "#elcaminodemexico", "to": "#feministasconmarcelo", "value": 1}, {"from": "#lopezdementegenocida", "to": "#morenaconmdemuerte", "value": 2}, {"from": "#guacamayaleaks", "to": "#guacamayanews", "value": 1}, {"from": "#guacamayaleaks", "to": "#ma\u00f1anera", "value": 1}, {"from": "#guacamayanews", "to": "#ma\u00f1anera", "value": 1}, {"from": "#metrocdmx", "to": "#ultimahora", "value": 5}, {"from": "#metrocdmx", "to": "#fueralopez", "value": 1}, {"from": "#metrocdmx", "to": "#linea12noseolvida", "value": 1}, {"from": "#metrocdmx", "to": "#lopeznarcopresidente", "value": 1}, {"from": "#metrocdmx", "to": "#morenacuevadedelincuentes", "value": 1}, {"from": "#metrocdmx", "to": "#metro", "value": 4}, {"from": "#metrocdmx", "to": "#noticias", "value": 4}, {"from": "#metrocdmx", "to": "#viral", "value": 4}, {"from": "#ultimahora", "to": "#metro", "value": 4}, {"from": "#ultimahora", "to": "#noticias", "value": 4}, {"from": "#ultimahora", "to": "#viral", "value": 4}, {"from": "#bienestar", "to": "#jornadadesalud", "value": 2}, {"from": "#marceloebrard", "to": "#marcelopresidente", "value": 2}, {"from": "#marceloebrard", "to": "#adanaugusto", "value": 4}, {"from": "#marceloebrard", "to": "#amlo", "value": 4}, {"from": "#marceloebrard", "to": "#breakingnews", "value": 4}, {"from": "#marceloebrard", "to": "#claudiasheinbaum", "value": 4}, {"from": "#marceloebrard", "to": "#corcholatas", "value": 4}, {"from": "#marceloebrard", "to": "#siguemeytesigo", "value": 4}, {"from": "#marceloebrard", "to": "#unextra\u00f1oenemigo", "value": 4}, {"from": "#marceloebrard", "to": "#avanzadanacionql", "value": 2}, {"from": "#marceloebrard", "to": "#felizmartesatodos", "value": 2}, {"from": "#agenda", "to": "#pilares", "value": 3}, {"from": "#ciudaddemexico", "to": "#segurodedesempleoactivo", "value": 1}, {"from": "#ciudaddemexico", "to": "#trabajoenlaciudad", "value": 1}, {"from": "#segurodedesempleoactivo", "to": "#trabajoenlaciudad", "value": 7}, {"from": "#trabajoenlaciudad", "to": "#honestidadquedaresultados", "value": 1}, {"from": "#trabajoenlaciudad", "to": "#trabajocdmx", "value": 1}, {"from": "#trabajoenlaciudad", "to": "#derechoshumanoslaborales", "value": 2}, {"from": "#trabajoenlaciudad", "to": "#reddecooperativas", "value": 1}, {"from": "#femec", "to": "#feministasconmarcelo", "value": 1}, {"from": "#whatsapp", "to": "#sre", "value": 2}, {"from": "#whatsapp", "to": "#almomento", "value": 1}, {"from": "#whatsapp", "to": "#pasaportemexicano", "value": 1}, {"from": "#whatsapp", "to": "#sabiasque", "value": 1}, {"from": "#poderjudicialcorrupto", "to": "#votomasivopormorena2023y2024", "value": 11}, {"from": "#oaxaca", "to": "#relevante", "value": 1}, {"from": "#avisoimportante", "to": "#laprevencionesnuestrafuerza", "value": 2}, {"from": "#fueralopez", "to": "#linea12noseolvida", "value": 1}, {"from": "#fueralopez", "to": "#lopeznarcopresidente", "value": 1}, {"from": "#fueralopez", "to": "#morenacuevadedelincuentes", "value": 1}, {"from": "#linea12noseolvida", "to": "#lopeznarcopresidente", "value": 1}, {"from": "#linea12noseolvida", "to": "#morenacuevadedelincuentes", "value": 1}, {"from": "#linea12noseolvida", "to": "#impunidad", "value": 1}, {"from": "#linea12noseolvida", "to": "#linea12", "value": 1}, {"from": "#linea12noseolvida", "to": "#pasedelista1al26\u2753\ud83e\udd14\ud83d\ude44", "value": 1}, {"from": "#linea12noseolvida", "to": "#quetal", "value": 1}, {"from": "#linea12noseolvida", "to": "#tragedia", "value": 1}, {"from": "#lopeznarcopresidente", "to": "#morenacuevadedelincuentes", "value": 1}, {"from": "#pollsmx", "to": "#powerranking", "value": 2}, {"from": "#joseluismora", "to": "#tlatelolco", "value": 1}, {"from": "#adanaugusto", "to": "#amlo", "value": 4}, {"from": "#adanaugusto", "to": "#breakingnews", "value": 4}, {"from": "#adanaugusto", "to": "#claudiasheinbaum", "value": 4}, {"from": "#adanaugusto", "to": "#corcholatas", "value": 4}, {"from": "#adanaugusto", "to": "#siguemeytesigo", "value": 4}, {"from": "#adanaugusto", "to": "#unextra\u00f1oenemigo", "value": 4}, {"from": "#amlo", "to": "#breakingnews", "value": 4}, {"from": "#amlo", "to": "#claudiasheinbaum", "value": 4}, {"from": "#amlo", "to": "#corcholatas", "value": 4}, {"from": "#amlo", "to": "#siguemeytesigo", "value": 4}, {"from": "#amlo", "to": "#unextra\u00f1oenemigo", "value": 4}, {"from": "#amlo", "to": "#niunvotoalprianrdmc", "value": 1}, {"from": "#amlo", "to": "#prianrd", "value": 1}, {"from": "#amlo", "to": "#sabotajealmetro", "value": 1}, {"from": "#breakingnews", "to": "#claudiasheinbaum", "value": 4}, {"from": "#breakingnews", "to": "#corcholatas", "value": 4}, {"from": "#breakingnews", "to": "#siguemeytesigo", "value": 4}, {"from": "#breakingnews", "to": "#unextra\u00f1oenemigo", "value": 4}, {"from": "#claudiasheinbaum", "to": "#corcholatas", "value": 4}, {"from": "#claudiasheinbaum", "to": "#siguemeytesigo", "value": 4}, {"from": "#claudiasheinbaum", "to": "#unextra\u00f1oenemigo", "value": 4}, {"from": "#claudiasheinbaum", "to": "#lopezobrador", "value": 1}, {"from": "#claudiasheinbaum", "to": "#rosalia", "value": 1}, {"from": "#claudiasheinbaum", "to": "#zocalo", "value": 1}, {"from": "#claudiasheinbaum", "to": "#gobiernocdmx", "value": 1}, {"from": "#claudiasheinbaum", "to": "#bartlett", "value": 1}, {"from": "#claudiasheinbaum", "to": "#cfe", "value": 1}, {"from": "#corcholatas", "to": "#siguemeytesigo", "value": 4}, {"from": "#corcholatas", "to": "#unextra\u00f1oenemigo", "value": 4}, {"from": "#siguemeytesigo", "to": "#unextra\u00f1oenemigo", "value": 4}, {"from": "#almomento", "to": "#pasaportemexicano", "value": 1}, {"from": "#almomento", "to": "#sabiasque", "value": 1}, {"from": "#pasaportemexicano", "to": "#sabiasque", "value": 1}, {"from": "#ciudadconorden", "to": "#ciudaddelbienestar", "value": 1}, {"from": "#lopezobrador", "to": "#rosalia", "value": 1}, {"from": "#lopezobrador", "to": "#zocalo", "value": 1}, {"from": "#rosalia", "to": "#zocalo", "value": 1}, {"from": "#contralinea", "to": "#linea9", "value": 1}, {"from": "#contralinea", "to": "#periodismodeinvestigacion", "value": 2}, {"from": "#linea9", "to": "#periodismodeinvestigacion", "value": 1}, {"from": "#ffaa", "to": "#mexicoeu", "value": 1}, {"from": "#metro", "to": "#noticias", "value": 4}, {"from": "#metro", "to": "#viral", "value": 4}, {"from": "#noticias", "to": "#viral", "value": 4}, {"from": "#esclaudiaasesina", "to": "#esclaudiacorrupta", "value": 2}, {"from": "#eeuu", "to": "#juntosconstruimoslapaz", "value": 1}, {"from": "#alerta", "to": "#ift", "value": 1}, {"from": "#alerta", "to": "#simulacronacional", "value": 1}, {"from": "#ift", "to": "#simulacronacional", "value": 1}, {"from": "#loultimo", "to": "#powerranking", "value": 1}, {"from": "#marceloeslarespuesta", "to": "#marcelosigue", "value": 1}, {"from": "#dea", "to": "#espionaje", "value": 1}, {"from": "#dea", "to": "#estadosunidos", "value": 1}, {"from": "#dea", "to": "#pentagono", "value": 1}, {"from": "#espionaje", "to": "#estadosunidos", "value": 1}, {"from": "#espionaje", "to": "#pentagono", "value": 1}, {"from": "#estadosunidos", "to": "#pentagono", "value": 1}, {"from": "#conacytnocumple", "to": "#conacytnopaga", "value": 2}, {"from": "#niunvotoalprianrdmc", "to": "#prianrd", "value": 1}, {"from": "#niunvotoalprianrdmc", "to": "#sabotajealmetro", "value": 1}, {"from": "#prianrd", "to": "#sabotajealmetro", "value": 1}, {"from": "#amlovers", "to": "#karnalmarcelo\u2757", "value": 1}, {"from": "#amlovers", "to": "#marcelovers", "value": 1}, {"from": "#karnalmarcelo\u2757", "to": "#marcelovers", "value": 1}, {"from": "#bicicleta", "to": "#paisesbajos", "value": 1}, {"from": "#bicicleta", "to": "#wilfredmohr", "value": 1}, {"from": "#paisesbajos", "to": "#wilfredmohr", "value": 1}, {"from": "#contiendasinternas", "to": "#elecciones2024", "value": 1}, {"from": "#dreamers", "to": "#sisepudo", "value": 1}, {"from": "#avanzadanacionql", "to": "#felizmartesatodos", "value": 2}, {"from": "#bartlett", "to": "#cfe", "value": 1}, {"from": "#impunidad", "to": "#linea12", "value": 1}, {"from": "#impunidad", "to": "#pasedelista1al26\u2753\ud83e\udd14\ud83d\ude44", "value": 1}, {"from": "#impunidad", "to": "#quetal", "value": 1}, {"from": "#impunidad", "to": "#tragedia", "value": 1}, {"from": "#linea12", "to": "#pasedelista1al26\u2753\ud83e\udd14\ud83d\ude44", "value": 1}, {"from": "#linea12", "to": "#quetal", "value": 1}, {"from": "#linea12", "to": "#tragedia", "value": 1}, {"from": "#pasedelista1al26\u2753\ud83e\udd14\ud83d\ude44", "to": "#quetal", "value": 1}, {"from": "#pasedelista1al26\u2753\ud83e\udd14\ud83d\ude44", "to": "#tragedia", "value": 1}, {"from": "#quetal", "to": "#tragedia", "value": 1}]);
      // create an array with edges

      const data = {
        nodes: nodes,
        edges: edges
      };

      const options = {
        height: '700px',
        backgroundColor: '#f5f5f5',
        
        position: 'relative',
        float: 'left'
      };

      // create a network
      const network= new Network(container, data, options);

      // store references to the network and data in the state
      setNetwork(network);
      setData(data);
    };

    drawGraph();
  }, []);


  return (
    <div className="fondo-grafo">
    <div className="card-body">
    {/* <h4 className="card-title">Palabras mas frecuentes</h4>
    <div className="card-text">
    Las palabras mas frecuentes ayudan a identificar los temas principales o terminos mas usados. Si comparamos
    dos grupos de palabras
    </div> */}
    <div id="mynetwork3"></div>
    </div>
    </div>
    );
    }