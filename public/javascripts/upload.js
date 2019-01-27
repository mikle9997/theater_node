$( '#upload' ).on( 'click', () => {
    let fileData = $('#sortpicture').prop('files')[0];
    let formData = new FormData();
    
    formData.append('file', fileData);

    // let xml = new XMLHttpRequest();
    // xml.open('GET',`../control/changedir.php?q=${$('#folderselect').val()}`,true);
    // xml.send();

    // const text = $('#folderselect').val();


    formData.append('item', $('#folderselect').val());
    
    $.ajax({
        url: '/admin/imgs',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        type: 'POST'
    }).done( data => {
        location.reload();
    });
});