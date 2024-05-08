// carousel numbering

var slider_imgs = $(".carousel-item").length
var slider_actual_img = 1
$(".carousel-outer-controls")[0].children[1].textContent = slider_actual_img+"/"+slider_imgs

function chg_number(attr){
    if (attr>0){
        if (slider_actual_img == slider_imgs)
            slider_actual_img = 1
        else
            slider_actual_img += 1
    } else {
        if (slider_actual_img == 1)
            slider_actual_img = slider_imgs
        else
            slider_actual_img -= 1
    }
    $(".carousel-outer-controls")[0].children[1].textContent = slider_actual_img+"/"+ slider_imgs
}