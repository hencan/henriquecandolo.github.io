var mainImg = document.querySelectorAll('.projectBoardImgMain');
var thumbnailImg = document.querySelectorAll('.projectBoardImgThumbnailCell'); 

function changeImage(x, y) {
    var newImg = thumbnailImg[y].innerHTML.replace('projectBoardImgThumbnailCellClick', 'projectBoardImgMainClick')     
    mainImg[x].innerHTML = newImg
};