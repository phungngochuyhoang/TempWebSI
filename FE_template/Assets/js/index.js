const $submennu = $(".submenu");
const $submenuItem = $(".submenu-item");

const constObject = {
  speedWeb: 200,
};
// only with menu level 1
const dropdownTreeLevelOne = function (parent, child, speedTime) {
  $submenuItem.hide();
  parent.each(function (i, el) {
    $(el).click(function () {
      child.each((index, element) => {
        if ($(element).data("submenu-id") == i + 1)
          $(element).slideToggle(speedTime);
      });
    });
  });
};
// read url file, but logic works with imgs
const readURL = function (input, imagePreview) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      $(imagePreview).css("background-image", `url(${e.target.result})`);
      $(imagePreview).hide();
      $(imagePreview).fadeIn(650);
    };
    reader.readAsDataURL(input.files[0]);
  }
};

$(document).ready(function () {
  //work home
  dropdownTreeLevelOne($submennu, $submenuItem, constObject.speedWeb);
});
