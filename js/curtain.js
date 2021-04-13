window.onload = () => {
    setTimeout(() => {
        let curtain  = document.querySelector('.curtain')
        let html = document.querySelector('html')
        curtain.style.opacity = '0'
        html.style.overflow = 'auto'
    },3500)
        setTimeout(() => {
            let curtain = document.querySelector('.curtain')
            curtain.style.display = 'none'
        }, 4500)
    }