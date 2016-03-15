var $ul = $('ul');

$ul.addClass('grains');

grains.forEach(function (grain) {
  var $li = $('<li>');
  var $h2 = $('<h2>');
  var $img = $('<img>');
  var $p = $('<p>');

  $img.attr('src', 'images/' + grain.img);
  $h2.html(grain.name);
  $p.html(grain.desc);

  $ul.append($li);
  $li.append($img, $h2, $p);
  $p.prepend($h2);
});
