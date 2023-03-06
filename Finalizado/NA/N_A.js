const container = document.querySelector('.container');
const yes_btn = document.querySelector('.yes_btn');
const no_btn = document.querySelector('.no_btn');

no_btn.addEventListener('click', () => {
    no_btn.style.position = 'absolute';

    const random_left = Math.floor(Math.random() * container.clientWidth);
    const random_top = Math.floor(Math.random() * container.clientHeight);

    if (random_left >= container.clientWidth / 6)
        no_btn.style.left = `${random_left - no_btn.clientWidth}px`;
    
    if (random_top >= container.clientHeight / 6)
        no_btn.style.top = `${random_top - 
no_btn.clientHeight}px`;
})

yes_btn.addEventListener('click', () => {
    container.innerHTML = `<h2>
                       
                EU<br>
                    TE<br>
                AMO<br>
                    MT<br>
                    ❤            
                            <br>
                            
                           
                            </h2>`
})