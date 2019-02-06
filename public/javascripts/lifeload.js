window.addEventListener('scroll', _ => {
  if (window.pageYOffset > document.body.scrollHeight - window.innerHeight * 1.5)
    console.log(document.querySelectorAll('*[data-id]')[document.querySelectorAll('*[data-id]').length - 1].dataset.id)

    // const num = 1;

    // $.ajax({
    //   type: 'GET',
    //   url: '/news/lifeload',
    //   data: num,
    // }).done( data => {
    //     console.log(data);
    // });
})
