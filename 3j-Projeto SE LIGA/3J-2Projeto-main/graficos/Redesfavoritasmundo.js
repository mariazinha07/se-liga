import { getCSS } from "./comum.js";

async function redesFavoritasMundo() {
    const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json";

    const res = await fetch(url);
    const dados = await res.json();
    console.log(dados);

    
    const redes = Object.keys(dados);
    const valores = Object.values(dados);

    
    const data = {
        values: valores,
        labels: redes,
        type: 'pie',
        textinfo: 'label+percent',
    };


    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),
        paper_bgcolor: getCSS('--cor-de-fundo'),
        title: {
            text: 'Redes sociais que os usuários mais gostam',
            x: 0.5, 
            font: {
                color: getCSS('--cor-primaria'),
                family: getCSS('--fonte'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--cor-primaria'),
                size: 16
            }
        },
    };
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}


redesFavoritasMundo();
