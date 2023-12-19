import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    data: [
      {
        id: 1,
        title: "NextJS",
      },
      {
        id: 2,
        title: "React",
      },
    ],
  });
};

// GET POST PUT PATCH DELETE
