const model = {
    currentPerson: {},
    allPersons: [
        {
            name: 'Lily Butler',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/1.jpg'
        }, {
            name: 'Waller Perry',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/1.jpg'
        }, {
            name: 'Tammi Donovan',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/2.jpg'
        }, {
            name: 'Doreen Flowers',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/3.jpg'
        }, {
            name: 'Price Pace',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/4.jpg'
        }, {
            name: 'Larson Maldonado',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/5.jpg'
        }, {
            name: 'Berg Bolton',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/2.jpg'
        }, {
            name: 'Mack Lott',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/6.jpg'
        }, {
            name: 'Rosanna Mcleod',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/7.jpg'
        }, {
            name: 'Rosalie Rice',
            score: 1,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/8.jpg'
        }, {
            name: 'Virginia Buchanan',
            score: 2,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/3.jpg'
        }, {
            name: 'Lorna Stein',
            score: 4,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/9.jpg'
        }, {
            name: 'Rosalie Steele',
            score: 3,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/4.jpg'
        }, {
            name: 'Wilcox Boyd',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/10.jpg'
        }, {
            name: 'Ollie Rice',
            score: 5,
            photoUrl: 'http://api.randomuser.me/portraits/thumb/men/11.jpg'
        }
    ]
};

const control = {
    init: function() {
        listView.init();
        listView.render();

        scoresView.init();
        scoresView.render();

        profileView.init();

        sortControls.init();
    },
    getAllNames: function() {
        return model.allPersons.map(el=>el.name);
    },
    getAllScores: function() {
        return model.allPersons.map(el=>el.score);
    },
    setCurrentPerson: function(index) {
        model.currentPerson = model.allPersons[index];
        this.viewCurrentProfile();
    },
    getCurrentPerson: function() {
        return model.currentPerson;
    },
    viewCurrentProfile: function() {
        profileView.render();
    },
    setCurrentPersonScore: function(value) {
        model.currentPerson.score = value;
        profileView.render();
        scoresView.render();
    }
};

const listView = {
    init: function() {
        this.$container = $('.names');
        this.handleClicks();
    },
    render: function() {
        let template = control.getAllNames().reduce((acc, cur, i) => {
            return acc += `<li>${cur}</li>`;
        }, '');
        this.$container.html(template);
    },
    handleClicks: function() {
        this.$container.on('click','li', function(e) {
            let currentIndex = $(e.target).index();
            control.setCurrentPerson(currentIndex);
        });
    }
};

const scoresView = {
    init: function() {
        this.$container = $('.scores');
        this.handleClicks();
    },
    render: function() {
        let template = control.getAllScores().reduce((acc, cur) => {
            return acc += `
                <li>
                    <span>${cur}</span>
                    <input class="hidden score-input" type="text" value="${cur}">
                </li>
            `
        }, '');
        this.$container.html(template);
    },
    handleClicks: function() {
        this.$container.on('click', 'li', function(e) {
            let $currentLi = $(e.target);
            let $currentSpan = $currentLi.find('span');
            let $currentInput = $currentLi.find('input.score-input');
            let currentIndex = $currentLi.index();
            if (!$currentInput.is('.hidden')) {
                return false;
            }
            control.setCurrentPerson(currentIndex);
            $currentSpan.addClass('hidden');
            $currentInput.removeClass('hidden').focus();
        });
        this.$container.on('focusout .score-input', function(e) {
            let newScore = $(e.target).val();
            control.setCurrentPersonScore(newScore);
        });
    }
};

const profileView = {
    init: function() {
        this.$container = $('.profile');
    },
    render: function() {
        let currentPerson = control.getCurrentPerson();
        let template = `
            <img src="${currentPerson.photoUrl}">
            <h3>${currentPerson.name}</h3>
            <p>Score:${currentPerson.score}</p>
        `
        this.$container.html(template);
    }
};

const sortControls = {
  init: function(){
      this.render();
      this.sortForName()
      this.sortForScore()
  },
  render: function(){
      let template = `
      <div class="sort-name">
          <div>Name</div>
          <div class="arrow">
              <span class="arrow-top"></span>
              <span class="line"></span>
              <span class="arrow-bottom"></span>
          </div>
      </div>
      <div class="sort-score">
          <div>Score</div>
          <div class="arrow">
              <span class="arrow-top"></span>
              <span class="line"></span>
              <span class="arrow-bottom"></span>
          </div>
      </div>
      `;
      $('.sort-controls').append(template)
  },
  resetStyle : function(val){
    $(`.${val} .arrow-bottom`)
          .css({'background' : '#727272', 'z-index' : '4'});

      $(`.${val} .arrow-top`)
          .css({'background' : '#727272', 'z-index' : '4'});
      if(val === 'sort-score'){
        $(`.${val} .line`).css({'top' : '8px', 'height' : '3px'});
        }else{
          $(`.${val} .line`).css({'top' : '23px', 'height' : '3px'});
        }
      
  },
  sortForName : function(){
    let sortToUp = false;

    $('.sort-name').click(function(){

      sortControls.resetStyle('sort-score');

      if(!sortToUp){
        model.allPersons.sort(function (a, b) {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        }); 

        $('.sort-name .line').css({'height' : '15px', 'top' : '23px'});
        $('.sort-name .arrow-top').css({'background' : '#0ff', 'z-index' : '5'});
        
        listView.render();
        scoresView.render();

        sortToUp = true;
        return;
      }
      if(sortToUp){
        model.allPersons.sort(function (a, b) {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        }); 

        $('.sort-name .line').css({'height' : '15px', 'top' : '11px'});
        $('.sort-name .arrow-bottom').css({'background' : '#0ff', 'z-index' : '5'});

        listView.render();
        scoresView.render();

        sortToUp = false
        return;
      }
    })
  },
  sortForScore : function(){
    let sortToUp = false;
    
    

    $('.sort-score').click(function(){

      sortControls.resetStyle('sort-name');

      if(!sortToUp){
        model.allPersons.sort(function (a, b) {
          if (a.score > b.score) return 1;
          if (a.score < b.score) return -1;
          return 0;
        }); 

        $('.sort-score .line').css({'height' : '15px', 'top' : '8px'});
        $('.sort-score .arrow-top').css({'background' : '#0ff', 'z-index' : '5'});

        listView.render();
        scoresView.render();

        sortToUp = true;
        return;
      }
      if(sortToUp){
        model.allPersons.sort(function (a, b) {
          if (a.score < b.score) return 1;
          if (a.score > b.score) return -1;
          return 0;
        }); 

        $('.sort-score .line').css({'height' : '15px', 'top' : '-4px'});
        $('.sort-score .arrow-bottom').css({'background' : '#0ff'});

        listView.render();
        scoresView.render();

        sortToUp = false
        return;
      }
    })
  }
}
control.init();