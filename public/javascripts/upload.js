$( '#upload' ).on( 'click', () => {
    let fileData = $('#sortpicture').prop('files')[0];
    let formData = new FormData();
    
    formData.append('file', fileData);
    formData.append('item', $('#folderselect').val());
    
    $.ajax({
        url: '/admin/imgs',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        type: 'POST'
    }).done( data => {
        console.log(data);
        
        location.reload();
    });
});