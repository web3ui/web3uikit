<my-button>
  <button class="buttonStyles" onclick={ onClick }>
    {opts.content}
    <yield/>
  </button>

  <style>
    .buttonStyles {
      border: solid 1px #eee;
      border-radius: 3px;
      background-color: #FFFFFF;
      cursor: pointer;
      font-size: 15px;
      padding: 3px 10px;
      margin: 10px;
    }
  </style>

  <script>
    this.onClick = this.opts.onClick || function(e){
      console.log('clicked', e)
    }
  </script>
</my-button>
