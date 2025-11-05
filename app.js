// Copilot: banco de dados falso
const musicas = [
{ titulo: 'Aurora', artista: 'Luz & Som', capaUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&h=800&fit=crop' },
{ titulo: 'Noite Alta', artista: 'Vento Norte', capaUrl: 'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=800&h=800&fit=crop' },
{ titulo: 'Ritmo Vivo', artista: 'Banda Nova', capaUrl: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=800&fit=crop' },
{ titulo: 'Marés', artista: 'Oceano & Nós', capaUrl: 'https://images.unsplash.com/photo-1503264116251-35a269479413?w=800&h=800&fit=crop' },
{ titulo: 'Além', artista: 'Estrela Guia', capaUrl: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&h=800&fit=crop' }
];


// Copilot: função que renderiza as músicas no DOM
function renderLista(list){
const container = document.getElementById('lista-de-musicas');
container.innerHTML = '';


list.forEach((m, idx) => {
const card = document.createElement('article');
card.className = 'musica-card';


card.innerHTML = `
<img src="${m.capaUrl}" alt="Capa de ${m.titulo}" />
<div class="musica-meta">
<h3>${m.titulo}</h3>
<p>${m.artista}</p>
</div>
<button class="play-btn" data-index="${idx}">Play</button>
`;


container.appendChild(card);
});


// Copilot: adiciona comportamento simples ao botão play
container.querySelectorAll('.play-btn').forEach(btn => {
btn.addEventListener('click', () => {
const active = document.querySelector('.play-btn.active');
if(active) active.classList.remove('active');
btn.classList.add('active');
const i = Number(btn.dataset.index);
// Aqui você poderia tocar um áudio; por enquanto apenas mostra feedback visual
console.log('Tocando:', musicas[i].titulo, '—', musicas[i].artista);
});
});
}


// Renderiza tudo ao carregar
renderLista(musicas);


// Implementa busca simples
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (e) => {
const q = e.target.value.toLowerCase().trim();
const filtrado = musicas.filter(m => m.titulo.toLowerCase().includes(q) || m.artista.toLowerCase().includes(q));
renderLista(filtrado);
});


/* Comentários Copilot incluídos:
- 'musicas' é um array que simula um banco de dados local (fácil de entender e alterar).
- A renderização cria elementos dinamicamente (bom para aprender DOM manualmente).
- O botão 'Play' apenas ativa um estado visual; integração com áudio seria o próximo passo.
- A busca filtra o array localmente (sem backend, ideal para protótipos simples). */