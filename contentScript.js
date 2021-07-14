const body = document.getElementsByTagName('body')[0];

function tpModal(){
    function callback(mutationsList) {
        mutationsList.forEach(mutation => {
            if (mutation.attributeName === 'class') {
                const classes = body.getAttribute('class');

                if (classes.includes('tp-modal-open')){
                    body.classList.remove('tp-modal-open');

                    const modalEl = body.getElementsByClassName('tp-modal');
                    const backdropEl = body.getElementsByClassName('tp-backdrop');

                    if (modalEl.length){
                        body.removeChild(modalEl[0]);
                    }

                    if (backdropEl){
                        body.removeChild(backdropEl[0])
                    }
                }
            }
        })
    }

    const mutationObserver = new MutationObserver(callback)
    mutationObserver.observe(
        body,
        { attributes: true }
    )
}

tpModal(); // TP Modal


