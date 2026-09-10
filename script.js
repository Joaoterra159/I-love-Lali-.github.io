const events=[['04/09/2025','O começo de tudo','Começamos a ficar ♡'],['06/09/2025','Nosso primeiro sorvete','Nosso primeiro rolê para tomar sorvete juntos 🍦'],['08/10/2025','Nosso primeiro beijo','E eu achando que a coisa boa que você ia me dar era um doce...'],['14/10/2025','Virou namoro','O dia em que a gente começou a namorar ❤️'],['03/12/2025','Cinema','Fomos assistir Zootopia 2 🎬'],['23/12/2025','Conheci sua família','Mais um pedacinho da sua vida virou parte da minha.'],['04/02/2026','A aliança','Te dei nossa aliança de namoro 💍'],['08/07/2026','Um cochilo em você','Tirei um cochilo apoiado em você 💤'],['19/07/2026','Parque com sua família','Um dia gostoso no parque 🌳'],['21/07/2026','Dormimos a tarde juntos','Só nós dois e um pouco de paz ☁️']];
const tl=document.querySelector('#timeline');events.forEach((e,i)=>tl.insertAdjacentHTML('beforeend',`<article class="event" style="--r:${i%2?1:-1}deg"><time>${e[0]}</time><h3>${e[1]}</h3><p>${e[2]}</p></article>`));
const letters=[['🌧️ Abra quando estiver triste','Eu não sou bom em animar os outros, mas eu prometo sempre estar do seu lado para ouvir você. Mesmo que eu não tenha a solução para o que te deixa triste, eu vou estar aqui para você.'],['😂 Abra quando estiver entediada','OIIIIIIII meu amor! Se você tá no tédio eu tenho uma piada para te tirar dele: “por que o pinheiro não se perde?............ pq ele tem um MApinha”\n\nSe não funcionou, você pode me perturbar até sair desse seu tédio.'],['💢 Abra caso nós briguemos','Lali, é normal casais discutirem e, independente do que tenha acontecido (grande chance de ser culpa minha ksks), eu te amo muito e não vai ser uma simples discussão que vai mudar isso S2.'],['🌙 Abra quando for dormir','Boaaaaa noiteeeee minha vida todinha, eu te amo mais que tudo nesse mundo.'],['⭐ Abra quando quiser lembrar o quanto eu te amo','Meu amor, você é simplesmente a pessoa mais incrível que eu já conheci na minha vida toda. Eu amo simplesmente tudo em você: seu sorriso, seu rosto lindo, sua risada. Você é perfeita. Eu penso em você todo dia e passo a semana toda contando os dias para nós nos vermos. Uso suas palavras às minhas: “Te amo com a alma, pois ela nunca morre”, igual o meu amor por você.']];
const env=['#efd0d8','#dce9c9','#e1cfbd','#202945','#d7e5ef'];const box=document.querySelector('#letters'),modal=document.querySelector('#modal'),modalTitle=document.querySelector('#modalTitle'),modalText=document.querySelector('#modalText'),modalCard=modal.querySelector('.modal-card');letters.forEach(([t,x],i)=>{let b=document.createElement('button');b.className='letter';b.style.setProperty('--env',env[i]);b.innerHTML=`<i class="env-decor" aria-hidden="true"></i><span>${t}</span>`;b.onclick=()=>openModal(t,x,i);box.appendChild(b)});function openModal(t,x,i){modalCard.classList.add('letter-paper');modalCard.dataset.letter=i;modalCard.querySelectorAll('.letter-doodle').forEach(n=>n.remove());[['doodle-a',i===3?'☾':'♡'],['doodle-b','✦'],['doodle-c',i===1?'✎  ·  ♡':'·  ✧  ·']].forEach(([c,v])=>{const d=document.createElement('i');d.className='letter-doodle '+c;d.textContent=v;modalCard.appendChild(d)});modal.classList.add('show');modalTitle.textContent=t;modalText.textContent=x}closeModal.onclick=()=>modal.classList.remove('show');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('show')};
const loves=[['🇺🇸','Inglês','I love you'],['🇪🇸','Espanhol','Te amo'],['🇫🇷','Francês','Je t’aime'],['🇮🇹','Italiano','Ti amo'],['🇩🇪','Alemão','Ich liebe dich'],['🇯🇵','Japonês','愛してる (Aishiteru)'],['🇰🇷','Coreano','사랑해 (Saranghae)'],['🇬🇷','Grego',"Σ' αγαπώ (S'agapó)"],['🇷🇺','Russo','Я тебя люблю (Ya tebya lyublyu)'],['🇧🇷','Português','Eu te amo'],['🇮🇪','Irlandês','Is breá liom tú'],['🇸🇮','Esloveno','Ljubim te']];
let found=new Set(JSON.parse(sessionStorage.getItem('laliLoveFound')||'[]'));
// V8: a caça dura apenas enquanto esta sessão do navegador estiver aberta.
// Fechar a aba/app por completo faz a próxima visita começar em 0/12.
const progress=document.querySelector('#loveProgress'),bar=document.querySelector('#progressBar'),secret=document.querySelector('#secret'),heart=document.querySelector('#constellationHeart');const pts=[[50,8],[31,18],[16,34],[13,53],[23,70],[50,91],[77,70],[87,53],[84,34],[69,18],[50,35],[50,61]];pts.forEach((p,i)=>{let n=document.createElement('i');n.className='node';n.style.left=p[0]+'%';n.style.top=p[1]+'%';n.textContent='✦';n.dataset.i=i;heart.appendChild(n)});
function renderFound(){document.querySelectorAll('.hidden-love').forEach(b=>b.classList.toggle('found',found.has(+b.dataset.love)));document.querySelectorAll('.node').forEach(n=>n.classList.toggle('on',found.has(+n.dataset.i)));progress.textContent=`${found.size} / 12 encontrados`;bar.style.width=(found.size/12*100)+'%';if(found.size===12){secret.disabled=false;secret.textContent='💌 abrir cartinha secreta'}else{secret.disabled=true;secret.textContent='🔒 cartinha secreta'}}
document.querySelectorAll('.hidden-love').forEach(b=>b.onclick=()=>{let i=+b.dataset.love;if(found.has(i)){showToast('✦ esse segredinho já foi encontrado ♡');return}found.add(i);sessionStorage.setItem('laliLoveFound',JSON.stringify([...found]));renderFound();let l=loves[i];showLoveDiscovery(l,found.size);if(i===9){b.classList.add('heart-pop');setTimeout(()=>b.classList.remove('heart-pop'),2400)}});renderFound();
secret.onclick=()=>openModal('💌 Todas as formas que achei de dizer que te amo','Eu poderia aprender a dizer que te amo em todas as línguas, e não seria o suficiente para dizer o tanto que te amo.\n\n— JUJU ♡ ∞+1');
const worldBtn=document.querySelector('#worldBtn'),orbit=document.querySelector('#orbit'),worldMiddle=document.querySelector('#worldMiddle'),worldFinal=document.querySelector('#worldFinal');
let worldTimers=[];
function clearWorldTimers(){worldTimers.forEach(clearTimeout);worldTimers=[]}
function resetWorldStory(){clearWorldTimers();orbit?.classList.remove('orbiting');worldMiddle?.classList.remove('show');worldFinal?.classList.remove('show');worldFinal?.setAttribute('aria-hidden','true');if(worldBtn){worldBtn.disabled=false;worldBtn.textContent='dar a volta no mundo ✦'}}
if(worldBtn&&orbit&&worldMiddle&&worldFinal){worldBtn.onclick=()=>{resetWorldStory();worldBtn.disabled=true;worldBtn.textContent='dando a volta… ✦';void orbit.offsetWidth;orbit.classList.add('orbiting');worldMiddle.classList.add('show');worldTimers.push(setTimeout(()=>worldMiddle.classList.remove('show'),1750));worldTimers.push(setTimeout(()=>{worldFinal.classList.add('show');worldFinal.setAttribute('aria-hidden','false');worldBtn.disabled=false;worldBtn.textContent='dar a volta de novo ✦'},2900))}};
const counter=document.querySelector('#counter'),musicBtn=document.querySelector('#musicBtn');
function updateCounter(){let start=new Date('2025-10-14T00:00:00'),now=new Date(),d=Math.max(0,now-start);let days=Math.floor(d/86400000),h=Math.floor(d/3600000)%24,m=Math.floor(d/60000)%60,s=Math.floor(d/1000)%60;if(counter)counter.textContent=`♡ ${days} dias, ${h}h ${m}m ${s}s juntos`};updateCounter();setInterval(updateCounter,1000);
if(musicBtn)musicBtn.onclick=()=>openModal('♫ Nossa música','A música ainda está em aberto. Quando você escolher, este botão vira o play/pause do site.');

