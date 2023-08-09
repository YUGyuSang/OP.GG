document.addEventListener('DOMContentLoaded', () => {
const slider = document.querySelectorAll('.img-container img');
const radios = document.querySelectorAll('.radio-buttons input[type="radio"]');
let currentSlide = 0;

function showSlide(index) {
    slider.forEach((img, i) => {
        img.style.transform = `translateX(-${index * 370}px)`;
    });
}

function changeSlide() {
    currentSlide = (currentSlide + 1) % radios.length;
    radios[currentSlide].checked = true;
    showSlide(currentSlide);
}

setInterval(changeSlide, 2000);
});

// article 반복문

const container = document.querySelector('.rankingTitle');

for (let i = 1; i<=5; i++){
    const article = document.createElement('article');
    article.innerHTML = `
<article>
    <a href="#">
        <div class="ranking"><em>${i}</em></div>
            <img src="./img/logo.jpeg" alt="로고" />
                <div class="ranking-title">
                    <div>
                        <span>어느 먹방 유튜버의 인성</span><p>[2${i}]</p>
                    </div>
                <div>
                    <h6>1${i}시간 전</h6><h6>왕 귀 력${i}</h6>
                </div>
        </div>
    </a>
</article>
`;

if(i === 5){
    article.querySelector('a').style.borderBottom = 'none';
}

container.appendChild(article);
}



