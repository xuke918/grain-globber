var $ul = $('ul');

$ul.addClass('grains');

grains.forEach(function (grain) {
  var $li = $('<li>');
  var $img = $('<img>');

  $img.attr('src', 'images/' + grain.img);
  $ul.append($li);
  $li.append($img);
});
