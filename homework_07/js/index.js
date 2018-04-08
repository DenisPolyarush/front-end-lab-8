let game = false;

$(`#root`).append(`<img src="img/gomoku.png" class="logo"></img>`)
$(`#root`).append(`<div class="users"></div>`);
$(`.users`).append(`<div class="white-user active">White</div>`);
$(`.users`).append(`<div class="black-user">Black</div>`);
$(`#root`).append(`<div class="end"></div>`);
$(`#root`).append(`<div class="block"></div>`);
$(`#root`).append(`<button class="btn play">Play</button>`);

function startGame(){
	if(game){
		$(`.block`).hide();
		$(`.play`).hide();
	}else{
		$(`.block`).show();
	}
}
startGame();

$(`.play`).click(function(){
	game = true;
	startGame();
})

function createBoard () {
	$(`#root`).append(`<div id="board"></div>`);
	for(let i = 1; i < 16; i++){
		$(`#board`).append(`<div class="row"></div>`)
	}
	for(let j = 1; j < 16; j++){
		$(`.row`).append(`<div id=${j} class="col"></div>`)
	}
	$(`.col`).append(`<span class="horizontal"></span>`);
	$(`.col`).append(`<span class="vertical"></span>`);
	$(`.col`).append(`<div class="chip"></div>`);
}
createBoard();

$(`.chip`).click(function(){
	if($(this).hasClass(`chip_white`) || $(this).hasClass(`chip_black`)){
		return;
	}else{
		if($(`.white-user`).hasClass(`active`)){
			$(this).addClass(`chip_white`);
		}else{
			$(this).addClass(`chip_black`);
		}
		$(`.white-user`).toggleClass(`active`)
		$(`.black-user`).toggleClass(`active`)
	}
})

$(`.col`).click(function(e){
	let id = $(this).attr( "id");

	if($(this).hasClass(`check_white`) || $(this).hasClass(`check_black`)){
		return;
	}else{
		if(!$(`.white-user`).hasClass(`active`)){
			$(this).addClass(`check_white`);
			toHorizontal.call(this, `check_white`, 'white');
			toVertikal.call(this, `check_white`, 'white', id)
			toDiagonale.call(this, `check_white`, 'white', id)
		}else{
			$(this).addClass(`check_black`);
			toHorizontal.call(this, `check_black`, 'black');
			toVertikal.call(this, `check_black`, 'black', id)
			toDiagonale.call(this, `check_black`, 'black', id)
		}
	}
})

function toHorizontal(user, name){
	if($(this).prev().hasClass(user) || $(this).next().hasClass(user)){
		if($(this).prev().prev().hasClass(user) || $(this).next().next().hasClass(user)){
			if($(this).prev().prev().prev().hasClass(user) || $(this).next().next().next().hasClass(user)){

				$(`.end`).append(`<h1><span>${name} winner</span></h1>`);
				game = false;
				startGame();
				return;
			}
		}
	}
	if($(this).next().hasClass(user) && $(this).prev().hasClass(user)){
		if($(this).next().hasClass(user) && $(this).prev().prev().hasClass(user)){
			$(`.end`).append(`<h1><span>${name} winner</span></h1>`);
			game = false;
			startGame();
			return;
		}else if($(this).next().next().hasClass(user) && $(this).prev().hasClass(user)){
			$(`.end`).append(`<h1><span>${name} winner</span></h1>`);
			game = false;
			startGame();
			return;
		}
	}
}

