import { TeamsController } from "./Controller/t-controller";

export const sc: any = async (event, _context) => {
  let matchCon = new TeamsController()
  let s = new TeamsController()
  console.log(event);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          matchCon.scores,
        tm: matchCon.teams
        
        name: "Badar",
        input: event
      },
      null,
      2
    )
  };
};

