// Efeito de confete inicial quando a página carrega
window.addEventListener('load', () => {
    setTimeout(createConfetti, 1000);
});

// Função para criar efeito de confete
function createConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.zIndex = '1000';
            confetti.style.pointerEvents = 'none';
            confetti.style.borderRadius = '50%';
            
            document.body.appendChild(confetti);
            
            // Animação de queda
            const fallAnimation = confetti.animate([
                { 
                    transform: 'translateY(0) rotate(0deg)',
                    opacity: 1 
                },
                { 
                    transform: `translateY(${window.innerHeight + 20}px) rotate(720deg)`,
                    opacity: 0 
                }
            ], {
                duration: 3000 + Math.random() * 2000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            fallAnimation.onfinish = () => {
                confetti.remove();
            };
        }, i * 100);
    }
}



// Adiciona som de parabéns (opcional - requer arquivo de áudio)
function playBirthdaySound() {
    // Você pode adicionar um arquivo de áudio aqui se desejar
    // const audio = new Audio('audio/birthday.mp3');
    // audio.play();
}

// Easter egg - clique duplo na corredora para efeito especial
document.addEventListener('DOMContentLoaded', () => {
    const runner = document.getElementById('runner');
    let clickCount = 0;
    
    runner.addEventListener('click', () => {
        clickCount++;
        
        if (clickCount === 2) {
            // Efeito especial de turbo
            runner.style.animation = 'runningFrames 0.4s steps(6, end) infinite, bounceRun 0.2s ease-in-out infinite alternate';
            
            // Volta ao normal após 3 segundos
            setTimeout(() => {
                runner.style.animation = 'runningFrames 1.2s steps(6, end) infinite, bounceRun 0.6s ease-in-out infinite alternate';
            }, 3000);
            
            clickCount = 0;
        }
        
        // Reset do contador após 1 segundo
        setTimeout(() => {
            clickCount = 0;
        }, 1000);
    });
});

// Função para alternar música de fundo (se adicionada)
let musicPlaying = false;

function toggleBackgroundMusic() {
    // Implementar se adicionar música de fundo
    // const bgMusic = document.getElementById('bgMusic');
    // if (musicPlaying) {
    //     bgMusic.pause();
    //     musicPlaying = false;
    // } else {
    //     bgMusic.play();
    //     musicPlaying = true;
    // }
}