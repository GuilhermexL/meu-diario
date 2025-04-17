(function() {

    // Configuração dos breakpoints do Massively
    var t = {
      list: {
        xlarge:   [null,    '1680px'],  // > 1680px
        large:    ['1681px','1280px'],  // 1281px - 1680px
        medium:   ['1281px','980px'],   // 981px - 1280px
        small:    ['981px', '736px'],   // 737px - 980px
        xsmall:   ['737px', '480px'],   // 481px - 736px
        xxsmall:  ['481px',  null]      // < 480px
      },
      media: {},
      events: [],
  
      init: function(e) {
        this.list = e || this.list;
        window.addEventListener('resize', this.poll.bind(this));
        window.addEventListener('orientationchange', this.poll.bind(this));
      },
  
      active: function(e) {
        if (!(e in this.media)) {
          // ... (mantenha a lógica original de detecção)
        }
        return this.media[e] && window.matchMedia(this.media[e]).matches;
      },
  
      on: function(e, n) {
        this.events.push({ query: e, handler: n, state: false });
        if (this.active(e)) n();
      },
  
      poll: function() {
        this.events.forEach(function(event) {
          var isActive = this.active(event.query);
          if (isActive && !event.state) {
            event.state = true;
            event.handler();
          } else if (!isActive && event.state) {
            event.state = false;
          }
        }, this);
      }
    };
  
    // Inicializa com os breakpoints padrão
    t.init();
  
    // Exporta como global
    window.breakpoints = {
      on: t.on.bind(t),
      active: t.active.bind(t),
      refresh: t.poll.bind(t)
    };
  
  })();