// V3: motion, star ambience and richer memories
const photoByDate={'19/07/2026':'assets/parque.png'};
document.querySelectorAll('.event').forEach(ev=>{const date=ev.querySelector('time')?.textContent;if(photoByDate[date]){ev.classList.add('has-photo');ev.insertAdjacentHTML('afterbegin',`<img class="event-memory" src="${photoByDate[date]}" alt="Memória de ${date}">`)}});
const revealTargets=document.querySelectorAll('.event,.polaroids figure,.letter,.hidden-notes .note,.final-paper');revealTargets.forEach(x=>x.classList.add('reveal'));const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('seen');io.unobserve(e.target)}}),{threshold:.12});revealTargets.forEach(x=>io.observe(x));
const sf=document.querySelector('#starfield');for(let i=0;i<28;i++){const s=document.createElement('span');s.className='twinkle';s.textContent=i%6===0?'✦':'·';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';s.style.fontSize=(8+Math.random()*10)+'px';s.style.animationDelay=(Math.random()*2.4)+'s';sf.appendChild(s)}
const toast=document.querySelector('#loveToast');
function hideToast(){toast.classList.remove('show');clearTimeout(showToast.t)}
function showToast(text){toast.classList.remove('love-discovery');toast.textContent=text;toast.classList.add('show');clearTimeout(showToast.t);showToast.t=setTimeout(()=>toast.classList.remove('show'),2300)}
function showLoveDiscovery(l,count){
  toast.classList.add('love-discovery');
  toast.innerHTML=`<span class="toast-flag">${l[0]}</span><span class="toast-copy"><small>${l[1]} · ${count}/12</small><strong>${l[2]}</strong></span><span class="toast-star">✦</span>`;
  toast.classList.add('show');
  clearTimeout(showToast.t);
  showToast.t=setTimeout(()=>toast.classList.remove('show'),2800);
}

window.addEventListener('scroll',()=>{const y=window.scrollY/(document.body.scrollHeight-innerHeight||1);document.documentElement.style.setProperty('--journey',y.toFixed(3))},{passive:true});

// V4: personagens consistentes também aparecem como pequenos rabiscos nas memórias
const characterByDate={
  '04/09/2025':'assets/characters-together-v7.jpg',
  '06/09/2025':'assets/characters-explore-v7.jpg',
  '08/10/2025':'assets/characters-firstkiss-v7.jpg',
  '14/10/2025':'assets/characters-together-v7.jpg',
  '03/12/2025':'assets/characters-watch-v7.jpg',
  '23/12/2025':'assets/characters-hug-v7.jpg',
  '04/02/2026':'assets/characters-ring-v7.jpg',
  '08/07/2026':'assets/characters-nap-v7.jpg',
  '21/07/2026':'assets/characters-nature-v7.jpg'
};
document.querySelectorAll('.event').forEach(ev=>{
  const date=ev.querySelector('time')?.textContent;
  if(characterByDate[date] && !ev.classList.contains('has-photo')){
    ev.insertAdjacentHTML('afterbegin',`<img class="event-character event-character-v8" src="${characterByDate[date]}" alt="ilustração da memória">`);
  }
});

// V6: pequenas reações nas cenas especiais
const scenes=document.querySelectorAll('.memory-scene');
scenes.forEach(scene=>scene.addEventListener('click',()=>{
  scene.classList.remove('scene-tap'); void scene.offsetWidth; scene.classList.add('scene-tap');
}));

// V8: constelação reage à conclusão da caça
const updateConstellationFinish=()=>heart.classList.toggle('complete',found.size===12);
updateConstellationFinish();
const originalRenderFound=renderFound;
renderFound=function(){originalRenderFound();updateConstellationFinish();};

// V8: ao reabrir o site em outra sessão, o progresso começa do zero.
// sessionStorage é intencional: reload mantém; fechar a sessão do navegador não.

// V15: interação "Quem é meu nenê?" — resposta única, como na brincadeira
const neneCard=document.querySelector('#neneCard');
let neneTimers=[];
if(neneCard)neneCard.addEventListener('click',()=>{
  neneTimers.forEach(clearTimeout); neneTimers=[];
  const answer=neneCard.querySelector('.nene-answer');
  neneCard.classList.remove('play','answer-2','answer-3');
  if(answer)answer.textContent='euzinho! ♡';
  void neneCard.offsetWidth;
  neneCard.classList.add('play','answer-2');
  neneTimers.push(setTimeout(()=>neneCard.classList.remove('play','answer-2','answer-3'),3100));
});

// V14 — adesivos da linha do tempo: ajudam cada memória a ter identidade sem repetir texto.
const stickersByDate={'04/09/2025':'♡','06/09/2025':'🍦','08/10/2025':'💗','14/10/2025':'❤️','03/12/2025':'🎟️','23/12/2025':'🏠','04/02/2026':'💍','08/07/2026':'💤','19/07/2026':'🌿','21/07/2026':'☁️'};
document.querySelectorAll('.event').forEach(ev=>ev.dataset.sticker=stickersByDate[ev.querySelector('time')?.textContent]||'✦');

// V18 — detalhes das memórias saem da linha e ocupam os respiros laterais.
const memoryDecorByDate={
 '04/09/2025':['♡','✦','♎ · ♋'],
 '06/09/2025':['🍦','♡','✧'],
 '08/10/2025':['💗','✦','♡'],
 '14/10/2025':['❤️','∞ + 1','✧'],
 '03/12/2025':['🎟️','🍿','✦'],
 '23/12/2025':['🏠','♡','🌿'],
 '04/02/2026':['💍','✦','♡'],
 '08/07/2026':['☁️','💤','☾'],
 '19/07/2026':['🌿','✦','♡'],
 '21/07/2026':['☾','☁️','♡']
};
document.querySelectorAll('#historia .event').forEach(ev=>{
 const date=ev.querySelector('time')?.textContent;
 const d=memoryDecorByDate[date]||['✦','♡','·'];
 const deco=document.createElement('div');
 deco.className='memory-sprinkles';
 deco.setAttribute('aria-hidden','true');
 deco.innerHTML=`<span class="s1">${d[0]}</span><span class="s2">${d[1]}</span><span class="s3">${d[2]}</span>`;
 ev.appendChild(deco);
});
