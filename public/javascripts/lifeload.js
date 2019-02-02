window.addEventListener('scroll', _ => {
  if (window.pageYOffset > document.body.scrollHeight - window.innerHeight * 1.5)
    console.log('The End')
    // ajax get news
})
