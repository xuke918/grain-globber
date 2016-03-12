var listGrains = function (grains) {
  grains.forEach(function (item) {
    document.write('<h2>' + item.name + '</h2>');
    document.write('<img src="images/' + grains.img + '" alt="">');
    document.write('desc');
  });
};

listGrains(grains);
