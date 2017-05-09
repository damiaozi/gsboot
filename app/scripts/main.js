var imageArray = new Array();
var imageNumber = 1;
imageArray = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg",];
$("#next").click(function(){
  imageNumber++;
  if(imageNumber == 4) {
    imageNumber = 1;
  }
  switch (imageNumber) {
    case 1:
      $("#imageId").attr("src", imageArray[1]);
      break;
    case 2:
      $("#imageId").attr("src", imageArray[2]);
      break;
    case 3:
      $("#imageId").attr("src", imageArray[3]);
      break;
    case 4:
      $("#imageId").attr("src", imageArray[4]);
      break;
    default:

  }
})
