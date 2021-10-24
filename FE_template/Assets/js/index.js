$(function() {
    const $submennu = $('.submenu');
    const $submenuItem = $('.submenu-item');

    const constObject = {
        speedWeb: 200
    }


    const dropdownTreeLevelOne = function (parent, child, speedTime) {
        $submenuItem.hide();
        parent.each(function (i, el) {
            $(el).click(function () {
                child.each((index, element) => {
                    if($(element).data('submenu-id') == (i + 1)) $(element).slideToggle(speedTime);                  
                })
            })
        })        
    }

   

    $(document).ready(function () {
        //home 
        dropdownTreeLevelOne($submennu, $submenuItem, constObject.speedWeb);

    })
    

})

