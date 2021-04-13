window.onload = () => {
    setTimeout(() => {
        let curtain  = document.querySelector('.curtain')
        let html = document.querySelector('html')
        curtain.style.opacity = '0'
        html.style.overflow = 'auto'
    },2500)
        setTimeout(() => {
            let curtain = document.querySelector('.curtain')
            curtain.style.display = 'none'
        }, 3500)
    }
