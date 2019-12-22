import "source-map-support/register";

export const test: any = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Warriors go (Typescript) v1.0! Your function executed successfully!",
        name: "Badar",
        input: event,
      },
      null,
      2
    )
  };
};

