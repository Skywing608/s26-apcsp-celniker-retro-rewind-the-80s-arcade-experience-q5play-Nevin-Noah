await Canvas(500,500);

let tank = new Sprite();
tank.img = 'tank.piksel';

let crossheir = new Sprite();
crossheir.img = 'Crossheir.piksel';

q5.update = function () {
	crossheir.moveTowards(mouse);
};