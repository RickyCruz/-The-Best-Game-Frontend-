import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-tbg',
  templateUrl: './tbg.component.html',
  styleUrls: ['./tbg.component.scss']
})
export class TbgComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGames().subscribe(games => this.games = games);
  }

  vote(game: Game) {
    this.gameService.vote(game.id)
      .subscribe((response: { success: boolean, message: string }) => {
        if (response.success) {
          Swal.fire({
            title: 'Done',
            text: response.message,
            icon: 'success',
          });
        } else {
          Swal.fire({
            title: 'Whoops!',
            text: response.message,
            icon: 'error',
          });
        }
      });
  }

}
