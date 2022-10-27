import { NextApiRequest, NextApiResponse } from 'next';

const createSession = (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { headers, body } = req;

    /*

    POST /session

    header: API key

    body: {
      order_id: string,
      amount: number,
    }

    response: {
      session_id: string
    }

    -- logic --

    validate API-key and pull merchant details
    create session id
    have a timestamp
    log the details in DB

    return the session id

   */
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: (error as any).message,
    });
  }
};

export default createSession;