function toVertikal(user, name, id){
	if($(this).parent().prev().children(`#${id}`).hasClass(user) ||
		 $(this).parent().next().children(`#${id}`).hasClass(user)){

		if($(this).parent().prev().prev().children(`#${id}`).hasClass(user) || 
			 $(this).parent().next().next().children(`#${id}`).hasClass(user)){

			if($(this).parent().prev().prev().prev().children(`#${id}`).hasClass(user) || 
				 $(this).parent().next().next().next().children(`#${id}`).hasClass(user)){

					$(`.end`).append(`<h1><span>${name} winner</span></h1>`);
					game = false;
					startGame();
					return;
			}
		}
	}
	if($(this).parent().next().children(`#${id}`).hasClass(user) && 
		 $(this).parent().prev().children(`#${id}`).hasClass(user)){

		if($(this).parent().next().children(`#${id}`).hasClass(user) && 
			 $(this).parent().prev().prev().children(`#${id}`).hasClass(user)){

			$(`.end`).append(`<h1><span>${name} winner</span></h1>`);
			game = false;
			startGame();
			return;
		}else if($(this).parent().next().next().children(`#${id}`).hasClass(user) && 
			       $(this).parent().prev().children(`#${id}`).hasClass(user)){

			$(`.end`).append(`<h1><span>${name} winner</span></h1>`);
			game = false;
			startGame();
			return;
		}
	}
}

function toDiagonale(user, name, id){
	if($(this).parent().prev().children(`#${Number(id) + 1}`).hasClass(user) ||
		 $(this).parent().next().children(`#${Number(id) - 1}`).hasClass(user)){

		if($(this).parent().prev().prev().children(`#${Number(id) + 2}`).hasClass(user) || 
			 $(this).parent().next().next().children(`#${Number(id) - 2}`).hasClass(user)){

			if($(this).parent().prev().prev().prev().children(`#${Number(id) + 3}`).hasClass(user) || 
				 $(this).parent().next().next().next().children(`#${Number(id) - 3}`).hasClass(user)){

					$(`.end`).append(`<h1><span>${name} winner</span></h1>`);
					game = false;
					startGame();
					return;
			}
		}
	}
	if($(this).parent().prev().children(`#${Number(id) - 1}`).hasClass(user) ||
		 $(this).parent().next().children(`#${Number(id) + 1}`).hasClass(user)){

		if($(this).parent().prev().prev().children(`#${Number(id) - 2}`).hasClass(user) || 
			 $(this).parent().next().next().children(`#${Number(id) + 2}`).hasClass(user)){

			if($(this).parent().prev().prev().prev().children(`#${Number(id) - 3}`).hasClass(user) || 
				 $(this).parent().next().next().next().children(`#${Number(id) + 3}`).hasClass(user)){

					$(`.end`).append(`<h1><span>${name} winner</span></h1>`);
					game = false;
					startGame();
					return;
			}
		}
	}
	if($(this).parent().next().children(`#${Number(id) + 1}`).hasClass(user) && 
		 $(this).parent().prev().children(`#${Number(id) - 1}`).hasClass(user)){

		if($(this).parent().next().children(`#${Number(id) + 1}`).hasClass(user) && 
			 $(this).parent().prev().prev().children(`#${Number(id) - 2}`).hasClass(user)){

			$(`.end`).append(`<h1><span>${name} winner</span></h1>`);
			game = false;
			startGame();
			return;
		}else if($(this).parent().next().next().children(`#${Number(id) + 2}`).hasClass(user) && 
			       $(this).parent().prev().children(`#${Number(id) - 1}`).hasClass(user)){

			$(`.end`).append(`<h1><span>${name} winner</span></h1>`);
			game = false;
			startGame();
			return;
		}
	}
	if($(this).parent().next().children(`#${Number(id) - 1}`).hasClass(user) && 
		 $(this).parent().prev().children(`#${Number(id) + 1}`).hasClass(user)){

		if($(this).parent().next().children(`#${Number(id) - 1}`).hasClass(user) && 
			 $(this).parent().prev().prev().children(`#${Number(id) + 2}`).hasClass(user)){

			$(`.end`).append(`<h1><span>${name} winner</span></h1>`);
			game = false;
			startGame();
			return;
		}else if($(this).parent().next().next().children(`#${Number(id) - 2}`).hasClass(user) && 
			       $(this).parent().prev().children(`#${Number(id) + 1}`).hasClass(user)){

			$(`.end`).append(`<h1><span>${name} winner</span></h1>`);
			game = false;
			startGame();
			return;
		}
	}
}