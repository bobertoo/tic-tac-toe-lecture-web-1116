class TicTacToe {
  constructor(){
    this.board = new Board()
    this.playCount = 0
  }

  render(){
    this.board.render(this.addEventHandlers.bind(this))
  }

  addEventHandlers(){
    debugger
    $('.square').click(function (event){
      debugger
      if (this.playCount % 2 === 0) {
        var currentPlayer = 'X'
      } else {
        var currentPlayer = 'O'
      }
      this.playCount += 1
      $(this).text(currentPlayer)
    }.bind(this))
  }
}
