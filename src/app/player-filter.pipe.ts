import { Pipe, PipeTransform } from '@angular/core';
import { Player } from './game-detail';
@Pipe({
  name: 'playerFilter'
})
export class PlayerFilterPipe implements PipeTransform {

  transform(allPlayers : Player[], key: string, match: boolean=true): any {
    if (match === true) {
      return allPlayers.filter(player => player.playerID === key);
    }
    else {
      return allPlayers.filter(player => player.playerID !== key);
    }
  }

}
