import { TeamsService } from "../Service/service-controller";

export
    class TeamsController {
   temSer = new TeamsService()

    scores = this.temSer.scores;
    id = this.temSer.id
    Team = this.temSer.teams


}

